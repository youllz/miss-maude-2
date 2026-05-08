<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { resolve } from '$app/paths';

	const images = [
		'/images/NANSSY/V-3/image-23.avif',
		'/images/NANSSY/V-4/image-25.avif',
		'/images/NANSSY/V-5/image-27.avif',
		'/images/NANSSY/V-6/image-29.avif'
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
		viewport.addEventListener(
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

<section>
	<div class="head-container">
		<div></div>
		<div class="collec-container">
			<div class="collec-title">
				<span class="section-label">a la une</span>
				<h2>nanssy</h2>
			</div>
			<div class="collec-descrption">
				<!-- <p>
					OBARA est née pour célébrer les femmes qui osent briller, celles qui avancent avec douceur
					mais ne passent jamais inaperçues.
				</p> -->
				<p>
					Une coupe ample et majestueuse, des manches spectaculaires, un tombé qui glisse sur la
					peau comme une caresse.
				</p>
			</div>

			<!-- link -->

			<div class="link">
				<a href={resolve('/collections/nanssy')}> VOIR PLUS</a>
				<div class="line"></div>
			</div>
		</div>
	</div>

	<!-- carrousel -->

	<!-- Main wrapper for the carousel -->
	<div class="wrap">
		<!-- Viewport acts as the visible window where cards slide -->
		<div class="viewport" id="viewport">
			<!-- Track holds all the cards and is the element we animate -->
			<div class="track" id="track">
				<!-- Each card contains an image -->
				{#each images as image, idx (idx)}
					<div class="card">
						<div class="card-inner">
							<!-- <enhance:img
								class="img"
								src={image}
								alt="Image {idx + 1} de la collection à la une"
							/> -->
							<img src={image} alt="" />
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
		background-color: var(--color-white);
		color: var(--color-black);
		display: flex;
		gap: var(--space-10);
		flex-direction: column;
	}

	.head-container {
		display: flex;
		flex-direction: column;
		gap: var(--space-12);
		padding-inline: var(--space-8);
		padding-top: var(--space-20);

		/* background-color: green; */
	}

	.section-label {
		font-family: var(--font-sans);
		text-transform: uppercase;
		color: var(--color-neutral-500);
	}

	.collec-title {
		h2 {
			font-size: clamp(50px, calc(10vw + 0.1rem), 10rem);
			line-height: 0.9;
			font-weight: var(--font-normal);
			font-family: Melodrama;
			text-transform: uppercase;
		}
	}

	.collec-container {
		display: flex;
		justify-content: space-between;

		.link {
			align-self: flex-end;
			display: flex;
			align-items: center;
			gap: var(--space-2);

			@media (width < 600px) {
				align-self: flex-start;
			}
		}

		a {
			font-weight: var(--font-medium);
			font-size: var(--text-base);
		}

		.line {
			height: 2px;
			width: 50px;
			background-color: var(--color-neutral-600);
		}
	}

	.collec-descrption {
		width: 100%;
		max-width: 350px;
		display: flex;

		p {
			line-height: var(--leading-normal);
			text-wrap: pretty;
			align-self: flex-end;
			text-transform: uppercase;
		}
	}

	@media (width < 600px) {
		.collec-container {
			flex-direction: column;
			gap: var(--space-4);

			a {
				align-self: flex-start;
				/* margin-top: var(-s); */
			}
		}

		.collec-descrption {
			margin-top: var(--space-4);
		}
	}

	/*  */

	.wrap {
		/* width: 100vw;
  height: 100vh; */
		flex-grow: 1;
		flex-shrink: 0;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		perspective: 1200px; /* Needed for 3D transforms */
		/* background-color: red; */
		overflow: clip;
	}

	/* Viewport is the visible area where cards slide */
	.viewport {
		width: 100%;
		height: 45dvh;
		overflow: visible;
		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
		position: relative;
		cursor: grab; /* Indicate draggable area */
		/* background-color: blue; */
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
		width: clamp(400px, 30vw, 400px); /* Responsive width */
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
		object-fit: contain;
		display: block;
		user-select: none; /* Prevent text selection */
		-webkit-user-drag: none; /* Disable image dragging */
		transform: translate3d(0, 0, 0); /* Enable GPU acceleration */
		will-change: transform;
	}
</style>
