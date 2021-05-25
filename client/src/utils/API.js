import axios from "axios";

export default {
  // Gets all books
  getProfiles: function() {
    return axios.get("/api/profile");
  },
  // Gets the book with the given id
  getProfiles: function(id) {
    return axios.get("/api/profile/" + id);
  },
  // Deletes the book with the given id
  deleteProfiles: function(id) {
    return axios.delete("/api/profile/" + id);
  },
  // Saves a book to the database
  saveProfiles: function(profileData) {
    return axios.post("/api/profiles", profileData);
  }
};
