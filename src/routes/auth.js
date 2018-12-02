import express from "express";
import userRepository from "~/models/user";

const router = express.Router();

router.post("/register", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  userRepository
    .sync()
    .then(() =>
      userRepository.create({
        firstName,
        lastName,
        email,
        password
      })
    )
    .then(() => userRepository.findOne({ where: { email } }))
    .then(user => {
      res.json(user);
    });
});

export default router;
