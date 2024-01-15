<template>
  <div class="page-table">
    <div class="table mb-5">
      <h2 class="name mb-4">table Component</h2>
      <cpn-table :columns="columns" :data="data" />

      <cpn-pagination
        :page="pagination.page"
        :total="pagination.total"
        :lastPage="pagination.lastPage"
        :perPage="pagination.perPage"
        @pageChange="pageChange"
      />
    </div>
    <div class="table mb-5">
      <h2 class="name mb-4 mt-4">table standard</h2>
      <div class="table-standard-1">
        <table class="table-view">
          <thead class="thead">
            <tr class="thead-row">
              <th class="col1">วันที่</th>
              <th class="col2">ประเภท</th>
              <th class="col3">เรื่องประกาศ</th>
              <th class="col4">หน่วยงานที่นำส่ง</th>
            </tr>
          </thead>
          <tbody class="tbody">
            <tr class="tbody-row" v-for="(item, index) in data" :key="index">
              <td class="col1">{{ item.date }}</td>
              <td class="col2">{{ item.type }}</td>
              <td class="col3">{{ item.title }}</td>
              <td class="col4">{{ item.src }}</td>
            </tr>
            <tr class="tbody-row" v-if="data.length == 0">
              <td colspan="4">ไม่มีข้อมูล</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="table mb-5">
      <h2 class="name mb-4 mt-4">table sticky head & col1</h2>
      <div class="table-sticky-thead">
        <table class="table-view">
          <thead class="thead">
            <tr class="thead-row sticky">
              <th class="col1">วันที่</th>
              <th class="col2">ประเภท1</th>
              <th class="col3">เรื่องประกาศ1</th>
              <th class="col4">หน่วยงานที่นำส่ง1</th>
              <th class="col2">ประเภท2</th>
              <th class="col3">เรื่องประกาศ2</th>
              <th class="col4">หน่วยงานที่นำส่ง2</th>
            </tr>
          </thead>
          <tbody class="tbody">
            <tr class="tbody-row sticky" v-for="(item, index) in data" :key="index">
              <td class="col1 ">{{ item.date }}</td>
              <td class="col2">{{ item.type }}</td>
              <td class="col3">{{ item.title }}</td>
              <td class="col4">{{ item.src }}</td>
              <td class="col2">{{ item.type }}</td>
              <td class="col3">{{ item.title }}</td>
              <td class="col4">{{ item.src }}</td>
            </tr>
            <tr class="tbody-row" v-if="data.length == 0">
              <td colspan="4">ไม่มีข้อมูล</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "page-table",
  data() {
    return {
      pagination: {
        page: 7,
        total: 20,
        lastPage: 0,
        perPage: 10,
      },
      columns: [
        {
          style: "min-width: 200px; width: 20%;",
          name: "วันที่",
          key: "date",
        },
        {
          style: "min-width: 200px; width: 20%;",
          name: "ประเภท",
          key: "type",
        },
        {
          style: "min-width: 300px; width: 30%; text-align: left;",
          name: "เรื่องประกาศ",
          key: "title",
        },
        {
          style: "min-width: 300px; width: 30%; text-align: left;",
          name: "หน่วยงานที่นำส่ง",
          key: "src",
        },
      ],
      data: [
        {
          date: "11/11/2556",
          type: "ประเภท1",
          title: "เรื่องประกาศ1",
          src: "หน่วยงานที่นำส่ง1",
        },
        {
          date: "11/11/2556",
          type: "ประเภท2",
          title: "เรื่องประกาศ2",
          src: "หน่วยงานที่นำส่ง2",
        },
        {
          date: "11/11/2556",
          type: "ประเภท3",
          title: "เรื่องประกาศ3",
          src: "หน่วยงานที่นำส่ง3",
        },
        {
          date: "11/11/2556",
          type: "ประเภท4",
          title: "เรื่องประกาศ4",
          src: "หน่วยงานที่นำส่ง4",
        },
        {
          date: "11/11/2556",
          type: "ประเภท5",
          title: "เรื่องประกาศ5",
          src: "หน่วยงานที่นำส่ง5",
        },
        {
          date: "11/11/2556",
          type: "ประเภท6",
          title: "เรื่องประกาศ6",
          src: "หน่วยงานที่นำส่ง6",
        },
      ],
    };
  },
  methods: {
    pageChange(data) {
      this.pagination.perPage = data.perPage;
      this.pagination.page = data.page;
      console.log("pageChange", this.pagination.page, data);
    },
  },
};
</script>
<style lang="scss">
.page-table {
.table {
  width: 100%;
  height: auto;
  min-height: 200px;
  border-radius: 15px;
  box-shadow: 7.4px 9.5px 13px 0 rgb(137 148 169 / 14%);
  background-color: #fff;
  border: 0px;
  padding: 22px 29px;

  .table-standard-1 {
    position: relative;
    overflow: auto;
    border: solid 1px #c1cfe3;
    border-radius: 5px;

    table tbody tr:nth-child(odd) td {
      background-color: #ffffff !important;
    }

    table tbody tr:nth-child(even) td {
      background-color: #f1f5fa !important;
    }

    table thead tr th:nth-last-child(1) {
      border-right: 0px;
    }

    table tbody tr td:nth-last-child(1) {
      border-right: 0px;
    }

    .table-view {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0px;
      background-color: #fff;
      overflow: hidden;

      td,
      th {
        border-right: solid 1px #c1cfe3;
      }

      .thead {
        .thead-row {
          font-weight: bold;
          font-size: 16px;
          color: #333333;
          height: 61px;

          th {
            border-bottom: solid 1px #c1cfe3;
            padding: 0 10px;
            text-align: center !important;
          }
        }

        .col1 {
          min-width: 200px;
          width: 20%;
          padding-left: 28px !important;
        }

        .col2 {
          min-width: 200px;
          width: 20%;
        }

        .col3 {
          min-width: 300px;
          width: 30%;
        }

        .col4 {
          min-width: 300px;
          width: 30%;
          padding-right: 28px !important;
        }
      }

      .tbody {
        .color-tr {
          background-color: #f1f5fa;
        }

        .tbody-row {
          width: 100%;
          height: 60px;
          text-align: center;
          color: #333333;
          border-bottom: 0px;
          font-weight: 500;
          font-size: 16px;

          td {
            padding: 0 10px;
          }

          .col2,
          .col3,
          .col4 {
            text-align: left;
          }

          .col1 {
            padding-left: 28px;
          }

          .col4 {
            padding-right: 28px;
          }
        }
      }
    }
  }

  .table-sticky-thead {
    position: relative;
    overflow: auto;
    border: solid 1px #c1cfe3;
    border-radius: 5px;
    height: 300px;

    table tbody tr:nth-child(odd) td {
      background-color: #ffffff !important;
    }

    table tbody tr:nth-child(even) td {
      background-color: #f1f5fa !important;
    }

    table thead tr th:nth-last-child(1) {
      border-right: 0px;
    }

    table tbody tr td:nth-last-child(1) {
      border-right: 0px;
    }

    .table-view {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0px;
      background-color: #fff;

      .sticky {
        th {
          position: -webkit-sticky;
          position: sticky;
          top: 0px;
          z-index: 2 !important;
          background-color: #ffffff;

          &.col1 {
            z-index: 3 !important;
          }
        }

        .col1 {
          position: -webkit-sticky;
          position: sticky;
          left: 0px;
          z-index: 1;
        }
      }

      td,
      th {
        border-right: solid 1px #c1cfe3;
      }

      .thead {
        .thead-row {
          font-weight: bold;
          font-size: 16px;
          color: #333333;
          height: 61px;

          th {
            border-bottom: solid 1px #c1cfe3;
            padding: 0 10px;
            text-align: center !important;
          }
        }

        .col1 {
          min-width: 200px;
          width: 20%;
          padding-left: 28px !important;
        }

        .col2 {
          min-width: 200px;
          width: 20%;
        }

        .col3 {
          min-width: 300px;
          width: 30%;
        }

        .col4 {
          min-width: 300px;
          width: 30%;
          padding-right: 28px !important;
        }
      }

      .tbody {
        .color-tr {
          background-color: #f1f5fa;
        }

        .tbody-row {
          width: 100%;
          height: 60px;
          text-align: center;
          color: #333333;
          border-bottom: 0px;
          font-weight: 500;
          font-size: 16px;

          td {
            padding: 0 10px;
          }

          .col2,
          .col3,
          .col4 {
            text-align: left;
          }

          .col1 {
            padding-left: 28px;
          }

          .col4 {
            padding-right: 28px;
          }
        }
      }
    }
  }
}
}
</style>
