<script lang="ts">
	import { SiSvelte, SiTailwindcss } from '@icons-pack/svelte-simple-icons';
</script>

<main class="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-50 p-8">
	<div class="flex items-center gap-4">
		<SiSvelte size={48} color="#FF3E00" />
		<SiTailwindcss size={48} color="#06B6D4" />
	</div>
	<h1 class="text-3xl font-bold tracking-tight text-slate-900">Welcome to SvelteKit</h1>
	<p class="text-slate-600">
		Visit
		<a class="text-orange-600 underline hover:text-orange-700" href="https://svelte.dev/docs/kit">
			svelte.dev/docs/kit
		</a>
		to read the documentation
	</p>
</main>
