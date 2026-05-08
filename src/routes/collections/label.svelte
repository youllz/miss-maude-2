<script>
	let { children } = $props();
</script>

<span>
	{@render children()}
</span>

<style>
	span {
		font-family: var(--font-serif);
		font-size: var(--text-5xl);
		font-weight: var(--font-light);
		opacity: 0;

		transition: opacity 0.6 ease;
		animation-duration: 3s;
		animation-name: fade-in;
		animation-fill-mode: forwards;
	}

	@keyframes fade-in {
		to {
			opacity: 1;
		}
	}
</style>
