<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Van Lare Consulting — Explore and build</title>
</svelte:head>

<!-- ═══ HERO ═══════════════════════════════════════════════════════════ -->
<section class="hero">
	<div class="hero-inner">
		<p class="hero-label">Welcome</p>
		<h1 class="hero-headline">Explore and build</h1>
		<p class="hero-sub">
			Back-end developer with a touch of front-end skills.<br>
			Experienced in Oracle, PL/SQL, SQL and database design.<br>
			Diving into generative AI with Claude, Sveltekit,Typescript and Postgres.<br>
			<span class="hero-label">Open for more.</span>
		</p>
	</div>
</section>

<!-- ═══ METRICS STRIP ══════════════════════════════════════════════════ -->
<section class="metrics">
	<div class="metrics-inner">
		<div class="metric">
			<a href="{base}/about" class="metric-btn metric-btn-outline">Marcel</a>
			<span class="metric-label">Earth — Who I Am</span>
		</div>
		<div class="divider" aria-hidden="true"></div>
		<div class="metric">
			<a href="{base}/stories" class="metric-btn metric-btn-primary">Read Stories</a>
			<span class="metric-label">Moon — Reflection</span>
		</div>
		<div class="divider" aria-hidden="true"></div>
		<div class="metric">
			<a href="{base}/links" class="metric-btn metric-btn-ghost">Browse Links</a>
			<span class="metric-label">Sun — Selection</span>
		</div>
	</div>
</section>

<!-- ═══ ABOUT ═══════════════════════════════════════════════════════════ -->
<section class="about">
	<div class="about-inner">
		<div class="about-image-wrap">
			<img
				src="{base}/images/2015_epic_earthmoonstill.jpg"
				alt="Earth and Moon from NASA EPIC camera"
				class="about-img"
			/>
		</div>
		<div class="about-content">
			<p class="section-label">About</p>
			<h2>Who I am</h2>
			<p class="about-bio">
			  I'm Marcel — a freelance senior database developer based in the Netherlands. 
			  I've spent most of my career working with Oracle, SQL, PL/SQL, APIs, JSON, and XML, 
			  building custom software in both large project teams and small, focused environments.
              My strength lies in combining a solid technical foundation with a clear functional overview. 
			  I enjoy designing integration solutions — from database structures to JSON interfaces to external systems.
              I'm also comfortable stepping into frontend territory when it helps create a complete solution. 
			  Right now, I'm exploring SvelteKit and Postgres together with Claude AI through a private project, 
			  expanding my toolkit and experimenting with new ways of building.
			</p>
			<a href="{base}/about" class="arrow-link">
				Read more about me
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="7" y1="17" x2="17" y2="7"/>
					<polyline points="7 7 17 7 17 17"/>
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- ═══ STORIES ══════════════════════════════════════════════════════════ -->
<section class="stories">
	<div class="stories-inner">
		<div class="stories-header">
			<div>
				<p class="section-label light">Stories</p>
				<h2 class="light">Reflections &amp; Explorations</h2>
			</div>
			<a href="{base}/stories" class="arrow-link light">
				All stories
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="7" y1="17" x2="17" y2="7"/>
					<polyline points="7 7 17 7 17 17"/>
				</svg>
			</a>
		</div>

		<div class="cards">
			<a href="{base}/stories/moon-as-mirror" class="card">
				<div class="card-img-wrap">
					<img
						src="{base}/images/GSFC_20171208_Archive_e001982_nasa_moon.jpg"
						alt="Moon surface photograph"
					/>
				</div>
				<div class="card-body">
					<span class="tag">Log</span>
					<h3>Building this site</h3>
					<p>SvelteKit, MDsveX and GitHub Pages — how this static site was built and what I learned along the way.</p>
				</div>
			</a>

			<a href="{base}/stories/building-in-the-open" class="card">
				<div class="card-img-wrap">
					<img
						src="{base}/images/PIA00404~large_nasa_moon.jpg"
						alt="Moon surface photograph"
					/>
				</div>
				<div class="card-body">
					<span class="tag">Exploration</span>
					<h3>Building with Claude AI</h3>
					<p>How Claude AI helped build this website — and what it taught me about working with AI as a pair programmer.</p>
				</div>
			</a>
		</div>
	</div>
</section>

