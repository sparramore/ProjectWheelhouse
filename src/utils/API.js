import axios from "axios";

export default {
  // Gets all books
  Knowledges: function() {
    return axios.get("/api/Knowledges");
  },
  // Gets the book with the given id
  getKnowledge: function(id) {
    return axios.get("/api/Knowledges/" + id);
  },
  // Deletes the book with the given id
  deleteKnowledge: function(id) {
    return axios.delete("/api/Knowledges/" + id);
  },
  // Saves a book to the database
  saveKnowledge: function(bookData) {
    return axios.post("/api/Knowledges", bookData);
  }
};
