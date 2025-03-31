<template>
  <div class="screen demo1 flex-column">
    <div class="demo1-header">
      <HeaderBox1></HeaderBox1>
    </div>
    <div class="flex-1 grid grid-cols-4">
      <div class="col-span-1 grid grid-rows-3 gap-20px">
        <BorderBox1>
          <Echart :options="options"></Echart>
        </BorderBox1>
        <BorderBox1>
          <Echart :options="options"></Echart>
        </BorderBox1>
        <BorderBox1>
          <Echart :options="options"></Echart>
        </BorderBox1>
      </div>
      <div class="col-span-2"></div>
      <div class="col-span-1 grid grid-rows-3 gap-20px">
        <BorderBox2>
          <Echart :options="options"></Echart>
        </BorderBox2>
        <BorderBox2>
          <Echart :options="options"></Echart>
        </BorderBox2>
        <BorderBox3>
          <Echart :options="options"></Echart>
        </BorderBox3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import * as echarts from 'echarts'
import HeaderBox1 from '@/components/HeaderBox/HeaderBox1'
import BorderBox1 from '@/components/BorderBox/BorderBox1'
import BorderBox2 from '@/components/BorderBox/BorderBox2'
import BorderBox3 from '@/components/BorderBox/BorderBox3'

const options = reactive({
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    show: false,
    data: ['Email', 'Union Ads', 'Video Ads']
  },
  grid: {
    top: '10%',
    left: '3%',
    right: '4%',
    bottom: '5%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Email',
      type: 'line',
      // stack: 'Total',
      smooth: true,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#2a61ff' },
          { offset: 0.2, color: 'rgba(42, 97, 255, 0.3)' },
          { offset: 1, color: 'rgba(42, 97, 255,0)' }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 290, 134, 90, 430, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      // stack: 'Total',
      smooth: true,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#23d5e2' },
          { offset: 0.2, color: 'rgba(35,213,226, 0.3)' },
          { offset: 1, color: 'rgba(35,213,226,0)' }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    }
  ]
})
</script>

<style lang="scss">
.demo1 {
  background: #0a1f4d;
  .demo1-header {
  }
}
</style>
