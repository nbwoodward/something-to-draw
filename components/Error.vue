<template>
  <div id="error">
    <h3 id="error-inner">
      {{msg}}
    </h3>
  </div>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      default: '',
      required: true,
    }
  }
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
</style>
