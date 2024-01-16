<template>
  <nav :style="widthSize" class="main-header">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link pointer">
          <i
            class="bi bi-list icon-hamburger"
            @click="hamburgerClick(), $event.stopPropagation()"
          ></i>
        </a>
      </li>
      <li class="nav-item">
        <ol class="breadcrumbs">
          <li v-for="(item, index) in breadcrumbs" :key="index" class="group-text">
            <img
              src="@/assets/icon/breadcrumb/chevron.svg"
              alt="chevron"
              class="chevron"
              v-show="item.label && index != 0"
            />
            <a
              class="text"
              :class="index == breadcrumbs.length - 1 ? 'active' : ''"
              @click="$router.push({ ...item })"
            >
              {{ item.label }}
          </a>
          </li>
        </ol>
      </li>
    </ul>
  </nav>
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
        return "padding-left: 0px;";
      } else {
        return this.hamburger ? "padding-left: 250px;" : "";
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
    display: flex;
    align-items: center;
    padding-left: 70px;
    box-shadow: 7.4px 9.5px 13px 0 rgb(137 148 169 / 14%);
    font-size: 18px;
    color: #0f3a64;
    transition: padding 0.5s ease-in-out;

    .navbar-nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;

      .nav-item {
        margin: 0;

        .nav-link {
          padding: 12px 20px;

          .icon-hamburger {
            display: flex;
            align-items: center;
            color: rgba(0,0,0,.5);
            font-size: 24px;
          }

          &:hover {
            .icon-hamburger {
              color: black;
            }
          }
        }

        .breadcrumbs {
          display: flex;
          padding: 0;

          .group-text {
            display: flex;
            align-items: center;

            .chevron {
              width: 24px;
              height: 24px;
              margin: -1px 4px 0px;
            }

            .text {
              text-decoration: none;
              font-size: 16px;
              font-weight: 400;
              line-height: 35px;
              text-align: left;
              color: #101828;
              cursor: pointer;
              opacity: 0.7;


              &.active {
                font-weight: 600;
                color: #0039b5;
              }
            }

            &:hover {
              .text {
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
}
</style>
