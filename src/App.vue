<template>
  <div v-show="showDisplay">
    <div v-if="$route.name == 'login' || $route.name == 'resetPassword'">
      <router-view></router-view>
    </div>
    <div v-else-if="checkExample">
      <cpnExample />
    </div>
    <div class="index-templete" v-else>
      <div class="slidebar-navigation">
        <div class="navbar">
          <div class="header">
            <img src="@/assets/icon/sidebar/s-logo.svg" alt="s-logo" class="image-text" >
          </div>
          <div class="navigation">
            <router-link class="navbar-item pointer none-a" :class="$route.name == 'home' ? 'active':''" to="/home">
              <img src="@/assets/icon/sidebar/home.svg" alt="home" class="image-navbar" v-if="false">
              <div class="image-navbar" v-else>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 17H16M11.0177 2.76403L4.23539 8.03916C3.78202 8.39178 3.55534 8.56809 3.39203 8.78889C3.24737 8.98447 3.1396 9.20481 3.07403 9.43908C3 9.70355 3 9.99073 3 10.5651V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V10.5651C21 9.99073 21 9.70355 20.926 9.43908C20.8604 9.20481 20.7526 8.98447 20.608 8.78889C20.4447 8.56809 20.218 8.39178 19.7646 8.03916L12.9823 2.76403C12.631 2.49078 12.4553 2.35415 12.2613 2.30163C12.0902 2.25529 11.9098 2.25529 11.7387 2.30163C11.5447 2.35415 11.369 2.49078 11.0177 2.76403Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </router-link>
            <router-link class="navbar-item pointer none-a" :class="$route.name == 'chart' ? 'active':''" to="/chart">
              <img src="@/assets/icon/sidebar/bar-chart.svg" alt="bar-chart" class="image-navbar" v-if="false">
              <div class="image-navbar" v-else>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 15V17M12 11V17M16 7V17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </router-link>
            <router-link class="navbar-item pointer none-a" :class="$route.name == 'permission' ? 'active':''" to="/permission">
              <img src="@/assets/icon/sidebar/check-done.svg" alt="check-done" class="image-navbar" v-if="false">
              <div class="image-navbar" v-else>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15L8 17L12.5 12.5M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </router-link>
            <router-link class="navbar-item pointer none-a" :class="$route.name == 'user' ? 'active':''" to="/user">
              <img src="@/assets/icon/sidebar/users.svg" alt="users" class="image-navbar" v-if="false">
              <div class="image-navbar" v-else>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </router-link>
            <router-link class="navbar-item pointer none-a" :class="$route.name == 'report' ? 'active':''" to="/report">
              <img src="@/assets/icon/sidebar/pie-chart.svg" alt="pie-chart" class="image-navbar" v-if="false">
              <div class="image-navbar" v-else>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.76121C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7363 6.95991 21.2388 8.17317C21.7413 9.38643 22 10.6868 22 12M12 2V12M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5229 22 12M12 2C17.5228 2 22 6.47716 22 12M22 12L12 12M22 12C22 13.5781 21.6265 15.1338 20.9101 16.5399C20.1936 17.946 19.1546 19.1626 17.8779 20.0902L12 12" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </router-link>
          </div>
        </div>
        <div class="footer">
          <div class="navigation">
            <router-link class="navbar-item pointer none-a" :class="$route.name == 'setting' ? 'active':''" to="/setting">
              <img src="@/assets/icon/sidebar/settings.svg" alt="settings" class="image-navbar" v-if="false">
              <div class="image-navbar" v-else>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18.7273 14.7273C18.6063 15.0015 18.5702 15.3056 18.6236 15.6005C18.6771 15.8954 18.8177 16.1676 19.0273 16.3818L19.0818 16.4364C19.2509 16.6052 19.385 16.8057 19.4765 17.0265C19.568 17.2472 19.6151 17.4838 19.6151 17.7227C19.6151 17.9617 19.568 18.1983 19.4765 18.419C19.385 18.6397 19.2509 18.8402 19.0818 19.0091C18.913 19.1781 18.7124 19.3122 18.4917 19.4037C18.271 19.4952 18.0344 19.5423 17.7955 19.5423C17.5565 19.5423 17.3199 19.4952 17.0992 19.4037C16.8785 19.3122 16.678 19.1781 16.5091 19.0091L16.4545 18.9545C16.2403 18.745 15.9682 18.6044 15.6733 18.5509C15.3784 18.4974 15.0742 18.5335 14.8 18.6545C14.5311 18.7698 14.3018 18.9611 14.1403 19.205C13.9788 19.4489 13.8921 19.7347 13.8909 20.0273V20.1818C13.8909 20.664 13.6994 21.1265 13.3584 21.4675C13.0174 21.8084 12.5549 22 12.0727 22C11.5905 22 11.1281 21.8084 10.7871 21.4675C10.4461 21.1265 10.2545 20.664 10.2545 20.1818V20.1C10.2475 19.7991 10.1501 19.5073 9.97501 19.2625C9.79991 19.0176 9.55521 18.8312 9.27273 18.7273C8.99853 18.6063 8.69437 18.5702 8.39947 18.6236C8.10456 18.6771 7.83244 18.8177 7.61818 19.0273L7.56364 19.0818C7.39478 19.2509 7.19425 19.385 6.97353 19.4765C6.7528 19.568 6.51621 19.6151 6.27727 19.6151C6.03834 19.6151 5.80174 19.568 5.58102 19.4765C5.36029 19.385 5.15977 19.2509 4.99091 19.0818C4.82186 18.913 4.68775 18.7124 4.59626 18.4917C4.50476 18.271 4.45766 18.0344 4.45766 17.7955C4.45766 17.5565 4.50476 17.3199 4.59626 17.0992C4.68775 16.8785 4.82186 16.678 4.99091 16.5091L5.04545 16.4545C5.25503 16.2403 5.39562 15.9682 5.4491 15.6733C5.50257 15.3784 5.46647 15.0742 5.34545 14.8C5.23022 14.5311 5.03887 14.3018 4.79497 14.1403C4.55107 13.9788 4.26526 13.8921 3.97273 13.8909H3.81818C3.33597 13.8909 2.87351 13.6994 2.53253 13.3584C2.19156 13.0174 2 12.5549 2 12.0727C2 11.5905 2.19156 11.1281 2.53253 10.7871C2.87351 10.4461 3.33597 10.2545 3.81818 10.2545H3.9C4.2009 10.2475 4.49273 10.1501 4.73754 9.97501C4.98236 9.79991 5.16883 9.55521 5.27273 9.27273C5.39374 8.99853 5.42984 8.69437 5.37637 8.39947C5.3229 8.10456 5.18231 7.83244 4.97273 7.61818L4.91818 7.56364C4.74913 7.39478 4.61503 7.19425 4.52353 6.97353C4.43203 6.7528 4.38493 6.51621 4.38493 6.27727C4.38493 6.03834 4.43203 5.80174 4.52353 5.58102C4.61503 5.36029 4.74913 5.15977 4.91818 4.99091C5.08704 4.82186 5.28757 4.68775 5.50829 4.59626C5.72901 4.50476 5.96561 4.45766 6.20455 4.45766C6.44348 4.45766 6.68008 4.50476 6.9008 4.59626C7.12152 4.68775 7.32205 4.82186 7.49091 4.99091L7.54545 5.04545C7.75971 5.25503 8.03183 5.39562 8.32674 5.4491C8.62164 5.50257 8.9258 5.46647 9.2 5.34545H9.27273C9.54161 5.23022 9.77093 5.03887 9.93245 4.79497C10.094 4.55107 10.1807 4.26526 10.1818 3.97273V3.81818C10.1818 3.33597 10.3734 2.87351 10.7144 2.53253C11.0553 2.19156 11.5178 2 12 2C12.4822 2 12.9447 2.19156 13.2856 2.53253C13.6266 2.87351 13.8182 3.33597 13.8182 3.81818V3.9C13.8193 4.19253 13.906 4.47834 14.0676 4.72224C14.2291 4.96614 14.4584 5.15749 14.7273 5.27273C15.0015 5.39374 15.3056 5.42984 15.6005 5.37637C15.8954 5.3229 16.1676 5.18231 16.3818 4.97273L16.4364 4.91818C16.6052 4.74913 16.8057 4.61503 17.0265 4.52353C17.2472 4.43203 17.4838 4.38493 17.7227 4.38493C17.9617 4.38493 18.1983 4.43203 18.419 4.52353C18.6397 4.61503 18.8402 4.74913 19.0091 4.91818C19.1781 5.08704 19.3122 5.28757 19.4037 5.50829C19.4952 5.72901 19.5423 5.96561 19.5423 6.20455C19.5423 6.44348 19.4952 6.68008 19.4037 6.9008C19.3122 7.12152 19.1781 7.32205 19.0091 7.49091L18.9545 7.54545C18.745 7.75971 18.6044 8.03183 18.5509 8.32674C18.4974 8.62164 18.5335 8.9258 18.6545 9.2V9.27273C18.7698 9.54161 18.9611 9.77093 19.205 9.93245C19.4489 10.094 19.7347 10.1807 20.0273 10.1818H20.1818C20.664 10.1818 21.1265 10.3734 21.4675 10.7144C21.8084 11.0553 22 11.5178 22 12C22 12.4822 21.8084 12.9447 21.4675 13.2856C21.1265 13.6266 20.664 13.8182 20.1818 13.8182H20.1C19.8075 13.8193 19.5217 13.906 19.2778 14.0676C19.0339 14.2291 18.8425 14.4584 18.7273 14.7273Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </router-link>
          </div>
          <div class="avatar">
            <img src="@/assets/icon/sidebar/Avatar.svg" alt="Avatar" class="avatar-img">
          </div>
        </div>
      </div>
      <div class="main-detail">
        <div class="breadcrumbs" v-show="false">
          <div v-for="(item, index) in breadcrumbs" :key="index">
            <span :class="[$route.name == item.path ? 'active' : '', item.path ? 'pointer' : 'none-pointer']" @click="$router.push({name: item.path, query: item.query})">{{item.name}}</span>
            <span v-show="breadcrumbs.length>0 && index!=(breadcrumbs.length-1)" class="none-pointer space">/</span>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import assetsUtils from '@/assets/assetsUtils.js'
