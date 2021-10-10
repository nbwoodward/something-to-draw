<template>
  <div>
    <Header />
    <div id="content">
      <Nuxt />
    </div>
  </div>
</template>

<style>
body,
html {
  padding: 0;
  margin: 0;
  overflow: hidden;
  background: #222;
}
#content {
  padding-top: 50px;
  width: 100vw;
  height: 100vh;
}
</style>
