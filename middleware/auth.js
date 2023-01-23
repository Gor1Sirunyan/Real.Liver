const config = require('../config/config.json').development;
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config);
const models = require('../models');
const authMiddleware = function (req, res, next) {
    models.Sessions.findOne({
        where: {
            session_id: req.sessionID,
        }
    })
        .then((data) => {
            // console.log("data", data);
            if (!data)
                return res.redirect('/auth/login');
            next();
        })
        .catch((err) => {
            console.log(err.message);
            return;
        });
};

/*const confirmAuthentication  = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/')
};*/

module.exports = authMiddleware;