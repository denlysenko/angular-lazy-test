package ua.qoderoom.dbunit;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.ANNOTATION_TYPE;
import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface InsertDbBefore {
	String dbUtilsBeanId() default "";

	String resource();

	@Target( {TYPE, ANNOTATION_TYPE})
	@Retention(RUNTIME)
	@interface List {
		InsertDbBefore[] value();
	}
}
