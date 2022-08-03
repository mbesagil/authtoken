<template>
  <div>
    <h1 class="text-center">Home Page</h1>
    <h1 class="text-center">
      merhaba lütfen bilgilerinizi görmek için giriş yapın
    </h1>
    <div class="d-flex justify-content-center">
      <router-link
        class="btn btn-sm btn-secondary me-2 items-center"
        :to="{ name: 'LoginPage' }"
      >
        Giriş Yap
      </router-link>
      <button class="btn btn-danger" @click="onLogout">Çıkış yap</button>
    </div>

    <div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
        doloremque laborum distinctio earum fugit necessitatibus non beatae
        error doloribus ratione voluptas, nam debitis maiores! Similique
        cupiditate totam libero cumque est.
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    onLogout() {
      this.$store.commit("clearToken");
      this.$router.push({ name: "LoginPage" });
    },
  },
  computed: {
    ...mapGetters(["_isAuthenticated"]),
  },
};
</script>

<style></style>
