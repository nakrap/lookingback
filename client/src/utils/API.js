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
  // Gets all users
  getDeceased: function() {
    return axios.get("/api/deceased");
  },
  // Saves a user to the database
  saveDeceased: function(userData) {
    return axios.post("/api/deceased", userData);
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
