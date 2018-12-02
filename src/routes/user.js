import express from "express";
import userRepository from "~/models/user";

const router = express.Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;
  userRepository
    .sync()
    .then(() => userRepository.findOne({ where: { id } }))
    .then(user => {
      res.json(user);
    });
});

export default router;
