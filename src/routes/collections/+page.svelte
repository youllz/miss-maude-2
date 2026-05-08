<script>
	import { collectionHover } from '$lib/state.svelte';
	import { fade } from 'svelte/transition';
	import { circOut } from 'svelte/easing';
	import { domainName } from '$lib';

	const ayana = [
		'/images/AYANA/V-1/image-1.avif',
		'/images/AYANA/V-2/image-3.avif',
		'/images/AYANA/V-3/image-6.avif'
	];
	const malaika = [
		'/images/MALAIKA/V-1/image-8.avif',
		'/images/MALAIKA/V-2/image-11.avif',
		'/images/MALAIKA/V-3/image-12.avif'
	];

	const nabou = [
		'/images/NABOU/V-1/image-14.avif',
		'/images/NABOU/V-1/image-15.avif',
		'/images/NABOU/V-2/image-16.avif',
		'/images/NABOU/V-2/image-17.avif'
	];

	const nanssy = [
		'/images/NANSSY/V-1/image-18.avif',
		'/images/NANSSY/V-2/image-20.avif',
		'/images/NANSSY/V-3/image-23.avif',
		'/images/NANSSY/V-4/image-25.avif',
		'/images/NANSSY/V-5/image-27.avif',
		'/images/NANSSY/V-6/image-29.avif'
	];

	const nayanka = [
		'/images/NAYANKA/V-1/image-37.avif',
		'/images/NAYANKA/V-2/image-39.avif',
		'/images/NAYANKA/V-2/image-41.avif'
	];

	const obara = [
		'/images/OBARA/V-1/image-45.avif',
		'/images/OBARA/V-2/image-47.avif',
		'/images/OBARA/V-3/image-49.avif',
		'/images/OBARA/V-4/image-51.avif'
	];
	const selene = [
		'/images/SELENE/V-1/image-54.avif',
		'/images/SELENE/V-2/image-56.avif',
		'/images/SELENE/V-3/image-58.avif'
	];

	let links = [
		{
			label: 'ayana',
			url: '/collections/ayana'
		},
		{
			label: 'malaika',
			url: '/collections/malaika'
		},
		{
			label: 'nabou',
			url: '/collections/nabou'
		},
		{
			label: 'nanssy',
			url: '/collections/nanssy'
		},
		{
			label: 'nayanka',
			url: '/collections/nayanka'
		},
		{
			label: 'obara',
			url: '/collections/obara'
		},
		{
			label: 'selene',
			url: '/collections/selene'
		}
	];

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'Collections de Boubous de Luxe',
		description: 'Liste des collections exclusives de la marque NOM_DE_MARQUE',
		url: `${domainName}/collections`,
		itemListElement: links.map((link, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: link.label.charAt(0).toUpperCase() + link.label.slice(1),
			url: `${domainName}${link.url}`
		}))
	};

	const jsonLdString = `<script type="application/ld+json">${JSON.stringify(jsonLd)}<\/script>`;
</script>

<svelte:head>
	<title>MISS MAUDE | L'Anthologie des Collections</title>
	<meta
		name="description"
		content="Explorez l'univers de MISS MAUDE : des collections de boubous de luxe, créations artisanales uniques et pièces de haute couture faites à la main."
	/>

	<meta property="og:title" content="Les Collections MISS MAUDE | L'Art du Boubou" />
	<meta property="og:image" content="{domainName}/images/vue-ensemble-collections.jpg" />

	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLdString}
</svelte:head>

