<template>
  <div id="app">
    <navbar v-show="userSet"></navbar>
    <modal v-show="modalVisible" />
    <router-view />
  </div>
</template>

<script>
import navbar from '@/components/common/Navbar.vue';
import modal from '@/components/modals/Modal.vue';
import { mapState } from 'vuex';

export default {
  components: {
    navbar,
    modal,
  },
  computed: {
    ...mapState('modal', ['modalVisible']),
    userSet() {
      return this.$store.getters.getUser !== null;
    },
  },
};
</script>


<style lang="scss">
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css?family=Montserrat');
// @import url("./assets/css/animate.css");
@import url('https://use.fontawesome.com/releases/v5.6.1/css/all.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css');

:root {
  --color-yellow: #e9f0a6;
}
html,
body {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background-image: url("./assets/242.jpg");
  // background-repeat: repeat;
  height: 100%;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
