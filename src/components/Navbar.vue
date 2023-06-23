<template>
  <div>
    <nav
      class="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark"
      data-bs-theme="dark"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">OpenMusic</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style="--bs-scroll-height: 100px"
          >
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                ><router-link class="text-decoration-none text-light" to="/"
                  >Inicio</router-link
                ></a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </a>
              <ul class="dropdown-menu text-center">
                <li>
                  <a class="dropdown-item" href="#"
                    ><router-link
                      class="text-decoration-none text-light"
                      to="/pop"
                      >Pop ({{totalAlbumsPop}})</router-link
                    ></a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><router-link
                      class="text-decoration-none text-light"
                      to="/rock"
                      >Rock ({{totalAlbumsRock}})</router-link
                    ></a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><router-link
                      class="text-decoration-none text-light"
                      to="/rap"
                      >Rap ({{totalAlbumsRap}})</router-link
                    ></a
                  >
                </li>
              </ul>
            </li>
             <li class="nav-item">
          <a class="nav-link disabled">N° de Albums: {{totalAlbums}}</a>
        </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#"
                ><router-link class="text-decoration-none text-light" to="/agregar"
                  >Agregar Album</router-link
                ></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "navbar-component",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapGetters(['totalAlbums', 'totalAlbumsPop', 'totalAlbumsRock', 'totalAlbumsRap'])
  },
  //methods: {}
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