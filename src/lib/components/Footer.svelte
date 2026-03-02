<script>
	import { base } from '$app/paths';
</script>

<footer>
	<div class="inner">
		<div class="col brand">
			<span class="brand-name">Van Lare Consulting</span>
		</div>

		<div class="col">
			<h4>Sections</h4>
			<ul>
				<li><a href="{base}/about">Marcel</a></li>
				<li><a href="{base}/stories">Stories</a></li>
				<li><a href="{base}/links">Links</a></li>
			</ul>
		</div>

		<div class="col">
			<h4>Connect</h4>
			<ul>
				<li><a href="https://github.com/mvlare" target="_blank" rel="noopener">GitHub</a></li>
				<li><a href="https://www.linkedin.com/in/mvlare/" target="_blank" rel="noopener">LinkedIn</a></li>
				<li><a href="{base}/docs/CV-mvlare_dutch_2025_12_14.pdf" target="_blank" rel="noopener">Resume</a></li>
				<li><a href="mailto:mvlare@gmail.com">Email</a></li>
			</ul>
		</div>
	</div>

	<div class="copyright">
		<div class="copyright-inner">
			<span>© 2026 Van Lare Consulting.</span>
			<span>Made with curiosity.</span>
		</div>
	</div>
</footer>

<style>
	footer {
		background: var(--color-black);
		color: #fff;
	}

	.inner {
		max-width: 1440px;
		margin: 0 auto;
		padding: 64px 80px;
		display: flex;
		gap: 80px;
	}

	.col {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.col.brand {
		flex: 1;
	}

	.brand-name {
		font-family: var(--font-heading);
		font-weight: 600;
		font-size: 22px;
		color: #fff;
	}

	.tagline {
		font-size: 14px;
		color: var(--color-gray-mid);
	}

	h4 {
		font-family: var(--font-body);
		font-weight: 600;
		font-size: 13px;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-gray-mid);
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	ul a {
		font-size: 15px;
		color: #ccc;
		transition: color 0.2s;
	}

	ul a:hover {
		color: #fff;
	}

	.copyright {
		border-top: 1px solid #222;
	}

	.copyright-inner {
		max-width: 1440px;
		margin: 0 auto;
		padding: 20px 80px;
		display: flex;
		justify-content: space-between;
		font-size: 13px;
		color: var(--color-gray-mid);
	}
</style>
