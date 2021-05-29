const jwt = require("jsonwebtoken");
const secret = "cheesecake";


const withAuth = function (req, res, next) {
  const authHeader = req.headers.cookie;

  if (authHeader) {
    console.log("authHeader", authHeader)
    const token = authHeader.split("=")[1];
    console.log(token)
    

    jwt.verify(token, secret, (err, user) => {
      if (err) {
        console.log("err", err);
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = withAuth;
