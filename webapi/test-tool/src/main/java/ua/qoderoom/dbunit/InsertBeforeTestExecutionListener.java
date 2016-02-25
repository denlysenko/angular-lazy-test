package ua.qoderoom.dbunit;

import org.junit.Ignore;
import org.springframework.core.io.ClassPathResource;
import org.springframework.test.context.TestContext;
import org.springframework.test.context.support.AbstractTestExecutionListener;
import ua.qoderoom.util.AnnotationUtils;

public class InsertBeforeTestExecutionListener extends AbstractTestExecutionListener {

	@Override
	public void beforeTestMethod(TestContext testContext) throws Exception {
		super.beforeTestMethod(testContext);
		if (!isIgnore(testContext)) {
			InsertDbBefore[] classAnnotations = AnnotationUtils.getAnnotationFromClassDeeplyRecursive(InsertDbBefore.List.class,
					testContext.getTestClass()).value();
			insertBeforeDbUnit(testContext, classAnnotations);

			InsertDbBefore classAnnotation = AnnotationUtils.getAnnotationFromClassDeeplyRecursive(InsertDbBefore.class,
					testContext.getTestClass());
			insertBeforeDbUnit(testContext, classAnnotation);

			InsertDbBefore insertDbBefore = AnnotationUtils.getAnnotationFromClassWithMethodPriority(InsertDbBefore.class,
					testContext.getTestClass(), testContext.getTestMethod());
			insertBeforeDbUnit(testContext, insertDbBefore);
		}

	}

	private void insertBeforeDbUnit(TestContext testContext, InsertDbBefore... insertDbBeforeList) throws Exception {
		for (InsertDbBefore insertDbBeforeAnnotation : insertDbBeforeList) {
			insertBeforeDbUnit(testContext, insertDbBeforeAnnotation);
		}
	}

	private void insertBeforeDbUnit(TestContext testContext, InsertDbBefore insertDbBefore) throws Exception {
		if (insertDbBefore != null) {
			String dbUtilsBeanId = insertDbBefore.dbUtilsBeanId();
			DbUnitUtils dbUnitUtils = getDbUtilsBean(testContext, dbUtilsBeanId);

			dbUnitUtils.insertDataSetToDb(new ClassPathResource(insertDbBefore.resource()));
		}
	}

	private boolean isIgnore(TestContext testContext) {
		return AnnotationUtils.extractAnnotationFromMethodAndClass(Ignore.class,
				testContext.getTestClass(), testContext.getTestMethod()) != null;
	}

	private DbUnitUtils getDbUtilsBean(TestContext testContext, String dbUtilsBeanId) {
		if (dbUtilsBeanId != null) {
			return (DbUnitUtils) testContext.getApplicationContext().getBean(dbUtilsBeanId);
		} else {
			return testContext.getApplicationContext().getBean(DbUnitUtils.class);
		}
	}


}
