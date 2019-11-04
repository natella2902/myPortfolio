<template lang="pug">
  .header
    .container
      .header__info
        .user
          .user__pic
            img(src="../../images/content/user_test.jpg").user__pic-avatar
          .user__name 
            span Желонкина Наталья
        .header__title Панель администрирования
      a.exit-btn(@click="logout") Выйти
</template>

<script>

export default {
  inheritAttrs: false
}
</script>

<style lang="pcss" scoped>

  .header {
    color: #fff;
    padding: 15px 0;
  }


  .container {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__info {
    display: flex;
    align-items: center;
  }

  .user {
    display: flex;
    align-items: center;

    margin-right: 30px;
  }

   .user__pic {
     width: 45px;
     height: 45px;
     overflow: hidden;
     border-radius: 50%;
     background: #fff;

     margin-right: 20px;
   }

   .user__pic-avatar {
     width: 100%;
     height: 100%;
   }
    .user__name {
      font-size: 18px;
      font-weight: 600;
      line-height: 34px;
    }

    .header__title {
      font-size: 14px;
      font-weight: 400;
      line-height: 34px;
      opacity: 0.5;
    }

    .exit-btn {

      line-height: 24px;
      opacity: 0.7;
      text-decoration: underline;
    }


</style>
