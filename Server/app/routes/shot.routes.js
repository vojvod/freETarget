module.exports = app => {
    const shots = require("../controllers/shot.controller.js");

    var router = require("express").Router();

    // Create a new shot
    router.post("/", shots.create);

    // Retrieve all shots
    router.get("/", shots.findAll);

    // Retrieve a single shot with id
    router.get("/:id", shots.findOne);

    // Update a shot with id
    router.put("/:id", shots.update);

    // Delete a shot with id
    router.delete("/:id", shots.delete);

    // Create a new shot
    router.delete("/", shots.deleteAll);

    app.use('/api/shots', router);
};