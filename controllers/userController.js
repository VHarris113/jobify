const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Form
            .find(req.query)
            // .sort() //by Wishlist, Pending, Denied, Offer
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(404).json(err));
    },
    // findById: function(req, res) { //This will be find by the sort above
    //     db.Form
    //         .findById(req.params.id)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(404).json(err));
    // },
    create: function(req, res) {
        db.Form
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(404).json(err));
    },
    update: function(req, res) {
        db.Form
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(404).json(err));
    },
    remove: function(req, res) {
        db.Form
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(404).json(err));
    }
};