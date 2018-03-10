<template>
  <div>
   <page-heading :heading="hero"></page-heading>
   <page-intro :content="intro"></page-intro>
  </div>
</template>

<script>
import axios from 'axios'
import PageHeading from '~/components/PageHeading.vue'
import PageIntro from '~/components/PageIntro.vue'

export default {
  components: {
    PageHeading,
    PageIntro
  },
  asyncData ({ params }) {
    return axios.get(`${process.env.KEYSTONE_URL}/api/pages/partnerships`)
      .then(res => res.data)
      .catch(reason => {
        console.error(reason)
        return {}
      })
  }
}
</script>

