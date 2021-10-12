<template>
  <div id="header">
    <NuxtLink id="title" to="/">somethingtodraw</NuxtLink>
    <div>
      <input
        v-model="tagInner"
        placeholder="Keyword"
        @keyup.enter.prevent="setTag"
      />
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
  methods: {
    setTag() {
      this.$emit('new-tag', this.tagInner)
    },
  },
}
</script>
<style>
#header {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  padding: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#title {
  text-transform: uppercase;
}
@media screen and (max-width: 762px) {
  #header {
    flex-direction: column;
  }
  #title{
    margin-bottom:5px;
    }
}
</style>
