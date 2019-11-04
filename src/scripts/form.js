import Vue from "vue";
import axios from "axios";

const baseUrl = "https://webdev-api.loftschool.com";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIwM…FKIn0.yCQrRhKr4AD_Z5zB9NZupq4bzcTSjEoU8nlY3hU2f98";

axios.defaults.baseURL = baseUrl;
axios.defaults.headers["Authorization"] = `Bearer ${token}`;

const login = {
  template: "#form-login",
  data: () => ({
    user: {
      name: "",
      password: ""
    }
  }),
  methods: {
    login() {
      axios.post('/login', this.user).then( response => {
        console.log(response.data);
      }).catch(error => {
        console.log(error.response.data);
      })

    }
  }

};

const category = {
  template: "#form-category",
  data: () => ({
    title: ""
  }),
  methods: {
    createCategory() {
      axios.post('/categories', this.title).then (response => {
        console.log(response.data);
      }).catch( error => {
        console.log(error.response.data)
      })
    }
  }
};

const skill = {
  template: "#form-skill"
};


new Vue({
  el: "#form-submit",
  template: "#form-root",
  components: { login, category, skill }

});
