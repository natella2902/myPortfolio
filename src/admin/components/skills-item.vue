<template lang="pug">
  tr(v-if="editMode===false").card-table
    td {{ skill.title }}
    td {{ skill.percent }}
    td %
    td 
      button(type="button" @click="editMode=true").btn__edit 
    td
      button(type="button" @click="removeExistedSkill").btn__del  
  tr(v-else)
    td 
      input(type="text" v-model="editedSkill.title")  
    td 
      input(type="text"  v-model="editedSkill.percent")
    td 
      button(type="button" @click="editExistedSkill")
    td
      button(type="button" @click="editMode=false") Cancel


</template>

<script>
import { mapActions } from "vuex"
export default {
  data() {
    return {
      editMode: false,
      editedSkill: {...this.skill},
      class: ""
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


<style lang="postcss" scoped>
  .card-table {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    justify-content: space-around;
  }

</style>