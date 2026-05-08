<script>
	import ImgDialog from '$lib/components/imgDialog.svelte';
	import { onMount } from 'svelte';
	import Ukiyo from 'ukiyojs';
	import NextColl from '../nav-coll.svelte';
	import CollHead from '$lib/components/coll-head.svelte';
	import { collectionData, domainName } from '$lib';

	const collection_v1 = [
		// v-1
		'/images/AYANA/V-1/image-1.avif',
		'/images/AYANA/V-1/image-2.avif'
	];

	const collection_v2 = [
		// v-2
		'/images/AYANA/V-2/image-3.avif',
		'/images/AYANA/V-2/image-4.avif',
		'/images/AYANA/V-2/image-5.avif'
	];
	const collection_v3 = [
		// v-3
		'/images/AYANA/V-3/image-6.avif',
		'/images/AYANA/V-3/image-7.avif'
	];

	onMount(() => {
		new Ukiyo('.ukiyo', {
			scale: 1.2
		});
	});

	const collection = collectionData['ayana'];

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
	<CollHead
		desc="Chaque pli, chaque broderie évoque la maîtrise du geste et la douceur de l’allure."
		collName="ayana"
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
		<p>Une pièce signature – entre grâce naturelle et noblesse silencieuse.</p>
	</div>
	<div class="coll-img-container">
		{#each collection_v3 as image, idx (idx)}
			<ImgDialog imgTrigger={image} imgCollection={collection_v3} />
		{/each}
		<span class="coll-label"> 03 </span>
	</div>
	<NextColl collectionName="malaika" justifyContent="flex-end" />
</div>

<style>
</style>
