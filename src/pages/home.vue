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

function increment(): void {
  store.clicked++
}

const { t } = useI18n()
</script>

<template>
  <div style="padding: 32px">
    <h1>{{ t('title') }}</h1>
    <section>
      {{ t('counter') }}
      <el-button @click="increment">
        {{ t('click') }}: {{ count }}
      </el-button>
    </section>
  </div>
</template>

<i18n lang="yaml">
en:
  counter: Counter
  click: click me
zh-CN:
  counter: 计数器
  click: 点我
</i18n>
