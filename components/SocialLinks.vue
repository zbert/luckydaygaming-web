<template>
  <ul class="social-links" >
		<li v-for="(social, index) in socialOptions" class="social-links__item" :key="'socialid'+index ">
			<a target="_blank"
        :class="'social-links__icon icon-'+ social.icon"
        :title="social.label" 
        :href="social.url"></a>
		</li>
  </ul>
</template>

<script>
export default {
  props: ['socialOptions']
}
</script>
