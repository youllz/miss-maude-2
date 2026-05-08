<script>
	import ImgDialog from '$lib/components/imgDialog.svelte';
	import { onMount } from 'svelte';
	import Ukiyo from 'ukiyojs';
	import NavColl from '../nav-coll.svelte';
	import CollHead from '$lib/components/coll-head.svelte';
	import { collectionData, domainName } from '$lib';

	const collection_v1 = [
		// v-1
		'/images/MALAIKA/V-1/image-8.avif',
		'/images/MALAIKA/V-1/image-9.avif'
	];

	const collection_v2 = [
		// v-2
		'/images/MALAIKA/V-2/image-10.avif',
		'/images/MALAIKA/V-2/image-11.avif'
	];
	const collection_v3 = [
		// v-3
		'/images/MALAIKA/V-3/image-12.avif',
		'/images/MALAIKA/V-3/image-13.avif'
	];

	onMount(() => {
		new Ukiyo('.ukiyo', {
			scale: 1.2
		});
	});

	const collection = collectionData['malaika'];
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: collection.title,
		description: collection.desc,
		brand: { '@type': 'Brand', name: 'MISS MAUDE' },
		image: `${domainName}${collection.image}`,
		offers: {
			'@type': 'Offer',
			availability: 'https://schema.org/PreOrder',
			price: '0',
			priceCurrency: 'CFA',
			description: 'Confection sur mesure - Prix sur demande'
		}
	};

	// eslint-disable-next-line no-useless-escape
	const jsonLdString = `<script type="application/ld+json">${JSON.stringify(jsonLd)}<\/script>`;
</script>

<svelte:head>
	<title>{collection.title}</title>
	<meta name="description" content={collection.desc} />

	<meta property="og:title" content={collection.title} />
	<meta property="og:description" content={collection.desc} />
	<meta property="og:image" content="{domainName}{collection.image}" />
	<meta property="og:type" content="article" />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLdString}
</svelte:head>

<div class="coll-container">
	<NavColl collectionName="ayana" order={2} />
	<CollHead
		desc="Cette robe attire l'attention et capte le regard.
Ses couleurs, ses motifs, et sa coupe unique créent un effet hypnotique qui attire l'oeil et suscite l'admiration."
		collName="malaika"
	/>
	<div class="coll-img-container">
		{#each collection_v1 as image, idx (idx)}
			<ImgDialog imgTrigger={image} imgCollection={collection_v1} />
		{/each}
		<span class="coll-label"> 01 </span>
	</div>
	<div class="coll-img-container">
		{#each collection_v2 as image, idx (idx)}
			<ImgDialog imgTrigger={image} imgCollection={collection_v2} />
		{/each}
		<span class="coll-label"> 02 </span>
		<p>
			On ne peut s'empêcher de la regarder, de la contempler, et de se laisser emporter par
			l'enchantement qu'elle dégage.
		</p>
	</div>
	<div class="coll-img-container">
		{#each collection_v3 as image, idx (idx)}
			<ImgDialog imgTrigger={image} imgCollection={collection_v3} />
		{/each}
		<span class="coll-label"> 03 </span>
	</div>
	<NavColl collectionName="nabou" justifyContent="flex-end" />
</div>

<style>
</style>
