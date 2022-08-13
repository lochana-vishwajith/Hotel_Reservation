const UserProfile = require("../Models/UserModel");
const bycrpt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  console.log("Registration method is called");
  const { fullName, address, nic, phone, country, email, password } = req.body;

  bycrpt
    .hash(password, 10)
    .then((hash) => {
      const UserDetails = new UserProfile({
        fullName,
        address,
        nic,
        phone,
        country,
        email,
        type: "customer",
        password: hash,
      });

      UserDetails.save()
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((error) => {
          res.status(400).json("Error: " + error);
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json("Error: " + error);
    });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(`email ${email} password ${password}`);

  const user = await UserProfile.findOne({ email: email });

  if (user) {
    const isMatch = await bycrpt.compare(password, user.password);

    const token = await user.generateAuthToken();

    res.cookie("JWTToken", token, {
      expires: new Date(Date.now() + 25892000000),
      httpOnly: true,
    });

    if (!isMatch) {
      console.log("Password is Incorrect");
      res.json({ error: "Login Failed" });
    } else if (!user) {
      console.log("email is Incorrect");
      res.json({ error: "Login Failed" });
    } else {
      const userDetails = await UserProfile.findOne({ email: email });
      console.log("Login Successful");
      res.json({ message: "Login Successful", user: userDetails });
    }
  } else {
    console.log("email is Incorrect");
    res.status(500).json({ error: "Email not found" });
  }
};

module.exports = { registerUser, loginUser };
