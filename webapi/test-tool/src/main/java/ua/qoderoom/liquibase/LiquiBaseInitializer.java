package ua.qoderoom.liquibase;

import liquibase.Liquibase;
import liquibase.database.Database;
import liquibase.database.DatabaseFactory;
import liquibase.database.jvm.JdbcConnection;
import liquibase.resource.FileSystemResourceAccessor;
import org.apache.commons.vfs2.FileSystemException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ua.qoderoom.util.FileUtils;

import javax.sql.DataSource;
import java.io.File;
import java.sql.Connection;

public class LiquiBaseInitializer {
	private static Logger logger = LoggerFactory.getLogger(LiquiBaseInitializer.class);

	private final FileUtils fileUtils;
	private DataSource dataSource;
	private String dbSchema;

	private String parentRootDir;
	private String rootDirName;
	private String changesPath;
	private String context;

	public LiquiBaseInitializer() throws FileSystemException {
		this.fileUtils = new FileUtils();
	}

	public void insertInitialDatabase() throws Exception {
		logger.debug("###Liqubase update will start in few seconds");
		Connection connection = dataSource.getConnection();
		Database database = DatabaseFactory.getInstance().findCorrectDatabaseImplementation(new JdbcConnection(connection));
		database.setDefaultSchemaName(dbSchema);

		File baseDir = fileUtils.getProjectRootDir(parentRootDir, rootDirName);
		File sqlChanges = new File(baseDir, changesPath);
		Liquibase liquibase = new Liquibase(sqlChanges.getAbsolutePath(), new FileSystemResourceAccessor(baseDir.getAbsolutePath()), database);
		liquibase.setChangeLogParameter("db.schema", dbSchema);
		liquibase.update(context);

	}

	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}

	public void setDbSchema(String dbSchema) {
		this.dbSchema = dbSchema;
	}

	public void setContext(String context) {
		this.context = context;
	}

	public void setParentRootDir(String parentRootDir) {
		this.parentRootDir = parentRootDir;
	}

	public void setRootDirName(String rootDirName) {
		this.rootDirName = rootDirName;
	}

	public void setChangesPath(String changesPath) {
		this.changesPath = changesPath;
	}


}


