<template>

  <div class="index-templete">
    <div class="detail-index-page">
      <transition name="navigation-ham" @enter="enter" @after-enter="afterEnter" @leave="leave">
        <div v-if="!hamburger" class="navigation">
          <div class="group-image-logo">
            <i class="bi bi-brightness-alt-high"></i>
          </div>
          <div class="group-list-head">
            <div class="list-navbar-group">
              <router-link class="list-navbar pointer none-a" :class="breadcrumbs == 'Form Controls' ? 'active':''" to="/component">
                <div class="group-image">
                  <i class="bi bi-1-circle"></i>
                </div>
                Form Controls
              </router-link>
            </div>
            <div class="list-navbar-group">
              <router-link class="list-navbar pointer none-a" :class="breadcrumbs == 'Validate' ? 'active':''" to="/component/validate">
                <div class="group-image">
                  <i class="bi bi-2-circle"></i>
                </div>
                Validate
              </router-link>
            </div>
            <div class="list-navbar-group">
              <router-link class="list-navbar pointer none-a" :class="breadcrumbs == 'Other' ? 'active':''" to="/component/other">
                <div class="group-image">
                  <i class="bi bi-3-circle"></i>
                </div>
                Other
              </router-link>
            </div>
            <div class="list-navbar-group">
              <router-link class="list-navbar pointer none-a" :class="breadcrumbs == 'Table' ? 'active':''" to="/component/table">
                <div class="group-image">
                  <i class="bi bi-4-circle"></i>
                </div>
                Table
              </router-link>
            </div>
          </div>
          <div class="version">
            Version {{version}}
          </div>
        </div>
      </transition>
      <div :style="hamburger ?'padding-left: 0px;':''" class="header-index">
        <div class="header-index-left">
          <i class="bi bi-list icon-hamburger pointer"  @click="hamburger = !hamburger"></i>
          <div class="breadcrumbs">
            <div class='active'>
              {{ breadcrumbs }}
            </div>
          </div>
        </div>
        <div class="header-index-right">
          <div class="group-user">
            <div class="group-name">
              <div class="name">
                {{ nameLogin }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :style="hamburger ?'padding-left: 30px;':''" class="detail-index">
        <router-view></router-view>
      </div>
    </div>
    <div :style="hamburger ?'padding-left: 0px;':''" class="foot-index">
      Terms of Service | Copyright © 2022 Smartsure. All Rights Reserved
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      version: '1.0.0',
      hamburger: false,
      nameLogin: '',
      showLoading: false,
      data:{
        logoImage: ''
      }
      
    }
  },
  computed: {
    breadcrumbs() {
      return this.$route.name
    },
  },
  methods: {
      enter(element) {
        element.style.position = 'absolute';
        element.style.visibility = 'hidden';
        element.style.width = 'auto';

        const width = getComputedStyle(element).width;

        element.style.width = null;
        element.style.position = null;
        element.style.visibility = null;
        element.style.width = 0;

        getComputedStyle(element).width;

        requestAnimationFrame(() => {
          element.style.width = width;
        });
      },
      afterEnter(element) {
        element.style.width = 'auto';
      },
      leave(element) {
        const width = getComputedStyle(element).width;
        
        element.style.width = width;

        getComputedStyle(element).width;

        requestAnimationFrame(() => {
          element.style.width = 0;
        });
      },
  },
};
</script>

