const fs = require("fs");

const uniqueEmail = (req, res, next) => {
  const { email } = req.body;

  const users = JSON.parse(fs.readFileSync("db.json", "utf-8"));

  const exists = users.find(user => user.email === email);

  if (exists) {
    return res.status(409).json({
      error: "Email already exists"
    });
  }

  next();
};

module.exports = uniqueEmail;