<!-- ═══ LINKS ═══════════════════════════════════════════════════════════ -->
<section class="links-section">
	<div class="links-inner">
		<div class="links-header">
			<div class="links-header-text">
				<p class="section-label">Links</p>
				<h2>Curated Selection</h2>
				<p class="links-sub">Oracle, PL/SQL, TypeScript, Svelte, Postgres — links that still matter.</p>
			</div>
		</div>

		<ol class="link-list">
			<li class="link-row">
				<span class="link-num">01</span>
				<div class="link-body">
					<a href="https://oracle-base.com/" target="_blank" rel="noopener" class="link-title">Oracle Base</a>
					<p class="link-desc">Practical Oracle and PL/SQL articles, examples and reference — one of the best Oracle resources around.</p>
				</div>
				<svg class="link-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="7" y1="17" x2="17" y2="7"/>
					<polyline points="7 7 17 7 17 17"/>
				</svg>
			</li>
			<li class="link-row">
				<span class="link-num">02</span>
				<div class="link-body">
					<a href="https://svelte.dev/" target="_blank" rel="noopener" class="link-title">Svelte</a>
					<p class="link-desc">The framework powering this site — lean, fast, and a pleasure to work with.</p>
				</div>
				<svg class="link-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="7" y1="17" x2="17" y2="7"/>
					<polyline points="7 7 17 7 17 17"/>
				</svg>
			</li>
			<li class="link-row">
				<span class="link-num">03</span>
				<div class="link-body">
					<a href="https://addyosmani.com/blog/21-lessons/" target="_blank" rel="noopener" class="link-title">21 Lessons — Addy Osmani</a>
					<p class="link-desc">Hard-won engineering lessons from one of Google's most respected developers.</p>
				</div>
				<svg class="link-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="7" y1="17" x2="17" y2="7"/>
					<polyline points="7 7 17 7 17 17"/>
				</svg>
			</li>
		</ol>

		<a href="{base}/links" class="arrow-link">See all links
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
				<line x1="7" y1="17" x2="17" y2="7"/>
				<polyline points="7 7 17 7 17 17"/>
			</svg>
		</a>
	</div>
</section>

<!-- ═══ FINAL CTA ════════════════════════════════════════════════════════ -->
<section class="final-cta">
	<div class="final-cta-inner">
		<h2>Explore and build together</h2>
		<p>Have a project in mind, a question, or just want to say hello?</p>
		<a href="mailto:mvlare@gmail.com" class="btn-primary large">Get in Touch</a>
		<a href="https://github.com/mvlare" target="_blank" rel="noopener" class="linkedin-link">
			<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
			</svg>
			GitHub
		</a>
		<a href="https://www.linkedin.com/in/mvlare/" target="_blank" rel="noopener" class="linkedin-link">
			<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
				<rect x="2" y="9" width="4" height="12"/>
				<circle cx="4" cy="4" r="2"/>
			</svg>
			LinkedIn
		</a>
	</div>
</section>

<style>
/* ── Shared ──────────────────────────────────────────────────────────── */
.section-label {
	font-family: var(--font-body);
	font-weight: 600;
	font-size: 12px;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: var(--color-gray-dark);
	margin-bottom: 12px;
}
.section-label.light { color: rgba(255,255,255,0.5); }

