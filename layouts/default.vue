<template>
  <div class="globals__frame">
    <nuxt/>
    <global-footer></global-footer>
  </div>
</template>


<script>
import GlobalFooter from '~/components/GlobalFooter.vue'

export default {
  components: {
    GlobalFooter
  }
}
</script>
