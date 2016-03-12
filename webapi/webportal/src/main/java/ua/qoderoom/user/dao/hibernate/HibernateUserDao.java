package ua.qoderoom.user.dao.hibernate;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;
import ua.qoderoom.user.model.User;
import ua.qoderoom.user.dao.api.UserDao;

import javax.inject.Inject;

@Component
public class HibernateUserDao implements UserDao {

	@Inject
	private SessionFactory sessionFactory;

	@Override
	public String stubMethodRemoveMe() {
		return "Got it!";
	}

	@Override
	public User saveUser(User user) {
		sessionFactory.getCurrentSession().persist("user", user);
		sessionFactory.getCurrentSession().flush();
		return user;
	}

	@Override
	public User getById(String id) {
		return (User) sessionFactory.getCurrentSession().load(User.class, id);
	}
}
