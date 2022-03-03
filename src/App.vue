<template>
  <div>
    <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="https://vuejs.org/">
          <img src="./assets/img/vue-js-1.svg" alt="" width="30" height="24">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/wallpaper">Wallpaper</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
    <!-- <footer>
      <p><a href="https://github.com/LuisAGuzmanI/Actividad1-HTML-A01741757">Webpage GitHub Repository</a></p>
    </footer> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
  /* @import './assets/styles/app-styles.css'; */
</style>
