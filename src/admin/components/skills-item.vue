<template lang="pug">
  tr(v-if="editMode===false")
    td {{ skill.title }}
    td {{ skill.percent }}
    td 
      button(type="button" @click="editMode=true") Edit
      button(type="button" @click="removeExistedSkill") Delete  
  tr(v-else)
    td 
      input(type="text" v-model="editedSkill.title")  
    td 
      input(type="text"  v-model="editedSkill.percent")
    td 
      button(type="button" @click="editExistedSkill") Save 
      button(type="button" @click="editMode=false") Cancel


</template>

<script>
import { mapActions } from "vuex"

export default {
  data() {
    return {
      editMode: false,
      editedSkill: {...this.skill}
    }
  },
  props: {
    skill: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  methods: {
    ...mapActions("skills", ["removeSkill","editSkill"]),
    async editExistedSkill () {

      try {
        await this.editSkill(this.editedSkill);
        this.editMode = false;
      } catch (error) {
        
      }
    },
    async removeExistedSkill() {
      try {
        await this.removeSkill({
          id: this.skill.id,
          category: this.skill.category
        })
      } catch (error) {
        
      }
    }
  } 
}
</script>

