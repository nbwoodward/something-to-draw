<template>
  <div id="footer">
    <div>
      <a target="_blank" :href="photoUrlInner">Photo from Unsplash</a>
      <span  v-if="authorName"> -- <a target="_blank" :href="authorUrl">by {{authorName}}</a></span></div>
  </div>
</template>

<script>
export default {
  props: {
    authorName: {
      type: String,
      default: '',
    },
    authorUrl: {
      type: String,
      default: '',
    },
    photoUrl: {
      type: String,
      default: '',
    },
  },
  computed:{
    photoUrlInner(){
      return this.photoUrl || 'https://unsplash.com'
    }
  }
}
</script>
<style>
#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  background: #333;
  color:#fff;
  padding: 5px 20px;
  min-height:27px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 90%;
}
#footer a{
  color: #fff;
  text-decoration: underline;
}
</style>