<style lang="scss">
.index-templete {
  .detail-index-page {
    min-height: 100vh;
    min-width: 900px;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    overflow: auto;
    margin-bottom: -80px;
    padding-bottom: 80px;
    
    .header-index {
      transition: padding 1s ease-in-out;
      height: 75px;
      background-color: #f5f5f5;
      position: fixed;
      width: 100%;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 310px;
      min-width: 600px;
      box-shadow: 7.4px 9.5px 13px 0 rgb(137 148 169 / 14%);

      .header-index-left {
        font-size: 18px;
        color: #0f3a64;
        margin-left: 25px;
        display: flex;
        align-items: center;

        .icon-hamburger {
          width: 29px;
          height: 24px;
          margin-right: 25px;
        }

        .breadcrumbs {
          display: flex;

          .breadcrumb-cut {
            margin: 0 26px;
          }

          .active {
            font-size: 18px;
            font-weight: bold;
            color: #0f3a64;
          }
        }
      }

      .header-index-right {
        display: flex;
        align-items: center;
        margin-right: 10px;

        .nav-lang{
          margin-right: 50px;
        }

        .group-user {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          text-align: center;
          
          .image-user {
            width: 56px;
            border-radius: 50%;
          }
          
          .group-name {
            margin-right: 10px;
            margin-top: 5px;
            color: #1a456b;

            .name {
              font-size: 19px;
              line-height: 25px;
              font-weight: 600;
            }

            .sub-name {
              font-size: 14px;
            }
          }
        }

        .group-bell {
          position: relative;

          .icon-bell {
            margin-right: 35px;
          }

          .noti-bell {
            position: absolute;
            top: -5px;
            right: 28px;
            font-size: 10px;
            border: 3px solid #d9919f;
            border-radius: 50%;
            min-width: 18px;
            height: 18px;
            text-align: center;
            line-height: 12px;
            color: #ffffff;
            background-color: #e15767;
          }
        }

        .icon-search {
          margin-right: 30px;
        }

        .icon-exit {
          margin-right: 10px;
          width: 22px;
        }
      }
    }

    .navigation {
      position: fixed;
      height: 100vh;
      width: 310px;
      background-color: white;
      z-index: 99;

      .icon-triangle {
        width: 150px;
        position: absolute;
        left: -15px;
        top: -15px;
        z-index: 1;
      }

      .icon-logo2 {
        width: 45px;
        position: absolute;
        left: 11px;
        top: 8px;
        z-index: 2;
      }

      .group-image-logo {
        text-align: center;
        background-color: white;
        margin: auto;
        margin-top: 41px;
        // padding-bottom: 35px;
        width: 310px;
        font-size: 75px;

        .title {
          font-size: 18px;
          font-weight: bold;
          margin-top: 2px;
        }

        .sub-title {
          font-size: 16px;
          font-weight: normal;
          margin-top: 5px;
        }
      }

      .group-list-head::-webkit-scrollbar {
          display: none;
      }

      .group-list-head {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
      
      .group-list-head {
        overflow: auto;
        height: 100vh;
        padding-bottom: 265px;
        width: 310px;
        position: relative;

        .list-navbar-group {
          color: #ffffff;
          font-size: 14px;
          
          .list-navbar {
            padding-left: 25px;
            padding-right: 22px;
            height: 64px;
            display: flex;
            align-items: center;
            font-size: 16px;
            font-weight: normal;
            color: #333333;
            border-radius: 20px;
            width: 90%;
            margin-left: 22px;
            margin-bottom: 5px;

            .group-image {
              position: relative;
              margin-right: 15px;

            }
          }
        }
        
        .active {
          background-color: #2d1967;
          color: white !important;
        }
      }

      .version {
        position: absolute;
        bottom: 0px;
        width: 310px;
        color: #2e4765;
        font-size: 16px;
        font-weight: normal;
        background-color: white;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .detail-index {
      transition: padding 1s ease-in-out;
      width: 100%;
      position: relative;
      min-height: 100%;
      padding-top: 104px;
      padding-left: 340px;
      padding-right: 30px;
      padding-bottom: 100px;
    }
  }
  .foot-index {
    transition: padding 1s ease-in-out;
    width: 100%;
    height: 80px;
    background-color: #f5f5f5;
    color: #15466e;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 310px;
    box-shadow: 7.4px 9.5px 15px 15px rgb(137 148 169 / 14%)
  }
}
</style>
