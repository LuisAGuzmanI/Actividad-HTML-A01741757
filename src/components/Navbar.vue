<template>
  <div>
      <header>
          <nav>
              <ul>
                <li><a class="active">Inicio</a></li>
                <li><a>Contacto</a></li>
            </ul>
          </nav>
      </header>
  </div>
</template>

<script>
export default {
    name: 'Navbar',

}
</script>

<style scoped>
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

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #42b983;
}
</style>