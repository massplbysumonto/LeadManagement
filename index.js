require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const DbConnection = require("./databaseConnection/dbConnect");
const leadsUploadRoutes = require("./routes/uploadLeadsRoutes");
const loginRoutes = require("./routes/login&register");

// databaseConnections
DbConnection()
// middileWires
app.use(express.json());
app.use(cors());
app.use("/", loginRoutes);
app.use("/uploadLeads",leadsUploadRoutes);



const port= process.env.PORT || 8080;
app.listen(port,() => {
    console.log("Listening on port: " + port);
});