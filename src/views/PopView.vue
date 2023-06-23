<template>
  <div class="container m-3">
    <div class="row">
      <h1 class="text-center"><i class="fa-solid fa-headphones"></i> Pop</h1>
      <!-- Se utiliza el componente "card" se le aplica un v-for para que muestre todos los albums ingresados -->
      <!-- :banda="album" > prop banda se iguala al album definido en v-for -->
      <Card v-for="album in pop" :key="album.id" :banda="album" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapState } from "vuex";
export default {
  name: "pop-view",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapState(["pop"]),
  },
  //methods: {}
  // watch: {},
  components: {
    Card,
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>