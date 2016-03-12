package ua.qoderoom.user;

import org.junit.Test;
import ua.qoderoom.webportal.AbstractAcceptTest;

import static org.junit.Assert.assertEquals;


public class AuthenticateAcceptTest extends AbstractAcceptTest {
	@Test
	public void testGetIt() {
		String responseMsg = createRequest("myresource").get(String.class);
		assertEquals("Got it!\n", responseMsg);
	}
}

