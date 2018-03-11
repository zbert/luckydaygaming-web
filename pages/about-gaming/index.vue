<template>
  <div>
   <page-heading :heading="hero"></page-heading>
   <page-intro :content="intro"></page-intro>
   <listing-pages :sections="sections"></listing-pages>
   <closing-section :content="outro"></closing-section>
  </div>
</template>

<script>
import axios from 'axios'
import PageHeading from '~/components/PageHeading.vue'
import PageIntro from '~/components/PageIntro.vue'
import ListingPages from '~/components/ListingPages.vue'
import ClosingSection from '~/components/ClosingSection.vue'

export default {
  components: {
    PageHeading,
    PageIntro,
    ListingPages,
    ClosingSection
  },
  asyncData ({ params }) {
    return axios.get(`${process.env.KEYSTONE_URL}/api/pages/about-gaming`)
      .then(res => res.data)
      .catch(reason => {
        console.error(reason)
        return {}
      })
  }
}
</script>

