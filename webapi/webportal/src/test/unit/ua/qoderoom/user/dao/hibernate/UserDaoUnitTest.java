package ua.qoderoom.user.dao.hibernate;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import ua.qoderoom.user.model.User;
import ua.qoderoom.user.dao.api.UserDao;

import javax.inject.Inject;
import java.util.Calendar;

import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertThat;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration( {"classpath:spring/accept-test-context.xml"})
public class UserDaoUnitTest extends AbstractTransactionalJUnit4SpringContextTests {

	@Inject
	private UserDao userDao;

	@Test
	public void shouldSaveAndGetUserById() throws Exception {
		User user = new User();
		user.setId("New Id");
		user.setLogin("New Login");
		user.setCreateDate(Calendar.getInstance());
		user = userDao.saveUser(user);

		User actualUser = userDao.getById(user.getId());

		assertThat(actualUser, is(user));
	}
}
