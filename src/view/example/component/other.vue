<template>
  <div class="other">
    <div>
      <h2 class="name">Loading</h2>
      <!-- conponent loading -->
      <button class="btn btn-primary mt-3" @click="show1()">
        show loading 2s
      </button>
    </div>
    <div class="mt-5">
      <h2 class="name mt-5">sweetalert2</h2>
      <button class="btn btn-primary mt-3 mb-2" @click="sweetalert1()">
        show sweetalert
      </button>
      <br>
      <button class="btn btn-primary mt-3 mb-2" @click="sweetalert2()">
        show error message
      </button>
      <br />
      <a href="https://sweetalert2.github.io/" target="bank">sweetalert</a>
    </div>
    <div class="mt-5">
      <h2 class="name mt-5">modal</h2>
      <button class="btn btn-primary mt-3 mb-2" @click="showModal()">
        show modal vue
      </button>
      <br />
      <!-- conponent modal -->
      <cpn-modal :data="modalData" />
      <br />
      <!-- Modal bootstrap -->
      <button
        type="button"
        class="btn btn-primary  mb-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        show modal bootstrap
      </button>
      <br />
      <a
        href="https://getbootstrap.com/docs/5.3/components/modal/"
        target="bank"
        >bootstrap modal</a
      >
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "other",
  data() {
    return {
      modalData: {
        show: false,
      },
    };
  },
  methods: {
    show1() {
      this.showLoading(true);
      setTimeout(() => {
        this.showLoading(false);
      }, 2000);
    },
    showModal() {
      this.modalData.show = true;
    },
    sweetalert1() {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showConfirmButton: true,
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            showDenyButton: true,
          });
        }
      })
    },
    sweetalert2() {
      this.errorMessage('ทดสอบผิดพลาด');
    }
  },
};
</script>
<style lang="scss">
.other {
  width: 100%;
  height: auto;
  min-height: 200px;
  border-radius: 15px;
  box-shadow: 7.4px 9.5px 13px 0 rgb(137 148 169 / 14%);
  background-color: #fff;
  border: 0px;
  padding: 22px 29px;

  button {
    padding: 9px 20px;
    font-size: 16px;
    border-radius: 8px;
  }
}
</style>
