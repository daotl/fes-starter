<template>
  <div class="right">{{ initialState.userName }}</div>
</template>

<script setup lang="ts">
import { useModel } from '@fesjs/fes'
import type { State } from '@/app'

const initialState = useModel('@@initialState') as State
</script>

<style scope>
.right {
  text-align: right;
  padding: 0 20px;
}
</style>
