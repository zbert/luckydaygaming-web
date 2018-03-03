<template>
  <div>
    <HeroIntro :hero="hero"></HeroIntro>
    <section class="container">
      <h1 class="title">
        luckydaygaming-web
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import HeroIntro from '~/components/HeroIntro.vue'

export default {
  components: {
    HeroIntro
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

