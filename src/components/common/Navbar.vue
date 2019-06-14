<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand is-large">
        <a
          class="navbar-item"
          href="#"
          @click="handleUseCaseClick('Home')"
        >
          <img
            src="../../assets/logo.png"
            alt="Viva"
          >
        </a>
        <button
          @click="showNav = !showNav"
          class="button navbar-burger"
          data-target="navMenu"
          :class="{ 'is-active': showNav }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div
        class="navbar-menu"
        id="navMenu"
        :class="{ 'is-active': showNav }"
      >
        <div class="navbar-end">
          <div class="navbar-item">
            <a
              class="button"
              @click="handleUseCaseClick('Suppliers')"
            > UseCase1 </a>
          </div>
          <div class="navbar-item">
            <a
              class="button"
              @click="handleUseCaseClick('Orders')"
            > UseCase2 </a>
          </div>
          <div class="navbar-item">
            <a class="button">More</a>
          </div>
          <div class="navbar-item">
            <a
              class="button is-light"
              @click="logout"
            >Logout</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    logout() {
      this.$store.commit('setUser', null);
      this.$router.push('/login');
    },
    handleUseCaseClick(usecase) {
      switch (usecase) {
        case 'Suppliers':
          this.$router.push('/suppliers');
          break;
        case 'Orders':
          this.$router.push('/orders');
          break;
        case 'Home':
          this.$router.push('/');
          break;
      }
    },
  },
};
</script>

<style >
.navbar {
  padding: 0px !important;
  background-color: #e9f0a6 !important;
  flex-wrap: wrap;
}

.container {
  padding: 0px !important;
  margin: 0px !important;
  min-width: 100%;
  flex-basis: 100%;
  padding-right: 1rem !important;
}

.navbar-item img {
  max-height: 3.5rem !important;
}
/*
.navbar-brand {
  padding-top: 0rem;
  padding-bottom: 0rem;
  margin-right: 0rem;
  margin-left: -0.25rem !important;
} */

/* @media screen and (min-width: 1088px) { */
/* .container > .navbar .navbar-menu,
.navbar > .container .navbar-menu {
  margin-right: -10.75rem !important;
} */
</style>