<template>
<section class="messaging-bling">
  <div class="wrapper messaging-bling__body">
    <div class="messaging-bling__content">
      <header class="messaging-bling__heading">
        <h2 class="ty__heading2">{{content.header}}</h2>
      </header>
      
      <div class="messaging-bling__summary">
        <div class="ty__body-normal" v-html="content.description"></div>
      </div>

      <div class="messaging-bling__cta-box">
        <a :href="content.cta.url" class="messaging-bling__cta btn-primary btn-primary--gold">
          {{content.cta.label}}
        </a>
      </div>
    </div>

    <figure class="messaging-bling__figure">
      <img :alt="content.image.label" class="messaging-bling__image" :src="content.image.url" >
    </figure>
  </div>  
</section>
</template>

<script>
import Embellishment from '~/components/Embellishment.vue'

export default {
  props: ['content'],
  components: {
    Embellishment
  },
  data: () => ({
    imgUrl: '/images/home/partnerships-bling.png'
  })
};
</script>
