<template>
  <div class="global-nav-children">
    <div :class="{'global-nav-children__bar--expanded': showChildren}"
      class="global-nav-children__bar">
      <a :href="linkUrl" class="global-header__nav-link" v-text="linkTitle"></a>
      <button @click.prevent="toggleChildren" class="global-nav-children__toggle"><i class="icon icon-chevron-down"></i></button>
    </div>
    <ul ref="list" class="global-nav-children__options">
      <li v-for="(child, index) in children" :key="'childNode' + index"
        class="global-nav-children__option">
        <a :href="child.url" class="global-header__nav-link">{{child.label}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  props: ['linkTitle', 'linkUrl', 'children'],
  data: () =>({
    showChildren: false
  }),
  methods: {
    toggleChildren () {
      if (this.showChildren) {
        this.showChildren = false
        this.collapseChildren()
      } else {
        this.showChildren = true
        this.expandChildren()
      }
    },
    expandChildren () {
      let { list } = this.$refs
      TweenLite.set(list, {height: 'auto'})
      TweenLite.from(list, 0.35, {height: 0, ease: 'Power1.easeIn'})
    },
    collapseChildren () {
      let { list } = this.$refs
      TweenLite
        .to(list, 0.35, {height: 0, ease: 'Power1.easeIn'})
        .eventCallback('onComplete', function () {
          TweenLite.set(list, {clearProps: 'all'})
        })
    }
  }
}
</script>
