require("./src/config/dabatase").connect();
const express = require("express");
const cors = require("cors");
const path = require("path");

const AuthRouter = require("./src/routes/authRouter");

const app = express();
const PORT = process.env.PORT || 3030;

app.disable("x-powered-by");
app.set("json spaces", 2);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));

app.get("/login", function(req, res) {
    res.sendFile(path.join(process.cwd(), "index.html"));
});

app.use("/app", AuthRouter);

app.listen(PORT, () => {
    console.log("App listening on port", PORT);
});
