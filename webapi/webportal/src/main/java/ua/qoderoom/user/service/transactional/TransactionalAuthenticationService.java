package ua.qoderoom.user.service.transactional;

import org.springframework.stereotype.Component;
import ua.qoderoom.user.service.api.AuthenticateService;
import ua.qoderoom.user.dao.api.UserDao;

import javax.inject.Inject;

@Component
public class TransactionalAuthenticationService implements AuthenticateService {

	@Inject
	private UserDao userDao;


	@Override
	public String stubMethodRemoveMe() {
		return userDao.stubMethodRemoveMe();
	}
}
