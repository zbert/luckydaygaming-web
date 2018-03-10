<template>
  <div>
    <hero-intro :hero="hero"></hero-intro>
    <messaging-slots :content="topSection"></messaging-slots>
    <messaging-bling :content="middleSection"></messaging-bling>
    <closing-section :content="bottomSection"></closing-section>
  </div>
</template>

<script>
import axios from 'axios'
import HeroIntro from '~/components/HeroIntro.vue'
import ClosingSection from '~/components/ClosingSection.vue'
import MessagingSlots from '~/components/MessagingSlots.vue'
import MessagingBling from '~/components/MessagingBling.vue'


export default {
  components: {
    HeroIntro,
    ClosingSection,
    MessagingSlots,
    MessagingBling
    
  },
  asyncData ({ params }) {
    return axios.get(`${process.env.KEYSTONE_URL}/api/pages/home`)
      .then(res => res.data)
      .catch(reason => {
        console.error(reason)
        return {}
      })
  }
}
</script>

