<template>
  <div class="body-wrapper">
    <div class="login-wrapper">
      <div class="login">

        <div class="login-form-wrapper">
          <div class="login-form">
            <h1 style="margin-left: 150px"> Apoteka Viva </h1>
            <form @submit.prevent="submitForm">
              <div class="form-group row">
                <div class="col-sm-12">
                  <label class="col-form-label col-form-label-lg">Korisničko ime</label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Unesite svoje korisničko ime"
                    v-model="credentials.username"
                    required
                  />
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-12">
                  <label class="col-form-label col-form-label-lg">Lozinka</label>
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    placeholder="Unesite svoju lozinku"
                    v-model="credentials.password"
                    required
                  />
                </div>
              </div>
              <div class="text-center">
                <button
                  type="submit"
                  class="btn btn-primary"
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
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submitForm() {
      console.log("LOGIN");
      this.$store.dispatch("signinUser", {
        username: this.credentials.username,
        password: this.credentials.password
      });
      // this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.body-wrapper {
  height: 100%;
  overflow: hidden;
  background-image: linear-gradient(
    to bottom,
    #3c5373,
    #355e79,
    #33687b,
    #39727b,
    #467b7a,
    #4d837b,
    #568a7b,
    #61917b,
    #65997c,
    #6ba27d,
    #73aa7c,
    #7cb27b
  );
}
.login-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2%;
  margin-bottom: 1%;
  overflow: hidden;
}

.login {
  position: relative;
  width: 850px;
  height: 580px;
  /* -webkit-box-shadow: 7px 11px 48px 10px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: 7px 11px 48px 10px rgba(0, 0, 0, 0.37);
  box-shadow: 7px 11px 48px 10px rgba(0, 0, 0, 0.37); */
  background-image: url("../assets/pharmacy4.png");
  background-size: 477px 441px;
  overflow: hidden;
}

.login-form-wrapper {
  width: 1114px !important;
  height: 592px !important;
  position: absolute;
  margin-top: 15%;
  background: #fff;
  top: 50px;
  left: -100px;
  width: 500px;
  height: 300px;
  transform-origin: center top;
  transform: rotate(35deg);
  background-image: linear-gradient(
    to right bottom,
    #7094a2,
    #5a8398,
    #46728d,
    #346183,
    #245078
  );
}

.login-form {
  padding-top: 10%;
  width: 500px;
  transform-origin: center top;
  transform: rotate(-35deg);
}

img {
  width: 95%;
  margin: 2rem;
}

form {
  padding-top: 2rem;
  padding-left: 9rem;
}

input.form-control.form-control-lg:focus,
input.form-control.form-control-lg:active,
input.form-control.form-control-lg:visited,
input.form-control.form-control-lg:focus-within {
  box-shadow: none;
  background-color: transparent !important;
  border-bottom: 1px solid white;
  border-top: none;
  border-left: none;
  border-right: none;
}

input.form-control.form-control-lg {
  background-color: transparent !important;
  border-bottom: 1px solid white;
  border-top: none;
  border-left: none;
  border-right: none;
}

.form-group.row {
  width: 100%;
}

::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #fff;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #fff;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #fff;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #fff;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #fff;
}
input:-moz-placeholder,
textarea:-moz-placeholder {
  color: #fff;
}

label {
  color: white;
}

h1 {
  color: white;
}

.btn.btn-primary {
  width: 91%;
  height: 43px;
}
</style>