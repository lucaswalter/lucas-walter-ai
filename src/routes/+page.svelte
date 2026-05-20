<script lang="ts">
	import { SiInstagram, SiTiktok, SiYoutube, SiX } from '@icons-pack/svelte-simple-icons';

	const profile = {
		name: 'Lucas Walter',
		bio: "Hi 👋 I'm Lucas. I build AI agents & n8n automations that run real businesses, and teach you to do the same."
	};

	const socials = [
		{ label: 'Instagram', icon: SiInstagram, href: 'https://instagram.com/lucas.walter.ai' },
		{ label: 'TikTok', icon: SiTiktok, href: 'https://www.tiktok.com/@lucas.walter.ai' },
		{ label: 'YouTube', icon: SiYoutube, href: 'https://www.youtube.com/@lucaswalterai' },
		{
			label: 'LinkedIn',
			icon: null,
			href: 'https://www.linkedin.com/in/lucas-walter-339ba83b0/'
		},
		{ label: 'X', icon: SiX, href: 'https://x.com/lucas_fabric' }
	];

	const links = [
		{
			title: 'Snag My AI Automations',
			description: 'Download all of my n8n automations + AI Agents builds for free.',
			cta: 'Get them for free',
			href: 'https://www.skool.com/ai-automation-mastery-group'
		},
		{
			title: 'Join My Community (AI Automation Mastery)',
			description: 'Learn how to build, scale, and sell AI Agents + automations.',
			cta: 'Join for free',
			href: 'https://www.skool.com/ai-automation-mastery-group/'
		}
	];

	const videos = [
		{
			title: 'I Built a Team of AI Agents That Runs Itself',
			href: 'https://www.youtube.com/watch?v=0MGtLce7cFE'
		},
		{
			title: '$24K/Year from this AI Dentist Voice Agent',
			href: 'https://www.youtube.com/watch?v=vQ5Z8-f-xw4'
		}
	];
</script>

<main class="mx-auto flex min-h-screen w-full max-w-xl flex-col items-center gap-8 px-5 py-12">
	<!-- Header -->
	<header class="flex flex-col items-center gap-4 text-center">
		<img
			src="/lucas_walter_profile.png"
			alt="Lucas Walter"
			width="112"
			height="112"
			class="size-28 rounded-full border border-black object-cover"
		/>
		<h1 class="text-3xl font-bold">{profile.name}</h1>
		<p class="text-balance text-base leading-relaxed">{profile.bio}</p>
	</header>

	<!-- Socials -->
	<nav class="flex items-center gap-6" aria-label="Social links">
		{#each socials as social (social.label)}
			<a href={social.href} aria-label={social.label} class="transition-opacity hover:opacity-60">
				{#if social.icon}
					<social.icon size={24} />
				{:else}
					<!-- LinkedIn (not in Simple Icons set) -->
					<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path
							d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
						/>
					</svg>
				{/if}
			</a>
		{/each}
	</nav>

	<!-- Link cards -->
	<section class="flex w-full flex-col gap-5">
		{#each links as link (link.title)}
			<article class="flex flex-col gap-4 rounded-2xl border border-black p-5">
				<div class="flex items-start gap-4">
					<div class="grid size-10 shrink-0 place-items-center rounded-lg border border-black">
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
							<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
						</svg>
					</div>
					<div class="flex flex-col gap-1">
						<h2 class="font-bold leading-snug">{link.title}</h2>
						<p class="text-sm leading-relaxed">{link.description}</p>
					</div>
				</div>
				<a
					href={link.href}
					class="w-full rounded-xl border border-black py-3 text-center font-semibold transition-colors hover:bg-black hover:text-white"
				>
					{link.cta}
				</a>
			</article>
		{/each}
	</section>

	<!-- Video embeds -->
	<section class="flex w-full flex-col gap-5">
		{#each videos as video (video.title)}
			<a
				href={video.href}
				class="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl border border-black p-4 text-center transition-opacity hover:opacity-60"
			>
				<SiYoutube size={40} />
				<span class="font-semibold leading-snug">{video.title}</span>
			</a>
		{/each}
	</section>

</main>
