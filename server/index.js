"use strict";

const express = require("express");
const app = express();
const PORT = 3000;
// home route
app.get("/", (req, res) => {
  res.send("Hello World")
})

// listener
app.listen(PORT,(error) => {
  if (error) {
    console.error("Server Error", error)
  }
  console.log(`listening on http://localhost:${PORT}`)
})
