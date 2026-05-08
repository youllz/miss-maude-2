<script>
	let { number, detail } = $props();
</script>

<figure>
	<img src="" alt="" />
	<span>
		{number}
	</span>
</figure>

<style>
	figure {
		height: 300px;
		max-width: 300px;
		width: 100%;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
