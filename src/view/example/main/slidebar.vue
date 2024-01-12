<template>
  <div
    class="main-slidebar"
    :style="
      mobile && hamburger
        ? 'background-color: rgba(0,0,0,.1); width: 100%;'
        : ''
    "
  >
    <div class="slidebar-navigation" :style="widthSize" ref="mainSlidebar">
      <div class="navbar">
        <div class="group-logo">
          <div class="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-hexagon-half"
              viewBox="0 0 16 16"
            >
              <path
                d="M14 4.577v6.846L8 15V1zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z"
              />
            </svg>
          </div>
          <div class="name">ระบบตัวอย่าง</div>
        </div>
        <div class="navigation" :style="hamburger ? 'width: 100%;' : ''">
          <div class="line"></div>
          <div
            v-for="(item, index) in requiresAuthTop"
            :key="index"
            class="group-navbar-item"
            v-show="!item.hide"
          >
            <router-link
              v-if="!item.sub"
              class="navbar-item pointer none-a"
              :class="{
                active: item.active.indexOf('/' + $route.name + '/') != -1,
              }"
              :to="item.to"
            >
              <div
                class="image-navbar"
                :class="{ 'image-navbar2': item.navbar2 }"
                v-html="item.svg"
              ></div>
              <div class="name">{{ item.name }}</div>
            </router-link>
            <div
              v-else
              class="navbar-item pointer none-a"
              :class="{ active: item.active.indexOf($route.name) != -1 }"
              @click="navigationOpen(item.navigation), $event.stopPropagation()"
            >
              <div
                class="image-navbar"
                :class="{ 'image-navbar2': item.navbar2 }"
                v-html="item.svg"
              ></div>
              <div class="name">
                {{ item.name }}
              </div>
              <div
                class="chevron-down"
                :style="
                  navigation[item.navigation]
                    ? 'transform: rotate(0deg);'
                    : 'transform: rotate(90deg);'
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="#344054"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </div>
            </div>
            <transition
              name="transition"
              @enter="assetsUtils.enter"
              @after-enter="assetsUtils.afterEnter"
              @leave="assetsUtils.leave"
            >
              <div v-show="navigation[item.navigation]">
                <div class="navbar-item-sub">
                  <template v-for="(item_sub, index_sub) in item.sub">
                    <router-link
                      v-if="item_sub"
                      :key="index_sub"
                      class="sub-item pointer none-a"
                      :class="{
                        active:
                          item_sub.active.indexOf('/' + $route.name + '/') !=
                          -1,
                      }"
                      :to="item_sub.to"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        class="bi bi-circle-fill"
                        viewBox="0 0 16 16"
                        fill="#667085"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      <div class="name">{{ item_sub.name }}</div>
                    </router-link>
                  </template>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="navigation">
          <div class="group-navbar-item">
            <div class="navbar-item pointer none-a" @click="logoutClick()">
              <div class="image-navbar">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#667085"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21 2C21.5128 2 21.9355 2.38604 21.9933 2.88338L22 3V21C22 21.5128 21.614 21.9355 21.1166 21.9933L21 22H15C14.4477 22 14 21.5523 14 21C14 20.4872 14.386 20.0645 14.8834 20.0067L15 20H20V4H15C14.4872 4 14.0645 3.61396 14.0067 3.11662L14 3C14 2.48716 14.386 2.06449 14.8834 2.00673L15 2H21ZM10.6129 6.2097L10.7071 6.29289L15.7071 11.2929C16.0676 11.6534 16.0953 12.2206 15.7903 12.6129L15.7071 12.7071L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071C8.93241 17.3466 8.90468 16.7794 9.2097 16.3871L9.29289 16.2929L12.585 13H3C2.44772 13 2 12.5523 2 12C2 11.4872 2.38604 11.0645 2.88338 11.0067L3 11H12.585L9.29289 7.70711C8.93241 7.34662 8.90468 6.77939 9.2097 6.3871L9.29289 6.29289C9.62334 5.96245 10.1275 5.91161 10.5114 6.14038L10.6129 6.2097Z"
                    stroke-width="0"
                  />
                </svg>
              </div>
              <div class="name">ออกจากระบบ</div>
            </div>
          </div>
        </div>
        <div class="avatar">
          <img
            src="@/assets/icon/sidebar/Avatar.svg"
            alt="Avatar"
            class="avatar-img"
          />
          <div class="name">ทดสอบ ทดสอบ</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "main-slidebar",
  data() {
    return {
      navigation: {
        example: false,
        example2: false,
      },
      navigationData: {
        top: [
          {
            active: "/exampleDashboard/",
            name: "Dashboard",
            svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 17H16M11.0177 2.76403L4.23539 8.03916C3.78202 8.39178 3.55534 8.56809 3.39203 8.78889C3.24737 8.98447 3.1396 9.20481 3.07403 9.43908C3 9.70355 3 9.99073 3 10.5651V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V10.5651C21 9.99073 21 9.70355 20.926 9.43908C20.8604 9.20481 20.7526 8.98447 20.608 8.78889C20.4447 8.56809 20.218 8.39178 19.7646 8.03916L12.9823 2.76403C12.631 2.49078 12.4553 2.35415 12.2613 2.30163C12.0902 2.25529 11.9098 2.25529 11.7387 2.30163C11.5447 2.35415 11.369 2.49078 11.0177 2.76403Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            to: "/example/dashboard",
          },
          {
            active: "/exampleForm/exampleValidate/",
            name: "ตัวอย่าง 1",
            navbar2: true,
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-receipt" viewBox="0 0 16 16"><path fill="#667085" stroke="#667085" stroke-width="0.1" d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27m.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0z"/><path fill="#667085" stroke="#667085" stroke-width="0.1" d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"/></svg>`,
            navigation: "example",
            sub: [
              {
                active: "/exampleForm/",
                to: "/example/form",
                name: "Form Controls",
              },
              {
                active: "/exampleValidate/",
                to: "/example/validate",
                name: "Validate",
              },
            ],
          },
          {
            active: "/exampleOther/exampleTable/",
            name: "ตัวอย่าง 2",
            navbar2: true,
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-receipt" viewBox="0 0 16 16"><path fill="#667085" stroke="#667085" stroke-width="0.1" d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27m.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0z"/><path fill="#667085" stroke="#667085" stroke-width="0.1" d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"/></svg>`,
            navigation: "example2",
            sub: [
              {
                active: "/exampleOther/",
                to: "/example/other",
                name: "Other",
              },
              {
                active: "/exampleTable/",
                to: "/example/table",
                name: "Table",
              },
            ],
          },
        ],
      },
    };
  },
  computed: {
    widthSize() {
      if (this.mobile && !this.hamburger) {
        return "width: 0px;";
      } else if (this.mobile && this.hamburger) {
        return "width: 250px;";
      } else if (!this.mobile) {
        return this.hamburger ? "width: 250px;" : "";
      }
    },
    requiresAuthTop() {
      return this.navigationData.top.filter((item) => {
        if (item.sub) {
          item.sub = item.sub.filter((item2) => {
            if (item2.requiresAuth) {
              return item2.requiresAuth.some((item3) => this.permission[item3]);
            } else {
              return item2;
            }
          });
          item.hide = !(item.sub.length > 0);
        } else {
          if (item.requiresAuth) {
            item.hide = !item.requiresAuth.some(
              (item2) => this.permission[item2]
            );
          } else {
            item.hide = false;
          }
        }
        return item;
      });
    },
    requiresAuthFooter() {
      return this.navigationData.footer.filter((item) => {
        if (item.sub) {
          item.sub = item.sub.filter((item2) => {
            if (item2.requiresAuth) {
              return item2.requiresAuth.some((item3) => this.permission[item3]);
            } else {
              return item2;
            }
          });
          item.hide = !(item.sub.length > 0);
        } else {
          if (item.requiresAuth) {
            item.hide = !item.requiresAuth.some(
              (item2) => this.permission[item2]
            );
          } else {
            item.hide = false;
          }
        }
        return item;
      });
    },
  },
  methods: {
    navigationOpen(data) {
      this.navigation[data] = !this.navigation[data];
      for (let item in this.navigation) {
        if (item != data) {
          this.navigation[item] = false;
        }
      }
    },
    logoutClick() {
      this.$router
        .push({
          name: "login",
        })
        .catch(() => {});
    },
    checkDisplay() {
      for (let item in this.navigation) {
        this.navigation[item] = false;
      }

      this.navigationData.top.filter((item) => {
        if (item.active.indexOf(this.$route.name) != -1) {
          this.navigation[item.navigation] = true;
        }
      });
    },
    focusoutBtn(e) {
      if (this.$refs.mainSlidebar) {
        let target = e.target;
        if (
          this.$refs.mainSlidebar !== target &&
          !this.$refs.mainSlidebar.contains(target)
        ) {
          if (this.mobile) {
            this.$emit("hamburger");
          }
        }
      }
    },
  },
  mounted() {
    this.checkDisplay();
    document.addEventListener("click", this.focusoutBtn);
  },
  watch: {
    $route() {
      this.checkDisplay();
    },
  },
  props: ["hamburger", "mobile"],
};
</script>

