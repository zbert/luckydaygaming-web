<template>  
<form :class="{'global-search--show-search' :isExpanded}"
class="global-search searchbox">
  <input v-model="searchbox" placeholder="Enter Keyword" class="searchbox__input" @blur="closeSearch">
  <button class="searchbox__button icon-arrow-right"></button>
</form>

</template>

<script>
export default {
  props: ['showSearch'],
  data: () => ({
    searchbox: '',
    isExpanded: false
  }),
  watch: {
    showSearch (newVal, Oldval) {

      if ( newVal === false) {
        this.closeSearch()
      } else {
        this.openSearch()
      }
    }
  },
  methods: {
    closeSearch () {
      this.isExpanded = false
      this.removeEventForClickingOutside()
    },
    openSearch () {
      this.isExpanded = true
      this.addEventForClickingOutside();
    },
    handleClickEvent (event) {
      var isClickInside = this.$el.contains(event.target)

      // The click was outside the specifiedElement, do something
      if (!isClickInside) {
        this.closeSearch()
      }
    },
    addEventForClickingOutside () {
      document.addEventListener('click', this.handleClickEvent, false)
    },
    removeEventForClickingOutside () {
      document.removeEventListener('click', this.handleClickEvent, false)
    }
  }
};
</script>