<template lang="pug">
  .about-page-container
    .about-page__title
      .container
        h1.page-title Блок "Обо мне"
        button(type=button).about-page__add-new Добавить группу
    .about-page__content
      .container.container--mobile-wide
        form(@submit.prevent="addNewCategory")
          input(type="text" placeholder="Имя категории" v-model="title" )
          input(type="submit")
        ul.skill-list 
          li.skill-list__item(v-for="category in categories" :key="category.id")
            skills-group(
              :category="category"
            )
            
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  components: {
    skillsGroup: () => import("../skills-group")
  },
  data: () => ({
    title: ""
  }),
  created() {
    this.fetchCategories();
  },
  computed: {
    ...mapState("categories", {
      categories: state => state.categories
    })
  },
  methods: {
      ...mapActions("categories", ["addCategory", "fetchCategories"]),
    async addNewCategory() {
      try {
        await this.addCategory(this.title)
      }
      catch (error) {
        alert(error.message);
      }
    }
  }  
}


</script>

<style lang="pcss" scoped>
  .container {
    display: flex;
  }

  .about-page__title {
    display: flex;
    padding: 60px 0;
  }

  .page-title {
    font-size: 21px;
    font-weight: 700;
    line-height: 34px;
    color: #414c63;
    margin-right: 50px;
  }

  .about-page__add-new {
    display: flex;
    position: relative;
    background-color: transparent;
    color: #383bcf;
    font-size: 16px;
    font-weight: 600;
    line-height: 33.89px;
    padding: 0 30px;
    
  }

  .about-page__add-new::before {
    content: "+";
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 21px;
    height: 21px;
    background-color: blue;
    border-radius: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    top: 5px;
  }
  
  .about-page-container {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("~images/content/admin_back.png");
    background-position-x: center;
  }
  .skill-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 340px;
    grid-gap: 25px;
  }

  .skill-list__item {
    background: white;  
    border: 1px solid green;
  }
</style>