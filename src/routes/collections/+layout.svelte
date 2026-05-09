<script>
	/** @type {import('./$types').LayoutProps} */
	import { collectionHover } from '$lib/state.svelte';
	import Nav from '$lib/components/nav.svelte';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { MediaQuery } from 'svelte/reactivity';
	const mobile = new MediaQuery('width < 600px');

	let { children } = $props();

	let url = $derived(page.url.pathname);

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
</script>

<Nav />
<section>
	{#if mobile.current && page.url.pathname === '/collections/'}
		<aside class:scale={page.url.pathname !== '/collections'}>
			<div>
				<h2>collections</h2>
			</div>
			<div class="links">
				{#each links as link, idx (idx)}
					<div class="link">
						<a
							href={resolve(link.url)}
							onmouseenter={() => (collectionHover.current = link.label)}
							onmouseleave={() => (collectionHover.current = '')}
							class:active={page.url.pathname === link.url}
						>
							{link.label}
						</a>
					</div>
				{/each}
			</div>
		</aside>
	{/if}
	{#key url}
		<div class="img-container">
			<!-- {#key url}
		<div transition:fly class="rideau"></div>
		{/key} -->
			{@render children()}
		</div>
	{/key}
</section>

<style>
	section {
		min-height: 100dvh;
		display: flex;
		align-items: flex-start;
		padding-block: var(--space-12);

		/* background-color: blue; */
	}

	aside {
		max-width: 20rem;
		width: 100%;
		min-height: 120dvh;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: var(--space-4);
		transform-origin: left;
		padding-inline: var(--space-8);
		transition: transform 0.6s ease-in-out;
		z-index: 2;

		@media (width < 600px) {
			padding-inline: var(--space-4);
		}

		.links {
			display: flex;
			flex-direction: column;
			gap: var(--space-2);
		}

		.link {
			min-height: 50px;
			overflow: hidden;
		}

		h2 {
			font-size: var(--text-base);
			text-transform: uppercase;
			color: var(--color-neutral-500);
		}

		a {
			font-family: var(--font-serif);
			display: inline-block;
			font-size: 6dvw;
			text-transform: uppercase;
			font-weight: var(--font-medium);
			transform: translateY(100%);
			will-change: transform;
			animation: slide-in 0.6s ease 0.2s forwards;
		}
	}

	.active {
		font-weight: var(--font-light);
	}

	.img-container {
		width: 100%;
		flex-grow: 1;
	}

	.scale {
		position: fixed;
		transform: scale(0.7) translateY(-40%);
	}

	.hidden {
		transform: scale(0.7) translateY(-40%) translateX(-100%);
	}

	@media (width < 600px) {
		aside {
			a {
				font-size: calc(var(--text-5xl) * 1.5);
			}
		}
	}

	@keyframes slide-in {
		to {
			transform: translateY(0%);
		}
	}
</style>
