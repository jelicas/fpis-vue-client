<template>
  <div class="body-wrapper">
    <div class="backgr-img"></div>
    <div class="login-wrapper">
      <div class="login">

        <div class="login-form-wrapper">
          <div class="login-form">
            <h1
              style="margin-left: 150px"
              class="title is-1"
            > DOBRODOŠLI </h1>
            <h1
              style="margin-left: 150px"
              class="subtitle is-5"
            > Ulogujte se za nastavak </h1>
            <form @submit.prevent="submitForm">
              <div class="field">
                <label class="label">Korisničko ime</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input is-rounded"
                    type="text"
                    placeholder="Unesite svoje korisničko ime"
                    v-model="credentials.username"
                    required
                  >
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label">Lozinka</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input is-rounded"
                    type="password"
                    placeholder="Unesite svoju lozinku"
                    v-model="credentials.password"
                    required
                  >
                  <span class="icon is-small is-left">
                    <i class="fas fa-key"></i>
                  </span>
                </div>
              </div>

              <div class="text-center">
                <button
                  type="submit"
                  class="button is-primary is-rounded"
                >Prijavi se</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    submitForm() {
      console.log('LOGIN');
      this.$store.dispatch('signinUser', {
        username: this.credentials.username,
        password: this.credentials.password,
      });
    },
  },
};
</script>

<style scoped>
.body-wrapper {
  height: 100%;
  overflow: hidden;
  /* background-image: url('../assets/pharmacy4.png'); */
}

.backgr-img {
  background-image: url('../assets/pharmacy4.png');
  position: fixed;
  width: 100%;
  height: 100%;
}

.login-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  /* margin-top: 2%; */
  /* margin-bottom: 1%; */
  overflow: hidden;
  margin: auto;
}

.login {
  margin: auto;
  position: relative;
  width: 850px;
  height: 595px;
  background-image: url('../assets/cropedPharmacy.png');
  background-size: 851px 640px;
  /* background-size:cover; */
  overflow: hidden;
}

.login-form-wrapper {
  width: 1114px !important;
  height: 592px !important;
  position: absolute;
  margin-top: 5%;
  top: -50px;
  right: -595px;
  width: 500px;
  height: 300px;
}

.login-form {
  padding-top: 10%;
  width: 500px;
}

img {
  width: 95%;
  margin: 2rem;
}

form {
  padding-top: 2rem;
  padding-left: 9rem;
}

label {
  color: white;
}
</style>