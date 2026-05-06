---
title: "The Agent Pattern Nobody Writes Down"
description: "The agent loop is three steps. Everything that actually matters lives outside of it."
date: 2026-03-08
tags: ["ai", "agents", "llm"]
---

Every agent tutorial shows you the same toy: a loop, a tool, an LLM call. It runs. You feel smart. Then you build a real one and it loops forever, calls the wrong tool, or quietly returns garbage.

Here's the loop nobody draws clearly:

1. Send messages + tool definitions to the model.
2. If response has tool calls, execute them, append results, go to 1.
3. If response is plain text, you're done.

That's the whole thing. The hard parts aren't in the loop, they're around it.

**Stop conditions.** A max iteration count is non-negotiable. I've watched agents call `search` then `search` then `search` because the tool result wasn't what they wanted and nothing told them to give up. Cap it at 10 or 15 turns. Log when you hit the cap.

**Tool design is prompt design.** The name and description of a tool matter more than the system prompt. `search_docs(query: string)` is fine. `search(q)` is not. The model picks tools by reading their docs, the same way you would.

**Errors are signal.** When a tool fails, return the error message verbatim to the model. Don't catch and pretend it worked. The model will read "permission denied" and try a different approach. Hide it and you'll loop.

**Memory is a lie until it isn't.** For most agents, just keep the full message history and stop worrying. You'll hit token limits later than you think. When you do, summarize the oldest turns into one message and move on. Skip the vector-store-as-memory thing until you have a real reason.

**Streaming matters more than you'd guess.** Watching tokens appear is the difference between "this is broken" and "this is thinking." Same latency, completely different feel. Wire up streaming early.

I built three agents before I internalized any of this. The fourth one actually works.
