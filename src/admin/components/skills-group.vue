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
      div {{ validation.firstError('skill.title') }}
      input(type="text" placeholder="add skill name" v-model="skill.title")
      div {{ validation.firstError('skill.percent') }}
      input(type="text" placeholder="add percent" v-model="skill.percent")
      button(type="submit") Add
</template>

<script>
import { mapActions } from "vuex"
import { Validator } from 'simple-vue-validator';

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
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    'skill.title': function(value) {
        return Validator.value(value).required().regex('^[A-Za-z]*$', 'Must only contain alphabetic characters.');
    },
    'skill.percent': function(value) {
        return Validator.value(value).required().lessThanOrEqualTo(100, 'Less than 100').greaterThanOrEqualTo(0, 'More than 0');
    }
  },
  methods: {
    ...mapActions("skills", ["addSkill"]),

    async addNewSkill() {
      this.formBlocked = true;
      const success = await this.$validate()
      if (success) {
        try {
          await this.addSkill(this.skill);
          this.skill.title = "";
          this.skill.percent = "";
        } catch (error) {
          // error
        } finally {
          this.formBlocked = false;
        }
      } else { console.log('NET DANNYH SKILL')};     
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