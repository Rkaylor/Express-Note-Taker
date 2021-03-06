const express = require("express");
const app = express();
const routeApi = require("./routes/api");
const routehtml = require("./routes/html");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use("/", routehtml);
app.use("/api", routeApi);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });