import axios from "axios";

export default {

    
  // Gets books from the Google API
  searchBooks: function(query) {
    return axios.get("/api/searchbooks", { params: { q: query } });
  },  
  // Gets all saved books

  getBooks: function() {
    return axios.get("/api/books/");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};