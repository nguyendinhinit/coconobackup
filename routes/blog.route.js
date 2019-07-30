const express = require('express');
const router = express.Router();
const course_controller = require('../controllers/course.controller');

/* GET home page. */
router.get('/blogtest', function (req,res) {
    res.send("BLOG Site")
	console.log("BLOG SITE");
});

module.exports = router;
