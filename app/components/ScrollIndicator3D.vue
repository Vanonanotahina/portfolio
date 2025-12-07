<template>
  <div ref="container" class="scroll-indicator-container fixed bottom-5 left-1/2 -translate-x-1/2 pointer-events-none"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'

const container = ref<HTMLElement|null>(null)
let renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera, mesh: THREE.Mesh
let animationId: number

onMounted(() => {
  if (!container.value) return

  // Scene
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
  camera.position.z = 3

  // Renderer
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(100, 100)
  container.value.appendChild(renderer.domElement)

  // Losange
  const geometry = new THREE.PlaneGeometry(1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })
  mesh = new THREE.Mesh(geometry, material)
  mesh.rotation.z = THREE.MathUtils.degToRad(45) // transformer en losange
  scene.add(mesh)

  // Axe de rotation = diagonale
  const axis = new THREE.Vector3(-1, 1, 0).normalize()

  function animate() {
    mesh.rotateOnAxis(axis, 0.1) // rotation continue
    renderer.render(scene, camera)
    animationId = requestAnimationFrame(animate)
  }

  animate()
})

onBeforeUnmount(() => {
  if (animationId) cancelAnimationFrame(animationId)
  if (container.value) container.value.removeChild(renderer.domElement)
})
</script>
