<template>
  <div class="global-nav-children">
    <div class="global-nav-children__bar">
      <a :href="linkUrl" class="global-header__nav-link" v-text="linkTitle"></a>
      <button class="global-nav-children__toggle"><i class="icon icon-chevron-down"></i></button>
    </div>
    <ul class="global-nav-children__options">
      <li v-for="(child, index) in children" :key="'childNode' + index"
        class="global-nav-children__option">
        <a :href="child.url" class="global-header__nav-link">{{child.label}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['linkTitle', 'linkUrl', 'children'],
  data: () =>({
    showChildren: false
  }),
  methods: {
    toggleChildren () {
      this.showChildren = !this.showChildren;
    }
  }
}
</script>
