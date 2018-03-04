<template>
  <div class="globals__frame">
    <global-header></global-header>
    <nuxt/>
    <global-footer></global-footer>
  </div>
</template>


<script>
import GlobalHeader from '~/components/GlobalHeader.vue'
import GlobalFooter from '~/components/GlobalFooter.vue'

export default {
  components: {
    GlobalHeader,
    GlobalFooter
  }
}
</script>
