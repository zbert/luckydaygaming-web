<template>  
<div class="page-intro">
  <div class="wrapper wrapper--medium">
    <embellishment :color="'#f5a623'"></embellishment>
    <div class="hero-intro__summary">
      <div class="ty__body-display-large" v-html="content"></div>
    </div>
  </div>
</div>
</template>

<script>
import Embellishment from '~/components/Embellishment.vue'

export default {
  props: ['content'],
  components: {
    Embellishment
  }
};
</script>
