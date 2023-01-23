var express = require('express');
var router = express.Router();
const models = require('../models');
const authMiddleware = require('../middleware/auth');


router.get('/addPhoneNumber',function (req, res, next) {
    models.PhoneNumbers.findAll()
        .then(country => {
            country = country.map((row) => {
                row = row.toJSON();
                return row;
            });
            res.send(country);
        })
        .catch((err) => {
            console.log(`err`, err)
        });
});

router.get('/registration', function(req, res, next) {
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
            "reg_1": "Անուն Ազգանուն",
            "reg_2": "Էլ․ հասցե",
            "reg_3": "Գաղտնաբառը",
            "reg_4": "Կրկնել գաղտնաբառը",
            "reg_5": "Հեռախոսահամար",
            "reg_6": "Ուղարկել",

            "description": "   fjhgjfgbgjbgjbjg"
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
            "reg_1": "Name Surname",
            "reg_2": "Email",
            "reg_3": "Password",
            "reg_4": "Repeat password",
            "reg_5": "Phone number",
            "reg_6": "Send",
            "description": "555555555fdvdkvjvjfjm,fmjvfmjvfjvjfvjfjvfjvjfvjfjvfjvjfvjfjvjfvjrfgjrjvj"
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
            "reg_1": "Имя Фамилия",
            "reg_2": "Майл",
            "reg_3": "Пароль",
            "reg_4": "Повторите пароль",
            "reg_5": "Номер телефона",
            "reg_6": "Отправить",
            "description": "777777777777777fdhhhhhhhhhhhhhhhhhhhhhhhhhhhgjrjvj"
        },
    };
    models.PhoneNumbers.findAll()
        .then(country => {
            country = country.map((row) => {
                row = row.toJSON();
                return row;
            });
            res.render('registration', {language:req.originalUrl.split('/')[1],data: data[req.originalUrl.split('/')[1]], country: country});
        });
});
router.get('/buyForMe', function(req, res, next) {
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
            res.render('buyForMe',{language:req.originalUrl.split('/')[1],data: data[req.originalUrl.split('/')[1]]});
});

router.get('/prohibited', function(req, res, next) {
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
    res.render('prohibited',{language:req.originalUrl.split('/')[1],data: data[req.originalUrl.split('/')[1]]});
});
router.get('/provisions', function(req, res, next) {
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
    res.render('provisions',{language:req.originalUrl.split('/')[1],data: data[req.originalUrl.split('/')[1]]});
});
router.get('/security', function(req, res, next) {
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
    res.render('security',{language:req.originalUrl.split('/')[1],data: data[req.originalUrl.split('/')[1]]});
});
router.get('/calc', function(req, res, next) {
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
    res.render('calc',{language:req.originalUrl.split('/')[1],data: data[req.originalUrl.split('/')[1]]});

});
router.get('/legal', function(req, res, next) {
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
    models.PhoneNumbers.findAll()
        .then(countri => {
            country = countri.map((row) => {
                row = row.toJSON();
                return row;
            });
    res.render('legal',{language:req.originalUrl.split('/')[1],data: data[req.originalUrl.split('/')[1]]});
        });
});
router.post('/legal', function(req, res, next) {
    try {
        let data = req.body;
        console.log(data);
        models.Legal.create({
            organization_name:data.organization_name,
            email:data.email,
            // country_id:data.country_id,
            // phone_code:data.phone_code,
            // number:data.number,
            phone_number:data.phone_code+" "+data.number,
            shipping_country:data.shipping_country,
            weight_type:data.weight_type,
            weight:data.weight,
            length_type:data.length_type,
            v_3m:data.length_a*data.length_b*data.length_b,
            comments:data.comments,
        })
            .then(() => {
                res.redirect('/users/legal');
               /* next();
                res.send(message(success))*/
            })
    }
    catch (e) {
        res.render('legal', {validationErr: err});
    }

});



router.get('/about', function(req, res, next) {
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
    res.render('about',{language:req.originalUrl.split('/')[1],data: data[req.originalUrl.split('/')[1]]});
});
router.get('/contact', function(req, res, next) {
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
    res.render('contact',{language:req.originalUrl.split('/')[1],data: data[req.originalUrl.split('/')[1]]});
});



/*router.post('/legal', function (req, res, next) {
    let data = req.body;
    console.log(data,"fffrfrgfrfhrfyurf84ru487r4");
    new Promise((resolve, reject) => {
        let errorObj = {};
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            errors.errors.forEach((row) => {
                errorObj[row.param] = row.msg;
            });
        }
        let data = req.body;
console.log(data,"fffrfrgfrfhrfyurf84ru487r4");
        let stringRegexp = /^[a-zA-Z]+$/;
        // var regexDate = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
        var regexDate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
        const emailToValidate = 'a@a.com';
        const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


        if (!stringRegexp.test(data.organization_name)) {
            errorObj.organization_name = "First Name should be string!";
        }
        if (!emailRegexp.test(data.email)) {
            errorObj.email = `Email is invalid`;
        }

        if (Object.keys(errorObj).length) {
            reject(errorObj);
        }
        models.Legal.create({
            organization_name:data.organization_name,
            email:data.email,
            country_id:data.country_id,
            phone_code:data.phone_code,
            number:data.number,
            shipping_country:data.shipping_country,
            weight_type:data.weight_type,
            weight:data.weight,
            length_type:data.length_type,
            length_a:data.length_a,
            length_b:data.length_b,
            length_c:data.length_c,
            comments:data.comments,
        })
                .then(()=>{
                    resolve({message:"Success"})
                })
                .catch((err) => {
                    reject({message:err.message})
                });

    })
        .then(()=>{
            res.json({message:"Created form"})
        })
        .catch((err) => {
            res.render('legal', {validationErr: err});
        });
});*/


module.exports = router;
