<script>
	import Nav from '$lib/components/nav.svelte';
	import { onMount } from 'svelte';
	import Ukiyo from 'ukiyojs';

	onMount(() => {
		new Ukiyo('.ukiyo', {
			scale: 1.5
		});
	});
</script>

<Nav />
<section class="wrapper">
	<!-- <img
		src="/images/obara.jpg"
		alt=""
		class="h-full w-full max-w-sm object-cover object-center max-sm:h-[50dvh]"
	/> -->
	<video src="/videos/vid-1.mp4" autoplay loop muted class="ukiyo"></video>
	<div class="title">
		<h1 class="">
			MISS MAUDE <br /> THE EDIT
		</h1>
	</div>
</section>

<style>
	h1 {
		font-size: clamp(5rem, calc(11vw + 0.1rem), 10rem);
		line-height: 1;
		font-weight: var(--font-normal);
		font-family: Melodrama;
		text-align: center;
		text-transform: uppercase;
		font-weight: var(--font-medium);
		line-height: 0.8;
	}

	section {
		position: relative;
		height: 100dvh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		z-index: 20;
		top: 0;
		background-color: var(--color-white);
	}

	.title {
		position: absolute;
		bottom: 10%;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1;
		mix-blend-mode: difference;
		color: var(--color-white);
		/* background-color: red; */
		width: 100%;
	}

	video {
		max-width: 400px;
		margin-inline: auto;
		width: 100%;
		height: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		object-position: top;
	}

	@media (width < 600px) {
		video {
			height: 70% !important;
		}
	}
</style>
