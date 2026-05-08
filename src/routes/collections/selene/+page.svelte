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
		'/images/SELENE/V-1/image-54.avif',
		'/images/SELENE/V-1/image-55.avif'
	];

	const collection_v2 = [
		// v-2
		'/images/SELENE/V-2/image-56.avif',
		'/images/SELENE/V-2/image-57.avif'
	];
	const collection_v3 = [
		// v-2
		'/images/SELENE/V-3/image-58.avif',
		'/images/SELENE/V-3/image-59.avif'
	];

	onMount(() => {
		new Ukiyo('.ukiyo', {
			scale: 1.2
		});
	});

	const collection = collectionData['selene'];
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
	<NavColl collectionName="obara" order={2} />

	<CollHead
		desc="Elle dégage une aura de prestige et de distinction, s'accordant parfaitement avec les détails minutieux et les matériaux nobles de vos créations."
		collName="séléné"
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
			Elle invite à un univers de grâce et de noblesse, reflétant l'exigence esthétique qui vous est
			propre.
		</p>
	</div>
	<div class="coll-img-container">
		{#each collection_v3 as image, idx (idx)}
			<ImgDialog imgTrigger={image} imgCollection={collection_v3} />
		{/each}
		<span class="coll-label"> 03 </span>
	</div>
</div>
