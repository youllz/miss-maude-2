<script>
	import ImgDialog from '$lib/components/imgDialog.svelte';
	import { onMount } from 'svelte';
	import Ukiyo from 'ukiyojs';
	import NavColl from '../nav-coll.svelte';
	import CollHead from '$lib/components/coll-head.svelte';
	import { collectionData, domainName } from '$lib';

	const collection_v1 = [
		// v-1
		'/images/NABOU/V-1/image-14.avif',
		'/images/NABOU/V-1/image-15.avif'
	];

	const collection_v2 = [
		// v-2
		'/images/NABOU/V-2/image-16.avif',
		'/images/NABOU/V-2/image-17.avif'
	];

	onMount(() => {
		new Ukiyo('.ukiyo', {
			scale: 1.2
		});
	});

	const collection = collectionData['nabou'];
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
	<NavColl collectionName="nabou" order={2} />
	<CollHead
		desc="La coupe simple lui confère une élégance intemporelle et naturelle. Le motif floral ajoute une touche de douceur et de féminité."
		collName="nabou"
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
		<p>Elle incarne un ton de sérénité profonde.</p>
	</div>
	<NavColl collectionName="nanssy" justifyContent="flex-end" />
</div>
