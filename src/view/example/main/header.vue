<template>
  <div :style="widthSize" class="main-header">
    <i
      class="bi bi-list icon-hamburger pointer"
      @click="hamburgerClick(), $event.stopPropagation()"
    ></i>
    <div class="breadcrumbs">
      <div v-for="(item, index) in breadcrumbs" :key="index" class="group-text">
        <img
          src="@/assets/icon/breadcrumb/chevron.svg"
          alt="chevron"
          class="chevron"
          v-show="item.label && index != 0"
        />
        <div
          class="text"
          :class="index == breadcrumbs.length - 1 ? 'active' : ''"
          @click="$router.push({ ...item })"
        >
          {{ item.label }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "main-header",
  data() {
    return {
      labels: {
        exampleDashboard: "dashboard",
        example: "ตัวอย่าง",
        exampleForm: "Form Controls",
        exampleValidate: "Validate",
        exampleOther: "Other",
        exampleTable: "Table",
      },
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
    breadcrumbs() {
      let data = [];
      const result = this.$route.matched.reduce((allItem, item) => {
        const dup = allItem.find((item2) => item2.path === item.path);
        if (dup) {
          return allItem;
        }
        return allItem.concat(item);
      }, []);
      result.filter((item) => {
        if (item.name != "master-data" && item.name != "report") {
          data.push({
            label: this.labels[item.name],
            ...item,
          });
        }
      });
      return data;
    },
  },
  methods: {
    hamburgerClick() {
      this.$emit("hamburger");
    },
  },
  props: ["hamburger", "mobile"],
};
</script>
<style lang="scss">
.example-templete {
  .main-header {
    height: 55px;
    display: flex;
    align-items: center;
    padding-left: 90px;
    box-shadow: 7.4px 9.5px 13px 0 rgb(137 148 169 / 14%);
    font-size: 18px;
    color: #0f3a64;
    transition: padding 0.5s ease-in-out;

    .icon-hamburger {
      font-size: 24px;
      margin-right: 25px;
      margin-top: 6px;
    }

    .breadcrumbs {
      display: flex;
      margin-top: 4px;

      .group-text {
        display: flex;

        .chevron {
          width: 24px;
          height: 24px;
          margin: -1px 4px 0px;
        }

        .text {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          text-align: left;
          color: #101828;
          cursor: pointer;

          &.active {
            font-weight: 600;
            color: #0039b5;
          }
        }
      }
    }
  }
}
</style>
