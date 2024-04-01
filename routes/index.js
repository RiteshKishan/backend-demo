var express = require("express");
var router = express.Router();

const myMiddleware = (req, res, next) => {
  console.log('This is a middleware function');
  next();
};
router.use(myMiddleware);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("welcome to the first route");
});

router.get("/newpage", function (req, res, next) {
  res.send("welcome to the new page");
});

router.get("/nextpage", function (req, res, next) {
  res.send("Sab sahi salamat hai");
});

module.exports = router;
