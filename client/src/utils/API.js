import axios from "axios";

export default {
  // // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // },
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  updateContributed: function() {
    return axios.post("/api/users/:id");
  },
  // Gets all users
  getProfiles: function() {
    return axios.get("/api/profiles");
  },
  // Saves a user to the database
  saveProfiles: function(userData) {
    return axios.post("/api/profiles", userData);
  },

  // Gets all users
  getPosts: function() {
    return axios.get("/api/posts");
  },
  // Saves a user to the database
  savePosts: function(userData) {
    return axios.post("/api/posts", userData);
  }

};
