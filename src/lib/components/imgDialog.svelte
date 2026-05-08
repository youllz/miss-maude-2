<script lang="ts">
	import { onMount } from 'svelte';
	const { imgTrigger } = $props();

	let isMounted = $state(false);
	onMount(() => {
		isMounted = true;
	});
</script>

<div class="img-container">
	<!-- <enhanced:img class="ukiyo" src={imgTrigger} /> -->
	<img class="ukiyo" src={imgTrigger} alt="" />
	<div class="rideau" class:rideau-out={isMounted}></div>
</div>

<style>
	.img-container {
		/* styles for the trigger element */
		/* display: inline-block; */
		/* width: 100%; */
		aspect-ratio: auto;
		border: none;
		background-color: transparent;
		margin-top: var(--space-4);
		position: relative;
		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	.rideau {
		position: absolute;
		display: block;
		height: 110%;
		width: 110%;
		inset: 0;
		background-color: var(--color-white);
		z-index: 3;
		transition: transform 1s cubic-bezier(0.86, 0, 0.14, 1);
	}

	.rideau-out {
		transform: translateY(-100%);
	}
</style>
