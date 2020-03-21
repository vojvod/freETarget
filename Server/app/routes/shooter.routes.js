module.exports = app => {
    const shooters = require("../controllers/shooter.controller.js");

    var router = require("express").Router();

    // Create a new shooter
    router.post("/", shooters.create);

    // Retrieve all shooters
    router.get("/", shooters.findAll);

    // Retrieve a single shooter with id
    router.get("/:id", shooters.findOne);

    // Update a shooter with id
    router.put("/:id", shooters.update);

    // Delete a shooter with id
    router.delete("/:id", shooters.delete);

    // Create a new shooter
    router.delete("/", shooters.deleteAll);

    app.use('/api/shooters', router);
};