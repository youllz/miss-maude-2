<script>
	import favicon from '$lib/assets/favicon_2.svg';
	import { onMount } from 'svelte';
	import './layout.css';
	import Lenis from 'lenis';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	let { children } = $props();

	onMount(() => {
		// new Ukiyo('.ukiyo', {
		// 	scale: 1.2
		// });

		const lenis = new Lenis({
			lerp: 0.08,
			wheelMultiplier: 1.4
		});

		// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
		lenis.on('scroll', ScrollTrigger.update);

		// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
		// This ensures Lenis's smooth scroll animation updates on each GSAP tick
		gsap.ticker.add((time) => {
			lenis.raf(time * 1000); // Convert time from seconds to milliseconds
		});

		// Disable lag smoothing in GSAP to prevent any delay in scroll animations
		gsap.ticker.lagSmoothing(0);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main>
	{@render children()}
</main>
