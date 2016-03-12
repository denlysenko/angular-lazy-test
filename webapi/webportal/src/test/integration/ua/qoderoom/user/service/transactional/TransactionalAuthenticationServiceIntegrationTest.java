package ua.qoderoom.user.service.transactional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import ua.qoderoom.user.dao.api.UserDao;

import static org.hamcrest.core.Is.is;
import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class TransactionalAuthenticationServiceIntegrationTest {
    @Mock
    private UserDao userDao;
    @InjectMocks
    private TransactionalAuthenticationService service;

    @Test
    public void stubMethodRemoveMeTest() throws Exception {
        when(userDao.stubMethodRemoveMe()).thenReturn("1");

        String resp = service.stubMethodRemoveMe();
        assertThat(resp, is("1"));
        verify(userDao).stubMethodRemoveMe();
    }
}