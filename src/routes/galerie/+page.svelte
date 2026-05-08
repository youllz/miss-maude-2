<script>
	import Nav from '$lib/components/nav.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	// import { domainName } from '$lib';

	const images = [
		'/images/AYANA/V-1/image-1.avif',
		// '/images/AYANA/V-1/image-2.avif',
		'/images/AYANA/V-2/image-3.avif',
		// '/images/AYANA/V-2/image-4.avif',
		// '/images/AYANA/V-2/image-5.avif',
		// '/images/AYANA/V-3/image-6.avif',
		'/images/AYANA/V-3/image-7.avif',

		//

		'/images/MALAIKA/V-1/image-8.avif',
		// '/images/MALAIKA/V-1/image-9.avif',
		// '/images/MALAIKA/V-2/image-10.avif',
		'/images/MALAIKA/V-2/image-11.avif',
		// '/images/MALAIKA/V-3/image-12.avif',
		'/images/MALAIKA/V-3/image-13.avif',

		//

		// '/images/NABOU/V-1/image-14.avif',
		'/images/NABOU/V-1/image-15.avif',
		// '/images/NABOU/V-2/image-16.avif',
		'/images/NABOU/V-2/image-17.avif',
		// '/images/NANSSY/V-1/image-18.avif',
		'/images/NANSSY/V-1/image-19.avif',
		// '/images/NANSSY/V-2/image-20.avif',
		// '/images/NANSSY/V-2/image-21.avif',
		'/images/NANSSY/V-2/image-22.avif',
		// '/images/NANSSY/V-3/image-23.avif',
		'/images/NANSSY/V-3/image-24.avif',
		// '/images/NANSSY/V-4/image-25.avif',
		'/images/NANSSY/V-4/image-26.avif',
		// '/images/NANSSY/V-5/image-27.avif',
		'/images/NANSSY/V-5/image-28.avif',
		// '/images/NANSSY/V-6/image-29.avif',
		'/images/NANSSY/V-6/image-30.avif',
		// '/images/NANSSY/V-7/image-31.avif',
		'/images/NANSSY/V-7/image-32.avif',
		// '/images/NANSSY/V-8/image-33.avif',
		'/images/NANSSY/V-8/image-34.avif',
		// '/images/NANSSY/V-9/image-35.avif',
		'/images/NANSSY/V-9/image-36.avif',
		// '/images/NAYANKA/V-1/image-37.avif',
		'/images/NAYANKA/V-1/image-38.avif',
		// '/images/NAYANKA/V-2/image-39.avif',
		// '/images/NAYANKA/V-2/image-40.avif',
		'/images/NAYANKA/V-2/image-41.avif',
		// '/images/OBARA/V-1/image-45.avif',
		'/images/OBARA/V-1/image-46.avif',
		// '/images/OBARA/V-2/image-47.avif',
		'/images/OBARA/V-2/image-48.avif',
		// '/images/OBARA/V-3/image-49.avif',
		'/images/OBARA/V-3/image-50.avif',
		// '/images/OBARA/V-4/image-51.avif',
		'/images/OBARA/V-4/image-52.avif',
		// '/images/SELENE/V-1/image-54.avif',
		'/images/SELENE/V-1/image-55.avif',
		// '/images/SELENE/V-2/image-56.avif',
		'/images/SELENE/V-2/image-57.avif',
		// '/images/SELENE/V-3/image-58.avif',
		'/images/SELENE/V-3/image-59.avif'

		//
	];

	onMount(() => {
		// Disable GSAP warnings about null targets
		gsap.config({ nullTargetWarn: false });

		// Get track and viewport elements from DOM
		const track = document.getElementById('track');
		const viewport = document.getElementById('viewport');

		// Get array of all card elements inside the track
		let cards = Array.from(track.children);
		const originalCount = cards.length; // Original number of cards

		// Function to clone the original cards multiple times for infinite scrolling illusion
		function ensureClones() {
			// Get only the original cards (first N cards)
			const originals = Array.from(track.querySelectorAll('.card')).slice(0, originalCount);

			// Clear track content before adding clones
			track.innerHTML = '';

			const cloneCount = 3; // How many times to repeat the originals
			for (let i = 0; i < cloneCount; i++) {
				originals.forEach((c) => track.appendChild(c.cloneNode(true))); // Clone each card and append
			}
		}

		// Call to clone cards initially
		ensureClones();

		// Refresh the cards array after cloning
		cards = Array.from(track.children);

		// Function to get total width of one card including margin
		function getItemWidth() {
			const style = getComputedStyle(cards[0]);
			return cards[0].offsetWidth + parseFloat(style.marginRight || 0);
		}

		// Initialize item width and total track width
		let itemW = getItemWidth();
		let totalWidth = itemW * cards.length;

		// Center of the visible viewport horizontally
		let visibleCenterX = window.innerWidth / 2;

		// Variables for position, velocity, and smooth animation
		let position = 0;
		let velocity = 0;
		let smoothPos = 0;

		// Constants for friction (slowing down), scroll multiplier, and lerp speed
		const friction = 0.91;
		const wheelMultiplier = 0.1;
		const lerpSpeed = 0.14;

		/* ========== Input Handling ========== */

		// Handle wheel scroll for desktop to add velocity
		window.addEventListener(
			'wheel',
			(e) => {
				e.preventDefault(); // Prevent page scroll
				velocity += e.deltaY * wheelMultiplier; // Increase velocity based on scroll amount
			},
			{ passive: false }
		);

		// Touch input variables for mobile drag
		let touchStartX = null;

		// Touch start: save initial touch position
		viewport.addEventListener(
			'touchstart',
			(e) => {
				touchStartX = e.touches[0].clientX;
			},
			{ passive: true }
		);

		// Touch move: calculate movement delta and update position
		viewport.addEventListener(
			'touchmove',
			(e) => {
				if (touchStartX === null) return;
				const dx = e.touches[0].clientX - touchStartX;
				position -= dx;
				touchStartX = e.touches[0].clientX;
			},
			{ passive: true }
		);

		// Touch end: reset start position
		viewport.addEventListener('touchend', () => {
			touchStartX = null;
		});

		// Mouse drag variables for desktop dragging with momentum
		let isDragging = false;
		let lastX = 0;
		let dragStartTime = 0;
		let dragStartX = 0;

		// Mouse down: start dragging
		viewport.addEventListener('mousedown', (e) => {
			isDragging = true;
			lastX = e.clientX;
			dragStartX = e.clientX;
			dragStartTime = performance.now();
			velocity = 0; // Reset velocity when dragging starts
			viewport.classList.add('dragging'); // Change cursor style
		});

		// Mouse up: stop dragging and calculate velocity for momentum
		window.addEventListener('mouseup', (e) => {
			if (isDragging) {
				viewport.classList.remove('dragging');
				isDragging = false;

				const dx = e.clientX - dragStartX; // Distance dragged
				const dt = (performance.now() - dragStartTime) / 1000; // Duration in seconds

				if (dt > 0) {
					let v = -(dx / dt) * 0.03; // Calculate velocity
					const maxVelocity = 30; // Limit velocity max
					velocity = Math.max(Math.min(v, maxVelocity), -maxVelocity);
				}
			}
		});

		// Mouse move: update position while dragging
		viewport.addEventListener('mousemove', (e) => {
			if (!isDragging) return;
			const dx = e.clientX - lastX;
			position -= dx * 0.8; // Adjust position with drag distance
			lastX = e.clientX;
		});

		/* ========== Helper Functions ========== */

		// Wrap function to create infinite scrolling by wrapping around total width
		function wrap(x) {
			return ((x % totalWidth) + totalWidth) % totalWidth;
		}

		// Ease function for smooth scaling effect on cards
		function easeScale(t) {
			return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
		}

		/* ========== Animation Loop ========== */

		// Use GSAP ticker for smooth 60fps animation
		gsap.ticker.add(() => {
			// If not dragging, update position with velocity and apply friction
			if (!isDragging) {
				position += velocity;
				velocity *= friction;
			}

			// Smoothly interpolate position for fluid movement
			smoothPos += (position - smoothPos) * lerpSpeed;

			// Loop through all cards and update their transform styles
			for (let i = 0; i < cards.length; i++) {
				// Calculate base X position of card relative to smooth position
				let baseX = i * itemW - smoothPos;

				// Wrap the X position for infinite effect
				baseX = wrap(baseX);

				// Calculate final X position centered in viewport
				const finalX = baseX - totalWidth / 2 + visibleCenterX;

				// Get card center position on screen
				const cardCenterX = finalX + itemW / 2;

				// Distance from center of viewport
				const dist = Math.abs(cardCenterX - visibleCenterX);

				// Normalize distance to a 0-1 range for effect calculations
				let t = gsap.utils.clamp(0, 1, dist / Math.max(window.innerWidth, 900));
				t = easeScale(t);

				// Calculate card transformations based on distance
				const scale = gsap.utils.mapRange(0, 1, 1, 0.65, t); // Scale down away from center
				const rotateY =
					gsap.utils.mapRange(0, 1, 0, 20, t) * (cardCenterX < visibleCenterX ? 1 : -1); // Y-axis rotation
				const rotateX =
					gsap.utils.mapRange(0, 1, 0, 6, t) * (cardCenterX < visibleCenterX ? -1 : 1); // X-axis rotation
				const z = gsap.utils.mapRange(0, 1, 120, -60, t); // Z-axis translate (depth)
				const yOffset = gsap.utils.mapRange(0, 1, 0, 40, t); // Vertical offset
				const blur = gsap.utils.mapRange(0, 1, 0, 6, t); // Blur effect
				const brightness = gsap.utils.mapRange(0, 1, 1, 0.6, t); // Brightness dimming

				// Apply the calculated transforms to the card element
				gsap.set(cards[i], {
					x: finalX,
					y: yOffset,
					scaleX: scale,
					scaleY: scale,
					rotationY: rotateY,
					rotationX: rotateX,
					z,
					filter: `blur(${blur}px) brightness(${brightness})`,
					transformOrigin: 'center center'
				});

				// Parallax effect for image inside card based on horizontal position
				const parallaxRange = 40;
				const parallaxX = gsap.utils.mapRange(
					-window.innerWidth / 2,
					window.innerWidth / 2,
					parallaxRange,
					-parallaxRange,
					cardCenterX - visibleCenterX
				);
				const parallaxY = gsap.utils.mapRange(
					-window.innerWidth / 2,
					window.innerWidth / 2,
					-10,
					10,
					cardCenterX - visibleCenterX
				);

				// Animate image position smoothly for parallax effect
				gsap.to(cards[i].querySelector('.card-inner img'), {
					x: parallaxX,
					y: parallaxY,
					duration: 0.45,
					ease: 'power2.out'
				});
			}
		});

		/* ========== Resize Handling ========== */

		// Update card widths and center position on window resize
		window.addEventListener('resize', () => {
			itemW = getItemWidth();
			totalWidth = itemW * cards.length;
			visibleCenterX = window.innerWidth / 2;
		});
	});
