<script>
	import Nav from '$lib/components/nav.svelte';
	import { resolve } from '$app/paths';

	//  import { domainName } from '$lib';

	const images = [
		'/images/AYANA/V-1/image-1.avif',
		'/images/AYANA/V-1/image-2.avif',
		'/images/AYANA/V-2/image-3.avif',
		'/images/AYANA/V-2/image-4.avif',
		'/images/AYANA/V-2/image-5.avif',
		'/images/AYANA/V-3/image-6.avif',
		'/images/AYANA/V-3/image-7.avif',

		'/images/MALAIKA/V-1/image-8.avif',
		'/images/MALAIKA/V-1/image-9.avif',
		'/images/MALAIKA/V-2/image-10.avif',
		'/images/MALAIKA/V-2/image-11.avif',
		'/images/MALAIKA/V-3/image-12.avif',
		'/images/MALAIKA/V-3/image-13.avif',

		'/images/NABOU/V-1/image-14.avif',
		'/images/NABOU/V-1/image-15.avif',
		'/images/NABOU/V-2/image-16.avif',
		'/images/NABOU/V-2/image-17.avif',
		'/images/NANSSY/V-1/image-18.avif',
		'/images/NANSSY/V-1/image-19.avif',
		'/images/NANSSY/V-2/image-20.avif',
		'/images/NANSSY/V-2/image-21.avif',
		'/images/NANSSY/V-2/image-22.avif',
		'/images/NANSSY/V-3/image-23.avif',
		'/images/NANSSY/V-3/image-24.avif',
		'/images/NANSSY/V-4/image-25.avif',
		'/images/NANSSY/V-4/image-26.avif',
		'/images/NANSSY/V-5/image-27.avif',
		'/images/NANSSY/V-5/image-28.avif',
		'/images/NANSSY/V-6/image-29.avif',
		'/images/NANSSY/V-6/image-30.avif',
		'/images/NANSSY/V-7/image-31.avif',
		'/images/NANSSY/V-7/image-32.avif',
		'/images/NANSSY/V-8/image-33.avif',
		'/images/NANSSY/V-8/image-34.avif',
		'/images/NANSSY/V-9/image-35.avif',
		'/images/NANSSY/V-9/image-36.avif',
		'/images/NAYANKA/V-1/image-37.avif',
		'/images/NAYANKA/V-1/image-38.avif',
		'/images/NAYANKA/V-2/image-39.avif',
		'/images/NAYANKA/V-2/image-40.avif',
		'/images/NAYANKA/V-2/image-41.avif',
		'/images/OBARA/V-1/image-45.avif',
		'/images/OBARA/V-1/image-46.avif',
		'/images/OBARA/V-2/image-47.avif',
		'/images/OBARA/V-2/image-48.avif',
		'/images/OBARA/V-3/image-49.avif',
		'/images/OBARA/V-3/image-50.avif',
		'/images/OBARA/V-4/image-51.avif',
		'/images/OBARA/V-4/image-52.avif',
		'/images/SELENE/V-1/image-54.avif',
		'/images/SELENE/V-1/image-55.avif',
		'/images/SELENE/V-2/image-56.avif',
		'/images/SELENE/V-2/image-57.avif',
		'/images/SELENE/V-3/image-58.avif',
		'/images/SELENE/V-3/image-59.avif'
	];

	const size = Math.ceil(images.length / 3);

	const col1 = images.slice(0, size);
	const col2 = images.slice(size, size * 2);
	const col3 = images.slice(size * 2);
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
	<h1>GALERIE</h1>
	<!--  -->

	<div class="grid-container">
		<div class="columns">
			<div class="column column-reverse">
				{#each col1 as img, idx (idx)}
					{@const collectionName = img.split('/')[2].toLowerCase()}

					<a href={resolve('/collections/' + collectionName)}>
						<figure>
							<img src={img} alt="image {idx + 1} de la collolection {collectionName}" />
							<figcaption>{collectionName}</figcaption>
						</figure>
					</a>
				{/each}
			</div>
			<div class="column">
				{#each col2 as img, idx (idx)}
					{@const collectionName = img.split('/')[2].toLowerCase()}

					<a href={resolve('/collections/' + collectionName)}>
						<figure>
							<img src={img} alt="image {idx + 1} de la collolection {collectionName}" />
							<figcaption>{collectionName}</figcaption>
						</figure>
					</a>
				{/each}
			</div>
			<div class="column column-reverse">
				{#each col3 as img, idx (idx)}
					{@const collectionName = img.split('/')[2].toLowerCase()}

					<a href={resolve('/collections/' + collectionName)}>
						<figure>
							<img src={img} alt="image {idx + 1} de la collolection {collectionName}" />
							<figcaption>{collectionName}</figcaption>
						</figure>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	h1 {
		font-size: clamp(50px, calc(10vw + 0.1rem), 10rem);
		font-family: var(--font-serif);
		text-transform: uppercase;
		font-weight: var(--font-medium);
		padding: var(--space-4);
	}
	.grid-container {
		padding: var(--space-4);
	}

	/* Grille de 3 colonnes */
	.columns {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		/* On cache le débordement car on va physiquement décaler les colonnes hors de l'écran */
		overflow-y: hidden;
	}

	.column {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	/* Inverser l'ordre des éléments dans les colonnes latérales */
	.column-reverse {
		flex-direction: column-reverse;
	}

	/* Définition de l'animation pour les colonnes latérales */
	.column-reverse {
		/* Position de départ : poussée vers le haut */
		transform: translateY(calc(-100% + 100vh));

		/* Lancement de l'animation */
		animation: adjust-position linear forwards;

		/* LIAISON AU SCROLL : l'animation avance en fonction du défilement de la page entière */
		animation-timeline: scroll(root block);
	}

	/* Les étapes de l'animation */
	@keyframes adjust-position {
		/* Du haut de la page... */
		from {
			transform: translateY(calc(-100% + 100vh));
		}
		/* ...vers le bas de la page */
		to {
			transform: translateY(calc(100% - 100vh));
		}
	}
	a {
		width: 100%;
		aspect-ratio: 1;

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	figcaption {
		font-size: var(--text-base);
		font-family: var(--font-serif);
		text-transform: uppercase;
		font-weight: var(--font-medium);
	}
</style>
