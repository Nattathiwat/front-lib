<template>
  <div class="component-modal" v-show="modalData.showModal">
    <div class="modal-class">
      <div class="modal-center">
        <div class="modal-size" ref="modalDataref">
          <div class="modal-title">
            <div class="title-size">title</div> 
            <i class="bi bi-x-lg icon-close" @click="closeModal()"></i>
          </div>
          <div class="line"></div>
          <div class="modal-detail">
            <div class="message">message</div>
          </div>
          <div class="line"></div>
          <div class="group-footer">
            footer
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'component-modal2',
  data() {
    return {}
  },
  props: ['modalData'],
  methods: {
    closeModal() {
      this.modalData.showModal = false
    }
  },
  watch: {
    'modalData.showModal' () {
      document.body.style.overflow = this.modalData.showModal ? 'hidden' : ''
    }
  }
}
</script>

<style scoped lang="scss">
.component-modal {
  .modal-class {
    position: fixed;
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

        .line {
          width: 100%;
          height: 2px;
          background-color: #0A1629;
        }

        .modal-title {
          display: flex;
          justify-content: space-between;
          padding-top: 30px;
          margin-bottom: 24px;
          margin-right: 30px;
          margin-left: 60px;

          .title-size {
            font-size: 24px;
            font-weight: 700;
            color: #0A1629;
            margin-top: 5px;
          }

          .icon-close {
            font-size: 30px;
            cursor: pointer;
          }
        }

        .modal-detail {
          margin-right: 38px;
          margin-left: 38px;
          padding-top: 30px;

          .message {
            text-align: center;
            color: #333;
            font-size: 22px;
            font-weight: 500;
            margin: 30px 0px;
          }
        }

        .group-footer {
          margin-top: 10px;
          margin-bottom: 35px;
          text-align: center;
          display: flex;
          justify-content: space-between;
          padding: 0 30px;
        }
      }
    }
  }
}
</style>
