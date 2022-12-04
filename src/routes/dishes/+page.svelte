<script lang="ts">
	import type { Category } from '$lib/interfaces/category';
	import ProductInformation from '$lib/ProductInformation.svelte';
	export let data;
	let categories: Category[] = data.dishes;
</script>

<svelte:head>
	<title>Dishes</title>
</svelte:head>

<div class="col">
	<h1>Griekse gerechten</h1>
	{#each categories as category}
		<h2 class="category mt-3">{category.name}</h2>
		{#each category.products as product, i}
			<div class="border border-light rounded p-3 shadow mt-3">
				<h3>
					{product.name}
					<i
						class="bi bi-info-circle"
						data-bs-toggle="modal"
						data-bs-target={'#product-info-' + i}
					/>
				</h3>
				<h4>&euro; {product.price}</h4>
			</div>
			<ProductInformation id={'product-info-' + i}>
				{product.description}
			</ProductInformation>
		{/each}
	{/each}
</div>
