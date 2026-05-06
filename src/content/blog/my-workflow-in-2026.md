---
title: "My Workflow in 2026 (and Why It Looks Nothing Like 2023)"
description: "What three years of AI tooling actually changed about how I build software."
date: 2026-05-06
tags: ["ai", "workflow", "tools"]
---

Three years ago my workflow was PHPStorm, a terminal, Stack Overflow, and the docs. I'd read, type, run, repeat. The bottleneck was me — how fast I could turn an idea into syntax.

That bottleneck is gone. Here's what replaced it.

**The editor isn't the editor anymore.** PHPStorm is still home, but most of the heavy lifting happens in Claude Code in the terminal next to it. I barely write code top-to-bottom anymore. I describe what I want, watch a draft appear, then I edit. I'm a code reviewer with a very fast assistant who never sleeps and occasionally lies.

**Reading replaced typing.** My day is 70% reading now — reading diffs, reading generated code, reading model output, deciding what's wrong with it. Typing is the easy part. Knowing what should be there is the job.

**Docs are conversations.** I haven't read a Laravel doc page front-to-back in months. I ask, I get an answer, I verify against the source. When the model is wrong (it is, often), I notice because I've seen the shape of the right answer enough times. That calibration is the part I didn't realize I'd built up until I watched it pay off every single day.

**Side projects ship.** I have a folder of half-built ideas from 2022 that I never finished because the boring middle was too long. In 2026 the boring middle is twenty minutes. I've shipped more side projects this year than the previous five combined. Most are bad. Some aren't.

**The stack got smaller.** I used to chase frameworks. Now I pick boring stuff (Laravel, Postgres, React) and let the model handle the parts I used to outsource to libraries. I write less glue code. I delete more dependencies.

**RAG and agents are just code now.** Two years ago this stuff felt like research. Now I add a chatbot to a Laravel app on a Tuesday afternoon. Embeddings in pgvector, hybrid search, an agent loop with three tools. It's not magic, it's plumbing — and the plumbing is documented enough that one person can do it.

**What hasn't changed.** Taste. Knowing what to build. Knowing when "it works on my machine" is hiding a real bug. Reading a system and feeling where it'll break under load. None of this got easier. If anything it matters more, because everyone is shipping ten times faster and breaking ten times more stuff.

The honest summary: my output is up, my satisfaction is up, my confidence in any individual line of code is down, and the skill I lean on hardest is the one nobody's selling a course for. Reading code. Knowing why. Saying no.

I don't know what 2027 looks like. I'm pretty sure my workflow won't survive it intact.
