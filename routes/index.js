var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.json({test:"Backend connected successfully!"});
});

module.exports = router;
