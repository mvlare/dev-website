<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
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
	</div>
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

	@media (max-width: 768px) {
		.inner {
			padding: 0 16px;
			gap: 12px;
		}
		.logo {
			margin-right: 0;
		}
		.logo-text {
			font-size: 17px;
		}
		nav {
			gap: 16px;
		}
		nav a {
			font-size: 14px;
		}
		.nav-home {
			display: none;
		}
		.cta-pill {
			display: none;
		}
	}
</style>
