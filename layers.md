
### N-LAYERS AND STRUCTURE

Following the N-layers structure and only the native modules offered by NodeJS, we're gonna create a HTTP server with a reusable folder structure and automated tests.

##### Folder structure:

(for readability, all folders names will be in CAPS LOCK)

- DATABASE/
> Not an actual DB, just a simulation. Anyway, this is the folder that'll be used to store data and metadata (in a DB POV).

- SRC/ 
> Contains the whole source of the project.
  - ENTITIES/ 
    > Object mappings;
  - FACTORIES/ 
    > Instance generators;
  - REPOS/ 
    > Data access;
  - ROUTES/
    > Endpoint mappings;
  - SERVICES/
    > Communication between ROUTES and REPOS (business logic);
  - UTIL/
    > Shared code;
  - HANDLER/
    > Communication between routes and server.

### AUTOMATED TESTS SUITES

The title is self-explanatory. 

> - Integration tests - Occurs on the user POV. Assuming there's no app consuming it, we can classify it as a E2E test. 
> - Unit tests - Must run without external connections such as DBs, third-party APIs or, on this case, the FS.


