<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&amp;family=Source+Code+Pro:wght@300&amp;display=swap"
      rel="stylesheet"
    />
    <Nuxt />
  </div>
</template>

<style>
body,
html {
  padding: 0;
  margin: 0;
  overflow: hidden;
  background: #222;
  font-family: 'Raleway';
  box-sizing: border-box;
}
div {
  box-sizing: border-box;
}
a {
  color: #222;
  text-decoration: none;
}
a:hover {
  background-color: #d98b2a;
}
input {
  padding: 7px;
  border: 0;
  border-bottom: 1px solid #aaa;
  font-family: 'Raleway';
  text-transform: uppercase;
}
input:focus {
  outline: none;
  box-shadow: 0;
  border: 0;
  border-bottom: 1px solid #eee;
}
button {
  padding: 7px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #eee;
  color: #555;
  font-family: 'Raleway';
  text-transform: uppercase;
}
button:hover {
  background-color: #d98b2a;
  color: #fff;
  cursor:pointer;
}
</style>
