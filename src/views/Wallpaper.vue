<template>
  <div>
      <h1>El Wallpaper de mi laptop, ¿Apoco no está padre?</h1>
  </div>
</template>

<script>
export default {
    name: 'Wallpaper',
    beforeCreate: function() {
        document.body.className = 'wallpaper';
    }
}
</script>

<style scoped>
h1 {
  color: white;
}
</style>