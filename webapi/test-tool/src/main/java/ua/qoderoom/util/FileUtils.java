package ua.qoderoom.util;

import org.apache.commons.vfs2.FileObject;
import org.apache.commons.vfs2.FileSystemException;
import org.apache.commons.vfs2.FileSystemManager;
import org.apache.commons.vfs2.VFS;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Arrays;
import java.util.List;

public class FileUtils {
	private FileSystemManager fsManager;
	private static Logger LOGGER = LoggerFactory.getLogger(FileUtils.class);

	public FileUtils() throws FileSystemException {
		this.fsManager = VFS.getManager();
	}

	public File getProjectRootDir(String parentName, String childName) throws FileSystemException, URISyntaxException {
		return getProjectRootDir(parentName, new File("."), childName);
	}

	public File getProjectRootDir(String parentName, File currentDir, String childName) throws FileSystemException, URISyntaxException {
//		throw new RuntimeException(currentDir.getAbsolutePath());
		FileObject vfsCurrentDir = fsManager.resolveFile(currentDir.getAbsolutePath());
		List<FileObject> children = Arrays.asList(vfsCurrentDir.getChildren());
		for (FileObject child : children) {
			LOGGER.debug(child.getName().getBaseName());
			if (parentName == null && child.getName().getBaseName().equals(childName)) {
				return new File(child.getURL().toURI());
			}
			if (child.getName().getBaseName().equals(parentName)) {
				LOGGER.debug("#!!!" + child.getName().getBaseName());
				currentDir = new File(new URI(child.getName().getFriendlyURI()));
			}
		}
		if (currentDir.getName().equals(parentName)) {
			return currentDir;
		}

		return getProjectRootDir(parentName, currentDir.getAbsoluteFile().getParentFile(), childName);
	}
}
