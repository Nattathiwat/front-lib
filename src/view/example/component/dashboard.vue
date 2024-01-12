<template>
  <div class="dashboard">
    <h2 class="name mb-4">Dashboard</h2>
    <canvas id="myChart"></canvas>
    <br /><br /><br /><br /><br />
    <canvas id="myChart2"></canvas>
  </div>
</template>
<script>
import Chart from "chart.js/auto";
export default {
  name: "dashboard",
  data() {
    return {
      configChart: {
        type: "bar",
        data: {
          labels: [],
          datasets: [],
        },
      },
      configChart2: {
        type: "line",
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
      this.chart.data.labels = labels;
      this.chart2.data.labels = labels;
      this.chart.data.datasets = datasets;
      this.chart2.data.datasets = datasets;
      this.chart.update();
      this.chart2.update();
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
  },
  mounted() {
    const ctx = document.getElementById("myChart");
    const ctx2 = document.getElementById("myChart2");
    this.chart = new Chart(ctx, this.configChart);
    this.chart2 = new Chart(ctx2, this.configChart2);
    this.chartUpdate();
  },
};
</script>
<style lang="scss">
.dashboard {
  width: 100%;
  height: auto;
  min-height: 200px;
  border-radius: 15px;
  box-shadow: 7.4px 9.5px 13px 0 rgb(137 148 169 / 14%);
  background-color: #fff;
  border: 0px;
  padding: 22px 29px;

  .group-input {
    margin-bottom: 22px;

    .name {
      margin-bottom: 5px;
    }
  }
}
</style>
