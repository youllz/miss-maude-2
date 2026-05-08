<script>
	// your script goes here
	import { resolve } from '$app/paths';
</script>

<section>
	<a href={resolve('/collections')}> Voir toute la collection </a>
</section>

<style>
	section {
		min-height: 100dvh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	a {
		font-size: clamp(7rem, calc(9dvw + 1rem), 9rem);
		font-family: Melodrama;
		text-transform: uppercase;
		text-align: center;
		color: var(--color-black);
	}
</style>
