<template>
  <div class="container m-3">
    <div class="row">
      <h1 class="text-center"><i class="fa-solid fa-headphones"></i> Rock</h1>
      <Card v-for="album in rap" :key="album.id" :banda="album" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapState } from "vuex";
export default {
  name: "rap-view",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapState(["rap"]),
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