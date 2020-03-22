const db = require("../models");
const Series = db.series;
const Shots = db.shots;
const Op = db.Sequelize.Op;

// Create and Save a new series
exports.create = (req, res) => {
    if (req.session.user && req.cookies.freETarget_user_sid) {
        // Validate request
        if (!req.body.type || !req.body.shooterId) {
            res.status(400).send({
                message: "type and shooterid can not be empty!"
            });
            return;
        }

        // Create a series
        const series = {
            date: req.body.date,
            type: req.body.type,
            shooterId: req.body.shooterId
        };

        // Save series in the database
        Series.create(series)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the series."
                });
            });
    } else {
        res.status(500).send({
            message: "You have to login!"
        });
    }
};

// Retrieve all series from the database.
exports.findAll = (req, res) => {
    if (req.session.user && req.cookies.freETarget_user_sid) {
        const id = req.query.id;
        const condition = id ? {id: {[Op.id]: `%${id}%`}} : null;

        Series.findAll({where: condition})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving series."
                });
            });
    } else {
        res.status(500).send({
            message: "You have to login!"
        });
    }
};

// Find a single series with an id
exports.findOne = (req, res) => {
    if (req.session.user && req.cookies.freETarget_user_sid) {
        const id = req.params.id;

        Series.findByPk(id, {include: [Shots]})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving series with id=" + id
                });
            });
    } else {
        res.status(500).send({
            message: "You have to login!"
        });
    }
};

// Update a series by the id in the request
exports.update = (req, res) => {
    if (req.session.user && req.cookies.freETarget_user_sid) {
        const id = req.params.id;

        Series.update(req.body, {
            where: {id: id}
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Series was updated successfully."
                    });
                } else {
                    res.send({
                        message: `Cannot update series with id=${id}. Maybe series was not found or req.body is empty!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error updating series with id=" + id
                });
            });
    } else {
        res.status(500).send({
            message: "You have to login!"
        });
    }
};

// Delete a series with the specified id in the request
exports.delete = (req, res) => {
    if (req.session.user && req.cookies.freETarget_user_sid) {
        const id = req.params.id;

        Series.destroy({
            where: {id: id}
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Series was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete series with id=${id}. Maybe shooter was not found!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Could not delete series with id=" + id
                });
            });
    } else {
        res.status(500).send({
            message: "You have to login!"
        });
    }
};

// Delete all Series from the database.
exports.deleteAll = (req, res) => {
    if (req.session.user && req.cookies.freETarget_user_sid) {
        Series.destroy({
            where: {},
            truncate: false
        })
            .then(nums => {
                res.send({message: `${nums} Series were deleted successfully!`});
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while removing all series."
                });
            });
    } else {
        res.status(500).send({
            message: "You have to login!"
        });
    }
};