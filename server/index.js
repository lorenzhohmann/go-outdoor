const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// handle production
if (process.env.NODE_ENV === "production") {
	// static folder
	app.use(express.static(__dirname + "/public"));

	// handle SPA
	app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

// fallback for RestAPI
app.use((req, res) => res.status(404).send());

// start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
