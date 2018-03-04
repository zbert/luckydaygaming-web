<template>
  <header class="global-header">
    <div class="wrapper global-header__body">
      <a href="/" class="global-header__brand">
        <img :src="logo.url" :alt="logo.alt" class="global-header__brand-logo">
        <img :src="logoText.url" :alt="logoText.alt" class="global-header__brand-text">
      </a>

      <nav class="global-header__nav">
        <ul class="global-header__nav-left">
          <li 
            v-for="(link, index) in header.links.left" 
            :key="'leftNav' + index"
            class="global-header__nav-item">

            <a v-if="link.children" :href="link.url" class="global-header__nav-link global-header__nav-toggle" @click.prevent="toggleNav(index)">{{link.label}}</a>
            <a v-else :href="link.url" class="global-header__nav-link">{{link.label}}</a>

            <ul v-if="link.children" class="global-header__nav-children">
              <li v-for="(child, index) in link.children" :key="'childNode' + index"
                class="global-header__nav-children-item">
                <a :href="child.url" class="global-header__nav-link">{{child.label}}</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="global-header__nav-right">
          <li
            v-for="(link, index) in header.links.right" 
            :key="'leftNav' + index"
            class="global-header__nav-item">
            <a :href="link.url" class="global-header__nav-link">{{link.label}}</a>

            <ul v-if="link.children" class="global-header__nav-children">
              <li v-for="(child, index) in link.children" :key="'childNode' + index"
                class="global-header__nav-children-item">
                <a :href="child.url" class="global-header__nav-link">{{child.label}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div class="global-header__actions">
        <button class="global-header__search-toggle">
          <i class="icon icon-search"></i>
        </button>
        <button class="global-header__menu-toggle">
          <i class="icon icon-hamburger"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['header']),
    logo () {
      return {
        url: this.header.brand.logo.url,
        alt: this.header.brand.logo.alt
      }
    },
    logoText () {
      return {
        url: this.header.brand.text.url,
        alt: this.header.brand.text.alt
      }
    }
  },
  methods: {
    toggleNav() {

    }
  }
}
</script>
