<script>
	import Hero from './hero.svelte';
	import Une2 from './une-2.svelte';
	import { domainName } from '$lib/index';
</script>

<svelte:head>
	<title>MISS MAUDE | Haute Couture : Boubous & Robes Mandingue d’Exception</title>
	<meta
		name="description"
		content="Découvrez l'élégance intemporelle du boubou et robe mandingue d'exception. Pièces uniques faites à la main et collections exclusives. Commandez votre création sur mesure dès maintenant."
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={domainName} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={domainName} />
	<meta property="og:title" content="Couture Mandingue Haut de Gamme - MISS MADE" />
	<meta
		property="og:description"
		content="Pièces et tissus d'exception. Le luxe mandingue à votre portée."
	/>
	<meta property="og:image" content="{domainName}/images/hero-luxury.jpg" />
</svelte:head>

<Hero />
<Une2 />
<!-- <Sect2 /> -->
<!-- <Une /> -->
<!-- <Collection /> -->
