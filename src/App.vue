<template>
  <div>
    <header>
      <nav id="nav">
        <ul>
          <li class="left-li">
            <router-link class="li-a" to="/">Inicio</router-link>
          </li>
          <li class="left-li">
            <router-link class="li-a" to="/wallpaper">Wallpaper</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <footer>
      <p><a href="https://github.com/LuisAGuzmanI/Actividad1-HTML-A01741757">Webpage GitHub Repository</a></p>
    </footer>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
  @import './assets/styles/app-styles.css';
</style>
