<template>
  <div class="component-pagination" v-show="total>0">
    <Paginate
      v-model="pageActive"
      :page-count="total"
      :page-range="3"
      :margin-pages="1"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    >
    </Paginate>

  </div>
</template>

<script>
import Paginate from "vuejs-paginate-next";

export default {
  name: 'component-pagination',
  data() {
    return {
      pageActive: this.page
    }
  },
  components: {
    Paginate
  },
  props: {
    page: {
        type: Number,
        default: () => 1,
    },
    total: {
        type: Number,
        default: () => 0,
    },
    rowsPerPage: {
        type: Number,
        default: () => 0,
    },
    maxVisible: {
        type: Number,
        default: () => 5,
    },
  },
  methods: {
    clickCallback (pageNum) {
      this.$emit('pageChange', pageNum)
    }
  },

}
</script>

<style lang="scss">
  .component-pagination {
    *, ::after, ::before {
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
    }

    #components-app {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      
      > table {
        border: 2px solid rgba(#444, 50%);
        border-radius: 5px;
        cell-padding: 0;
        border-spacing: 0;
        
        > thead {
            border-bottom: 1px solid rgba(#444, 50%);
            > tr > th {
                padding: 10px 12px;
                margin-top: -4px;
                
                &:not(:last-child) {
                    border-right: 1px solid #ddd;
                }
            }
        }
        
        > tbody {
            > tr {
                &:nth-child(odd) {
                    td {
                        background-color: #ddd;
                    }
                }
                
                > td {
                    padding: 6px 5px;
                    
                    &:not(last-child) {
                        border-right: 1px solid #ddd;
                    }
                }
            }
        }
      }
    }

    ul.pagination {
      display: flex;
      padding-left: 0;
      list-style: none;
      border-radius: .25rem;
      justify-content: flex-end;
      margin-top: 20px;

      li.page-item {
        padding: 0px;
        margin: 0;

        a.page-link {
            min-width: 41px;
            height: 41px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            padding: 0 12px;
        }
            
        &.active >
        a.page-link,
        > a.page-link:hover {
            color: #fff;
            cursor: pointer;
            border-color: #028ce8;
            background-color: #028ce8;
        }
      }
    }
  }
</style>
