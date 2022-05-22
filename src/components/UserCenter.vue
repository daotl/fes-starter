<script setup lang="ts">
import useUserStore from '~/stores/user'

const store = useUserStore()
const name = store.name
</script>

<template>
  <div class="right">
    <div i-mdi-account-box inline-block align-middle color-red></div>
    <span>{{ name }}</span>
  </div>
</template>

<style scoped lang="scss">
.right {
  padding: 0 20px;
  text-align: right;
}
</style>
