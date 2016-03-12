package ua.qoderoom.user.dao.api;

import ua.qoderoom.user.model.User;

public interface UserDao {

    String stubMethodRemoveMe();

    User saveUser(User user);

    User getById(String id);
}
