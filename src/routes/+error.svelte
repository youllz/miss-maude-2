<script>
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>MISS MAUDE</title>
</svelte:head>

<section>
	<h1>404</h1>
	<p>
		La page que vous recherchez a été déplacée ou supprimée. Vérifiez l’URL ou revenez à la page
		d’accueil.
	</p>

	<div class="link">
		<span></span>
		<a href={resolve('/')}> Accueil </a>
	</div>
</section>

<style>
	section {
		min-height: 100dvh;
		background-color: var(--color-black);
		color: var(--color-white);
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: var(--space-8);
		gap: var(--space-4);
	}

	h1 {
		font-size: 8dvw;
		font-family: var(--font-serif);

		@media (width < 600px) {
			font-size: 5rem;
		}
	}

	p {
		max-width: 400px;
		width: 100%;
		text-wrap: balance;
		line-height: var(--leading-normal);
		font-size: var(--text-base);
		text-transform: uppercase;
	}

	a {
		color: var(--color-white);
		text-transform: uppercase;
		font-weight: var(--font-medium);
	}

	.link {
		display: flex;
		margin-top: var(--space-4);
		justify-content: center;
		align-items: center;
		align-self: flex-start;
		width: fit-content;
		gap: var(--space-2);

		span {
			height: 2px;
			width: 30px;
			background-color: var(--color-white);
		}
	}
</style>
