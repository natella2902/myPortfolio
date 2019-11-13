<template lang="pug">
   label.input()
    .input__title {{ title }} 
    input(
        v-bind="$attrs"
        :value="value" 
        @input="$emit('input', $event.target.value)"
    )
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    title: String,
    value: String | Number,
  },
  
}
</script>