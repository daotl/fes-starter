<script setup lang="ts">
import { useRouter } from '@fesjs/fes'

import { CONFIG } from '~/config'

const router = useRouter()

onBeforeMount(() => {
  void router.push({
    name: CONFIG.homepage,
  })
})
</script>
