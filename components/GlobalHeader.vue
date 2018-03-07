<template>
  <header class="global-header">
    <div class="wrapper global-header__body">
      <a href="/" class="global-header__brand">
        <img :src="logo.url" :alt="logo.alt" class="global-header__brand-logo">
        <img :src="logoText.url" :alt="logoText.alt" class="global-header__brand-text">
      </a>

      <nav :class="{'global-header__nav--show-menu': showMenu}"
      class="global-header__nav">
        <ul class="global-header__nav-left">
          <li 
            v-for="(link, index) in header.links.left" 
            :key="'leftNav' + index"
            class="global-header__nav-item">
            <global-nav-children v-if="link.children" :link-url="link.url" :link-title="link.label" :children="link.children"></global-nav-children>
            <a v-else :href="link.url" class="global-header__nav-link">{{link.label}}</a>
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
        <button @click.prevent="toggleSiteSearch"
          
          class="global-header__search-toggle">
          <i class="icon icon-search"></i>
        </button>
        <button @click.prevent="toggleMenu" 
          :class="{'global-header__menu-toggle--is-expanded': showMenu}"
          class="global-header__menu-toggle">
          <i class="icon icon-hamburger"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import GlobalNavChildren from '~/components/GlobalNavChildren.vue'
import { mapState } from 'vuex'


export default {
  components: {
    GlobalNavChildren
  },
  data: () => ({
    showMenu: false,
    showSiteSearch: false
  }),
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
    toggleMenu () {
       if (this.showMenu) {
        this.showMenu = false
        this.unLockBodyScroll()
      } else {
        this.showMenu = true
        this.lockBodyScroll()
      }
    },
    toggleSiteSearch () {
      this.showSiteSearch = !this.showSiteSearch;
    },
    lockBodyScroll () {
      document.getElementsByTagName('body')[0].classList.add('globals__lock-body-scroll');
    },
    unLockBodyScroll () {
      document.getElementsByTagName('body')[0].classList.remove('globals__lock-body-scroll');
    }
  }
}
</script>
