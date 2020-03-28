const db = require("../models");
const Shooter = db.shooters;
const Series = db.series;
const Op = db.Sequelize.Op;

// Create and Save a new Shooter
exports.create = (req, res) => {
    // Validate request
    if (!req.body.userId || !req.body.registrationnumber || !req.body.club || !req.body.firstname || !req.body.lastname) {
        res.status(400).send({
            message: "userId, registrationnumber, club, firstname and lastname can not be empty!"
        });
        return;
    }

    // Create a shooter
    const shooter = {
        registrationnumber: req.body.registrationnumber,
        club: req.body.club,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        userId: req.body.userId
    };

    // Save shooter in the database
    Shooter.create(shooter)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Shooter."
            });
        });
};

// Retrieve all Shooters from the database.
exports.findAll = (req, res) => {
    const userId = req.query.userId;
    const condition = userId ? {userId: userId} : null;

    Shooter.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving shooters."
            });
        });
};

// Find a single Shooter with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Shooter.findByPk(id, {include: [Series]})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Shooter with id=" + id
            });
        });
};

// Update a Shooter by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Shooter.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Shooter was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Shooter with id=${id}. Maybe shooter was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Shooter with id=" + id
            });
        });
};

// Delete a Shooter with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Shooter.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Shooter was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Shooter with id=${id}. Maybe shooter was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Shooter with id=" + id
            });
        });
};

// Delete all Shooters from the database.
exports.deleteAll = (req, res) => {
    if (req.session.user && req.cookies.freETarget_user_sid) {
        Shooter.destroy({
            where: {},
            truncate: false
        })
            .then(nums => {
                res.send({message: `${nums} Shooters were deleted successfully!`});
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while removing all Shooters."
                });
            });
    }
};