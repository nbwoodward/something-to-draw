<template>
  <div id="loader">
    <h3 id="loader-inner">
      somet <br />
      hingt <br />
      odraw
    </h3>
  </div>
</template>
<style>
#loader {
  width: 100%;
  height: 100%;
  background-color: #333;
  color: #fff;
  font-weight: bold;
  display:flex;
}
#loader-inner {
  margin-top: 30%;
  margin: auto;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Source Code Pro';
  animation-name: spin;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
</style>
