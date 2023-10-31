<template>
  <div class="login-index">
    <div class="card-center">
      <div class="group-image">
        <img class="image-logo" src="@/assets/image/login/logo.svg" alt="logo">
        <div class="title">โรงเรียนสารสาสน์</div>
        <div class="sub-title">ระบบลงทะเบียนและชำระค่าธรรมเนียมการเรียน ค่าเรียนเสริม</div>
      </div>
      <Form @submit="onSubmit(false)" @invalid-submit="onInvalidSubmit">
        <div class="group-input">
          <div class="input-name">ชื่อผู้ใช้งาน หรือ Email</div>
          <cpn-input  v-model="data.username"
                      name="username"
                      type="text"
                      class="input-login"
                      rules="required" />
        </div>
        <div class="group-input">
          <div class="input-name">รหัสผ่าน</div>
          <cpn-input  v-model="data.password"
                      name="password"
                      type="password"
                      class="input-login"
                      rules="required"
                      icon="eye" />

        </div>
        <div class="re-password pointer" @click="resetPasswordClick()">ลืมรหัสผ่าน?</div>
        <div class="group-button">
          <button type="submit" class="button-login">เข้าสู่ระบบ</button>
        </div>
      </Form>
    </div>

    <div class="modal-class-repassword" v-show="modalRepass">
      <div class="modal-center">
        <div class="modal-size">
          <div class="modal-title">
            <div></div>
            <div class="title-size">
              ลืมรหัสผ่าน
            </div>
            <i class="bi bi-x-lg pointer icon-close" @click="closeModalRepass()"></i>
          </div>
          <Form @submit="onSubmitEmail()" @invalid-submit="onInvalidSubmit">
            <div class="modal-detail">
              <div class="group-input">
                <div class="input-name">อีเมล <span class="required">*</span></div>
                <cpn-input  v-model="data.email"
                            name="email"
                            rules="required"
                            class="input-email"
                            placeholder="กรุณากรอกอีเมล" />
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
      </div>
    </div>
    <cpn-loading :show="showLoading"/>
  </div>
</template>

<script>
export default {
  name: 'login-index',
  data() {
    return {
      modalRepass: false,
      data: {
        username: '',
        password: '',
        email: ''
      },
      showLoading: false
    }
  },
  methods: {
    onSubmit() {
      console.log('onSubmit')
    },
    closeModalRepass() {
      this.modalRepass = false
    },
    resetPasswordClick() {
      this.data.email = ''
      this.modalRepass = true
    },
    onSubmitEmail() {
      console.log('onSubmitEmail')
      // this.showLoading = true
      // this.axios.post('/v1/forgot-password', {email: this.email})
      // .then(() => { 
      //   this.showLoading = false
      //   this.modalRepass = false
      //   this.modalAlert = {
      //     showModal: true,
      //     type: 'success', 
      //     title: 'ระบบได้ส่ง Link เพื่อทำการรีเซ็ตรหัสผ่านให้ท่านแล้ว',
      //     message: 'กรุณาตรวจสอบอีเมลของท่าน',
      //     messageClass: 'message-class'
      //   }
      // })
      // .catch((error) => {
      //   this.showLoading = false
      //   this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      // })
    }
  },
  watch: {
    'modalRepass' () {
      this.data.email = ''
      document.body.style.overflow = this.modalRepass ? 'hidden' : ''
    }
  },
}
</script>

<style lang="scss">
  .login-index {
    background-image: url('@/assets/image/login/background.jpeg');
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

      .group-image {
        display: block;
        text-align: center;
        margin: auto;
        margin-top: 80px;
        margin-bottom: 50px;
        width: 300px;
        color: $color-text-login;

        .image-logo {
          width: 120px;
        }

        .title {
          font-size: 28px;
          font-weight: 600;
          margin-top: 20px;
        }
        
        .sub-title {
          font-size: 20px;
          margin-top: 5px;
          line-height: 28px;
        }
      }
      .group-input {
        position: relative;
        margin-left: 50px;
        margin-right: 50px;
        margin-bottom: 20px;
        
        .input-name {
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
      
      .re-password {
        text-align: right;
        margin-right: 40px;
        margin-top: 25px;
        font-size: 17px;
        color: #919191;
      }

      .group-button {
        text-align: center;
        margin-top: 40px;
        margin-bottom: 80px;
        margin-left: 40px;
        margin-right: 40px;

        .button-login {
          width: 320px;
          height: 60px;
          border: navajowhite;
          border-radius: 20px;
          color: #ffffff;
          font-size: 18px;
          background-color: $color-primary;
        }
      }
    }

    .modal-class-repassword {
      position: fixed;
      overflow-y: auto;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 999;
      background-color: rgba(33, 85, 163, 0.3);

      .modal-center {
        height: 95%;
        display: flex;
        justify-content: center;
        align-items: center;
    

        .modal-size {
          width: 100%;
          pointer-events: auto;
          margin: auto;
          max-width: 650px;
          background-color: #ffffffff;
          border-radius: 20px;

          .modal-title {
            display: flex;
            justify-content: space-between;
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

            .icon-close {
              font-size: 25px;
              cursor: pointer;
            }
          }

          .modal-detail {
            margin-right: 38px;
            margin-left: 38px;
            margin-top: 30px;

            .group-input {
              width: 100%;
              padding: 0 10px;
              margin-top: 25px;
              margin-bottom: 30px;

              .input-name {
                margin-left: 15px;
                margin-bottom: 5px;
                color: $color-text-login;
                font-weight: 500;
                font-size: 18px;
              }

              .input-email {
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
            margin-top: 23px;
            margin-bottom: 50px;
            text-align: center;
            display: flex;
            justify-content: space-between;
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

          .center {
            justify-content: center;
          }
        }
      }
    }
  }
</style>