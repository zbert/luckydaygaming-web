import Vue from 'vue'

let rAFTicker = false
let callbacks = []

// Request animation Frame
function windowScrollCallbacks() {
  let pageOffset = window.pageYOffset;

  callbacks.forEach(function (callback) {
    callback(pageOffset)
  })

  rAFTicker = false;
}

function requestTicker() {
  if (!rAFTicker) {
    rAFTicker = true

    window.requestAnimationFrame(windowScrollCallbacks)
  }
}

function attachScrollEvent () {
  // only listen for scroll events
  window.addEventListener('scroll', requestTicker, false)
}

function removeScrollEvent () {
  // Remove ScrollEvent
  window.removeEventListener('scroll', requestTicker, false)
}

function addScrollCallback (callback) {
  if (!callbacks.length) {
    attachScrollEvent()
  }

  if (typeof callback === 'function') {
    callbacks.push(callback)
  } else {
    console.log(callback, 'was not a function')
  }
}
// End Request Animation Service

const VueScroll = {}

VueScroll.install = function (Vue, options) {
  Vue.directive('scroll', {
    bind: (el, binding) => {
      const error = () => console.log('Error', value)

      addScrollCallback(binding.value)
    },
    unbind: (el) => {
      removeScrollEvent()
    }
  })
}

Vue.use(VueScroll)
