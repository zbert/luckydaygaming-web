<template>
  <div class="global-footer">
    
  </div>
</template>

<script>
import axios from 'axios'


export default {
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

