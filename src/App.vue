<template>
  <div v-show="showDisplay">
    <div v-if="$route.name == 'login' || $route.name == 'reset-password'">
      <router-view></router-view>
    </div>
    <div v-else-if="checkExample">
      <cpnExample />
    </div>
    <cpn-loading />
  </div>
</template>
<script>
export default {
  name: "index-templete",
  data() {
    return {
      showDisplay: false,
    };
  },
  computed: {
    checkExample() {
      if (this.$route.matched.length > 0) {
        return this.$route.matched[0].name == "example";
      } else {
        return false;
      }
    },
  },
  methods: {
    checkDisplay() {
      // this.showLoading(true);
      this.showDisplay = true;
      for (let item in this.navigation) {
        this.navigation[item] = false;
      }
    },
  },
  watch: {
    $route() {
      this.checkDisplay();
    },
  },
  created() {
    this.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("Authorization")}`;
  },
};
</script>
