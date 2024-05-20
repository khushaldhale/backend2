const express = require("express");
const app = express();
require("dotenv").config()



app.get("/", (req, res) => {
	return res.status(200)
		.json({
			success: true,
			message: "server is up and running"
		})
})


app.get("/greet", (req, res) => {
	return res.status(200)
		.json({
			success: true,
			message: "we are greeting u"
		})
})
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log("server  is listening at PORT: ", PORT)
})