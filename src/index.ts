import express from "express";
import getLocationsWithTimezones from "./getLocationsWithTimezones";

const app = express();
const port = 3000;

app.get("/timezones", getLocationsWithTimezones);

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});
