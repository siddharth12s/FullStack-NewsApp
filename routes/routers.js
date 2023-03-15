const express = require('express');
const dotenv = require('dotenv');
const {getArticles} = require('../controllers/articleController');
dotenv.config();

const router = express.Router();



router.get('/',getArticles)
router.get('/sports',getArticles)
router.get('/entertainment',getArticles)
router.get('/business',getArticles)
router.get('/health',getArticles)
router.get('/technology',getArticles)
router.get('/science',getArticles)
router.get('/general',getArticles)


module.exports = router
