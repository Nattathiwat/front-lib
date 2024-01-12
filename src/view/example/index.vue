<template>
  <div class="example-templete">
    <mainHeader
      :hamburger="hamburger"
      @hamburger="hamburger = !hamburger"
      :mobile="mobile"
    />
    <mainSlidebar
      :hamburger="hamburger"
      @hamburger="hamburger = !hamburger"
      :mobile="mobile"
    />
    <mainDetail :hamburger="hamburger" :mobile="mobile" />

    <mainFooter :hamburger="hamburger" :mobile="mobile" />
  </div>
</template>
<script>
import mainHeader from "@/view/example/main/header.vue";
import mainSlidebar from "@/view/example/main/slidebar.vue";
import mainDetail from "@/view/example/main/detail.vue";
import mainFooter from "@/view/example/main/footer.vue";
export default {
  name: "example-templete",
  data() {
    return {
      hamburger: true,
      mobile: false,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };
  },
  components: {
    mainHeader,
    mainSlidebar,
    mainDetail,
    mainFooter,
  },
  methods: {
    handleResize() {
      if (window.innerWidth < 992) {
        this.mobile = true;
        this.hamburger = false;
      } else {
        this.mobile = false;
        this.hamburger = true;
      }
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    },
  },
  mounted() {
    this.handleResize();
    this.$nextTick(() => {
      window.addEventListener("resize", this.handleResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="scss">
.example-templete {
  background-color: #fafbff;
  position: relative;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
</style>
