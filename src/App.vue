<template>
  <div>
    <header>
      <nav id="nav">
        <ul>
          <li class="left-li">
            <router-link class="li-a" to="/">Inicio</router-link>
          </li>
          <li class="left-li">
            <router-link class="li-a" to="/contacto">Contacto</router-link>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  color: #42b983;
}
header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #333;
  color: white;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.left-li {
  float: left;
}

.li-a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.li-a:hover:not(.active) {
  background-color: #111;
}

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #333;
  color: white;
}
</style>
