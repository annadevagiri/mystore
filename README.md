# my cupcake store
    Nodejs v21.7.1

# How to run server
    npm install
    npm run dev

    package.json will pull the required modules

# Postman collection to run CRUD operations
    use cupcake store.postman_collection.json
    at localhost:3000

# Data store initial object as JSON file
    /cupcake.models/cupcake.json

# routes API collection
    router.get('/v2/cupcakes', getCupcakes);
    router.get('/v2/cupcakes/:id', getCupcakesById);
    router.post('/v2/cupcakes', addNewCupcake);
    router.put('/v2/cupcakes/:id', updateCupcake);
    router.delete('/v2/cupcakes/:id', deleteCupcake);


