<template lang="pug">
  .about-page
    .container
      .about-page__title
        h1 Обо мне
        button(type=button).about-page__add-new Добавить группу
      .about-page__content
        ul.skills__list 
          li.skills__item(v-for="skill in formData" :key="skill.skillsGroup")
            div.categoty__title
              input(type="text" v-model="skill.skillsGroup") 
              button(type="button").btn-accept Принять
              button(type="button").btn-delete Удалить
            



</template>

<script>
export default {
  data() {
    return {
      formData: []
    }
  },
  created() {
    this.formData = require("../../data/skills");
  }  


}
</script>

<style lang="pcss" scoped>

</style>