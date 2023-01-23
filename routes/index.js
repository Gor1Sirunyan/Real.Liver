var express = require('express');
var router = express.Router();
const authMiddleware = require('../middleware/auth');
//var con = require('../Routes/connection');
const passport = require('passport');


//var connection = require('models');
var nodemailer = require('nodemailer');
var randtoken = require('rand-token');

router.get('/error', function(req, res, next) {
    res.render('error');
});

router.get('/', function(req, res, next) {
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
            "footer_1":"Արգելված իրեր",
            "footer_2":"Ընդհանուր դրույթներ եւ պայմաններ",
            "footer_3":"Գաղտնիության քաղաքկանություն",
            "footer_4":"Հակոբ Հակոբյան 3",
            "footer_5":"Երեւան",
            "footer_6":"Հայաստան",
            "footer_7":"Հեռ.",
            "footer_8":"Էլ․փոստ.",
            "footer_9":"Հեղինակային իրավունք",
            "footer_10":"Բոլոր իրավունքները պաշտպանված են",
            "footer_11":"Օգտակար հղումներ",
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
            "footer_1":"Prohibited items",
            "footer_2":"General terms and conditions",
            "footer_3":"Privacy Policy",
            "footer_4":"Hakob Hakobyan 3",
            "footer_5":"Yerevan",
            "footer_6":"Armenia",
            "footer_7":"Tel:",
            "footer_8":"Email:",
            "footer_9":"Copyright",
            "footer_10":"All rights reserved",
            "footer_11":"Useful Links",

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
            "footer_1":"Запрещенные предметы",
            "footer_2":"Общие положения и условия",
            "footer_3":"Политика конфиденциальности",
            "footer_4":"Акоп Акопян 3",
            "footer_5":"Ереван",
            "footer_6":"Армения",
            "footer_7":"Тел:",
            "footer_8":"Майл:",
            "footer_9":"Авторские права",
            "footer_10":"Все права защищены",
            "footer_11":"Полезные ссылки",
        },
    };
    res.render('layout',{language:req.originalUrl.split('/')[1],data: data[req.originalUrl.split('/')[1]]});
});
/* GET home page. */
router.get('/',authMiddleware, function(req, res, next) {
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
  res.render('index', { title: 'Express' ,language:req.originalUrl.split('/')[1],data: data[req.originalUrl.split('/')[1]]});
});

/*router.get('/', authMiddleware.confirmAuthentication, (req, res) => {
    res.render("/layout")
});
router.get('/logout', (req, res)=>{
    req.logout();
    res.redirect('/');
});
//Google Auth routes
router.get('/google', passport.authenticate('google', { scope: 'email' }));
router.post('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/', failureRedirect: '/error'
    }));

//Facebook Auth routes
router.get('/facebook', passport.authenticate('facebook', { scope: 'email' }));
router.post('/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/', failureRedirect: '/error'
    }));

router.get('/logout',(req,res) => {
  // console.log(`req`, req.session)
  req.session.destroy();
  res.redirect('/auth/login');
});*/
/*router.get('/error', function(req, res, next) {
    res.render('error');
});*/
module.exports = router;
