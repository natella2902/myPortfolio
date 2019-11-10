<template lang="pug">
  .about-page-container
    .container
      .about-page__title
        h1.page-title Обо мне
        button(type=button).about-page__add-new Добавить группу
      form(@submit.prevent="addNewCategory")
        input(type="text" placeholder="Имя категории" v-model="title" )
        input(type="submit")
      .about-page__content
        .container.container--mobile-wide
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
  .skill-list {
    display: flex;
    flex-wrap: wrap;


  }
</style>