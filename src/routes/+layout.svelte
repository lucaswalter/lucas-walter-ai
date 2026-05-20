<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Lucas Walter | AI Automation & AI Agent Builder</title>
	<link rel="icon" href="/lucas_walter_profile.png" />
</svelte:head>

{@render children()}
