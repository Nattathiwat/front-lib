<template>
  <div class="modal-class-repassword" v-show="modalRepass.show">
    <div class="modal-center">
      <div class="modal-size">
        <div class="modal-title">
          <div></div>
          <div class="title-size">ลืมรหัสผ่าน</div>
          <i
            class="bi bi-x-lg pointer icon-close"
            @click="closeModalRepass()"
          ></i>
        </div>
        <div class="modal-detail">
          <div class="group-input">
            <div class="input-name-2">
              กรุณาติดต่อผู้ดูแลระบบเพื่อทำการเปลี่ยนรหัสผ่าน
            </div>
            <div class="input-name-3">Email : xxxxxxx@gmail.com</div>
            <div class="input-name-3">
              โทร : 0 2xx xxxx ต่อ xxx (คุณเสกข์ แสงทอง)
            </div>
          </div>
        </div>
        <div class="group-footer center">
          <button
            type="button"
            class="button-confirm"
            @click="closeModalRepass()"
          >
            <div class="group-name">
              <div class="name">ยืนยัน</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal-class-repassword",
  data() {
    return {};
  },
  methods: {
    closeModalRepass() {
      this.modalRepass.show = false;
    },
  },
  props: ["modalRepass"],
};
</script>
<style lang="scss">
.modal-class-repassword {
  position: absolute;
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

          .input-name-2 {
            margin-left: 15px;
            margin-bottom: 10px;
            color: $color-text-login;
            font-weight: 500;
            font-size: 22px;
            text-align: center;
            color: #101828;
          }

          .input-name-3 {
            margin-left: 15px;
            margin-bottom: 7px;
            color: $color-text-login;
            font-weight: 500;
            font-size: 18px;
            text-align: center;
            color: #101828;
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
</style>
