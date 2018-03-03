import axios from 'axios'

export default function ({store}) {
  // Add the userAgent property in the context (available in `data` and `fetch`)
  console.log(store.commit)
  
  return axios.get(`${process.env.KEYSTONE_URL}/api/layouts/default`)
    .then(res => store.commit('initialize', res.data))
    .catch(reason => {
      console.error(reason)
      return {}
    })
}