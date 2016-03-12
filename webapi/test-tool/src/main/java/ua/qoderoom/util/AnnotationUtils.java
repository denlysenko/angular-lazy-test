package ua.qoderoom.util;

import java.lang.annotation.Annotation;
import java.lang.reflect.Method;

public class AnnotationUtils {
	/**
	 * Шукає аннотації як у класів так і у супер класів. Приоритетна остання аннотація.
	 *
	 * @param annotationType
	 * @param testClass
	 * @param <T>
	 * @return
	 */
	public static <T extends Annotation> T getAnnotationFromClassDeeplyRecursive(Class<T> annotationType,
	                                                                             Class<?> testClass) {
		T annotation = null;
		if (testClass.getSuperclass() != null) {
			annotation = getAnnotationFromClassDeeplyRecursive(annotationType, testClass.getSuperclass());
		}

		T localAuthorize = testClass.getAnnotation(annotationType);

		return (localAuthorize == null) ? annotation : localAuthorize;
	}

	/**
	 * Повертає аннотацію на метод, якщо нема - то на клас
	 *
	 * @param annotationType
	 * @param testClass
	 * @param testMethod
	 * @param <T>
	 * @return
	 */
	public static <T extends Annotation> T getAnnotationFromClassWithMethodPriority(Class<T> annotationType,
	                                                                                Class<?> testClass, Method testMethod) {
		T classAnnotation = getAnnotationFromClassDeeplyRecursive(annotationType, testClass);
		T methodAnnotation = extractAnnotationFromMethodAndClass(annotationType, testClass, testMethod);
		if (methodAnnotation != null) {
			return methodAnnotation;
		}

		return classAnnotation;
	}

	/**
	 * Дістає аннотацію з методу. Враховує наслідування і поліморфізм
	 *
	 * @param annotationType
	 * @param testClass
	 * @param testMethod
	 * @param <T>
	 * @return
	 */
	public static <T extends Annotation> T extractAnnotationFromMethodAndClass(Class<T> annotationType,
	                                                                           Class<?> testClass, Method testMethod) {
		try {
			Method newMethod = testClass.getMethod(testMethod.getName());
			return newMethod.getAnnotation(annotationType);
		} catch (NoSuchMethodException e) {
			return testMethod.getAnnotation(annotationType);
		}
	}
}

