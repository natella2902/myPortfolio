<template lang="pug">
  .tabs-container
    .container
      ul.tabs
        li.tabs__item(v-for="tab in tabs")
          a(:href="tab.href" ).tabs__link  {{ tab.title }}
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {title: "Обо мне", href: "/"},
        {title: "Работы", href: "/"},
        {title: "Отзывы", href: "/"}
      ]
    }
  }  
}
</script>

<style lang="postcss">

 .tabs-container {
   color: #414c63;
 }

.tabs {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tabs__item {
  line-height: 36px;
  font-weight: 600;
  padding: 20px 25px;
  border: 1px solid transparent;
    &:hover {
      box-sizing: border-box;
      border-bottom: 1px solid #5b5dd6;
      color: #5b5dd6;
    }
}



</style>