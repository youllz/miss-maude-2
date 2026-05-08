<script>
	import ImgDialog from '$lib/components/imgDialog.svelte';
	import { onMount } from 'svelte';
	import Ukiyo from 'ukiyojs';
	import NavColl from '../nav-coll.svelte';
	import CollHead from '$lib/components/coll-head.svelte';
	import { collectionData, domainName } from '$lib';

	// https://www.instagram.com/reel/DSdMJGximNe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==

	const collection_v1 = [
		// v-1
		'/images/OBARA/V-1/image-45.avif',
		'/images/OBARA/V-1/image-46.avif'
	];

	const collection_v2 = [
		// v-2
		'/images/OBARA/V-2/image-47.avif',
		'/images/OBARA/V-2/image-48.avif'
	];
	const collection_v3 = [
		// v-2
		'/images/OBARA/V-3/image-49.avif',
		'/images/OBARA/V-3/image-50.avif'
	];
	const collection_v4 = [
		// v-2
		'/images/OBARA/V-4/image-51.avif',
		'/images/OBARA/V-4/image-52.avif'
	];

	onMount(() => {
		new Ukiyo('.ukiyo', {
			scale: 1.2
		});
	});

	const collection = collectionData['obara'];
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
	<NavColl collectionName="nayanka" order={2} />

	<CollHead
		collName="obara"
		desc="Une pièce entièrement perlée à la main, patiemment sculptée avant d’être montée."
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
		<div>
			<p>Une pièce qui demande du temps… et qui se porte comme une œuvre.</p>
		</div>
	</div>
	<div class="coll-img-container">
		{#each collection_v3 as image, idx (idx)}
			<ImgDialog imgTrigger={image} imgCollection={collection_v3} />
		{/each}
		<span class="coll-label"> 03 </span>
	</div>
	<div class="coll-img-container">
		{#each collection_v4 as image, idx (idx)}
			<ImgDialog imgTrigger={image} imgCollection={collection_v3} />
		{/each}
		<span class="coll-label"> 04 </span>
	</div>
	<NavColl collectionName="selene" justifyContent="flex-end" />
</div>
