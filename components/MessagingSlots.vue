<template>  
<section class="messaging-slots">
  <div class="wrapper messaging-slots__body">
    <div class="messaging-slots__content">
      <header class="messaging-slots__heading">
        <h2 class="ty__heading2">{{content.header}}</h2>
      </header>
      
      <div class="messaging-slots__summary">
        <div class="ty__body-normal" v-html="content.description"></div>
      </div>

      <a :href="content.cta.url" class="messaging-slots__cta btn-primary btn-primary--ghost-black">
        {{content.cta.label}}
      </a>
    </div>

    <figure class="messaging-slots__figure">
      <img class="messaging-slots__image" :src="imgUrl" >
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
    imgUrl: '/images/home/partnerships-slots.png'
  })
};
</script>
