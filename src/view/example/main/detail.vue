<template>
  <div :style="widthSize" class="content-wrapper">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "content-wrapper",
  data() {
    return {
      version: import.meta.env.VITE_APP_VERSION
        ? import.meta.env.VITE_APP_VERSION
        : "1.2.1",
    };
  },
  computed: {
    widthSize() {
      if (this.mobile) {
        return "padding-left: 20px;";
      } else {
        return this.hamburger ? "padding-left: 270px;" : "";
      }
    },
  },
  props: ["hamburger", "mobile"],
};
</script>
<style lang="scss">
.example-templete {
  .content-wrapper {
    transition: padding 0.5s ease-in-out;
    padding: 20px;
    padding-left: 90px;
    flex: 1;
  }
}
</style>
