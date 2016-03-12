package ua.qoderoom.util;

import org.dbunit.dataset.DataSetException;
import org.dbunit.dataset.IDataSet;
import org.dbunit.util.fileloader.FlatXmlDataFileLoader;

import java.io.IOException;
import java.net.URL;

public class ClassPathResourceFlatXmlDataFileLoader extends FlatXmlDataFileLoader {

	@Override
	public IDataSet loadDataSet(URL url) throws DataSetException, IOException {
		return super.loadDataSet(url);
	}
}
