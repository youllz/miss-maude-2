<script>
	import Nav from '$lib/components/nav.svelte';
</script>

<section>
	<Nav />

	<div class="container">
		<h1>a propos de nous ?</h1>
	</div>
</section>

<style>
	section {
		min-height: 100dvh;
		background-color: var(--color-black);
		color: var(--color-white);
	}

	.container {
		padding: var(--space-8);

		/* p {
			width: 100%;
			max-width: 400px;
			line-height: var(--leading-normal);
			text-wrap: pretty;
			margin-top: var(--space-4);
		} */
	}

	h1 {
		font-size: var(--text-5xl);
		font-family: var(--font-serif);
		text-transform: uppercase;
	}
</style>
