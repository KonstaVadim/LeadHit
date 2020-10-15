<template>
  <div>
    <nav class="navbar bg-primary text-white">
      <h1>Аналитика</h1>
    </nav>
    <div class="content">
      <canvas ref="canvas"></canvas>
    </div>
  </div>
</template>

<script>

import { Line  } from 'vue-chartjs'
import { mapGetters } from 'vuex'

export default {
  extends: Line,
  name: "Analytics",
  data() {
    return {
      labels: [],
      data: [],
    }
  },
  methods: {
    // Подготовка данных для графика
    prepareData() {
      this.getChartData.forEach(data => {
        this.data.push(data.visits);
        this.labels.push(new Date(data.date).toLocaleString('ru', {
          month: 'long',
          day: 'numeric'
        }));
      })
    },
  },
  computed: {
    ...mapGetters([
      'getChartData'
    ])
  },
  mounted () {
    this.prepareData()
    this.renderChart({
      labels: this.labels,
      datasets: [{
        label: 'Аналитика',
        borderColor: 'rgb(149,0,252)',
        backgroundColor: 'rgb(230,200,250)',
        pointBorderWidth: '7',
        pointHitRadius: '7',
        pointBackgroundColor: 'rgb(149,0,252)',
        data: this.data
      }]
    })
  }
}
</script>

<style scoped>
  canvas {
    height: 600px !important;
  }
</style>