export default {
  name: 'App',
  data() {
    return {
      version: import.meta.env.VITE_APP_VERSION,
      showDisplay: true
    }
  },
  computed: {
    checkExample() {
      if (this.$route.matched.length > 0) {
        return this.$route.matched[0].name == 'example'
      } else {
        return false
      }
    },
    breadcrumbs() {
      return assetsUtils.breadcrumbs(this.$route)
    },
  },
  methods: {
    checkDisplay() {
      this.showDisplay = true
    }
  },
  watch: {
    '$route'() {
      this.checkDisplay()
    }
  }
};
</script>

<style lang="scss">
.index-templete {
  height: 100vh;
  width: 100vw;
  align-items: center;
  display: flex;
  background-color: #FAFBFF;

  .slidebar-navigation {
    width: 82px;
    height: 100%;
    border-right: 1px solid #EAECF0;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;

    .navbar {
      display: flex;
      flex-direction: column;
      width: 81px;
      padding: 32px 0 0 0;

      .header {
        margin-bottom: 32px;
        height: 38px;
        display: flex;
        align-items: center;
        
        .image-text {
          width: 100%;
        }
      }
    }
    
    .footer {
      margin-top: auto;
      padding: 0 16px 24px 16px;

      .avatar {
        margin-top: 16px;

        .avatar-img {
          width: 48px;
          height: 48px;
        }
      }
    }

    .navigation {
      display: flex;
      flex-direction: column;

      .navbar-item {
        margin-bottom: 8px;
        width: 48px;
        height: 48px;
        border-radius: 6px;
        padding: 12px;

        .image-navbar {
          width: 24px;
          height: 24px;
        }

        &.active {
          width: 48px;
          height: 48px;
          padding: 12px;
          border-radius: 6px;
          background-color: rgba(0, 57, 181, 0.07);

          .image-navbar svg path {
            stroke: #344054;
          }
        }
      }
    }

  }

  .main-detail {
    width: 100%;
    height: 100%;
    background-color: #FAFBFF;
    // padding: 28px 32px 48px 32px;
    padding: 48px 32px 48px 32px;
    overflow: auto;

    .breadcrumbs {
      display: flex;
      margin-bottom: 20px;

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
}
</style>
