---
title: "Why I Switched to Astro for Everything"
description: "Performance, DX, and shipping faster with less JavaScript."
date: 2025-04-15
tags: ["astro", "web", "performance"]
---

I've built sites with Next.js, Nuxt, SvelteKit, and plain HTML. They all work. But Astro changed how I think about what a website actually needs.

## The problem with SPAs for content sites

Most portfolio sites, blogs, and landing pages don't need a JavaScript runtime on the client. They're documents. Yet we ship 200KB+ of framework code to render what is essentially static HTML with some interactivity sprinkled on top.

## What Astro gets right

**Zero JS by default.** Pages ship as pure HTML unless you explicitly opt into client-side interactivity. This isn't a limitation — it's a feature. My Lighthouse scores went from "okay" to 100 across the board.

**Island architecture.** When I do need interactivity, I hydrate individual components. A React counter doesn't mean the whole page needs React. Each island loads independently.

**File-based routing that makes sense.** No magic, no `[...slug].tsx` confusion. A file in `pages/` becomes a route. Content collections give me type-safe markdown with zero config.

## The DX difference

```astro
---
// This runs at build time. Not shipped to client.
const posts = await getCollection('blog');
---

<ul>
  {posts.map(post => <li>{post.data.title}</li>)}
</ul>
```

No `useEffect`. No loading states. No hydration mismatch. Data fetching happens at build time and the result is static HTML.

## When I wouldn't use Astro

Highly interactive apps — dashboards, real-time tools, collaborative editors. If your page is 90% interactive components, the island model adds friction. Use Next.js or SvelteKit instead.

But for everything else? Astro wins.
