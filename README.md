# Closery API Server

The API is described in swagger/v2.0/closery.yaml

Because the Specification is not yet determined the server will first just be generated.

To generate the API server use:

`gulp && slc loopback:swagger`

Then use './swagger/v2.0/closery.json' for the file path and choose to generate all models.

You can start the server using: `slc run`

See: http://strongloop.com/strongblog/enterprise-api-swagger-2-0-loopback/
