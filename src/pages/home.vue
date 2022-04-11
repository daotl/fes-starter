<config>
{
    "name": "home",
    "title": "首页"
}
</config>

<template>
  <div style="padding: 32px">
    <h3>fes & 拉夫德鲁</h3>
    <h4>数据字典</h4>
    <div v-for="item in enumsGet('status')" :key="item.key">
      {{ item.value }}：{{ item.key }}
    </div>

    <section>
      计数器
      <el-button @click="increment">click me：{{ count }}</el-button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { enums } from '@fesjs/fes'

import useCounterStore from '~/stores/counter'

const store = useCounterStore()
const count = computed(() => store.clicked)

const increment = () => {
  store.clicked++
}

const enumsGet = enums.get
</script>
