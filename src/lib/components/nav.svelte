<script>
	import { resolve } from '$app/paths';

	const navLinks = [
		{
			url: '/',
			label: 'Accueil'
		},
		{
			url: '/collections',
			label: 'collections'
		},
		{
			url: '/a-propos-de-nous',
			label: 'nous?'
		},
		{
			url: '/galerie',
			label: 'galerie'
		}
	];
</script>

<nav class="desktop-nav">
	<a class="home" href={resolve('/')}>
		MISS MAUDE
		<br />
		THE EDIT
	</a>

	<ul class="contact">
		<li>
			<a href="https://www.instagram.com/missmaudetheedit_/" target="_blank"> instagram </a>
		</li>
		<li>+225 05 75 11 49 97</li>
	</ul>

	<ul class="page">
		<li>
			<a href={resolve('/')}>Accueil</a>
		</li>
		<li>
			<a href={resolve('/collections')}>collections</a>
		</li>
		<li>
			<a href={resolve('/a-propos-de-nous')}>nous?</a>
		</li>
	</ul>

	<a class="gallerie" href={resolve('/galerie')}>galerie</a>
</nav>

<nav class="mobile-nav">
	<div class="dialog-open_con">
		<button class="dialog-open" command="show-modal" commandfor="mon-dialogue"> MENU </button>
	</div>

	<dialog id="mon-dialogue" closedby="any">
		<button class="dialog-close" commandfor="mon-dialogue" command="close">FERMER</button>

		<div class="nav-container">
			<div class="mobile_nav-link">
				{#each navLinks as link, idx (idx)}
					<div>
						<a href={resolve(link.url)}>
							{#each link.label as item, idx (idx)}
								<span>
									{item}
								</span>
							{/each}
						</a>
					</div>
				{/each}
			</div>

			<div class="mobile-contact">
				<ul>
					<li>
						<a href="https://www.instagram.com/missmaudetheedit_/" target="_blank"> instagram </a>
					</li>
					<li>
						<a href="tel:+225 05 75 11 49 97">+225 05 75 11 49 97</a>
					</li>
				</ul>

				<div class="nav-footer">
					<span class=""> MISS MAUDE THE EDIT </span>
					<span> 2026 </span>
				</div>
			</div>
		</div>
	</dialog>
	<!-- <IndexDialog /> -->
	<div class="coll-link">
		<a href={resolve('/collections')}>INDEX</a>
	</div>
</nav>

<style>
	.dialog-open_con {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}
	.desktop-nav {
		position: sticky;

		z-index: 4;
		padding-block: var(--space-4);
		padding-inline: var(--space-8);
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		mix-blend-mode: difference;
		color: var(--color-white);
		top: 0%;

		a {
			color: var(--color-white);
			text-transform: uppercase !important;
			font-size: var(--text-sm);
		}

		ul {
			display: grid;
			gap: var(--space-2);
		}

		li {
			font-size: var(--text-sm);
		}
	}

	.home {
		font-weight: var(--font-medium);
	}

	.mobile-nav {
		position: sticky;
		display: none;

		z-index: 4;
		padding-block: var(--space-4);
		padding-inline: var(--space-8);
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		mix-blend-mode: difference;
		color: var(--color-white);
		top: 0%;

		@media (width < 600px) {
			padding-inline: var(--space-4);
		}
	}

	dialog {
		height: 100dvh;
		width: 100dvw;
		border: none;
		outline: none;
		background-color: var(--color-black);
		color: var(--color-white);
		transition:
			transform 0.5s cubic-bezier(0.86, 0, 0.14, 1),
			display 0.5s allow-discrete,
			overlay 0.5s allow-discrete;
		transform: translateY(100%); /* Caché en bas */
	}

	.dialog-close {
		color: var(--color-white);
		border: none;
		outline: none;
		background-color: transparent;
		font-size: var(--text-base);
		font-weight: var(--font-medium);

		&:focus {
			outline-color: transparent;
		}
	}

	dialog[open] {
		transform: translateY(0);
	}

	@starting-style {
		dialog[open] {
			transform: translateY(100%);
		}
	}

	/* Animation du fond (Backdrop) */
	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0);
		transition:
			background-color 0.5s,
			display 0.5s allow-discrete,
			overlay 0.5s allow-discrete;
	}

	dialog[open]::backdrop {
		background-color: rgba(0, 0, 0, 0.6);
	}

	@starting-style {
		dialog[open]::backdrop {
			background-color: rgba(0, 0, 0, 0);
		}
	}

	.dialog-open {
		background-color: transparent;
		border: none;
		outline: none;
		font-size: var(--text-base);
		font-weight: var(--font-medium) !important;
		mix-blend-mode: difference;
		padding: 0;
		margin: 0;
		color: var(--color-white);
		line-height: var(--leading-none);
		align-self: center;
		text-decoration: underline;
		text-underline-offset: 4px;

		/* text-box-trim: trim-both; */

		&:focus {
			outline-color: transparent;
		}
	}

	.nav-container {
		height: calc(100dvh - 80px);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.mobile_nav-link {
		width: 100%;
		margin-top: var(--space-24);

		div {
			height: 41px;
			overflow: hidden;
		}

		a {
			font-size: var(--text-3xl);
			text-transform: uppercase;
			color: var(--color-white);
			width: 100%;
			height: 100%;
			font-weight: var(--font-medium);
			position: relative;
			display: inline-block;

			/*  */
			transform: translateY(100%);
			animation-duration: 0.8s;
			animation-name: slide-in;
			animation-timing-function: ease-out;
			animation-fill-mode: forwards;
			animation-delay: 0.15s;
			will-change: transform;

			/* span {
				display: inline-block;
				transform: translateY(110%);
				animation-duration: calc(0.1s * sibling-index() / 1.5);
				animation-name: slide-in;
				animation-timing-function: cubic-bezier(0.86, 0, 0.14, 1);
				animation-fill-mode: forwards;
				animation-delay: 0.1s;
				will-change: transform;
			} */
		}
	}

	@keyframes slide-in {
		to {
			transform: translateY(0%);
		}
	}

	.mobile-contact {
		display: flex;
		flex-direction: column;
		gap: var(--space-16);

		li {
			color: var(--color-white);
			text-transform: uppercase;
			font-size: var(--text-3xl);
			height: 50px;
			overflow: hidden;
		}
		a {
			font-size: var(--text-3xl);
			text-transform: uppercase;
			color: var(--color-white);
			width: 100%;
			height: 100%;
			font-weight: var(--font-medium);
			position: relative;
			display: inline-block;

			/*  */
			transform: translateY(100%);
			animation-duration: 0.8s;
			animation-name: slide-in;
			animation-timing-function: ease-out;
			animation-fill-mode: forwards;
			animation-delay: 0.15s;
			will-change: transform;
		}
	}

	.nav-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.coll-link {
		display: flex;
		align-items: center;
		gap: var(--space-2);

		a {
			color: var(--color-white);
			font-size: var(--text-base);
			font-weight: var(--font-medium);
			text-decoration: underline;
			text-underline-offset: 4px;
			display: block;
		}
	}

	@media (width < 600px) {
		.desktop-nav {
			display: none;
		}
	}
	@media (width > 600px) {
		.mobile-nav {
			display: none;
		}
	}
</style>
