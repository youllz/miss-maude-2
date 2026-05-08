<script>
	import { resolve } from '$app/paths';
	let { collectionName, order = 0, justifyContent = 'flex-start' } = $props();
</script>

<div style:justify-content={justifyContent} class="box">
	<span style:order={order === 2 ? 3 : 0}>
		{justifyContent === 'flex-start' ? 'préc.' : 'suiv.'}
	</span>
	<a href={resolve('/collections/' + collectionName)} style:order>
		{collectionName}
	</a>
	<div class="line"></div>
</div>

<style>
	.box {
		/* margin-block: var(--space-4); */
		display: flex;
		align-items: flex-end;
		justify-content: center;
		gap: var(--space-2);
		min-height: 50px;
		overflow: hidden;
		/* padding-inline: var(--space-4); */
		/* margin-top: var(--space-8); */

		@media (width > 600px) {
			display: none;
		}
	}

	a {
		font-size: clamp(var(--text-xl), 5dvw + 0.1rem, var(--text-5xl));
		font-family: var(--font-serif);
		font-weight: var(--font-medium);
		text-transform: uppercase;
		/* transform: translateY(120%); */
		will-change: transform;
		line-height: var(--leading-none);
		/* height: 100%; */
		/* animation: slide-in ease-in-out both; */
		/* order: var(--order); */
	}

	.line {
		width: 40px;
		height: 2px;
		align-self: flex-end;
		margin-bottom: 10px;
		background-color: var(--color-neutral-600);
		transform: scaleX(1);
		/* animation: scale-in 0.6s ease-in-out 0.6s forwards; */
		will-change: transform;
		transform-origin: left;
		transition: transform 0.6s cubic-bezier(0.86, 0, 0.14, 1);
		/* animation: scale-in ease-in-out both; */
	}

	span {
		font-size: var(--text-sm);
		color: var(--color-neutral-500);
		line-height: var(--leading-normal);
	}

	@keyframes scale-in {
		from {
			transform: scaleX(0);
		}
		to {
			transform: scaleX(1);
		}
	}

	@keyframes slide-in {
		to {
			transform: translateY(0);
		}
	}
</style>
