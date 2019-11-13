<template lang="pug">
  div
    h2 Внутренний компонент
    pre {{ formData }}
    h1 {{ formData.username }}
    p {{ title }}
    input(
      v-bind = "$attrs"
    )
    button(
      v-on = "$listeners"
    ) SEND
    input(type="text", v-model = "formData.username")
    hr
    input(type="checkbox" v-model="formData.hobby" value="music")
    span Music
    input(type="checkbox" v-model="formData.hobby" value="literature")
    span Literature
    hr
    input(type="radio" name="payment" v-model="formData.payment" value="visa")
    span Visa
    input(type="radio" name="payment" v-model="formData.payment" value="mastercard")
    span Mastercard
    hr
    select(v-model="formData.number")
      option(v-for="n in 10" :value= "n") {{ n }}
    hr
    h2 {{ msg }}
    hr
    h2 {{ ps }}
    h2 {{ foo }}
    h2 {{ obj.occ }}
    h2 {{ obj }}

    
 
    
</template>


<script>
import testMixin from '../mixins/testMixin'

export default {
  inheritAttrs: false,
  props: {
    msg: {
      type: String,
      default: "KUKU - KUKU",
      validator(value) {
        return ['yes', 'no'].indexOf(value) != -1;
      }
    }
  },
  mixins: [testMixin],
  data() {
    return {
      title: 'Somthing new',
      formData: {
        username: "Jane Dow",
        hobby: ["literature"],
        payment: "visa",
        number: "5"

      },
      obj: {
        occ: "developer"
      }
    };
  },
  methods: {
    handleClick() {
      console.log('click!!!');
    }
  },
  mounted() {
    console.log(this.$attrs);
    console.log(this.msg);
  }
  
}
</script>