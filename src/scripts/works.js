import Vue from  "vue"

const btns = {
  template:  "#slider-btns"
}

const thumbs = {
  template: "#slider-thumbs",
  props: ["works", "currentWork"],
  computed: {
    reversedWorks() {
      return [...this.works].reverse();
    }
  }
}

const display = {
  template: "#slider-display",
  components: { thumbs, btns },
  props: ["works", "currentWork"]
}

const tags = {
  template: "#slider-tags"
}

const info = {
  template: "#slider-info",
  components: { tags },
  props: ["currentWork"]
}

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: { display, info },
  data: () => ({
    works: [],
    currentIndex: 0
  }),
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.photo}`);
        item.photo = requiredPic;
        return item
      })
    },
    handleSlide(direction) {
      switch(direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
    }
  },
  created() {
    const data = require('../data/works.json');
    this.works = this.makeArrWithRequiredImages(data);
   
  }

});



