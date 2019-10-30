import Vue from "vue";

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'


const feedbackItem = {
  template: "#feedback-item",
  props: ['item'],
  components: {
    swiperSlide
  }
}

new Vue({
  el: "#feedback-component",
  template: "#feedback-list",
  components: {
    feedbackItem,
    swiper,
  },
  data: {
    comments: [ ],
    swiperOptions: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
      navigation: {
        nextEl: '.slider-fb-buttons__item--slide--next',
        prevEl: '.slider-fb-buttons__item--slide--prev',
        disabledClass: 'slider-fb-buttons--disabled'
      },
      breakpoints: {
        480: {
          slidesPerView: 1
        }
      }
    }
  },
  methods: {
    addImagePath(comments) {
      return comments.map(el => {
        let avatar = require(`../images/content/${el.avatar}`);
        el.avatar = avatar;
        return el
      })
    }
  },
  created() {
    const data = require("../data/feedback.json");
    this.comments = this.addImagePath(data);
  }

  })