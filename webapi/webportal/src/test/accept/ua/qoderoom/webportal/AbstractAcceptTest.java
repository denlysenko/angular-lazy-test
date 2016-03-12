package ua.qoderoom.webportal;

import org.glassfish.grizzly.http.server.HttpServer;
import org.glassfish.jersey.client.ClientConfig;
import org.junit.After;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import ua.qoderoom.dbunit.InsertBeforeTestExecutionListener;
import ua.qoderoom.dbunit.InsertDbBefore;
import ua.qoderoom.webportal.util.GrizzlyHttpServerLauncher;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring/accept-test-context.xml")
@TestExecutionListeners( {InsertBeforeTestExecutionListener.class,
		DependencyInjectionTestExecutionListener.class})
@InsertDbBefore.List( {
		@InsertDbBefore(dbUtilsBeanId = "dbUnitUtil", resource = "dbunit/accept_initial.xml")
})
public abstract class AbstractAcceptTest {
	private HttpServer server;
	private WebTarget target;

	@Before
	public void setUp() throws Exception {
		// start the server
		server = GrizzlyHttpServerLauncher.startServer();
		// create the client
		ClientConfig config = new ClientConfig();
		config.register(RestDocumentationFilter.class);
		Client c = ClientBuilder.newClient(config);

		// uncomment the following line if you want to enable
		// support for JSON in the client (you also have to uncomment
		// dependency on jersey-media-json module in pom.xml and GrizzlyHttpServerLauncher.startServer())
		// --
		// c.configuration().enable(new org.glassfish.jersey.media.json.JsonJaxbFeature());

		target = c.target(GrizzlyHttpServerLauncher.BASE_URI);
	}

	@After
	public void tearDown() throws Exception {
		server.shutdownNow();
	}

	protected Invocation.Builder createRequest(String path) {
		return target.path(path).request();
	}
}
