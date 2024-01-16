<template>
  <footer :style="widthSize" class="main-footer">
    <div class="text">
      Terms of Service | Copyright © 2022 Example. All Rights Reserved
    </div>
    <div class="version">Version {{ version }}</div>
  </footer>
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 20px 14px 90px;
    box-shadow: 7.4px 9.5px 15px 15px rgb(137 148 169 / 14%);
    transition: padding 0.5s ease-in-out;
    color: #15466e;
    font-size: 14px;
    font-weight: 500;
    flex-direction: row;
    flex-wrap: wrap;

    .text {
      min-width: 263px;
      width: 70%;
    }
    .version {
      white-space: nowrap;
    }
  }
}
</style>
