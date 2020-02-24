const express = require('express');
const router = express.Router();


router.post('/transition-check/post', function(req, res) {

  if (data["run-a-business"] == "yes" && data["import-export"]) {
    res.redirect('/transition-check/results')
  } else {
    res.redirect('/transition-check/no-action');
  }

});


module.exports = router;
