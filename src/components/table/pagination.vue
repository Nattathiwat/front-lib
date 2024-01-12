<template>
  <div class="component-pagination row" v-show="total > 0">
    <div class="view-page col-md-6">
      แสดงผล
      <select
        name="cars"
        v-model="pageSize"
        class="page-size"
        @change="pageSizeHandleBlur(pageSize)"
      >
        <option v-for="(item, index) in totalArr" :key="index" :value="item">
          {{ item }}
        </option>
      </select>
      จากทั้งหมด
      {{ total }}
    </div>
    <div class="col-md-6 group-pagination">
      <Paginate
        v-model="pageActive"
        :page-count="pageCount"
        :page-range="3"
        :margin-pages="1"
        :click-handler="clickHandler"
        :prev-text="'ก่อนหน้า'"
        :next-text="'ถัดไป'"
        :container-class="'pagination'"
        :page-class="'page-item'"
      >
      </Paginate>
    </div>
  </div>
</template>

<script>
import Paginate from "vuejs-paginate-next";

export default {
  name: "component-pagination",
  data() {
    return {
      pageActive: this.page,
      pageSize: this.perPage,
      totalArr: [],
      pageSizeTotal: 10,
    };
  },
  components: {
    Paginate,
  },
  props: ["page", "total", "perPage"],
  computed: {
    pageCount() {
      return this.total / this.pageSize;
    },
  },
  methods: {
    pageSizeHandleBlur() {
      let newData = {
        page: 1,
        perPage: this.pageSize,
      };
      this.pageActive = 1;
      this.$emit("pageChange", newData);
    },
    clickHandler(pageNum) {
      let newData = {
        page: pageNum,
        perPage: this.pageSize,
      };
      this.$emit("pageChange", newData);
    },
    setPages() {
      this.pageActive = this.page ? parseInt(this.page) : 1;
      this.pageSize = this.perPage ? parseInt(this.perPage) : 50;
      this.totalArr = [];
      if (this.total < this.pageSize) {
        this.totalArr.push(this.pageSize);
      } else {
        for (let index = 1; index <= this.total; index++) {
          if (index % this.pageSize == 0) {
            this.totalArr.push(index);
          }
        }
        if (this.total % this.pageSize != 0) {
          this.totalArr.push(
            this.totalArr[this.totalArr.length - 1] + this.pageSize
          );
        }
      }
    },
  },
  mounted() {
    this.setPages();
  },
  watch: {
    total() {
      this.setPages();
    },
    perPage() {
      this.setPages();
    },
    page() {
      this.setPages();
    },
  },
};
</script>

<style lang="scss">
.component-pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // margin-top: 20px;

  .view-page {
    font-size: 16px;
    font-weight: 500;
    color: #3c4858;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: start;
    white-space: nowrap;

    .page-size {
      max-width: 117px;
      width: 100%;
      height: 35px;
      margin: 0 17px 0 13px;
      padding-top: 2px;
      padding-left: 12px;
      border: solid 1px #c1cfe3;
      border-radius: 8px;
      background-color: #fff;
      font-weight: 600;
      color: #3c4858;
    }

    .page-size:focus {
      outline: none;
      box-shadow: 0px 0px;
    }
  }

  .group-pagination {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: end;
  }
  ul.pagination {
    // margin-top: 20px;

    li.page-item {
      a.page-link {
        cursor: pointer;
        min-width: 41px;
        height: 41px;
        display: flex;
        justify-content: center;
        background: transparent;
        padding: 0 12px;
        font-size: 16px;
        font-weight: 400;
        line-height: 41px;
        color: #101828 !important;
        align-items: center;
      }

      &.active > a.page-link {
        cursor: pointer;
        color: #ffffff !important;
        border-color: #3b85de;
        background-color: #3b85de;
      }

      a:focus {
        box-shadow: none;
      }
    }
    .page-item:first-child .page-link {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    .page-item:last-child .page-link {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }

    li.disabled {
      a.page-link {
        color: rgba(21, 70, 110, 0.53);
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .view-page,
    .group-pagination {
      justify-content: center;
    }
  }
}
</style>
