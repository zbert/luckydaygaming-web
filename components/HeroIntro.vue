<template>  
<section class="hero-intro" :style="{ 'background-image': `url('${hero.image.url}')` }">
  <div class="wrapper wrapper--narrow">
    <header class="hero-intro__heading">
      <h2 class="ty__heading1">{{hero.header}}</h2>
    </header>
    <embellishment :color="'#fff'"></embellishment>
    <div class="hero-intro__summary">
      <div class="ty__body-display" v-html="hero.intro"></div>
    </div>

    <button class="hero-intro__cta btn btn__link">
      <span>{{hero.cta}}</span>
      <i class="icon icon-arrow-long-down"></i>
    </button>
  </div>
</section>
</template>

<script>
import Embellishment from '~/components/Embellishment.vue'

export default {
  props: ['hero'],
  components: {
    Embellishment
  }
};
</script>