h2 {
	font-family: var(--font-heading);
	font-weight: 600;
	font-size: 40px;
	line-height: 1.15;
	color: var(--color-black);
}
h2.light { color: #fff; }

.arrow-link {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	font-weight: 500;
	font-size: 14px;
	color: var(--color-green);
	transition: gap 0.2s;
}
.arrow-link:hover { gap: 10px; }
.arrow-link.light { color: rgba(255,255,255,0.7); }
.arrow-link.light:hover { color: #fff; }

.btn-primary {
	display: inline-block;
	background: var(--color-green);
	color: #fff;
	font-weight: 500;
	font-size: 15px;
	padding: 14px 28px;
	border-radius: 8px;
	transition: background 0.2s;
}
.btn-primary:hover { background: var(--color-green-mid); }
.btn-primary.large { font-size: 16px; padding: 16px 36px; border-radius: 999px; }

.btn-outline {
	display: inline-block;
	border: 1.5px solid var(--color-black);
	color: var(--color-black);
	font-weight: 500;
	font-size: 15px;
	padding: 14px 28px;
	border-radius: 8px;
	transition: border-color 0.2s, color 0.2s;
}
.btn-outline:hover {
	border-color: var(--color-green);
	color: var(--color-green);
}

/* ── Hero ────────────────────────────────────────────────────────────── */
.hero {
	background: var(--color-bg-subtle);
	border-bottom: 1px solid var(--color-border);
	padding: 48px 0 16px;
}
.hero-inner {
	max-width: 720px;
	padding: 0 80px;
}
.hero-label {
	font-size: 13px;
	font-weight: 600;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: var(--color-green);
	margin-bottom: 20px;
}
.hero-headline {
	font-family: var(--font-heading);
	font-weight: 600;
	font-size: 72px;
	line-height: 1.05;
	color: var(--color-black);
	margin-bottom: 24px;
	transition: text-shadow 0.3s;
}
.hero-headline:hover {
	text-shadow: 0 0 8px rgba(74, 222, 128, 0.6), 0 0 20px rgba(74, 222, 128, 0.3);
}
.hero-sub {
	font-size: 18px;
	color: var(--color-gray-dark);
	line-height: 1.6;
	margin-bottom: 40px;
	max-width: 500px;
}
.hero-ctas {
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
}

/* ── Metrics Strip ───────────────────────────────────────────────────── */
.metrics {
	border-bottom: 1px solid var(--color-border);
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}
.metrics-inner {
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.metric {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	padding: 24px 0;
	flex: 1;
}

.metric-btn {
	display: inline-block;
	font-weight: 500;
	font-size: 13px;
	padding: 8px 18px;
	border-radius: 6px;
	margin-top: 4px;
	transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.metric-btn-primary {
	background: var(--color-green);
	color: #fff;
}
.metric-btn-primary:hover { background: var(--color-green-mid); }
.metric-btn-outline {
	border: 1.5px solid var(--color-black);
	color: var(--color-black);
}
.metric-btn-outline:hover {
	border-color: var(--color-green);
	color: var(--color-green);
}
.metric-btn-ghost {
	border: 1.5px solid var(--color-border);
	color: var(--color-gray-dark);
	background: #fff;
}
.metric-btn-ghost:hover {
	border-color: var(--color-green);
	color: var(--color-green);
}
.metric-num {
	font-family: var(--font-heading);
	font-weight: 600;
	font-size: 28px;
	color: var(--color-black);
}
.metric-icon {
	font-size: 28px;
	line-height: 1;
}
.metric-label {
	font-size: 13px;
	color: var(--color-gray-dark);
}
.divider {
	width: 1px;
	height: 60px;
	background: var(--color-border);
}

/* ── About ───────────────────────────────────────────────────────────── */
.about {
	padding: 96px 0;
}
.about-inner {
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 80px;
	display: flex;
	gap: 80px;
	align-items: center;
}
.about-image-wrap {
	flex-shrink: 0;
}
.about-img {
	width: 480px;
	height: 400px;
	object-fit: cover;
	border-radius: 12px;
	box-shadow: 0 8px 40px rgba(0,0,0,0.12);
}
.about-content {
	display: flex;
	flex-direction: column;
	gap: 20px;
}
.about-bio {
	font-size: 16px;
	line-height: 1.7;
	color: var(--color-gray-dark);
	max-width: 480px;
}

/* ── Stories ─────────────────────────────────────────────────────────── */
.stories {
	background: var(--color-green);
	padding: 96px 0;
}
.stories-inner {
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 80px;
	display: flex;
	flex-direction: column;
	gap: 48px;
}
.stories-header {
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
}
.stories-header h2 { margin-top: 8px; }
.cards {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 32px;
}
.card {
	background: rgba(255,255,255,0.06);
	border: 1px solid rgba(255,255,255,0.12);
	border-radius: 12px;
	overflow: hidden;
	transition: transform 0.2s;
}
.card:hover { transform: translateY(-4px); }
.card-img-wrap {
	height: 200px;
	overflow: hidden;
}
.card-img-wrap img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.card-body {
	padding: 24px;
	display: flex;
	flex-direction: column;
	gap: 12px;
}
.tag {
	display: inline-block;
	background: var(--color-tag);
	color: #fff;
	font-size: 11px;
	font-weight: 600;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	padding: 4px 10px;
	border-radius: 4px;
	width: fit-content;
}
.card h3 {
	font-family: var(--font-heading);
	font-weight: 600;
	font-size: 22px;
	color: #fff;
}
.card p {
	font-size: 14px;
	color: rgba(255,255,255,0.65);
	line-height: 1.6;
}

/* ── Links ───────────────────────────────────────────────────────────── */
.links-section {
	padding: 96px 0;
	border-top: 1px solid var(--color-border);
}
.links-inner {
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 80px;
	display: flex;
	flex-direction: column;
	gap: 48px;
}
.links-header {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
}
.links-header-text {
	display: flex;
	flex-direction: column;
	gap: 8px;
}
.links-sub {
	font-size: 16px;
	color: var(--color-gray-dark);
	margin-top: 8px;
}
.sun-img {
	width: 120px;
	height: 120px;
	border-radius: 50%;
	object-fit: cover;
}
.link-list {
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 0;
}
.link-row {
	display: flex;
	align-items: center;
	gap: 32px;
	padding: 24px 0;
	border-bottom: 1px solid var(--color-border);
}
.link-row:first-child { border-top: 1px solid var(--color-border); }
.link-num {
	font-family: var(--font-heading);
	font-weight: 500;
	font-size: 24px;
	color: var(--color-gray-mid);
	min-width: 40px;
}
.link-body {
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 4px;
}
.link-title {
	font-weight: 600;
	font-size: 17px;
	color: var(--color-black);
	transition: color 0.2s;
}
.link-title:hover { color: var(--color-green); }
.link-desc {
	font-size: 14px;
	color: var(--color-gray-dark);
	line-height: 1.5;
}
.link-arrow {
	color: var(--color-gray-mid);
	flex-shrink: 0;
}

/* ── Final CTA ───────────────────────────────────────────────────────── */
.final-cta {
	background: var(--color-bg-subtle);
	border-top: 1px solid var(--color-border);
	padding: 96px 0;
}
.final-cta-inner {
	max-width: 600px;
	margin: 0 auto;
	padding: 0 80px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
}
.final-cta-inner p {
	font-size: 16px;
	color: var(--color-gray-dark);
}
.linkedin-link {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	font-weight: 500;
	font-size: 15px;
	color: var(--color-gray-dark);
	transition: color 0.2s;
}
.linkedin-link:hover { color: var(--color-green); }
</style>
