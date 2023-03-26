import User from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    //const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      username: "test",
      email: "test",
      password: "test",
      country: "test",
    });

    await newUser.save();
    res.status(201).send("User has been created.");
  } catch (err) {
    // next(err);
    res.status(500).send("Something went wrong. Please try again");
  }
};
export const login = async (req, res) => {
  res.send("from controllers");
};

export const logout = async (req, res) => {
  res.send("from controllers");
};
