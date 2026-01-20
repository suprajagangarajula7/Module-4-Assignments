const express = require("express");
const fs = require("fs");
const cloudinary = require("../config/cloudinary.config");
const upload = require("../middleware/upload.middleware");
const uniqueEmail = require("../middleware/uniqueEmail.middleware");

const router = express.Router();

router.post(
  "/signup",
  upload.single("profile"),
  uniqueEmail,
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          error: "Profile image is required"
        });
      }

      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({
          error: "All fields are required"
        });
      }

      // Upload to Cloudinary
      const uploadResult = await cloudinary.uploader.upload(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`
      );

      const users = JSON.parse(fs.readFileSync("db.json", "utf-8"));

      const newUser = {
        id: Date.now(),
        name,
        email,
        password,
        profilePic: uploadResult.secure_url
      };

      users.push(newUser);
      fs.writeFileSync("db.json", JSON.stringify(users, null, 2));

      res.status(201).json({
        message: "User registered successfully",
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          profilePic: newUser.profilePic
        }
      });
    } catch (err) {
      res.status(500).json({
        error: err.message
      });
    }
  }
);

module.exports = router;
