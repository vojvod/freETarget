const db = require("../models");
const Shot = db.shots;
const Op = db.Sequelize.Op;

// Create and Save a new Shot
exports.create = (req, res) => {
    if (req.session.user && req.cookies.freETarget_user_sid) {
        // Validate request
        if (!req.body.seriesId || !req.body.no || !req.body.score) {
            res.status(400).send({
                message: "seriesid, no and score can not be empty!"
            });
            return;
        }

        // Create a Shot
        const shot = {
            seriesId: req.body.seriesId,
            no: req.body.no,
            score: req.body.score
        };

        // Save Shot in the database
        Shot.create(shot)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Shot."
                });
            });
    } else {
        res.status(500).send({
            message: "You have to login!"
        });
    }
};

// Retrieve all Shots from the database.
exports.findAll = (req, res) => {
    if (req.session.user && req.cookies.freETarget_user_sid) {
        const id = req.query.id;
        const condition = id ? {id: {[Op.id]: `%${id}%`}} : null;

        Shot.findAll({where: condition})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving shots."
                });
            });
    } else {
        res.status(500).send({
            message: "You have to login!"
        });
    }
};

// Find a single Shot with an id
exports.findOne = (req, res) => {
    if (req.session.user && req.cookies.freETarget_user_sid) {
        const id = req.params.id;

        Shot.findByPk(id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving Shot with id=" + id
                });
            });
    } else {
        res.status(500).send({
            message: "You have to login!"
        });
    }
};

// Update a Shot by the id in the request
exports.update = (req, res) => {
    if (req.session.user && req.cookies.freETarget_user_sid) {
        const id = req.params.id;

        Shot.update(req.body, {
            where: {id: id}
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Shot was updated successfully."
                    });
                } else {
                    res.send({
                        message: `Cannot update Shot with id=${id}. Maybe Shot was not found or req.body is empty!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error updating Shot with id=" + id
                });
            });
    } else {
        res.status(500).send({
            message: "You have to login!"
        });
    }
};

// Delete a Shot with the specified id in the request
exports.delete = (req, res) => {
    if (req.session.user && req.cookies.freETarget_user_sid) {
        const id = req.params.id;

        Shot.destroy({
            where: {id: id}
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Shot was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete Shot with id=${id}. Maybe Shot was not found!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Could not delete Shot with id=" + id
                });
            });
    } else {
        res.status(500).send({
            message: "You have to login!"
        });
    }
};

// Delete all Shots from the database.
exports.deleteAll = (req, res) => {
    if (req.session.user && req.cookies.freETarget_user_sid) {
        Shot.destroy({
            where: {},
            truncate: false
        })
            .then(nums => {
                res.send({message: `${nums} Shots were deleted successfully!`});
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while removing all Shots."
                });
            });
    } else {
        res.status(500).send({
            message: "You have to login!"
        });
    }
};