<template>  
<section class="page-heading" :style="{ 'background-image': `url('${heading.image.url}')` }">
  <header class="wrapper wrapper--narrow page-heading__header">
    <h1 class="ty__heading1">{{heading.title}}</h1>
  </header>
</section>
</template>

<script>

export default {
  props: ['heading']
};
</script>
