<template>
  <div class="login-repass-word">
    <div class="card-center">
      <div class="repass-title">
        <div class="title-size">เปลี่ยนรหัสผ่าน</div>
      </div>
      <Form @submit="onSubmitRepass()" @invalid-submit="onInvalidSubmit">
        <div class="repass-detail">
          <div class="group-input">
            <div class="name">รหัสผ่านใหม่ <span class="required">*</span></div>
            <cpn-input
              v-model="data.new_password"
              name="new_password"
              rules="required"
              type="password"
              icon="eye"
              class="input-login"
              placeholder="กรุณาระบุ"
            />
          </div>
          <div class="group-input">
            <div class="name">
              ยืนยันรหัสผ่านใหม่ <span class="required">*</span>
            </div>
            <cpn-input
              v-model="data.confirm_password"
              name="confirm_password"
              :rules="`required|confirmed:${data.new_password}`"
              type="password"
              icon="eye"
              class="input-login"
              placeholder="กรุณาระบุ"
            />
          </div>
        </div>
        <div class="group-footer center">
          <button type="submit" class="button-confirm">
            <div class="group-name">
              <div class="name">ยืนยัน</div>
            </div>
          </button>
        </div>
      </Form>
    </div>
    <cpn-loading :show="showLoading" />
  </div>
</template>

<script>
export default {
  name: "login-repass-word",
  data() {
    return {
      data: {
        new_password: "",
        confirm_password: "",
      },
      showLoading: false,
      modalAlert: {
        showModal: false,
        title: "",
        message: "",
      },
    };
  },
  methods: {
    onSubmitRepass() {
      console.log("onSubmitRepass");
      // let _this = this
      // this.showLoading = true
      // this.axios.post(`/v1/check-reset-token/${this.$route.query.token}`)
      // .then(() => {
      //   this.axios.post(`/v1/reset-password/${this.$route.query.token}`, {
      //     new_password: this.data.new_password,
      //     confirm_password: this.data.confirm_password
      //   })
      //   .then((response) => {
      //     this.showLoading = false
      //     _this.modalAlert = {showModal: true, type: 'success', title: response.data.message, msgSuccess: true, afterPressAgree() { _this.loginPage() }}
      //   })
      //   .catch((error) => {
      //     this.showLoading = false
      //     this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      //   })
      // })
      // .catch(() => {
      //   this.showLoading = false
      //   this.loginPage()
      // })
    },
    loginPage() {
      this.$router.push({
        name: "login",
      });
    },
  },
  created() {
    // this.showLoading = true
    // this.axios.post(`/v1/check-reset-token/${this.$route.query.token}`)
    // .then(() => {
    //   this.showLoading = false
    // })
    // .catch(() => {
    //   this.showLoading = false
    //   this.loginPage()
    // })
  },
  props: {
    resetPassword: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
};
</script>

<style lang="scss">
.login-repass-word {
  background-image: url("@/assets/image/login/background.jpeg");
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: $color-primary;
    background: -webkit-linear-gradient(bottom, $color-primary, $color-second);
    opacity: 0.9;
  }

  .card-center {
    width: 600px;
    background-color: #ffffff;
    position: relative;
    border-radius: 25px;
    box-shadow: 20px 20px 30px 10px rgba(0, 0, 0, 0.1);

    .repass-title {
      display: flex;
      justify-content: center;
      padding-top: 50px;
      margin-bottom: 24px;
      margin-right: 30px;
      margin-left: 60px;

      .title-size {
        font-size: 30px;
        font-weight: 700;
        color: $color-text-login;
        margin-top: 5px;
      }
    }

    .repass-detail {
      margin-right: 38px;
      margin-left: 38px;
      margin-top: 30px;

      .message {
        text-align: center;
        color: $color-text-login;
        font-size: 22px;
        font-weight: 500;
        margin-bottom: 15px;
      }

      .group-input {
        width: 100%;
        padding: 0 10px;
        margin-top: 20px;

        .name {
          margin-left: 15px;
          margin-bottom: 5px;
          color: $color-text-login;
          font-weight: 500;
          font-size: 18px;
        }

        .input-login {
          width: 100%;
          background-color: #fff;
          border-radius: 20px;
          font-size: 16px;
          line-height: 1.2;
          display: block;
          width: 100%;
          height: 60px;
          padding: 0 20px 0 23px;
        }
      }
    }

    .group-footer {
      margin-top: 30px;
      margin-bottom: 50px;
      text-align: center;
      display: flex;
      justify-content: center;
      margin-right: 38px;
      margin-left: 38px;
      padding: 0 10px;

      .button-confirm {
        width: 360px;
        height: 65px;
        border-radius: 20px;
        background-color: $color-primary;
        border: 0;
      }

      .group-name {
        display: flex;
        align-items: center;
        justify-content: center;

        .image-times {
          width: 28px;
          height: 28px;
          margin-right: 14px;
        }

        .name {
          color: #ffffff;
          font-size: 20px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
