<template>
  <div class="m-3">
    <h1 class="text-center">
      <i class="fa-solid fa-headphones"></i> Agregar Nuevo Album
    </h1>
    <form class="m-5" >
        <div class="row">
            <div class="mb-3 col col-md-6">
        <label for="InputArtista" class="form-label">Artista</label>
        <!-- Se aplica v-model a los inputs para capturar el dato ingresado por el usuario y se guardan en data -->
        <input v-model="artista" type="text" class="form-control" id="InputArtista" />
      </div>
      <div class="mb-3 col col-md-6">
        <label for="InputAlbum" class="form-label">Album</label>
        <input v-model="album" type="text" class="form-control" id="InputAlbum" />
      </div>
        </div>
      <div class="row">
              <div class="mb-3 col col-md-6">
        <label for="InputImg" class="form-label">Imagen Portada</label>
        <input v-model="imagen" type="text" class="form-control" id="InputImg" />
      </div>
      <div class="mb-3 col col-md-6">
        <label for="InputGenero" class="form-label">Categoría</label>
        <select v-model="categoria" class="form-select" aria-label="Default select example">
          <option selected>Selecciona el género</option>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="rap">Rap</option>
        </select>
      </div>
      </div>
      <div class="text-center m-3">
        <!-- Se crea el evento click en el boton que ejecuta el método "agregarAlbum" -->
        <button @click="addAlbum" type="submit" class="btn btn-dark">Agregar Album</button>
        </div>
    </form>
  </div>
</template>

<script>
//Se importa mapActions para utilizar la acción
import {mapActions} from 'vuex'
export default {
  name: "name-component",
  // props: {},
  data: function () {
    return {
      //Se crean los datas en donde se guardarán los input ingresados por el usuario
      artista:'',
      categoria: '',
      album: '',
      imagen: '',
    };
  },
  // computed: {},
  methods: {
    //Se ejecuta la accion "agregarAlbum"
    ...mapActions(['agregarAlbum']),
    //Método que asigna a los states, los datas ingresados por el usuario
    addAlbum(){
      if (this.artista == '') {
        alert('Debe rellenar este campo')
        return
      }
      if (this.album == '') {
        alert('Debe rellenar este campo')
        return
      }
      if (this.imagen == '') {
        alert('Debe rellenar este campo')
        return
      }
            if (this.categoria == '') {
        alert('Debe seleccionar un género')
        return
      }
      let banda = {
        artist: this.artista,
        category: this.categoria,
        album: this.album,
        image: this.imagen
      }
      //Se ejecuta la action dentro del método y se le pasa la nueva banda agregada
      this.agregarAlbum(banda)
      //Luego que se agrega la nueva banda, se redirige a la vista del genero correspondiente
      //this.categoria lleva al value de las options del select
      this.$router.push('/'+this.categoria)
    }
  }
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>