const express =  require("express");
const { loginUser, registerUser } = require("../controllers/authController");

const router = express.Router();

router.post("/user/login", loginUser);
router.post("/user/register", registerUser);

module.exports = router;