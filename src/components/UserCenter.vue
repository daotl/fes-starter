<template>
  <div class="right">{{ initialState.userName }}</div>
</template>

<script setup lang="ts">
import { useModel } from '@fesjs/fes'
import type { State } from '~/app'

const initialState = useModel('@@initialState') as State
</script>

<style scope lang="scss">
.right {
  padding: 0 20px;
  text-align: right;
}
</style>
