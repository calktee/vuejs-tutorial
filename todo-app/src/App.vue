<template>
  <div class="wrap">
    <div>Header</div>
    <main class="main">Main</main>
    <div>Footer</div>
  </div>
</template>

<style>
@import 'assets/css/destyle.css';

.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 370px;
  margin: 0px;
  font-family: sans-serif;
}

.main {
  flex: 1;
  width: 100%;
}
</style>
