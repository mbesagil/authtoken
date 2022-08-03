<template>
  <div class="body">
    <form class="row g-3  m-0">
      <div class="col-md-4 offset-md-4 card border mt-5">
        <div class="singin_page p-3">
          <div class="col-md-12">
            <label for="inputNameSingin" class="form-label">Adı</label>
            <input
              type="text"
              v-model="userData.name"
              class="form-control"
              id="inputNameSingin"
            />
          </div>
          <div class="col-md-12">
            <label for="inputlastnameSingin" class="form-label">Soyadı</label>
            <input
              type="text"
              v-model="userData.surname"
              class="form-control"
              id="inputlastnameSingin"
            />
          </div>
          <div class="col-md-12">
            <label for="inputEmailSingin" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              v-model="userData.email"
              id="inputEmailSingin"
            />
          </div>
          <!-- <div class="col-md-12">
            <label for="inputTelephoneSingin" class="form-label"
              >Telephone</label
            >
            <input
              type="text"
              class="form-control"
              v-model="userData.telephone"
              id="inputTelephoneSingin"
            />
          </div> -->
          <div class="password_group">
            <div class="col-md-12">
              <label for="inputPasswordSingin1" class="form-label">Şifre</label>
              <input
                type="password"
                class="form-control"
                v-model="userData.password"
                id="inputPasswordSingin1"
              />
            </div>
            <div class="col-md-12">
              <label for="inputPasswordSingin2" class="form-label"
                >Şifre Onayı</label
              >
              <input
                type="password"
                class="form-control"
                v-model="passwordVerify"
                id="inputPasswordSingin2"
              />
            </div>
          </div>
          <div class="col-md-12 mt-3">
            <button
              type="submit"
              class="btn btn-primary"
              @click="registerSaveData"
            >
              Kayıt ol
            </button>
          </div>
          <div class="col-md-12 mt-3 d-flex justify-content-end">
            <p>
              zaten bi hesabım var
              <router-link
                class="btn btn-sm btn-secondary me-2"
                :to="{ name: 'LoginPage' }"
              >
                Giriş Yap</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      passwordVerify: null,
      userData: {
        name: null,
        surname: null,
        email: null,
        // telephone: null,
        password: null,
      },
    };
  },
  methods: {
    registerSaveData() {
      if (this.userData.password === this.passwordVerify) {
        // console.log(this.userData );
        this.$appAxios
          .post("/user", { ...this.userData })
          .then((used_response) => {
            console.log(used_response);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("şifreler uyuşmuyor");
        alert("lütfen aynı şifreyi giriniz");
      }
    },
  },
};
</script>

<style>

.body{
  background-color: rgb(241, 240, 240);
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
</style>
