<template lang="pug">
  .skill-container
    h2 {{ category.category }}
    hr
    table
      skills-item(
        v-for="skill in category.skills"
        :key = "skill.id"
        :skill = "skill"
      )
    hr 
    form(
      @submit.prevent="addNewSkill"
      :class={blocked: formBlocked}
    ).add-skill-wrapper 
      input(type="text" placeholder="add skill name" v-model="skill.title")
      input(type="text" placeholder="add percent" v-model="skill.percent")
      button(type="submit") Add
</template>

<script>
import { mapActions } from "vuex"

export default {
  components: { 
    skillsItem: () => import("./skills-item") 
   },
  props: {
    category: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  data () {
    return {
      formBlocked: false,
      skill: {
        title: "",
        percent: 0,
        category: this.category.id
      }
    }
  },
  methods: {
    ...mapActions("skills", ["addSkill"]),
    async addNewSkill() {
      this.formBlocked = true;
      try {
        await this.addSkill(this.skill);
        this.skill.title = "";
        this.skill.percent = "";

      } catch (error) {
        // error
      } finally {
        this.formBlocked = false;
      }
    }
  } 
}
</script>

<style lang="pcss" scoped>

  .add-skill-wrapper.blocked {
    opacity: 0.5;
    filter: grayscale(100%);
    pointer-events: none;
    user-select: none;
  } 

</style>