<style lang="scss">
.example-templete {
  .transition-enter-active,
  .transition-leave-active {
    transition: height 0.5s ease-in-out;
    overflow: hidden;
  }

  .transition-enter,
  .transition-leave-to {
    height: 0;
  }

  .main-slidebar {
    bottom: 0;
    float: none;
    left: 0;
    position: fixed;
    top: 0;
    z-index: 4;
    cursor: pointer;

    .slidebar-navigation {
      width: 70px;
      height: 100%;
      border: 1px solid #eaecf0;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      top: 0;
      left: 0;
      transition: width 0.5s ease-in-out;
      overflow-y: auto;
      overflow-x: hidden;
      cursor: default;

      &:hover {
        width: 250px;

        .navigation {
          width: 100%;
        }
      }

      .navbar {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0 10px;

        .group-logo {
          margin: 18px 0;
          height: 38px;
          display: flex;
          align-items: center;

          .logo {
            width: 48px;
            min-width: 48px;
            text-align: center;
          }

          .name {
            color: #101828;
            font-size: 22px;
            font-weight: 600;
            margin-left: 10px;
            min-width: 170px;
          }
        }

        .line {
          height: 2px;
          width: 100%;
          background: black;
          margin-bottom: 12px;
          border-radius: 2px;
        }
      }

      .footer {
        margin-top: auto;
        padding: 0 10px 24px;

        .avatar {
          margin-top: 16px;
          display: flex;
          align-items: center;

          .avatar-img {
            width: 48px;
            height: 48px;
          }

          .name {
            color: #101828;
            font-size: 18px;
            font-weight: 600;
            margin-left: 10px;
            min-width: 170px;
          }
        }
      }

      .navigation {
        display: flex;
        flex-direction: column;
        width: 48px;
        transition: width 0.5s ease-in-out;

        .navbar-item {
          margin-bottom: 5px;
          display: flex;
          align-items: center;

          .image-navbar {
            width: 48px;
            min-width: 48px;
            height: 48px;
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .name {
            color: #101828;
            font-size: 16px;
            font-weight: 400;
            margin-left: 10px;
            min-width: 140px;
          }

          .chevron-down {
            min-width: 30px;
            transition: transform 0.5s;
            text-align: center;
          }

          &.active,
          &:hover {
            border-radius: 8px;
            background-color: rgba(0, 57, 181, 0.07);

            .image-navbar svg path {
              stroke: #344054;
            }

            .image-navbar2 svg path {
              fill: #344054;
            }
          }
        }

        .group-navbar-item {
          position: relative;

          .navbar-item-sub {
            display: flex;
            flex-direction: column;
            transition: height 0.5s ease-in-out;
            overflow: hidden;

            .sub-item {
              padding: 8px 0;
              margin-bottom: 5px;
              cursor: pointer;
              color: #101828;
              display: flex;
              align-items: center;

              svg {
                min-width: 48px;
              }

              .name {
                font-size: 16px;
                font-weight: 400;
                margin-left: 10px;
                min-width: 170px;
              }

              &.active {
                border-radius: 6px;
                background-color: rgba(0, 57, 181, 0.07);

                .image-navbar svg path {
                  stroke: #344054;
                }

                .image-navbar2 svg path {
                  fill: #344054;
                }
              }

              &:hover {
                border-radius: 6px;
                background-color: rgba(0, 57, 181, 0.07);

                .image-navbar svg path {
                  stroke: #344054;
                }

                .image-navbar2 svg path {
                  fill: #344054;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
