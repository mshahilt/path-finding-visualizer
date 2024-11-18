
const express = require('express');
const { title } = require('process');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('user/home', {title: "Path finder"})
});

module.exports = router;
