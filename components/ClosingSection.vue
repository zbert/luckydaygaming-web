<template>  
<section class="closing-section">
  <div class="wrapper wrapper--narrow">
    <header class="closing-section__heading">
      <h2 v-if="content.header" class="ty__heading2">{{content.header}}</h2>
      <h2 v-else class="ty__heading2">{{content.title}}</h2>
    </header>
    
    <div class="closing-section__summary">
      <div class="ty__body-normal" v-html="content.description"></div>
    </div>

    <a v-if="content.cta" :href="content.cta.url" class="closing-section__cta btn-primary btn-primary--gold">
      {{content.cta.label}}
    </a>
    <a v-else :href="content.link.url" class="closing-section__cta btn-primary btn-primary--gold">
      {{content.link.label}}
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
