<template>
  <div class="right">
    <i-mdi-account-box
      style="color: red; font-size: 2em; vertical-align: middle"
    />
    <span>{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
import useUserStore from '~/stores/user'

const store = useUserStore()
const name = store.name
</script>

<style scope lang="scss">
.right {
  padding: 0 20px;
  text-align: right;
}
</style>
