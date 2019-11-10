import Vue from "vue";
import axios from "axios";

const baseUrl = "https://webdev-api.loftschool.com";
const token = localStorage.getItem('token') || "";

axios.defaults.baseURL = baseUrl;
axios.defaults.headers["Authorization"] = `Bearer ${token}`;

const skill = {
  template: "#form-skill",
  props: ["categoryId"],
  data () {
    return {
      skill: {
        title: "",
        percent: 0,
        category: this.categoryId
      }
    }
  },
  methods: {
    addNewSkill() {
      axios.post('/skills', this.skill).then( response => {
        this.$emit('skillAdded', response.data);
        this.skill.title ="";
        this.skill.percent= 0;
      })
    }
  }
};

const category = {
  template: "#form-category",
  components: { skill },
  data: () => ({
    title: "",
    categories: []
  }),
  created() {
    this.fetchCategories();
  },
  methods: {
    createCategory() {
      axios.post('/categories', { title: this.title }).then (response => {
        this.categories.unshift(response.data);
        this.title = "";
        console.log(response.data);
      }).catch( error => {
        console.log(error.response.data)
      })
    },
    fetchCategories() {
      axios.get('/categories/200').then( response => {
        this.categories = response.data;
      })
    },
    addSkill(newSkill) {
     this.categories = this.categories.map(category => {
      if(category.id == newSkill.category) {
        category.skills.push(newSkill);
      }
      return category;
     })
    }
  }
};

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
        const token = response.data.token;
        axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        localStorage.setItem('token', token);
        console.log(response.data);
      }).catch(error => {
        console.log(error.response.data);
      })
    }
  }

};

new Vue({
  el: "#form-submit",
  template: "#form-root",
  components: { login, category }

});
