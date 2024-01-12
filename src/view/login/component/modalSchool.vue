<template>
  <div class="modal-class-school" v-show="modalSchool.show">
    <div class="modal-center">
      <div class="modal-size">
        <div class="modal-title">
          <div class="title-size">เลือกโรงเรียน</div>
          <i
            class="bi bi-x-lg pointer icon-close"
            @click="closeModalSchool()"
          ></i>
        </div>
        <div class="line"></div>
        <div class="modal-detail">
          <div class="dropdown-content">
            <div v-for="(item, index) in modalSchool.list" :key="index">
              <div class="line" v-show="index != 0"></div>
              <div class="dropdown-List" @click="selectSchool(item)">
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal-class-school",
  data() {
    return {};
  },
  methods: {
    closeModalSchool() {
      this.modalSchool.show = false;
    },
    selectSchool() {
      this.$router
        .push({
          name: "dashboard",
        })
        .catch(() => {});
    },
  },
  props: ["modalSchool"],
};
</script>
<style lang="scss">
.modal-class-school {
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
      max-width: 400px;
      background-color: #ffffffff;
      border-radius: 20px;

      .modal-title {
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
        margin-bottom: 12px;
        margin-right: 30px;
        margin-left: 40px;

        .title-size {
          font-size: 22px;
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
        margin: 30px 38px 35px;

        .dropdown-content {
          overflow: auto;
          background-color: #ffffff;
          box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.16);
          text-align: left;
          color: $color-text;
          font-size: 16px;
          font-weight: 400;
          border-radius: 8px;
          height: 300px;
          padding: 12px 12px;

          .firstSelect {
            opacity: 0.7;
          }

          .dropdown-List {
            font-weight: 400;
            color: #101828;
            padding: 8px 15px;
            width: 100%;
            cursor: pointer;

            &:hover {
              background-color: rgba(0, 57, 181, 0.07);
              border-radius: 6px;
            }
          }

          .line {
            margin: 6px 0px;
            height: 1px;
            background-color: #d8d8d8;
          }
        }
      }

      .line {
        width: 100%;
        height: 1px;
        background-color: #eaecf0;
        margin-top: 20px;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
