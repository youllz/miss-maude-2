<script>
	import ImgDialog from '$lib/components/imgDialog.svelte';
	import { onMount } from 'svelte';
	import Ukiyo from 'ukiyojs';
	import NavColl from '../nav-coll.svelte';
	import CollHead from '$lib/components/coll-head.svelte';
	import { collectionData, domainName } from '$lib';

	// https://www.instagram.com/reel/DMn4h-RMQfB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==

	const collection_v1 = [
		// v-1
		'/images/NANSSY/V-1/image-18.avif',
		'/images/NANSSY/V-1/image-19.avif'
	];

	const collection_v2 = [
		// v-2
		'/images/NANSSY/V-2/image-20.avif',
		'/images/NANSSY/V-2/image-21.avif',
		'/images/NANSSY/V-2/image-22.avif'
	];
	const collection_v3 = [
		// v-3
		'/images/NANSSY/V-3/image-23.avif',
		'/images/NANSSY/V-3/image-24.avif'
	];
	const collection_v4 = [
		// v-3
		'/images/NANSSY/V-4/image-25.avif',
		'/images/NANSSY/V-4/image-26.avif'
	];
	const collection_v5 = [
		// v-3
		'/images/NANSSY/V-5/image-27.avif',
		'/images/NANSSY/V-5/image-28.avif'
	];
	const collection_v6 = [
		// v-3
		'/images/NANSSY/V-6/image-29.avif',
		'/images/NANSSY/V-6/image-30.avif'
	];
	const collection_v7 = [
		// v-3
		'/images/NANSSY/V-7/image-31.avif',
		'/images/NANSSY/V-7/image-32.avif'
	];
	const collection_v8 = [
		// v-3
		'/images/NANSSY/V-8/image-33.avif',
		'/images/NANSSY/V-8/image-34.avif'
	];
	const collection_v9 = [
		// v-3
		'/images/NANSSY/V-9/image-35.avif',
		'/images/NANSSY/V-9/image-36.avif'
	];

	onMount(() => {
		new Ukiyo('.ukiyo', {
			scale: 1.2
		});
	});

	const collection = collectionData['nanssy'];
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
		collName="nanssy"
		desc="Une coupe ample et majestueuse, des manches spectaculaires, un tombé qui glisse sur la peau comme une caresse."
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
	</div>
	<div class="coll-img-container">
		{#each collection_v3 as image, idx (idx)}
			<ImgDialog imgTrigger={image} imgCollection={collection_v3} />
		{/each}
		<span class="coll-label"> 03 </span>
		<p>
			NANSSY est cette PIÈCE qui se porte comme une affirmation, celle d’être à la fois forte, douce
			et inoubliable.
		</p>
	</div>
	<div class="coll-img-container">
		{#each collection_v4 as image, idx (idx)}
			<ImgDialog imgTrigger={image} imgCollection={collection_v3} />
		{/each}
		<span class="coll-label"> 04 </span>
	</div>
	<div class="coll-img-container">
		{#each collection_v5 as image, idx (idx)}
			<ImgDialog imgTrigger={image} imgCollection={collection_v3} />
		{/each}
		<span class="coll-label"> 05 </span>
	</div>
	<div class="coll-img-container">
		{#each collection_v6 as image, idx (idx)}
			<ImgDialog imgTrigger={image} imgCollection={collection_v3} />
		{/each}
		<span class="coll-label"> 06 </span>
	</div>
	<div class="coll-img-container">
		{#each collection_v7 as image, idx (idx)}
			<ImgDialog imgTrigger={image} imgCollection={collection_v3} />
		{/each}
		<span class="coll-label"> 07 </span>
		<p>
			Pour celles qui aiment laisser une empreinte. Pour celles qui savent que l’élégance se joue
			dans les détails.
		</p>
	</div>
	<div class="coll-img-container">
		{#each collection_v8 as image, idx (idx)}
			<ImgDialog imgTrigger={image} imgCollection={collection_v3} />
		{/each}
		<span class="coll-label"> 08 </span>
	</div>
	<div class="coll-img-container">
		{#each collection_v9 as image, idx (idx)}
			<ImgDialog imgTrigger={image} imgCollection={collection_v3} />
		{/each}
		<span class="coll-label"> 09 </span>
	</div>
	<NavColl collectionName="nayanka" justifyContent="flex-end" />
</div>
