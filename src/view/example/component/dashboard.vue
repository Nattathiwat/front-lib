<template>
  <div class="content-dashboard">
    <h1 class="mb-4 mt-2">Dashboard Example</h1>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <h2 class="name mb-4">Dashboard1</h2>
            <canvas id="myChart1"></canvas>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <h2 class="name mb-4">Dashboard2</h2>
            <canvas id="myChart2"></canvas>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <h2 class="name mb-4">Dashboard3</h2>
            <canvas id="myChart3"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from "chart.js/auto";
export default {
  name: "content-dashboard",
  data() {
    return {
      configChart1: {
        type: "line",
        data: {
          labels: [],
          datasets: [],
        },
      },
      configChart2: {
        type: "bar",
        data: {
          labels: [],
          datasets: [],
        },
      },
      configChart3: {
        type: "radar",
        data: {
          labels: [],
          datasets: [],
        },
      },
    };
  },
  methods: {
    async chartUpdate(data) {
      let labels = [
        "Red",
        "Blue",
        "Yellow",
        "Green",
        "Purple",
        "Orange",
        "Black",
        "White",
      ];
      let datasets = [
        {
          label: "# min color",
          data: [7, 9, 1, 2, 1, 2, 6, 5],
          borderWidth: 1,
          barPercentage: 15,
          barThickness: 50,
          maxBarThickness: 50,
          minBarLength: 12,
        },
        {
          label: "# max color",
          data: [12, 19, 3, 5, 2, 3, 12, 7],
          borderWidth: 1,
          barPercentage: 15,
          barThickness: 50,
          maxBarThickness: 50,
          minBarLength: 12,
        },
      ];
      this.chart1.data.labels = labels;
      this.chart2.data.labels = labels;
      this.chart3.data.labels = labels;
      this.chart1.data.datasets = datasets;
      this.chart2.data.datasets = datasets;
      this.chart3.data.datasets = datasets;
      this.chart1.update();
      this.chart2.update();
      this.chart3.update();
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
  },
  mounted() {
    const ctx1 = document.getElementById("myChart1");
    const ctx2 = document.getElementById("myChart2");
    const ctx3 = document.getElementById("myChart3");
    this.chart1 = new Chart(ctx1, this.configChart1);
    this.chart2 = new Chart(ctx2, this.configChart2);
    this.chart3 = new Chart(ctx3, this.configChart3);
    this.chartUpdate();
  },
};
</script>
<style lang="scss">
.content-dashboard {
  .card {
    width: 100%;
    height: auto;
    min-height: 200px;
    border-radius: 15px;
    box-shadow: 7.4px 9.5px 13px 0 rgb(137 148 169 / 14%);
    background-color: #fff;
    border: 0px;
    padding: 22px 29px;
    margin-bottom: 20px;

    .group-input {
      margin-bottom: 22px;

      .name {
        margin-bottom: 5px;
      }
    }
  }
}
</style>
