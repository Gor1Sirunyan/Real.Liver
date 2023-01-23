var express = require('express');
var router = express.Router();
const models = require('../models');
// const bcrypt = require('bcrypt');
const authMiddleware = require('../middleware/auth');
const IndexContoller = require('../controllers/index_controller');
const login1 = require('../locales/en/translation');

const i18next = require('i18next');
console.log(login1);
router.get('/login', function (req, res, next) {
    let data = {
        "am": {
            "head_a_1": "Գլխավոր",
            "head_a_2": "Մեր մասին",
            "head_a_3": "Ծառայություններ",
            "head_a_4": "Իրավաբանական անձանց տարբերակում",
            "head_a_5": "Գրանցվել",
            "head_a_6": "Մուտք",
            "head_a_7": "Հետադարձ կապ",
            "head_a_8": "Գնիր իմ փոխարեն",
            "log_0":"Խնդրում եմ գրեք էլ․ հասցեն եւ գաղտնաբառը!",
            "log_1": "Էլ․ հասցե",
            "log_2": "Գաղտնաբառը",
            "log_3": "Մոռացե՞լ եք գաղտնաբառը։",
            "log_4": "Ուղարկել",
            "log_5":"Դու՞ք գրանցված եք:",

        },
        "en": {
            "head_a_1": "Head",
            "head_a_2": "About us",
            "head_a_3": "Services",
            "head_a_4": "Differentiation of legal entities",
            "head_a_5": "Registration",
            "head_a_6": "Sign in",
            "head_a_7": "Feedback",
            "head_a_8": "Buy for me",
            "log_0":"Please write an email address and password!",
            "log_1": "Email",
            "log_2": "Password",
            "log_3": "Forgot password?",
            "log_4": "Send",
            "log_5":"Are you registered?",

        },

        "ru": {
            "head_a_1": "Глава",
            "head_a_2": "О нас",
            "head_a_3": "Сервисы",
            "head_a_4": "Разграничение юридических лиц",
            "head_a_5": "Регистрация",
            "head_a_6": "Войти",
            "head_a_7": "Обратная связь",
            "head_a_8": "Купи для меня",
            "head_a_9": "Купи для меня",
            "log_0":"Пожалуйста, напишите майл и пароль!",
            "log_1": "Майл",
            "log_2": "Пароль",
            "log_3": "Забыли пароль?",
            "log_4": "Отправить",
            "log_5":"Вы зарегистрированы?",
        },
    };
    res.render('login',{language:req.originalUrl.split('/')[1],data: data[req.originalUrl.split('/')[1]]})
});
router.get('/forgot_password', function (req, res, next) {
    var data = {
        "am": {
            "head_a_1": "Գլխավոր",
        },
        "en": {
            "head_a_1": "Head",
        },

        "ru": {
            "head_a_1": "Глава",

        },
    };
    res.render('forgot_password',{language:req.originalUrl.split('/')[1],data: data[req.originalUrl.split('/')[1]]})
});
router.get('/reset_password/:token', function (req, res, next) {
    var data = {
        "am": {
            "head_a_1": "Գլխավոր",
        },
        "en": {
            "head_a_1": "Head",
        },

        "ru": {
            "head_a_1": "Глава",

        },
    };
    res.render('reset_password',{language:req.originalUrl.split('/')[1],data: data[req.originalUrl.split('/')[1]]})
});

router.get('/logout',function (req,res,next) {
    models.User.findOne({
        where: {id: req.params.id}
    })
        .then(user => {
            // console.log(req.body,"1111!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!@@@@@!@@@@@@@@@@@@@@@@@@@@@")
            user = user.toJSON();
            //      user.start = formatDate(user.start);
            //        user.end = formatDate(user.end);
            res.send(user.id)
        });
});
// router.post('/login', function (req, res, next) {
//     let ses = req.session;
//     let email = req.body.email;
//     let password = req.body.password;
//     models.Admin.findOne({
//         where: {
//             email: ((email) ? email : '')
//         }
//     })
//         .then((user) => {
//             if (!user) {
//                 return res.send('dfhbdsjfdfnfvb', {message: "User not found!"})
//             } else {
//                 if (bcrypt.compareSync(password, user.password)) {
//                     ses.email = user.email;
//                     return res.redirect('/users/header');
//                 } else {
//                     return res.render('login', {email: email, message: "Password incorrect!"})
//                 }
//             }
//         })
//         .catch((err) => {
//             res.send(err.message)
//         });
// });
//
// router.get('/auth', authMiddleware, function (req, res, next) {
//     res.render("auth")
// });


module.exports = router;