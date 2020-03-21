module.exports = app => {
    const series = require("../controllers/series.controller.js");

    var router = require("express").Router();

    // Create a new series
    router.post("/", series.create);

    // Retrieve all series
    router.get("/", series.findAll);

    // Retrieve a single series with id
    router.get("/:id", series.findOne);

    // Update a series with id
    router.put("/:id", series.update);

    // Delete a series with id
    router.delete("/:id", series.delete);

    // Create a new series
    router.delete("/", series.deleteAll);

    app.use('/api/series', router);
};