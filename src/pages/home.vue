<config>
{
    "name": "home",
    "title": "首页"
}
</config>

<script setup lang="ts">
import useCounterStore from '~/stores/counter'

const store = useCounterStore()
const count = computed(() => store.clicked)

const increment = (): void => {
  store.clicked++
}
</script>

<template>
  <div style="padding: 32px">
    <h3>fes & 拉夫德鲁</h3>
    <h4>数据字典</h4>
    <section>
      计数器
      <el-button @click="increment">click me：{{ count }}</el-button>
    </section>
  </div>
</template>
