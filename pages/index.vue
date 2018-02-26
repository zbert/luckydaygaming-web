<template>
  <div>
    <section class="container">
      
        <app-logo/>
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
    <global-footer :footer="footer"></global-footer>
  </div>
</template>

<script>
import axios from 'axios'
import AppLogo from '~/components/AppLogo.vue'
import GlobalFooter from '~/components/GlobalFooter.vue'

export default {
  components: {
    AppLogo,
    GlobalFooter
  },
  asyncData ({ params }) {
    return axios.get(`${process.env.KEYSTONE_URL}/api/layouts/default`)
      .then(res => res.data)
      .catch(reason => {
        console.error(reason)
        return {}
      })
  }
}
</script>