const express = require("express");
const router = express.Router();


// Post data
router.post('/transition-check/post', function(req, res) {

  var data = req.session.data;

  if (data != undefined) {

    if (data["run-a-business"] == "yes") {
      res.redirect("/transition-check/results");
    } else {
      res.redirect("/transition-check/no-action");
    }

  } else {

    res.end;

  }

});


module.exports = router;
