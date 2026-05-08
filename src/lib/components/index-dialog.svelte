<script>
	import { resolve } from '$app/paths';

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

<button class="dialog-open" command="show-modal" commandfor="index-dialog"> INDEX </button>

<dialog id="index-dialog" closedby="any">
	<button class="dialog-close" commandfor="index-dialog" command="close">FERMER</button>

	<div>
		<span> COLLECTIONS </span>
		<ul>
			{#each links as link, idx (idx)}
				<li>
					<a href={resolve(link.url)}>{link.label}</a>
				</li>
			{/each}
		</ul>
	</div>
</dialog>

<style>
	ul {
		display: grid;
		gap: var(--space-1);
	}

	span {
		margin-bottom: var(--space-8);
		display: inline-block;
	}

	li {
		min-height: 40px;
		background-color: red;
		position: relative;
		overflow: hidden;
	}

	a {
		display: inline-block;
		position: relative;
		height: 100%;
		width: 100%;
		font-family: var(--font-serif);
		font-size: 20dvw;
		text-transform: uppercase;
		will-change: transform;
		color: var(--color-white);
		/* animation: reveale 0.8s ease-out 0.15s forwards; */
		/*  */
		transform: translateY(100%);
		animation-duration: 0.8s;
		animation-name: reveale;
		animation-timing-function: ease-out;
		animation-fill-mode: forwards;
		animation-delay: 0.15s;
		will-change: transform;
	}

	@keyframes reveale {
		to {
			transform: translateY(0%);
		}
	}

	#index-dialog {
		min-height: 100dvh;
		width: 100dvw;
		border: none;
		outline: none;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: var(--color-black);
		color: var(--color-white);
		transition:
			transform 0.5s cubic-bezier(0.86, 0, 0.14, 1),
			display 0.5s allow-discrete,
			overlay 0.5s allow-discrete;
		transform: translateY(100%); /* Caché en bas */
		overflow-y: auto;
	}

	.dialog-close {
		color: var(--color-white);
		border: none;
		outline: none;
		background-color: transparent;
		font-size: var(--text-base);
		font-weight: var(--font-medium);
		align-self: flex-start;
		width: fit-content;
		position: sticky;
		top: 3%;
		z-index: 5;
		mix-blend-mode: difference;

		&:focus {
			outline-color: transparent;
		}
	}

	#index-dialog[open] {
		transform: translateY(0);
	}

	@starting-style {
		#index-dialog[open] {
			transform: translateY(100%);
		}
	}

	/* Animation du fond (Backdrop) */
	#index-dialog::backdrop {
		background-color: rgba(0, 0, 0, 0);
		transition:
			background-color 0.5s,
			display 0.5s allow-discrete,
			overlay 0.5s allow-discrete;
	}

	#index-dialog[open]::backdrop {
		background-color: rgba(0, 0, 0, 0.6);
	}

	@starting-style {
		#index-dialog[open]::backdrop {
			background-color: rgba(0, 0, 0, 0);
		}
	}

	.dialog-open {
		background-color: transparent;
		border: none;
		outline: none;
		font-size: var(--text-base);
		font-weight: var(--font-medium);
		mix-blend-mode: difference;
		color: var(--color-white);

		&:focus {
			outline-color: transparent;
		}
	}
</style>
