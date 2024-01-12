<template>
  <div class="component-modal" v-show="data.show">
    <div class="modal-class">
      <div class="modal-center">
        <div class="modal-size" ref="insideModal">
          <div class="modal-title">
            <div class="title-size">title</div>
            <i
              class="bi bi-x-lg icon-close"
              @click="closeModal()"
            ></i>
          </div>
          <div class="line"></div>
          <div class="modal-detail">
            <div class="message">message</div>
          </div>
          <div class="line"></div>
          <div class="group-footer">
            <button
              type="button"
              @click="closeModal()"
              class="btn btn-danger"
            >
              <i class="bi bi-x-circle image-icon"></i>
              ยกเลิก
            </button>
            <button
              type="button"
              @click="confirmModal()"
              class="btn btn-primary"
            >
              <i class="bi bi-question-circle image-icon"></i>
              ยืนยัน
            </button>
            <button
              type="button"
              @click="confirmModal()"
              class="btn btn-success"
            >
              <i class="bi bi-check-circle image-icon"></i>
              บันทึก
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "component-modal",
  data() {
    return {
      firstFlag: false,
    };
  },
  props: ["data"],
  methods: {
    focusoutBtn(e) {
      if (this.data.show) {
        if (this.firstFlag) {
          if (this.$refs.insideModal) {
            let target = e.target;
            if (
              this.$refs.insideModal !== target &&
              !this.$refs.insideModal.contains(target)
            ) {
              this.closeModal();
            }
          }
        } else {
          this.firstFlag = true;
        }
      }
    },
    closeModal() {
      this.data.show = false;
      this.firstFlag = false;
    },
    confirmModal() {
      this.data.show = false;
      this.firstFlag = false;
      this.$emit("confirm-modal", this.data.status);
    },
  },
  mounted() {
    document.addEventListener("click", this.focusoutBtn);
  },
  watch: {
    "data.show"() {
      document.body.style.overflow = this.data.show ? "hidden" : "";
    },
  },
};
</script>

<style scoped lang="scss">
.component-modal {
  .modal-class {
    position: absolute;
    overflow-y: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(33, 85, 163, 0.16);

    .modal-center {
      height: 85%;
      display: flex;
      justify-content: center;
      align-items: center;

      .modal-size {
        width: 100%;
        pointer-events: auto;
        margin: auto;
        max-width: 758px;
        background-color: #ffffffff;
        border-radius: 15px;

        .modal-title {
          display: flex;
          justify-content: space-between;
          padding-top: 20px;
          margin-bottom: 12px;
          margin-right: 30px;
          margin-left: 40px;

          .title-size {
            font-size: 20px;
            font-weight: 700;
            color: #0a1629;
            margin-top: 5px;
          }

          .icon-close {
            font-size: 20px;
            cursor: pointer;
          }
        }
        .line {
          width: 100%;
          height: 1px;
          background-color: #eaecf0;
          margin-bottom: 5px;
        }
        .modal-detail {
          margin: 12px 38px 0px;

          .message {
            text-align: center;
            color: #333;
            font-size: 16px;
            font-weight: 500;
            margin-top: 30px;
          }
        }

        .group-footer {
          margin-top: 20px;
          margin-bottom: 20px;
          text-align: center;
          display: flex;
          justify-content: center;
          margin-right: 38px;
          margin-left: 38px;
          padding: 0 10px;

          button {
            height: 44px;
            width: 160px;
            border-radius: 8px;
            box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.0509803922);
            color: #ffffff;
            font-size: 16px;
            font-weight: 500;
            margin: 0 5px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .image-icon {
            color: #ffffff;
            font-size: 22px;
            margin-right: 7px;
          }
        }
      }
    }
  }
}
</style>
