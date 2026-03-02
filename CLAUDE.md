# dev-website

Personal website project.

## Stack

- **SvelteKit** with static adapter
- **MDsveX** for Markdown + Svelte hybrid pages (`.svx` files)
- **remark/rehype** for Markdown processing
- **Frontmatter** for page metadata
- **GitHub Pages** for hosting
- **Pencil.dev** for design ui

## Structure

```
src/
  routes/
    +layout.svelte
    +page.svelte          // homepage 
    marcel/
      +page.svx           // about page
    stories/
      +page.svelte        // auto-generated stories list
      *.svx               // individual stories files
    links/
      +page.svx           // curated link list
```

## Sections

- **Marcel** (`/marcel`) — about page, represented by Earth
- **Stories** (`/stories`) — stories, notes, explorations, logs, represented by Moon
- **Links** (`/links`) — collection of handy links, represented by Sun

## Note Frontmatter

```yaml
---
title: "My First Post"
date: 2026-02-17
tags: ["svelte", "learning"]
draft: false
---
```

## Homepage Animation


