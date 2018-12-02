import express from "express";
import bodyParser from "body-parser";
import authRoutes from "~/routes/auth";
import userRoutes from "~/routes/user";

const app = express();

app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);

app.listen(8080, () => {
  console.log("App started on port 8080");
});
