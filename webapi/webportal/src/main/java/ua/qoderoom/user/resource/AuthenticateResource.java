package ua.qoderoom.user.resource;

import ua.qoderoom.user.service.api.AuthenticateService;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("myresource")
public class AuthenticateResource {

	@Inject
	private AuthenticateService authenticateService;

	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String getIt() {
		return authenticateService.stubMethodRemoveMe();
	}
}
