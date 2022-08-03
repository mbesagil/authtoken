<template>
  <div class="body">
    <form class="row g-3 m-0">
      <div class="col-md-4 offset-md-4 card border mt-5">
        <div class="login_page p-3">
          <div class="col-md-12">
            <label for="inputEmailLogin" class="form-label">Emaili</label>
            <input
              type="email"
              class="form-control"
              id="inputEmailLogin"
              v-model="userData.email"
            />
          </div>
          <div class="col-md-12">
            <label for="inputPasswordLogin" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="inputPasswordLogin"
              v-model="userData.password"
            />
          </div>
          <div class="col-md-12 mt-3">
            <button type="submit" class="btn btn-primary" @click="doLogin">
              Giriş yap
            </button>
          </div>
          <div class="col-md-12 mt-3 d-flex justify-content-end">
            <p>
              hesabınız yok mu!
              <router-link
                class="btn btn-sm btn-secondary me-2"
                :to="{ name: 'RegisterPage' }"
              >
                Kayıtol</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    doLogin() {
      // console.log(this.userData);
      this.$appAxios
        .post(
          "user/login",{
            ...this.userData
          }
        )
        .then((login_response) => {
          // console.log(login_response);
          if (login_response?.data?.length > 0) {
            this.$store.commit("setToken" , login_response?.data.token);
            this.$router.push({ name: "HomePage" });
          } else {
            alert("kullanıcı bulunamadı");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
/* /////////giris ekranı//////// */
.body{
  background-color: rgb(224, 218, 218);
  width: 100%;
  height: 100vh;
}
.login_form {
  background-color: #fff;
  border: 2px solid rgb(126, 121, 121);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  height: auto;
  width: 300px;
  position: absolute;
  top: 52px;
  right: 20px;
}

/* /////////footer///////// */
</style>
