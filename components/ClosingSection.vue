<template>  
<section class="closing-section">
  <div class="wrapper wrapper--narrow">
    <header class="closing-section__heading">
      <h2 class="ty__heading2">{{content.header}}</h2>
    </header>
    
    <div class="closing-section__summary">
      <div class="ty__body-normal" v-html="content.description"></div>
    </div>

    <a :href="content.cta.url" class="closing-section__cta btn-primary btn-primary--gold">
      {{content.cta.label}}
    </a>
  </div>
</section>
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
