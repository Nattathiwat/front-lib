<template>
  <div :style="widthSize" class="main-footer row">
    <div class="text col-sm">
      Terms of Service | Copyright © 2022 Example. All Rights Reserved
    </div>
    <div class="version col">Version {{ version }}</div>
  </div>
</template>
<script>
export default {
  name: "main-footer",
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
  .main-footer {
    min-height: 50px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px 10px 90px;
    box-shadow: 7.4px 9.5px 15px 15px rgb(137 148 169 / 14%);
    transition: padding 0.5s ease-in-out;
    color: #15466e;
    font-size: 14px;
    font-weight: 500;
    width: 100%;

    .text {
      min-width: 263px;
    }
    .version {
      white-space: nowrap;
      max-width: 100px;
    }
  }
}
</style>