</script>

<svelte:head>
	<title>MISS MAUDE | GALERIE</title>
	<meta
		name="description"
		content="Explorez l'art du boubou à travers notre galerie. Pièces d'exception, détails de broderies artisanales et créations sur-mesure pour vos plus grands événements."
	/>

	<meta property="og:title" content="Galerie de Créations | MISS MAUDE" />
	<!-- <meta property="og:image" content="{domainName}/images/gallerie-cover.jpg" /> -->
	<meta
		property="og:description"
		content="L'immersion visuelle dans le savoir-faire de nos ateliers."
	/>
</svelte:head>

<section>
	<Nav />
	<!--  -->
	<h1>GALLERIE</h1>
	<!--  -->

	<!-- Main wrapper for the carousel -->
	<div class="wrap">
		<!-- Viewport acts as the visible window where cards slide -->
		<div class="viewport" id="viewport">
			<!-- Track holds all the cards and is the element we animate -->
			<div class="track" id="track">
				<!-- Each card contains an image -->
				{#each images as img, idx (idx)}
					<div class="card">
						<div class="card-inner">
							<img src={img} alt="" />
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	section {
		height: 100dvh;
		width: 100dvw;
		overflow-x: hidden;
	}

	h1 {
		font-size: clamp(var(--text-5xl), 8dvw + 0.1rem, 8rem);
		font-family: var(--font-serif);
		position: fixed;
		top: calc(var(--space-24) * 1.5);
		left: var(--space-8);
	}

	/*  */

	/* Wrapper fills viewport and sets perspective for 3D effect */
	.wrap {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		perspective: 1200px; /* Needed for 3D transforms */
	}

	/* Viewport is the visible area where cards slide */
	.viewport {
		width: 100%;
		height: 33vh;
		overflow: visible;
		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
		position: relative;
		cursor: grab; /* Indicate draggable area */
	}

	/* Change cursor when dragging */
	.viewport.dragging {
		cursor: grabbing;
	}

	/* Track holds all cards and is positioned absolutely */
	.track {
		position: absolute;
		bottom: 16px;
		left: 0;
		height: 100%;
		will-change: transform; /* Optimize for transform changes */
	}

	/* Card size and spacing */
	.card {
		width: clamp(260px, 30vw, 400px); /* Responsive width */
		aspect-ratio: 1; /* Keep 16:9 ratio */
		margin-right: 48px; /* Space between cards */
		overflow: hidden;
		position: absolute; /* Positioned absolutely for stacking */
		bottom: 0;
		transform-style: preserve-3d; /* Allow 3D transforms */
		background: transparent;
	}

	/* Inner wrapper for card content */
	.card-inner {
		width: 100%;
		height: 100%;
		overflow: hidden;
		will-change: transform; /* Optimize for transform */
	}

	/* Image styling inside card */
	.card-inner img {
		width: 120%; /* Slightly zoomed for parallax */
		height: 120%;
		object-fit: cover;
		display: block;
		user-select: none; /* Prevent text selection */
		-webkit-user-drag: none; /* Disable image dragging */
		transform: translate3d(0, 0, 0); /* Enable GPU acceleration */
		will-change: transform;
	}
</style>
