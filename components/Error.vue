<template>
  <div id="error">
    <h3 id="error-inner">
      {{msg}} <br/>
      Try searching for <NuxtLink :to="`/${tag}`" >{{tag}}</NuxtLink>
    </h3>
  </div>
</template>
<script>
import tags from '@/tags'

export default {
  props: {
    msg: {
      type: String,
      default: '',
      required: true,
    }
  },
  data(){
    return {
      tag: tags[Math.floor(Math.random() * tags.length)]
    }
  },
}
</script>
<style>
#error {
  width: 100%;
  height: 100%;
  background-color: #333;
  color: #fff;
  font-weight: bold;
  display:flex;
}
#error-inner {
  margin-top: 30%;
  margin: auto;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Source Code Pro';
}
#error-inner a{
  color:#aaa;

}
</style>
