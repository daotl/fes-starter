<script setup lang="ts">
import { AccountBoxFilled } from '@vicons/material'
import { Icon } from '@vicons/utils'

import useUserStore from '~/stores/user'

const store = useUserStore()
const name = store.name
</script>

<template>
  <div class="right">
    <!-- <div i-mdi-account-box inline-block align-middle color-red></div> -->
    <Icon size="20" color="red" style="vertical-align: middle">
      <AccountBoxFilled />
    </Icon>
    <span>{{ name }}</span>
  </div>
</template>

<style scoped lang="scss">
.right {
  padding: 0 20px;
  text-align: right;
}
</style>
