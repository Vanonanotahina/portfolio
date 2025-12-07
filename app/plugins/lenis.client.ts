// ~/plugins/lenis.client.ts
import { defineNuxtPlugin } from '#app'
import Lenis from 'lenis'

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    const lenis = new Lenis({
      duration: 0.1,
      easing: (t) => t*(2-t),
      orientation: 'vertical',
      gestureOrientation: 'vertical'
    })

    // RAF loop pour mettre à jour le scroll
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Optionnel : écoute des événements pour debug
    lenis.on('scroll', ({ scroll, limit, velocity, direction }) => {
      // console.log(scroll, velocity)
    })


  }
})
