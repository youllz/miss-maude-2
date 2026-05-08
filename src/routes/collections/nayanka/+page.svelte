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
		'/images/NAYANKA/V-1/image-37.avif',
		'/images/NAYANKA/V-1/image-38.avif'
	];

	const collection_v2 = [
		// v-2
		'/images/NAYANKA/V-2/image-39.avif',
		'/images/NAYANKA/V-2/image-40.avif',
		'/images/NAYANKA/V-2/image-41.avif'
	];

	onMount(() => {
		new Ukiyo('.ukiyo', {
			scale: 1.2
		});
	});

	const collection = collectionData['nayanka'];
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
	<NavColl collectionName="nanssy" order={2} />

	<CollHead
		desc="Une pièce pensée pour celles qui n’entrent pas dans la pièce…
elles la marquent."
		collName="nayanka"
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
		<p>Volumes sculptés, drapé maîtrisé, caractère affirmé.</p>
	</div>
	<NavColl collectionName="obara" justifyContent="flex-end" />
</div>
