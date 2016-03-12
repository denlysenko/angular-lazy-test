package ua.qoderoom.dbunit;

import org.apache.commons.vfs2.FileSystemException;
import org.dbunit.Assertion;
import org.dbunit.DatabaseUnitException;
import org.dbunit.DefaultDatabaseTester;
import org.dbunit.IDatabaseTester;
import org.dbunit.database.DatabaseConfig;
import org.dbunit.database.DatabaseConnection;
import org.dbunit.database.DatabaseDataSourceConnection;
import org.dbunit.database.IDatabaseConnection;
import org.dbunit.dataset.Column;
import org.dbunit.dataset.IDataSet;
import org.dbunit.dataset.ITable;
import org.dbunit.dataset.filter.DefaultColumnFilter;
import org.dbunit.dataset.xml.FlatDtdWriter;
import org.dbunit.dataset.xml.FlatXmlDataSet;
import org.dbunit.operation.DatabaseOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.Resource;
import ua.qoderoom.util.ClassPathResourceFlatXmlDataFileLoader;
import ua.qoderoom.util.FileUtils;

import javax.sql.DataSource;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.net.URISyntaxException;

public class DbUnitUtils {
	private final FileUtils fileUtils;
	private DataSource dataSource;
	private String parentProjectFolder;
	private String rootFolder;
	private String dbSchema;
	private IDatabaseTester databaseTester;
	private String dtdSchemaName;
	private boolean schemaCreated = false;
	private Logger LOGGER = LoggerFactory.getLogger(DbUnitUtils.class);

	public DbUnitUtils() throws FileSystemException {
		this.fileUtils = new FileUtils();
	}

	public void exportDbToFile(String destination) throws Exception {
		IDatabaseConnection connection = new DatabaseConnection(dataSource.getConnection());

		// full database export
		IDataSet fullDataSet = connection.createDataSet();
		FlatXmlDataSet.write(fullDataSet, new FileOutputStream(destination));
	}

	public void exportDtdSchema() throws Exception {
		if (dtdSchemaName != null && !schemaCreated) {
			File dtdSchemaFileInCompilation = getOrCreateDtdFile("target/test-classes/dbunit/");
			File dtdSchemaFileInSources = getOrCreateDtdFile("src/test/resources/dbunit/");

			writeDtdToFile(dtdSchemaFileInCompilation);
			writeDtdToFile(dtdSchemaFileInSources);

			schemaCreated = true;
		}
	}

	private void writeDtdToFile(File dtdSchemaFileInSources) throws Exception {
		FlatDtdWriter dtdWriter = new FlatDtdWriter(new OutputStreamWriter(new FileOutputStream(dtdSchemaFileInSources)));
		dtdWriter.setContentModel(FlatDtdWriter.CHOICE);
		dtdWriter.write(databaseTester.getConnection().createDataSet());
	}

	private File getOrCreateDtdFile(String internalPath) throws IOException, URISyntaxException {
		File dbUnitFolder = fileUtils.getProjectRootDir(parentProjectFolder, rootFolder);
		File f = new File(dbUnitFolder, internalPath);
		File dtdSchemaFolder = new File(f, "dtd");
		if (!dtdSchemaFolder.exists()) {
			dtdSchemaFolder.mkdirs();
		}
		File dtdSchemaFile = new File(dtdSchemaFolder, dtdSchemaName);

		if (!dtdSchemaFile.exists()) {
			dtdSchemaFile.createNewFile();
		}
		return dtdSchemaFile;
	}

	public void insertDataSetToDb(Resource resource) throws Exception {
		exportDtdSchema();
		ClassPathResourceFlatXmlDataFileLoader loader = new ClassPathResourceFlatXmlDataFileLoader();
		//set loader to use CASE_SENSITIVE names
		loader.getBuilder().setCaseSensitiveTableNames(Boolean.TRUE);
		loader.getBuilder().setColumnSensing(Boolean.TRUE);

		IDataSet dataSet = loader.loadDataSet(resource.getURL());

		databaseTester.setDataSet(dataSet);
		databaseTester.setSetUpOperation(DatabaseOperation.CLEAN_INSERT);
		databaseTester.onSetup();
	}

	public void assertDatabase(Resource expectedDataSetLocation) throws Exception {
		exportDtdSchema();
		IDataSet actualDataSet = databaseTester.getConnection().createDataSet();

		ClassPathResourceFlatXmlDataFileLoader loader = new ClassPathResourceFlatXmlDataFileLoader();
		IDataSet expectedDataSet = loader.loadDataSet(expectedDataSetLocation.getURL());

		String[] expectedTableNames = expectedDataSet.getTableNames();
		for (String tableName : expectedTableNames) {
			ITable expectedTable = expectedDataSet.getTable(tableName);
			ITable actualTable = actualDataSet.getTable(tableName);
			assertTablesWithColumnsFromExpected(expectedTable, actualTable);
		}

		databaseTester.setTearDownOperation(DatabaseOperation.DELETE_ALL);
		databaseTester.onTearDown();
	}

	private void assertTablesWithColumnsFromExpected(ITable expectedTable, ITable actualTable) throws DatabaseUnitException {
		Column[] includedColumns = expectedTable.getTableMetaData().getColumns();
		ITable filteredActualTable = DefaultColumnFilter.includedColumnsTable(actualTable, includedColumns);
		Assertion.assertEquals(expectedTable, filteredActualTable);
	}

	public void init() throws Exception {
		//new DatabaseTester setup
		IDatabaseConnection databaseConnection = new DatabaseDataSourceConnection(this.dataSource, dbSchema);
		DatabaseConfig config = databaseConnection.getConfig();

		config.setProperty(DatabaseConfig.FEATURE_CASE_SENSITIVE_TABLE_NAMES, true);
		config.setProperty(DatabaseConfig.PROPERTY_ESCAPE_PATTERN, "\"?\"");
		config.setProperty(DatabaseConfig.FEATURE_QUALIFIED_TABLE_NAMES, false);
//        config.setProperty(DatabaseConfig.FEATURE_SKIP_ORACLE_RECYCLEBIN_TABLES, true);

		this.databaseTester = new DefaultDatabaseTester(databaseConnection);
	}

	public void setParentProjectFolder(String parentProjectFolder) {
		this.parentProjectFolder = parentProjectFolder;
	}

	public void setRootFolder(String rootFolder) {
		this.rootFolder = rootFolder;
	}

	public void setDbSchema(String dbSchema) {
		this.dbSchema = dbSchema;
	}

	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}

	public void setDtdSchemaName(String dtdSchemaName) {
		this.dtdSchemaName = dtdSchemaName;
	}
}
