import express from "express";
import { UniqueConstraintError, ValidationError } from "sequelize";
import errorCodes from "~/utils/error-codes";
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
    })
    .catch(error => {
      if (error instanceof UniqueConstraintError) {
        res
          .json({
            error: true,
            code: errorCodes.USER_REGISTER_EMAIL_TAKEN,
            message: "Email already taken"
          })
          .status(400);
        return;
      }
      if (error instanceof ValidationError) {
        res
          .json({
            error: true,
            code: errorCodes.USER_REGISTER_VALIDATION,
            errors: error.errors.map(({ path, message }) => ({
              key: path,
              message
            }))
          })
          .status(400);
        return;
      }
      res
        .json({
          error: true,
          code: errorCodes.USER_REGISTER_UNKOWN,
          message: "Unkown error"
        })
        .status(500);
      return;
    });
});

export default router;
