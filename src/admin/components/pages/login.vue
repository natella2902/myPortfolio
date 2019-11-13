<template lang="pug">
  .login
    .login__content
      form(@submit.prevent="login").login__form
        .login__form-title Авторизация
        .login__row
          app-input(
            title="Логин"
            v-model="user.name"
          )
        .login__row
          app-input(
            title="Пароль"
            type="password"
            v-model="user.password"
          )
        .login__btn
          button(
            type="submit"
            v-on="$listeners"
          ).login__send-data Отправить
</template>

<script> 
import $axios from '../../request';
  
export default {
  components: {
    appInput: () => import('../input.vue')
  },
  data: () => ({
    user: {
      name: "",
      password: ""
    }
  }),
  methods: {
    
    async login() {
      try {
        const { 
          data: { token } 
        } = await $axios.post('/login', this.user)

        localStorage.setItem("token", token);
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`;

        this.$router.replace("/");
      }
      catch (error) {
        //error hendling
      }
    }
  }
}


</script>