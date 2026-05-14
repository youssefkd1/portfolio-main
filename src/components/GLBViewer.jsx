import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const GLBViewer = ({ 
  modelPath = '/model (2).glb', 
  scale = 1,
  rotationSpeed = 0.005,
  showAutoRotate = true,
  lights = true,
  className = ''
}) => {
  const containerRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const rendererRef = useRef(null)
  const modelRef = useRef(null)
  const animationFrameRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0a0e27)
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.set(0, 0, 1.5)
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      precision: 'highp'
    })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFShadowShadowMap
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Lighting
    if (lights) {
      // Ambient light - increased brightness
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.2)
      scene.add(ambientLight)

      // Main directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5)
      directionalLight.position.set(5, 10, 5)
      directionalLight.castShadow = true
      directionalLight.shadow.mapSize.width = 2048
      directionalLight.shadow.mapSize.height = 2048
      directionalLight.shadow.camera.far = 50
      scene.add(directionalLight)

      // Fill light
      const fillLight = new THREE.DirectionalLight(0xffffff, 0.8)
      fillLight.position.set(-5, 5, -5)
      scene.add(fillLight)

      // Back light
      const backLight = new THREE.DirectionalLight(0x88ccff, 0.8)
      backLight.position.set(0, 5, -10)
      scene.add(backLight)
    }

    // Load model
    const loader = new GLTFLoader()
    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene
        model.scale.set(scale, scale, scale)
        
        // Center model
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        model.position.sub(center)
        // Move model up
        model.position.y += 1.2
        
        scene.add(model)
        modelRef.current = model

        // Enable shadows for all meshes
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
          }
        })
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total) * 100 + '%')
      },
      (error) => {
        console.error('Error loading model:', error)
      }
    )

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate)

      if (modelRef.current && showAutoRotate) {
        modelRef.current.rotation.y += rotationSpeed
      }

      renderer.render(scene, camera)
    }
    animate()

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return

      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }
      renderer.dispose()
    }
  }, [modelPath, scale, rotationSpeed, showAutoRotate, lights])

  return (
    <div
      ref={containerRef}
      className={`w-full h-full rounded-2xl overflow-hidden ${className}`}
      style={{ minHeight: '400px' }}
    />
  )
}

export default GLBViewer
