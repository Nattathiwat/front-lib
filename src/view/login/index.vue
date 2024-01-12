<template>
  <div class="login-index">
    <div class="card-center">
      <div class="group-image">
        <img
          class="image-logo"
          src="@/assets/image/login/logo.svg"
          alt="logo"
        />
        <div class="title">EXAMPLE</div>
        <div class="sub-title">
          ระบบ ตัวอย่าง
        </div>
      </div>
      <Form @submit="onSubmit(false)" @invalid-submit="onInvalidSubmit">
        <div class="group-input">
          <div class="input-name">ชื่อผู้ใช้งาน หรือ Email</div>
          <cpn-input
            v-model="data.username"
            name="username"
            type="text"
            class="input-login"
            rules="required"
          />
        </div>
        <div class="group-input">
          <div class="input-name">รหัสผ่าน</div>
          <cpn-input
            v-model="data.password"
            name="password"
            type="password"
            class="input-login"
            rules="required"
            icon="eye"
          />
        </div>
        <div
          class="re-password pointer"
          @click="resetPasswordClick()"
        >
          ลืมรหัสผ่าน?
        </div>
        <div class="group-button">
          <button type="submit" class="button-login">เข้าสู่ระบบ</button>
        </div>
      </Form>
    </div>

    <modalRepassword :modalRepass="modalRepass" />
    <modalSchool :modalSchool="modalSchool" />
  </div>
</template>

<script>
import modalRepassword from "./component/modalRepassword.vue";
import modalSchool from "./component/modalSchool.vue";
export default {
  name: "login-index",
  data() {
    return {
      modalRepass: {
        show: false,
      },
      modalSchool: {
        show: false,
        list: [
          { name: "ทั้งหมด", id: 0 },
          { name: "โรงเรียนเอกตรา", id: 1 },
          { name: "โรงเรียนสายไหม", id: 2 },
          { name: "โรงเรียนรังสิต", id: 3 },
          { name: "โรงเรียนบางบัวทอง", id: 4 },
          { name: "โรงเรียนนครปฐม", id: 5 },
          { name: "โรงเรียนวิเทศธนบุรี", id: 6 },
          { name: "โรงเรียนสมุทรสาคร", id: 7 },
          { name: "โรงเรียนวิเทศโคราช", id: 8 },
          { name: "โรงเรียนพัชรมณฑล", id: 9 },
          { name: "โรงเรียนปทุมธานี", id: 10 },
        ],
      },
      data: {
        username: "",
        password: "",
        email: "",
      },
    };
  },
  methods: {
    onSubmit() {
      // this.modalSchool.show = true;
      // ปุ่มยืนยัน + ปิด
      // this.$swal({
      //   title: "Are you sure?",
      //   text: "You won't be able to revert this!",
      //   icon: "warning",
      //   showConfirmButton: true,
      //   showCancelButton: true,
      // }).then((result) => {
      //   //ปุ่มตกลง
      //   if (result.isConfirmed) {
      //     this.$swal({
      //       title: "Deleted!",
      //       text: "Your file has been deleted.",
      //       icon: "success",
      //       showDenyButton: true,
      //     });
      //   }
      // })
      this.$router.push({name: "exampleDashboard"})
    },
    resetPasswordClick() {
      this.data.email = "";
      this.modalRepass.show = true;
    },
  },
  watch: {
    "modalRepass.show"() {
      this.data.email = "";
      document.body.style.overflow = this.modalRepass.show ? "hidden" : "";
    },
    "modalSchool.show"() {
      document.body.style.overflow = this.modalSchool.show ? "hidden" : "";
    },
  },
  components: {
    modalRepassword,
    modalSchool,
  },
};
</script>

<style lang="scss">
.login-index {
  background-image: url("@/assets/image/login/background.jpeg");
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
}
</style>
