import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=42";

export default {
  search: function(query) {
    return axios.get(BASEURL);
  }
};
