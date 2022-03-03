<template>
  <div>
    <main>
      <h1 style="padding-top:10px;" class="display-5 fw-bold"> Mini Tutorial de Vue </h1>
      <hr>

      <div class="px-4 py-5 my-5 text-center">
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Esta página es un tutorial pequeño de cómo hacer una aplicación sencilla con Vue.js<br>

            Parte de esto es para yo mismo recordar cómo funciona, así que seguramente lean lo que yo mismo vaya redescubriendo :D
          </p>
          
          <h3>¿Qué es Vue?</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/nhBVL41-_Cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p class="lead mb-4">
            Vue.js es un framework de JavaScript creado por Evan You basado en componentes para la construcción 
            de interfaces de usuario simples y complejas. <br> Una de las características fundamentales de Vue son 
            los Single-File Components (archivos *.vue) los cuales encapsulan una template de HTML, estilos en 
            CSS y la lógica del componente en JavaScript, permitiendo crear bloques de código reusables para la 
            creación de interfaces de usuario.
          </p>
          <section>
            <h3>¿Cómo empezar a crear una aplicación con Vue?</h3>
            <br>
             <p class="lead mb-4">
              Empezar es muy sencillo, sólamente sigue los siguientes pasos:
              <ol>
                <li>Descarga el Vue CLI, encontrarás cómo aquí: <a href="https://vuejs.org/guide/scaling-up/tooling.html#vue-cli">Vue-CLI</a></li>
                <li>Ejecuta el comando "vue create nombre-de-tu-proyecto" en la consola de comandos. <br>
                  Esto creará un proyecto básico de Vue que podrás modificar.</li>

                <li>Elige la versión de Vue con la que quieras trabajar (Yo usé Vue 3) <br>
                Deja todo en default a no ser que sepas que estás haciendo</li>

                <li>Dirigete a la carpeta del proyecto con el comando "cd nombre-de-tu-proyecto"</li>
                <li>Corre la aplicación en un servidor local con "npm run serve"</li>
                <li>Abre la carpeta con tu IDE de preferencia y empieza a trabajar!</li>
              </ol>
            </p>
          </section>
          <hr>
          <counter />
          <hr>
          <h3>¿Cómo funciona?</h3>
           <p class="lead mb-4">Ahora trataré de explicar cada uno de los elementos de este componente, para que se hagan una idea de como funciona.</p>

          <h4>Template</h4>
           <p class="lead mb-4">
            La template es tu lienzo, es un archivo html como los que ya conoces, Vue sirve para hacerlo dinamico de manera sencilla. Estos son algunos puntos importantes a destacar. <br>
          </p>
          <h5>Variables entre 2 llaves</h5>
           <p class="lead mb-4">
            Si viste el video, sabrás que Vue maneja de manera nativa elementos reactivos, es decir, que si cambian los datos, automaticamente se renderiza en el DOM. <br>
            Las variables tienen información que me intereza mostrar en la pantalla, y que posiblemente cambien con el tiempo, así que para mostrarlos <br>
            simplemente las pongo entre una tag de html y 2 llaves y ahí se renderizará la información contenida en la variable, como si yo mismo lo hubiera puesto ahí. <br>
            Por lo tanto, si mi variable "titulo" contiene la palabra "Counter!", al momento de renderizarlo sería lo mismo poner: <br><br>
            &lt;h1&gt; Counter! &lt;/h1&gt;<br>
            que: <br>
            &lt;h1&gt; {{ openBrackets + ' titulo ' + closeBrackets }} &lt;/h1&gt; <br> <br>
            Lo mismo sucede con {{ openBrackets + ' counter ' + closeBrackets }} y {{ openBrackets + ' incDec ' + closeBrackets }} <br>
            El primero está mostrando la variable 'counter' que contiene el numero que cambia cuando pulsas los botones, y el segundo está mostrando la variable <br>
            'incDec' que contiene el numero que aparece dentro de los botones. 
          </p>
          <h5>Escuchar eventos</h5>
           <p class="lead mb-4">
            Cuando pulsas los botones, el número se actualiza, Vue hace este proceso de mandar a llamar una variable extremadamente sencillo. <br>
            Con la directiva '@click' el elemento 'button' mandará a llamar a una función en particular cuando se clickee el elemento. <br>
            El botón de la derecha manda a llamar a la función 'increase()' y el de la derecha manda a llamar a la función 'decrease()'. <br>
            Luego discutiremos que hace cada una de estas funciones.
          </p>
          <h5>Inputs del usuario</h5>
           <p class="lead mb-4">
            La caja de input hace algo interesante, si se dan cuenta, el valor en los botones se actualiza el valor al momento en el que escriben un numero, sin necesidad de darle enter. <br>
            Esto se llama 'data-binding', que básicamente significa que cuando cambia nuestro input, automaticamente cambia nuestro componente. <br>
            Para vincular una variable con un input, escribimos 'v-model:"incDec"', y ahora la variable está vinculada con los cambios que sufra la caja de input,<br>
            y se verán reflejados de manera automatica.
          </p>
          <img src="../assets/img/ComponentTemplate.png" alt="Template">
          <h4>Script</h4>
           <p class="lead mb-4">El script es donde incorporamos la lógica de nuestro componente, aquí es donde damos el paso más allá de una página estatica.</p>
          <h5>Props</h5>
           <p class="lead mb-4">
            Las propiedades son como los "parametros" de nuestro componente. Cuando inserto el componente, puedo decir, por ejemplo ' title="Counter!" '. <br>
            Entonces cada vez que apareza la variable ' title ' aparecerá el string "Counter!". Esto es muy util si hay diferentes instacias del mismo componente. <br>
          </p>
          <h5>Data</h5>
           <p class="lead mb-4">
            Estas son las variables que manejaré dentro de mi componente: 'counter' y 'incDec'. <br>
            Aquí las declaro con un valor default, '10' (O el valor default de la propiedad 'start') para 'counter' y '1' para 'incDec'.
          </p>
          <h5>Methods</h5>
           <p class="lead mb-4">
            Estas son las funciones que usaré para modificar mis variables, aquí explicaré que hacen las funciones 'increase()' y 'decrease()' de las que hablé antes. <br>
            Básicamente sumo o resto el valor en la variable 'incDec' a la variable 'counter' e igualo el resultado a 'counter'. <br>
            El '!isNaN(this.incDec)' es solo para asegurarme que no trate de sumar un string, porque alteraría el funcionamiento de la página. 
          </p>
          <img src="../assets/img/ComponentScript.png" alt="Template">
          <h4>Style</h4>
           <p class="lead mb-4">
            No hay mucho que decir aquí, esto es para que el componente se vea lindo, aquí lo dejé simple, pero definitivamente se ve mejor que el html por defecto. <br>
            Estos estilos aplican a todos los subcomponentes del componente, si quieres se apliquen solo a este componente puedes poner la palabra reservada 'scoped' <br>
            dentro de la tag que abre los estilos: &lt;style scoped&gt; ... &lt;/style&gt;<br>
          </p>
          <img src="../assets/img/ComponentStyle.png" alt="Template">
           <p class="lead mb-4">Y eso es todo. Ahora puedes empezar a programar una aplicación sencilla con Vue.js</p> <br> <br>

           <p class="lead mb-4">Y aquí va una tabla con mis 5 numeros favoritos porque se me olvidó que la página tenía que llevar una tabla :p</p>

          <table style="m">
              <thead>
                  <tr>
                      <th>Posición</th>
                      <th>Numero</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1º</td>
                      <td>3</td>
                  </tr>
                  <tr>
                      <td>2º</td>
                      <td>π</td>
                  </tr>
                  <tr>
                      <td>3º</td>
                      <td>Raiz de 2</td>
                  </tr>
                  <tr>
                      <td>4º</td>
                      <td>0</td>
                  </tr>
                  <tr>
                      <td>5º</td>
                      <td>103</td>
                  </tr>
              </tbody>
          </table>
        </div>
      </div>

    </main>
    
    <div class="container">
      <footer class="py-1 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item"><a href="https://github.com/LuisAGuzmanI/Actividad1-HTML-A01741757" class="nav-link px-2 text-muted">Webpage GitHub Repository</a></li>
        </ul>
        <p class="text-center text-muted">&copy; 2022 Luis Ángel Guzmán Iribe - A01741757</p>
      </footer>
    </div>

  </div>
</template>

<script>
import Counter from "../components/Counter.vue";


export default {
  name: "Inicio",
  beforeCreate: function() {
        document.body.className = 'inicio';
  },
  components: {
    Counter,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      openBrackets: "{{",
      closeBrackets: "}}",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import '../assets/styles/app-styles.css';

h3 {
  margin: 40px 0 0;
}
ul {
  padding: 5px;
  margin: 0 10px;
}
ol {
  text-align: center;
  list-style-position: inside;
}
li {
  padding: 5px;
  margin: 0 10px;
}
section {
  background-color: rgb(221, 221, 221);
  padding: 1px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
}
table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  margin-left: auto;
  margin-right: auto;
}
</style>
