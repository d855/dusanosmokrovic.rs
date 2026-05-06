---
title: "My First RAG: What I Got Wrong"
description: "Four mistakes I made building my first retrieval-augmented chatbot, and what I'd do differently now."
date: 2026-04-12
tags: ["ai", "rag", "laravel", "postgres"]
---

I built my first RAG over a weekend. It "worked." Demoed great. Then I actually used it and it was useless.

Mistake one: I chunked by character count. 1000 chars, 200 overlap, the default everyone copies. My docs were markdown with code blocks and headings. Chunks split mid-function. Chunks split mid-sentence. The model got fragments and hallucinated the rest.

Switched to splitting on headings, with code blocks kept whole. Quality jumped immediately.

Mistake two: I trusted cosine similarity. Top-5 results looked relevant on paper but missed the obvious answer that was sitting in the docs verbatim. Turns out vector search is bad at exact matches and proper nouns. Added BM25 alongside it (hybrid search), merged the results, and suddenly "what does the `retry_after` config do" actually returned the page about `retry_after`.

Mistake three: no reranker. The top-20 from hybrid search had the right answer somewhere, just not at position 1. A small reranker (I used Cohere's, you can use a local one) reordered the results and the answer rose to the top. Cheap, fast, huge quality win.

Mistake four — the big one: I had no evals. I'd tweak chunking, run two prompts by hand, decide it felt better, ship. I was just vibing. Once I wrote 30 question/answer pairs and ran them on every change, half my "improvements" were actually regressions.

If I started over today: pgvector in Postgres, hybrid search, rerank, evals on day one. Skip the vector DB SaaS until you outgrow Postgres. You won't.
