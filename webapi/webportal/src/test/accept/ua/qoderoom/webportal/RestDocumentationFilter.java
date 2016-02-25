package ua.qoderoom.webportal;

import org.codehaus.jackson.map.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ws.rs.client.ClientRequestContext;
import javax.ws.rs.client.ClientResponseContext;
import javax.ws.rs.client.ClientResponseFilter;
import java.io.*;

public class RestDocumentationFilter implements ClientResponseFilter {

    private Logger logger = LoggerFactory.getLogger(RestDocumentationFilter.class);

    @Override
    public void filter(ClientRequestContext requestContext, ClientResponseContext responseContext) throws IOException {
        logger.info(requestContext.getStringHeaders().toString());
        logger.info(requestContext.getUri().toString());
        logger.info(requestContext.getMethod());
        if (requestContext.getMediaType() != null) {
            logger.info(requestContext.getMediaType().toString());
        }

        if (requestContext.hasEntity()) {
            logger.info(new ObjectMapper().writeValueAsString(requestContext.getEntity()));
        }

        logger.info("---------------response---------------");

        logger.info(responseContext.getHeaders().toString());
        if (responseContext.getMediaType() != null) {
            logger.info(responseContext.getMediaType().toString());
        }

        logger.info(String.valueOf(responseContext.getStatus()));
        if (responseContext.hasEntity()) {
            String body = readFromInputStream(responseContext.getEntityStream());
            logger.info(body);
            responseContext.setEntityStream(new ByteArrayInputStream(body.getBytes()));
        }
        logger.info("======================================");
    }

    public static String readFromInputStream(InputStream entityStream) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(entityStream));
        StringBuilder sb = new StringBuilder();
        String line = "";
        while ((line = bufferedReader.readLine()) != null) {
            sb.append(line).append("\n");
        }
        return sb.toString();
    }
}

