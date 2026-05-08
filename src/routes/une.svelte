<script>
	import { resolve } from '$app/paths';

	const images = [
		'/images/OBARA/V-1/image-45.avif',
		'/images/OBARA/V-2/image-47.avif',
		'/images/OBARA/V-3/image-49.avif',
		'/images/OBARA/V-4/image-51.avif'
	];
</script>

<section>
	<div class="video-container">
		<figure>
			<div class="title">
				<span>Découvrer la collection</span>
				<h2>obara</h2>
			</div>
			<video src="/videos/vid-1.mp4" autoplay loop muted class=""></video>
		</figure>
	</div>
	<div class="img-container">
		<div class="img-container__left">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam unde beatae neque
				magnam? Hic eius nihil minus quod porro ab fugiat ut quam exercitationem ex.
			</p>
			<a href={resolve('/')}> Voir plus </a>
		</div>
		<div class="img-container__right">
			{#each images as image, idx (idx)}
				<figure>
					<img class="ukiyo" src={image} alt="La collection OBARA" />
				</figure>
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		min-height: 100dvh;
		padding-inline: var(--space-4);
	}

	.video-container {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		align-items: center;
		padding-block: calc(var(--space-24) * 3);
	}

	.title {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: absolute;
		top: -80px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1;
		mix-blend-mode: difference;

		span {
			font-size: var(--text-xl);
			text-align: center;
			color: var(--color-white);
		}

		h2 {
			font-size: clamp(7rem, calc(9dvw + 1rem), 9rem);
			font-family: var(--font-serif);
			text-transform: uppercase;
			text-align: center;
			color: var(--color-white);
		}
	}

	figure {
		position: relative;
		video {
			width: 500px !important;
			object-fit: cover;
			aspect-ratio: 1;
		}
	}

	.img-container {
		display: flex;
		padding-inline: var(--space-4);
		width: 100%;
		max-width: 1200px;
		margin-inline: auto;
		align-items: flex-start;
		gap: var(--space-8);

		figure {
			height: 500px;
			width: 500px;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	.img-container__left {
		flex-grow: 1;
		position: sticky;
		top: 10%;

		p {
			max-width: 400px;
			width: 100%;
			text-wrap: balance;
			line-height: var(--leading-normal);
			font-size: var(--text-xl);
			font-family: Melodrama;
			font-weight: var(--font-medium);
		}
		a {
			font-size: var(--text-xl);
			font-weight: var(--font-medium);
			text-transform: uppercase;
			color: var(--color-black);
			margin-top: var(--space-8);
			display: block;
			text-decoration: underline;
			text-underline-offset: var(--space-2);
		}
	}
	.img-container__right {
		flex-grow: 1;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--space-8);

		figure:nth-child(1) {
			align-self: flex-end;
		}
		figure:nth-child(2) {
			align-self: center;
		}
		figure:nth-child(3) {
			align-self: center;
		}
		figure:nth-child(3) {
			align-self: flex-end;
		}
	}
</style>
