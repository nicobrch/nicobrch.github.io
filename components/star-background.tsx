"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const StarryBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });

        // Set renderer size and background
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000);

        // Add renderer to DOM
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        mountRef.current.appendChild(renderer.domElement);

        // Create stars
        const starsGeometry = new THREE.BufferGeometry();
        const starsMaterial = new THREE.PointsMaterial({
            color: 0xFFFFFF,
            size: 0.1,
            transparent: true,  // Enable transparency
            opacity: 0.25       // Set opacity to 50%
        });

        // Generate random star positions
        const starsVertices = [];
        for (let i = 0; i < 5000; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 0.5) * 2000;
            starsVertices.push(x, y, z);
        }

        starsGeometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(starsVertices, 3)
        );

        const stars = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(stars);

        // Position camera
        camera.position.z = 5;

        // Animation function
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate stars slowly
            stars.rotation.y += 0.0002;
            stars.rotation.x += 0.0001;

            renderer.render(scene, camera);
        };

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            // eslint-disable-next-line react-hooks/exhaustive-deps
            mountRef.current.removeChild(renderer.domElement);
            scene.remove(stars);
            starsGeometry.dispose();
            starsMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="fixed top-0 left-0 w-full h-full -z-10"
        />
    );
};

export default StarryBackground;
