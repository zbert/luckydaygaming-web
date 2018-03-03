<template>
  <div class="global-footer">
    <div class="wrapper global-footer__body">
      <div class="global-footer__column">
        <embellishment></embellishment>
        <ul class="global-footer__links">
          <li v-for="(option, index) in footer.links" class="global-footer__links-item" :key="'footerlink' + index">
            <a :href="option.url" class="global-footer__links-anchor">{{option.label}}</a>
          </li>
        </ul>
      </div>
      <div class="global-footer__column">
        <embellishment></embellishment>
        <h3 class="global-footer__heading">{{footer.contact.header}}</h3>
        <p v-for="(option, index) in footer.contact.links" :key="'contact-option-' + index" class="global-footer__contact">
          <span class="global-footer__contact-label">{{option.prefix}}</span>
          <a :href="option.url" class="global-footer__contact-link">{{option.label}}</a>
        </p>
        <p class="global-footer__contact"></p>
      </div>
      <div class="global-footer__column">
        <embellishment></embellishment>
        <h3 class="global-footer__heading">{{footer.social.header}}</h3>
        <social-links :social-options="socialLinks"></social-links>
      </div>
      <div class="global-footer__column global-footer__column--main">
        <img src="/images/brand-logo.png" class="global-footer__logo" />
        <p class="global-footer__copyright">{{footer.copyright}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SocialLinks from '~/components/SocialLinks.vue'
import Embellishment from '~/components/Embellishment.vue'

export default {
  components: {
    SocialLinks,
    Embellishment
  },
  computed: {
    ...mapState(['header']),
    socialLinks () {
      return this.footer.social.links.map(link => ({
        ...link,
      }))
    }
  }
}
</script>

