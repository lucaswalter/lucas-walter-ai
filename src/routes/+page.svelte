<script lang="ts">
	import { SiInstagram, SiTiktok, SiYoutube, SiX } from '@icons-pack/svelte-simple-icons';
	import { meta, profile, socials, links, videos, type Social } from '$lib/content';

	// LinkedIn was pulled from Simple Icons over trademark; glyph inlined below.
	const icons = {
		instagram: SiInstagram,
		tiktok: SiTiktok,
		youtube: SiYoutube,
		x: SiX
	} as const;

	const socialName: Record<Social['platform'], string> = {
		instagram: 'Instagram',
		tiktok: 'TikTok',
		youtube: 'YouTube',
		linkedin: 'LinkedIn',
		x: 'X'
	};

	// maxresdefault is 16:9 but absent on some uploads; fall back to hqdefault.
	function thumbError(e: Event, id: string) {
		const img = e.currentTarget as HTMLImageElement;
		if (!img.src.includes('hqdefault')) img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
	}
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:image" content={profile.avatar} />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<div class="grid" aria-hidden="true"></div>

<main>
	<article class="sheet">
		<span class="tick tl" aria-hidden="true"></span>
		<span class="tick tr" aria-hidden="true"></span>
		<span class="tick bl" aria-hidden="true"></span>
		<span class="tick br" aria-hidden="true"></span>

		<header class="meta">
			<span class="mark"><i></i>LUCAS·WALTER</span>
			<span class="dim">AI AUTOMATION</span>
		</header>

		<section class="profile">
			<img class="avatar" src={profile.avatar} alt="Lucas Walter" width="96" height="96" />
			<div class="ident">
				<h1>{profile.name}</h1>
				<p class="role">AI AGENT BUILDER · n8n AUTOMATIONS · EDUCATOR</p>
			</div>
		</section>

		<div class="bio">
			{#each profile.bio as para}
				<p>{para}</p>
			{/each}
		</div>

		<section>
			<div class="field-label"><span class="idx">00</span>SOCIALS<span class="rule"></span></div>
			<nav class="socials" aria-label="Social profiles">
				{#each socials as s (s.platform)}
					<a
						class="social"
						href={s.url}
						target="_blank"
						rel="me noopener"
						aria-label={`${socialName[s.platform]} — ${s.label}`}
						title={s.label}
					>
						{#if s.platform === 'linkedin'}
							<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
								<path
									d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"
								/>
							</svg>
						{:else}
							{@const Icon = icons[s.platform]}
							<Icon size={18} />
						{/if}
					</a>
				{/each}
			</nav>
		</section>

		<section>
			<div class="field-label"><span class="idx">01</span>RESOURCES<span class="rule"></span></div>
			<div class="rows">
				{#each links as l (l.url)}
					<a class="row" class:primary={l.primary} href={l.url} target="_blank" rel="noopener">
						<span class="row-text">
							<span class="row-title">{l.title}</span>
							<span class="row-desc">{l.description}</span>
						</span>
						<span class="cta">{l.cta}<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/></svg></span>
					</a>
				{/each}
			</div>
		</section>

		<section>
			<div class="field-label"><span class="idx">02</span>WATCH &amp; LEARN<span class="rule"></span></div>
			<div class="videos">
				{#each videos as v (v.id)}
					<a class="video" href={v.url} target="_blank" rel="noopener">
						<span class="frame">
							<img
								src={`https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`}
								alt={`Watch: ${v.title}`}
								loading="lazy"
								onerror={(e) => thumbError(e, v.id)}
							/>
							<span class="play" aria-hidden="true">
								<svg viewBox="0 0 24 24" width="20" height="20"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
							</span>
						</span>
						<span class="video-meta">
							<span class="video-title">{v.title}</span>
							<span class="src">YOUTUBE ↗</span>
						</span>
					</a>
				{/each}
			</div>
		</section>
	</article>
</main>

<style>
	/* faint engineering grid behind the sheet */
	.grid {
		position: fixed;
		inset: 0;
		z-index: 0;
		pointer-events: none;
		background-image:
			linear-gradient(var(--color-light-concrete) 0.5px, transparent 0.5px),
			linear-gradient(90deg, var(--color-light-concrete) 0.5px, transparent 0.5px);
		background-size: 28px 28px;
		opacity: 0.5;
		mask-image: radial-gradient(120% 90% at 50% 30%, #000 35%, transparent 78%);
	}

	main {
		position: relative;
		z-index: 1;
		display: flex;
		justify-content: center;
		min-height: 100dvh;
		padding: clamp(1.25rem, 5vw, 4.5rem) 1.25rem;
	}

	.sheet {
		position: relative;
		width: 100%;
		max-width: 36rem;
		align-self: flex-start;
		background: var(--color-cloud-white);
		border: 0.5px solid var(--color-light-concrete);
		border-radius: 0;
		box-shadow: var(--shadow-sheet);
		padding: clamp(1.5rem, 4vw, 2.5rem);
		display: flex;
		flex-direction: column;
		gap: clamp(1.75rem, 4vw, 2.25rem);
	}

	/* corner registration ticks */
	.tick {
		position: absolute;
		width: 9px;
		height: 9px;
		border: 1px solid var(--color-medium-ash);
		opacity: 0.45;
	}
	.tick.tl {
		top: -1px;
		left: -1px;
		border-right: 0;
		border-bottom: 0;
	}
	.tick.tr {
		top: -1px;
		right: -1px;
		border-left: 0;
		border-bottom: 0;
	}
	.tick.bl {
		bottom: -1px;
		left: -1px;
		border-right: 0;
		border-top: 0;
	}
	.tick.br {
		bottom: -1px;
		right: -1px;
		border-left: 0;
		border-top: 0;
	}

	.meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-family: var(--font-mono);
		font-size: 10.5px;
		letter-spacing: 0.08em;
		color: var(--color-charcoal-black);
	}
	.mark {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		font-weight: 500;
	}
	.mark i {
		width: 7px;
		height: 7px;
		background: var(--color-ignite-orange);
		border-radius: 1px;
	}
	.dim {
		color: var(--color-medium-ash);
	}

	/* profile — asymmetric portrait, not a centered stack */
	.profile {
		display: flex;
		align-items: center;
		gap: clamp(0.875rem, 3vw, 1.25rem);
	}
	.avatar {
		width: clamp(72px, 18vw, 92px);
		height: clamp(72px, 18vw, 92px);
		border-radius: var(--radius-buttons);
		object-fit: cover;
		background: var(--color-smoke-gray);
		box-shadow: var(--shadow-hairline);
	}
	.ident {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	h1 {
		font-size: clamp(1.75rem, 6vw, 2.25rem);
		font-weight: 600;
		line-height: 1.04;
		letter-spacing: -0.018em;
	}
	.role {
		font-family: var(--font-mono);
		font-size: 10.5px;
		letter-spacing: 0.07em;
		color: var(--color-sky-blueprint);
	}
	.bio {
		margin-top: -0.25rem;
		max-width: 40ch;
		color: var(--color-charcoal-black);
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
	}
	.bio p {
		margin: 0;
		font-size: 1rem;
		line-height: 1.6;
	}

	/* spec-sheet field labels */
	.field-label {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 0.875rem;
		font-family: var(--font-mono);
		font-size: 10px;
		font-weight: 500;
		letter-spacing: 0.12em;
		color: var(--color-charcoal-black);
	}
	.idx {
		color: var(--color-medium-ash);
	}
	.rule {
		flex: 1;
		height: 0.5px;
		background: var(--color-light-concrete);
	}

	.socials {
		display: flex;
		gap: 8px;
	}
	.social {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: center;
		height: 44px;
		color: var(--color-charcoal-black);
		border-radius: var(--radius-default);
		/* Hairline as a box-shadow ring, not a border: flex:1 + gap puts tile
		   edges on fractional pixels, where a 0.5px border can device-snap
		   unevenly and drop one side (the LinkedIn-tile right-edge clip). A
		   shadow ring rasterises all four sides uniformly, so it can't. */
		box-shadow: var(--shadow-hairline);
		transition:
			color 0.25s var(--ease-out-quint),
			box-shadow 0.25s var(--ease-out-quint),
			background 0.25s var(--ease-out-quint),
			transform 0.25s var(--ease-out-quint);
	}
	.social:hover {
		color: var(--color-sky-blueprint);
		box-shadow: 0 0 0 0.5px var(--color-sky-blueprint);
		background: var(--color-paper);
		transform: translateY(-1px);
	}

	/* resource rows */
	.rows {
		display: flex;
		flex-direction: column;
		margin-inline: -0.5rem;
		border-top: 0.5px solid var(--color-light-concrete);
	}
	.row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1rem 0.875rem;
		border-bottom: 0.5px solid var(--color-light-concrete);
		transition: background 0.25s var(--ease-out-quint);
	}
	.row:hover {
		background: var(--color-smoke-gray);
	}
	.row-text {
		display: flex;
		flex-direction: column;
		gap: 3px;
		min-width: 0;
	}
	.row-title {
		font-size: 1rem;
		font-weight: 500;
		letter-spacing: -0.006em;
	}
	.row-desc {
		font-size: 0.8125rem;
		line-height: 1.45;
		color: var(--color-ash-readable);
	}
	.cta {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		flex-shrink: 0;
		padding: 8px 13px;
		font-size: 0.8125rem;
		font-weight: 500;
		white-space: nowrap;
		border-radius: var(--radius-buttons);
		border: 0.5px solid var(--color-light-concrete);
		color: var(--color-charcoal-black);
		background: var(--color-cloud-white);
		-webkit-tap-highlight-color: transparent;
		transition:
			background 0.25s var(--ease-out-quint),
			border-color 0.25s var(--ease-out-quint),
			color 0.25s var(--ease-out-quint);
	}
	.cta svg {
		transition: transform 0.25s var(--ease-out-quint);
	}
	.row:hover .cta {
		border-color: var(--color-medium-ash);
	}
	.row:hover .cta svg {
		transform: translate(1px, -1px);
	}
	.row.primary .cta {
		background: var(--color-ignite-orange);
		border-color: var(--color-ignite-orange);
		color: var(--color-cloud-white);
	}
	.row.primary:hover .cta {
		background: oklch(63% 0.2 42);
		border-color: oklch(63% 0.2 42);
	}

	/* videos — real thumbnails carry the imagery */
	.videos {
		display: flex;
		flex-direction: column;
		gap: 1.125rem;
	}
	.video {
		display: flex;
		flex-direction: column;
		gap: 0.625rem;
	}
	.frame {
		position: relative;
		display: block;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		border-radius: var(--radius-buttons);
		border: 0.5px solid var(--color-light-concrete);
		background: var(--color-whisper-gray);
	}
	.frame img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.5s var(--ease-out-quint);
	}
	.video:hover .frame {
		box-shadow: var(--shadow-lift);
	}
	.video:hover .frame img {
		transform: scale(1.03);
	}
	.play {
		position: absolute;
		inset: 0;
		margin: auto;
		width: 52px;
		height: 52px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-cloud-white);
		background: oklch(23% 0.003 60 / 0.62);
		border: 0.5px solid oklch(100% 0 0 / 0.5);
		border-radius: 999px;
		backdrop-filter: blur(2px);
		transition:
			transform 0.3s var(--ease-out-quint),
			background 0.3s var(--ease-out-quint);
	}
	.play svg {
		transform: translateX(1px);
	}
	.video:hover .play {
		background: var(--color-ignite-orange);
		transform: scale(1.06);
	}
	.video-meta {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 0.75rem;
	}
	.video-title {
		font-size: 0.875rem;
		font-weight: 500;
		line-height: 1.35;
		letter-spacing: -0.006em;
	}
	.src {
		flex-shrink: 0;
		font-family: var(--font-mono);
		font-size: 9.5px;
		letter-spacing: 0.08em;
		color: var(--color-medium-ash);
		transition: color 0.25s var(--ease-out-quint);
	}
	.video:hover .src {
		color: var(--color-sky-blueprint);
	}

	/* On phones the side-by-side row squeezes the text into a narrow column and
	   leaves the vertically-centred CTA floating in dead space. Stack instead:
	   text reclaims full width, each CTA becomes a full-width action bar. */
	@media (max-width: 30rem) {
		.row {
			flex-direction: column;
			align-items: stretch;
			gap: 0.875rem;
			padding: 1.125rem 0.875rem 1.25rem;
		}
		.row-text {
			gap: 5px;
		}
		.row-desc {
			max-width: 46ch;
		}
		.cta {
			width: 100%;
			min-height: 44px;
			justify-content: space-between;
			padding: 11px 15px;
			font-size: 0.875rem;
		}
		/* Secondary actions read as outline buttons so they're unmistakably tappable. */
		.row:not(.primary) .cta {
			border-color: var(--color-charcoal-black);
		}
		.cta:active {
			transform: scale(0.99);
		}
	}

	@media (max-width: 24rem) {
		.video-meta {
			flex-direction: column;
			gap: 2px;
		}
	}
</style>
