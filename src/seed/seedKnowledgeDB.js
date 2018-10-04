const mongoose = require("mongoose");
const db = require("../models/knowledge/Knowledge");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/KnowledgeList"
);