<div class="collection-img">
	{#each ayana as img, idx (idx)}
		<figure class="ayana-card-{idx + 1}">
			{#if collectionHover.current === 'ayana'}
				<img
					in:fade={{ duration: 600, easing: circOut, delay: 300 }}
					out:fade={{ duration: 600, easing: circOut }}
					loading="eager"
					fetchpriority="high"
					src={img}
					alt=""
				/>
			{/if}
		</figure>
	{/each}

	<!-- MALAIKA -->
	{#each malaika as img, idx (idx)}
		<figure
			in:fade={{ duration: 700, easing: circOut, delay: 300 }}
			out:fade={{ duration: 600, easing: circOut }}
			class="malaika-card-{idx + 1}"
		>
			{#if collectionHover.current === 'malaika'}
				<img
					in:fade={{ duration: 600, easing: circOut, delay: 300 }}
					out:fade={{ duration: 600, easing: circOut }}
					loading="eager"
					fetchpriority="high"
					src={img}
					alt=""
				/>
			{/if}
		</figure>
	{/each}
	<!-- NABOU -->
	{#each nabou as img, idx (idx)}
		<figure
			in:fade={{ duration: 700, easing: circOut, delay: 300 }}
			out:fade={{ duration: 600, easing: circOut }}
			class="nabou-card-{idx + 1}"
		>
			{#if collectionHover.current === 'nabou'}
				<img
					in:fade={{ duration: 600, easing: circOut, delay: 300 }}
					out:fade={{ duration: 600, easing: circOut }}
					loading="eager"
					fetchpriority="high"
					src={img}
					alt=""
				/>
			{/if}
		</figure>
	{/each}
	<!-- NANSSY -->
	{#each nanssy as img, idx (idx)}
		<figure
			in:fade={{ duration: 700, easing: circOut, delay: 300 }}
			out:fade={{ duration: 600, easing: circOut }}
			class="nanssy-card-{idx + 1}"
		>
			{#if collectionHover.current === 'nanssy'}
				<img
					in:fade={{ duration: 600, easing: circOut, delay: 300 }}
					out:fade={{ duration: 600, easing: circOut }}
					loading="eager"
					fetchpriority="high"
					src={img}
					alt=""
				/>
			{/if}
		</figure>
	{/each}

	<!-- nayanka -->
	{#each nayanka as img, idx (idx)}
		<figure
			in:fade={{ duration: 700, easing: circOut, delay: 300 }}
			out:fade={{ duration: 600, easing: circOut }}
			class="nayanka-card-{idx + 1}"
		>
			{#if collectionHover.current === 'nayanka'}
				<img
					in:fade={{ duration: 600, easing: circOut, delay: 300 }}
					out:fade={{ duration: 600, easing: circOut }}
					loading="eager"
					fetchpriority="high"
					src={img}
					alt=""
				/>
			{/if}
		</figure>
	{/each}

	<!-- obara -->
	{#each obara as img, idx (idx)}
		<figure
			in:fade={{ duration: 700, easing: circOut, delay: 300 }}
			out:fade={{ duration: 600, easing: circOut }}
			class="obara-card-{idx + 1}"
		>
			{#if collectionHover.current === 'obara'}
				<img
					in:fade={{ duration: 600, easing: circOut, delay: 300 }}
					out:fade={{ duration: 600, easing: circOut }}
					loading="eager"
					fetchpriority="high"
					src={img}
					alt=""
				/>
			{/if}
		</figure>
	{/each}
	<!-- selene -->
	{#each selene as img, idx (idx)}
		<figure
			in:fade={{ duration: 700, easing: circOut, delay: 300 }}
			out:fade={{ duration: 600, easing: circOut }}
			class="selene-card-{idx + 1}"
		>
			{#if collectionHover.current === 'selene'}
				<img
					in:fade={{ duration: 600, easing: circOut, delay: 300 }}
					out:fade={{ duration: 600, easing: circOut }}
					loading="eager"
					fetchpriority="high"
					src={img}
					alt=""
				/>
			{/if}
		</figure>
	{/each}
</div>

<style>
	.collection-img {
		height: 100dvh;
		/* background-color: red; */
		position: fixed;
		top: 0%;
		width: 100%;
		right: 0;
		z-index: -1;
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-template-rows: repeat(9, auto);
	}

	figure {
		position: absolute;
		overflow: clip;
		transform-origin: bottom;
	}

	img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: contain;
		transform-origin: bottom;
	}

	/* ayana */
	.ayana-card-1 {
		grid-column: 3 / 4;
		grid-row: 3 / 8;
	}
	.ayana-card-2 {
		grid-column: 5 / 6;
		grid-row: 7 / 8;
	}
	.ayana-card-3 {
		grid-column: 7 / 8;
		grid-row: 2 / 4;
	}

	/* malaika */
	.malaika-card-1 {
		grid-column: 3 / 4;
		grid-row: 3 / 4;
	}
	.malaika-card-2 {
		grid-column: 5 / 7;
		grid-row: 7 / 8;
	}
	.malaika-card-3 {
		grid-column: 6 / 8;
		grid-row: 2 / 4;
	}

	/* nabou */

	.nabou-card-1 {
		grid-column: 4 / 5;
		grid-row: 2 / 3;
	}
	.nabou-card-2 {
		grid-column: 6 / 7;
		grid-row: 6 / 8;
	}
	.nabou-card-3 {
		grid-column: 2 / 4;
		grid-row: 2 / 3;
	}
	.nabou-card-4 {
		grid-column: 7 / 8;
		grid-row: 1 / 5;
	}

	/* nanssy */

	.nanssy-card-1 {
		grid-column: 3 / 4;
		grid-row: 3 / 4;
	}
	.nanssy-card-2 {
		grid-column: 5/ 6;
		grid-row: 1 / 2;
	}
	.nanssy-card-3 {
		grid-column: 5 / 4;
		grid-row: 5 / 4;
	}
	.nanssy-card-4 {
		grid-column: 6;
		grid-row: 6;
	}
	.nanssy-card-5 {
		grid-column: 7 / 8;
		grid-row: 1 / 5;
	}
	.nanssy-card-6 {
		grid-column: 2 / 4;
		grid-row: 7 / 8;
	}

	/* nayanka */

	.nayanka-card-1 {
		grid-column: 3 / 5;
		grid-row: 3 / 5;
	}
	.nayanka-card-2 {
		grid-column: 5/ 6;
		grid-row: 1 / 2;
	}
	.nayanka-card-3 {
		grid-column: 7 / 8;
		grid-row: 1 / 3;
	}

	/* obara */
	.obara-card-1 {
		grid-column: 3 / 4;
		grid-row: 3 / 4;
	}
	.obara-card-2 {
		grid-column: 6/ 8;
		grid-row: 1 / 8;
	}
	.obara-card-3 {
		grid-column: 7 / 8;
		grid-row: 1 / 3;
	}
	.obara-card-4 {
		grid-column: 2 / 3;
		grid-row: 2 / 2;
	}

	/* selene */
	.selene-card-1 {
		grid-column: 3 / 5;
		grid-row: 3 / 8;
	}
	.selene-card-2 {
		grid-column: 5 / 6;
		grid-row: 7 / 8;
	}
	.selene-card-3 {
		grid-column: 7 / 8;
		grid-row: 2 / 4;
	}
</style>
