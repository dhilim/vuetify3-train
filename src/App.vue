<template>
  <v-app>
    <v-main>
      <div @click="gotoHome">ke home</div>
      <div @click="gotoAbout">ke about</div>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",

  components: {
    HelloWorld,
  },

  data() {
    return {
      //
    };
  },

  methods: {
    gotoHome() {
      this.$router.push("/");
    },
    gotoAbout() {
      this.$router.push("/about");
    },
  },
});
</script>
