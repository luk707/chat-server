import express from "express";
import bodyParser from "body-parser";
import authRoutes from "~/routes/auth";
import userRoutes from "~/routes/user";
import { errorCodeLookupTable } from "~/utils/error-codes";

const app = express();

app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);

app.get("/error-codes", (req, res) => {
  res.json(errorCodeLookupTable);
});

app.listen(8080, () => {
  console.log("App started on port 8080");
});
