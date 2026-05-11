<script>
</script>

<section class=".scroll-section">
	<div class="texts-container">
		<div>
			<span>Célébration</span>
			<figure>
				<img src="/images/MALAIKA/V-1/image-8.avif" alt="" />
			</figure>
			<span>de</span> <span>l’AfroLux</span>
			<figure>
				<img src="/images/SELENE/V-1/image-54.avif" alt="" />
			</figure>
			<span> Mandingue </span>
			<span>avec élégance</span>
			<figure>
				<img src="/images/AYANA/V-3/image-7.avif" alt="" />
			</figure>
			<span> et </span>
			<span>raffinement.</span>
		</div>
		<!-- Célébration
		<figure>
			<img src="/images/MALAIKA/V-1/image-8.avif" alt="" />
		</figure>
		de l’AfroLux Mandingue
		<figure>
			<img src="/images/MALAIKA/V-1/image-8.avif" alt="" />
		</figure>
		avec élégance
		<figure>
			<img src="/images/MALAIKA/V-1/image-8.avif" alt="" />
		</figure>
		et raffinement. -->
	</div>
</section>

<style>
	div {
		font-size: clamp(50px, calc(9vw + 0.1rem), 10rem);
		font-family: var(--font-serif);
		text-transform: uppercase;
		font-weight: var(--font-medium);
		display: flex;
		flex-wrap: wrap;
	}

	.texts-container {
		width: 100%;
	}

	section {
		margin-top: var(--space-24);
		min-height: 110dvh;
		display: flex;
		align-items: center;
		justify-content: center;

		padding: var(--space-8);
		@media (width < 600px) {
			min-height: 70dvh;
		}
	}

	figure {
		width: clamp(50px, calc(9vw + 0.1rem), 10rem);
		aspect-ratio: 1;

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	.texts-container span {
		display: inline;
		color: hsla(0, 0%, 0%, 0.58);
		opacity: 1;
		background-clip: text;
		-webkit-background-clip: text;
		background-repeat: no-repeat;
		background-size: 0% 100%;
		background-image: linear-gradient(180deg, #000, #000000);
		animation: scroll-reveal 3.5s linear forwards;
		animation-timeline: view(y);
		animation-range-start: cover 5.5vh;
		animation-range-end: cover 80.5vh;
		transition:
			background-size 0.8s ease,
			opacity 0.2s ease;
	}
	@keyframes scroll-reveal {
		to {
			background-size: 100% 100%;
			opacity: 1;
		}
	}
</style>
