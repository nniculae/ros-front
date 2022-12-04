<script lang="ts">
	import '../app.scss';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Content from '$lib/Content.svelte';
</script>

<Header />
<Content>
	<slot />
</Content>
<Footer />
