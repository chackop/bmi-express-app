import express from "express";
import getBMICategory from "./getBMICategory";

const app = express();
const port = 3000;

app.get("/bmi-category", getBMICategory);

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});
