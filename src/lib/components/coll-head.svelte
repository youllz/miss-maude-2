<script>
	let { collName, desc } = $props();
</script>

<div class="head">
	<h1><span>COLLECTION</span><span>{collName}</span></h1>
	<p>
		{desc}
	</p>
</div>

<style>
	.head {
		display: flex;
		padding-inline: var(--space-4);
		align-items: flex-end;
		gap: var(--space-4);

		h1 {
			display: flex;
			flex-direction: column;

			/* gap: var(--space-2); */

			span:nth-child(1) {
				font-size: var(--text-sm);

				@media (width < 600px) {
					font-size: var(--text-xs);
					color: var(--color-neutral-600);
				}
			}
			span:nth-child(2) {
				font-family: var(--font-serif);
				font-size: var(--text-5xl);
				font-weight: var(--font-medium);
				text-transform: uppercase;
			}
		}

		p {
			font-size: var(--text-xl);
			line-height: var(--leading-normal);
			text-transform: uppercase;
			max-width: 500px;
			width: 100%;
			text-wrap: balance;
			margin-inline: auto;
		}
	}

	@media (width < 600px) {
		.head {
			flex-direction: column;
			align-items: flex-start;
		}

		p {
			margin-inline: 0;
			font-size: var(--text-lg);
		}
	}
</style>
