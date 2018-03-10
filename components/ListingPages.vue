<template>  
<div class="listing-pages">
  <ul class="listing-pages__sections">
    <li v-for="(section, index) in sections"  :key="'sectionNode' + index"
      :style="{ 'background-image': `url('${section.image.url}')` }"
      class="listing-pages__section">
      <div class="wrapper">
        <div class="listing-pages__content">
          <h2 class="listing-pages__heading">
            <img v-if="section.imageTitle" :src="section.image.url" alt="section.image.alt" >
            <span class="ty__heading2">{{section.title}}</span>
          </h2>
          <div class="listing-pages__description">
            <div class="ty__body-normal" v-html="section.description"></div>
          </div>
          <a :href="section.link.url" class="listing-pages__cta btn-primary">
            {{section.link.label}}
          </a>
        </div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: ['sections']
};
</script>
