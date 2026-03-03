<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	let menuOpen = false;

	// Close menu on route change
	$: $page.route.id, menuOpen = false;
</script>

<header>
	<div class="inner">
		<a href="{base}/" class="logo">
			<span class="logo-text">Van Lare Consulting</span>
			<span class="logo-bar" aria-hidden="true"></span>
		</a>

		<nav>
			<a href="{base}/" class="nav-home" class:active={$page.route.id === '/'} aria-label="Home">
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
					<polyline points="9 21 9 12 15 12 15 21"/>
				</svg>
			</a>
			<a href="{base}/about" class:active={$page.route.id === '/about'}>Marcel</a>
			<a href="{base}/stories" class:active={$page.route.id?.startsWith('/stories')}>Stories</a>
			<a href="{base}/links" class:active={$page.route.id === '/links'}>Links</a>
		</nav>

		<a href="mailto:info@vanlareconsulting.nl" class="cta-pill">Get in Touch</a>

		<button class="menu-btn" on:click={() => menuOpen = !menuOpen} aria-label="Toggle menu" aria-expanded={menuOpen}>
			{#if menuOpen}
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
					<line x1="18" y1="6" x2="6" y2="18"/>
					<line x1="6" y1="6" x2="18" y2="18"/>
				</svg>
			{:else}
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
					<line x1="3" y1="6" x2="21" y2="6"/>
					<line x1="3" y1="12" x2="21" y2="12"/>
					<line x1="3" y1="18" x2="21" y2="18"/>
				</svg>
			{/if}
		</button>
	</div>

	{#if menuOpen}
		<nav class="mobile-menu">
			<a href="{base}/about" class:active={$page.route.id === '/about'}>Marcel</a>
			<a href="{base}/stories" class:active={$page.route.id?.startsWith('/stories')}>Stories</a>
			<a href="{base}/links" class:active={$page.route.id === '/links'}>Links</a>
		</nav>
	{/if}
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 100;
		background: var(--color-bg);
		border-bottom: 1px solid var(--color-border);
	}

	.inner {
		max-width: 1440px;
		margin: 0 auto;
		padding: 0 80px;
		height: 72px;
		display: flex;
		align-items: center;
		gap: 48px;
	}

	.logo {
		display: flex;
		flex-direction: column;
		gap: 4px;
		margin-right: auto;
	}

	.nav-home {
		display: flex;
		align-items: center;
	}

	.logo-text {
		font-family: var(--font-heading);
		font-weight: 600;
		font-size: 20px;
		color: var(--color-green);
		white-space: nowrap;
		transition: text-shadow 0.3s;
	}

	.logo:hover .logo-text {
		text-shadow: 0 0 8px rgba(74, 222, 128, 0.6), 0 0 20px rgba(74, 222, 128, 0.3);
	}

	.logo-bar {
		display: block;
		height: 2px;
		background: var(--color-green);
		width: 100%;
	}

	nav {
		display: flex;
		gap: 32px;
	}

	nav a {
		font-family: var(--font-body);
		font-weight: 500;
		font-size: 15px;
		color: var(--color-gray-dark);
		transition: color 0.2s;
	}

	nav a:hover,
	nav a.active {
		color: var(--color-black);
	}

	.cta-pill {
		font-family: var(--font-body);
		font-weight: 500;
		font-size: 14px;
		background: var(--color-green);
		color: #fff;
		padding: 10px 20px;
		border-radius: 999px;
		white-space: nowrap;
		transition: background 0.2s;
	}

	.cta-pill:hover {
		background: var(--color-green-mid);
	}

	.menu-btn {
		display: none;
		align-items: center;
		justify-content: center;
		background: none;
		border: none;
		cursor: pointer;
		color: var(--color-black);
		padding: 4px;
	}

	.mobile-menu {
		display: none;
		flex-direction: column;
		border-top: 1px solid var(--color-border);
		background: var(--color-bg);
	}

	.mobile-menu a {
		padding: 14px 16px;
		font-size: 15px;
		font-weight: 500;
		color: var(--color-gray-dark);
		border-bottom: 1px solid var(--color-border);
		transition: color 0.2s;
	}

	.mobile-menu a:hover,
	.mobile-menu a.active {
		color: var(--color-black);
	}

	@media (max-width: 768px) {
		.inner {
			padding: 0 16px;
			gap: 12px;
		}
		.logo-text {
			font-size: 17px;
		}
		nav {
			display: none;
		}
		.cta-pill {
			font-size: 13px;
			padding: 8px 14px;
		}
		.menu-btn {
			display: flex;
		}
		.mobile-menu {
			display: flex;
		}
	}
</style>
