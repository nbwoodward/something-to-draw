<template>
  <div id="header">
    <NuxtLink id="title" to="/">somethingtodraw</NuxtLink>
    <div>
      <input v-model="tagInner" @keyup.enter.prevent="setTag" />
      <button @click="setTag">New Image</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      tagInner: this.tag,
    }
  },
  methods:{
    setTag(){
      this.$emit('new-tag',this.tagInner)
    }
  }
}
</script>
<style>
#header {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
#title {
  text-transform: uppercase;
}
</style>
