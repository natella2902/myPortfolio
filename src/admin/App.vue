<template lang="pug">
  .wrapper
    .wrapper-container
      header.header-container
        app-header
      nav.tabs-container
        app-tabs
      section.content-container
        router-view
</template>

<script>

import header from './components/header'
import tabs from './components/tabs'
import content from './components/content'
import inner from './components/inner'

import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: 'app-root',
  components: {
    innerComp: inner,
    appHeader: header,
    appTabs: tabs,
    appContent: content

  },
  methods: {
    handleClick(e) {
      console.log("handleClick", e.target)
    }
  }
}

</script>

<style lang="pcss"> 

@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

.wrapper-container {
  display: grid;
  grid-template-areas: "header"
                       "nav"
                       "section";
  grid-template-rows: 80px 80px 1fr;
  grid-template-columns: 1fr;
 
  border: 1px solid red;
}

.header-container {
  background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
  background-color: #3e3e59;
  
}



.btn__del {
  height: 20px;
  width: 20px; 
  background: svg-load('tick.svg', fill = #02d70c, width = 100%, height = 100% ) no-repeat center;
}


/*
  h1 {
    color:green;
    
  }

  .wrapper-container {
    width: 100%;
    height: 100px;
    background: azure;
  }

*/
</style>