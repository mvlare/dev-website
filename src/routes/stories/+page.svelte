<script lang="ts">
	import { base } from '$app/paths';
	// Future: glob stories from ./*/+page.svx
	// For now, a stub listing page.
	const stories = [
		{
			slug: 'moon-as-mirror',
			title: 'Building this site',
			date: '2026-03-02',
			tags: ['Log'],
			excerpt: 'SvelteKit, MDsveX and GitHub Pages — how this static site was built and what I learned along the way.'
		},
		{
			slug: 'building-in-the-open',
			title: 'Building with Claude AI',
			date: '2026-03-02',
			tags: ['Exploration'],
			excerpt: 'How Claude AI helped build this website — and what it taught me about working with AI as a pair programmer.'
		}
	];
</script>

<svelte:head>
	<title>Stories — Van Lare Consulting</title>
</svelte:head>

<div class="page-wrap">
	<header class="page-header">
		<p class="label">Stories</p>
		<h1>Reflections &amp; Explorations</h1>
		<p class="sub">Notes, logs and longer-form thinking.</p>
	</header>

	<ul class="story-list">
		{#each stories as story}
			<li class="story-item">
				<a href="{base}/stories/{story.slug}" class="story-link">
					<div class="story-meta">
						<time datetime={story.date}>{story.date}</time>
						{#each story.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					</div>
					<h2>{story.title}</h2>
					<p>{story.excerpt}</p>
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.page-wrap {
		max-width: 720px;
		margin: 0 auto;
		padding: 80px 40px;
	}

	.page-header {
		margin-bottom: 64px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.label {
		font-size: 12px;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-gray-dark);
	}

	h1 {
		font-family: var(--font-heading);
		font-weight: 600;
		font-size: 56px;
		color: var(--color-black);
	}

	.sub {
		font-size: 17px;
		color: var(--color-gray-dark);
	}

	.story-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.story-item {
		border-top: 1px solid var(--color-border);
	}
	.story-item:last-child {
		border-bottom: 1px solid var(--color-border);
	}

	.story-link {
		display: block;
		padding: 32px 0;
		transition: opacity 0.2s;
	}
	.story-link:hover { opacity: 0.7; }

	.story-meta {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 12px;
	}

	time {
		font-size: 13px;
		color: var(--color-gray-mid);
	}

	.tag {
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		background: var(--color-tag);
		color: #fff;
		padding: 3px 8px;
		border-radius: 4px;
	}

	h2 {
		font-family: var(--font-heading);
		font-weight: 600;
		font-size: 26px;
		color: var(--color-black);
		margin-bottom: 8px;
	}

	p {
		font-size: 15px;
		color: var(--color-gray-dark);
		line-height: 1.6;
	}
</style>
