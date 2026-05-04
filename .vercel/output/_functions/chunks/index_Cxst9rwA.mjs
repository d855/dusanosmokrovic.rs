import { c as createComponent } from './astro-component_eFomH1mP.mjs';
import 'piccolore';
import { r as renderTemplate, m as maybeRenderHead, n as renderComponent, h as addAttribute, o as renderSlot, p as renderHead } from './entrypoint_CZhtfCrt.mjs';
import 'clsx';

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", `<button id="theme-toggle" aria-label="Toggle theme" class="border-2 border-black dark:border-white p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] active:translate-y-1 active:shadow-none transition-all duration-150 cursor-pointer bg-background"> <svg id="sun-icon" class="w-5 h-5 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"> <path stroke-linecap="square" stroke-linejoin="miter" d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M17.72 17.72l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M17.72 6.28l1.06-1.06"></path> <circle cx="12" cy="12" r="4" stroke-linecap="square"></circle> </svg> <svg id="moon-icon" class="w-5 h-5 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"> <path stroke-linecap="square" stroke-linejoin="miter" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"></path> </svg> </button> <script>
  (function() {
    var sunIcon = document.getElementById('sun-icon');
    var moonIcon = document.getElementById('moon-icon');

    function syncIcons() {
      var isDark = document.documentElement.classList.contains('dark');
      if (sunIcon && moonIcon) {
        sunIcon.classList.toggle('hidden', !isDark);
        moonIcon.classList.toggle('hidden', isDark);
      }
    }

    syncIcons();

    document.getElementById('theme-toggle')?.addEventListener('click', function() {
      var isDark = document.documentElement.classList.contains('dark');
      var next = isDark ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', next === 'dark');
      localStorage.setItem('theme', next);
      syncIcons();
    });

    document.addEventListener('astro:after-swap', syncIcons);
  })();
<\/script>`])), maybeRenderHead());
}, "/Users/apple/Sites/dusanosmokrovicrs/src/components/ThemeToggle.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<header class="border-b-4 border-black dark:border-white bg-background sticky top-0 z-50"> <div class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between"> <div class="flex flex-col -ml-2"> <a href="/" class="font-heading text-xl font-black tracking-tight uppercase hover:bg-lime hover:text-black px-2 py-0.5 transition-colors">\nDušan Osmokrović\n</a> <div class="px-2 flex items-center gap-1.5" id="now-playing-header"> <span id="now-playing-icon" class="flex items-end gap-[2px] shrink-0 h-3 hidden"> <span class="w-[3px] h-3 bg-coral origin-bottom animate-equalizer-1"></span> <span class="w-[3px] h-3 bg-coral origin-bottom animate-equalizer-2"></span> <span class="w-[3px] h-3 bg-coral origin-bottom animate-equalizer-3"></span> </span> <span id="now-playing-text" class="text-[10px] text-muted-foreground whitespace-nowrap font-mono">\nNot playing\n</span> </div> </div> <nav class="flex items-center gap-1 sm:gap-2"> ', " ", " </nav> </div> </header> <script>\n  (function() {\n    var textEl = document.getElementById('now-playing-text');\n    var iconEl = document.getElementById('now-playing-icon');\n\n    async function fetchNowPlaying() {\n      if (!textEl) return;\n      try {\n        var res = await fetch('/api/now-playing');\n        var data = await res.json();\n        if (data.isPlaying) {\n          textEl.textContent = data.title + ' — ' + data.artist;\n          iconEl?.classList.remove('hidden');\n        } else {\n          textEl.textContent = 'Not playing';\n          iconEl?.classList.add('hidden');\n        }\n      } catch {}\n    }\n\n    fetchNowPlaying();\n    setInterval(function() {\n      if (!document.hidden) fetchNowPlaying();\n    }, 30000);\n  })();\n<\/script>"])), maybeRenderHead(), navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-foreground hover:text-background px-3 py-2 transition-colors hidden sm:block"> ${link.label} </a>`), renderComponent($$result, "ThemeToggle", $$ThemeToggle, {}));
}, "/Users/apple/Sites/dusanosmokrovicrs/src/components/Header.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Dušan Osmokrović" } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"', "><title>", "</title>", "</head> <body data-astro-cid-sckkx6r4> ", " <main data-astro-cid-sckkx6r4> ", " </main> <script>\n	(function() {\n		const theme = localStorage.getItem('theme') ||\n			(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');\n		if (theme === 'dark') document.documentElement.classList.add('dark');\n	})();\n<\/script> </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]));
}, "/Users/apple/Sites/dusanosmokrovicrs/src/layouts/Layout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const marqueeText = "SOFTWARE ENGINEER · WEB DEVELOPER · OPEN SOURCE · CLEAN CODE · ";
  const stack = ["TypeScript", "React", "Node.js", "Laravel", "Astro", "PostgreSQL"];
  return renderTemplate(_a || (_a = __template(["", " <script>\n	(async function fetchLastCommit() {\n		const username = 'd855';\n		try {\n			const res = await fetch(`https://api.github.com/users/${username}/events/public?per_page=10`);\n			if (!res.ok) return;\n			const events = await res.json();\n			const push = events.find(e => e.type === 'PushEvent');\n			if (!push) return;\n			const commit = push.payload.commits?.[push.payload.commits.length - 1];\n			if (!commit) return;\n\n			const repo = push.repo.name.split('/')[1];\n			const sha = commit.sha.substring(0, 7);\n			const msg = commit.message.split('\\n')[0];\n			const date = new Date(push.created_at);\n			const ago = timeAgo(date);\n\n			const msgEl = document.getElementById('commit-msg');\n			const metaEl = document.getElementById('commit-meta');\n			if (msgEl && metaEl) {\n				msgEl.textContent = msg;\n				msgEl.title = msg;\n				metaEl.textContent = `${sha} · ${repo} · ${ago}`;\n			}\n		} catch {}\n	})();\n\n	function timeAgo(date) {\n		const seconds = Math.floor((Date.now() - date.getTime()) / 1000);\n		if (seconds < 60) return 'just now';\n		const minutes = Math.floor(seconds / 60);\n		if (minutes < 60) return minutes + 'm ago';\n		const hours = Math.floor(minutes / 60);\n		if (hours < 24) return hours + 'h ago';\n		const days = Math.floor(hours / 24);\n		return days + 'd ago';\n	}\n<\/script>"], ["", " <script>\n	(async function fetchLastCommit() {\n		const username = 'd855';\n		try {\n			const res = await fetch(\\`https://api.github.com/users/\\${username}/events/public?per_page=10\\`);\n			if (!res.ok) return;\n			const events = await res.json();\n			const push = events.find(e => e.type === 'PushEvent');\n			if (!push) return;\n			const commit = push.payload.commits?.[push.payload.commits.length - 1];\n			if (!commit) return;\n\n			const repo = push.repo.name.split('/')[1];\n			const sha = commit.sha.substring(0, 7);\n			const msg = commit.message.split('\\\\n')[0];\n			const date = new Date(push.created_at);\n			const ago = timeAgo(date);\n\n			const msgEl = document.getElementById('commit-msg');\n			const metaEl = document.getElementById('commit-meta');\n			if (msgEl && metaEl) {\n				msgEl.textContent = msg;\n				msgEl.title = msg;\n				metaEl.textContent = \\`\\${sha} · \\${repo} · \\${ago}\\`;\n			}\n		} catch {}\n	})();\n\n	function timeAgo(date) {\n		const seconds = Math.floor((Date.now() - date.getTime()) / 1000);\n		if (seconds < 60) return 'just now';\n		const minutes = Math.floor(seconds / 60);\n		if (minutes < 60) return minutes + 'm ago';\n		const hours = Math.floor(minutes / 60);\n		if (hours < 24) return hours + 'h ago';\n		const days = Math.floor(hours / 24);\n		return days + 'd ago';\n	}\n<\/script>"])), renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative min-h-[calc(100vh-65px)] flex flex-col justify-between overflow-hidden"> <!-- Main hero content --> <div class="max-w-7xl mx-auto px-6 pt-16 sm:pt-24 pb-12 w-full"> <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"> <!-- Left column: headline --> <div class="lg:col-span-7 relative"> <p class="font-heading text-sm font-bold uppercase tracking-widest mb-6 animate-fade-up" style="animation-delay: 0.1s"> <span class="inline-block bg-lime text-black px-3 py-1 border-2 border-black mr-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">Hey</span>
I'm Dušan
</p> <h1 class="font-heading text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight mb-8 animate-fade-up" style="animation-delay: 0.2s">
I build
<span class="relative inline-block"> <span class="relative z-10">things</span> <span class="absolute bottom-1 left-0 w-full h-4 sm:h-6 bg-coral -z-0 -rotate-1"></span> </span> <br>for the
<span class="relative inline-block"> <span class="relative z-10">web</span> <span class="absolute bottom-1 left-0 w-full h-4 sm:h-6 bg-lime -z-0 rotate-1"></span> </span> </h1> <p class="text-lg sm:text-xl max-w-xl mb-10 text-muted-foreground leading-relaxed animate-fade-up" style="animation-delay: 0.35s">
Software engineer who loves turning ideas into real, working products.
						I care about good UX, clean architecture, and shipping stuff that actually matters.
</p> <div class="flex flex-wrap gap-4 animate-fade-up" style="animation-delay: 0.5s"> <a href="#work" class="group border-3 border-black dark:border-white px-8 py-4 font-heading font-bold uppercase text-sm tracking-wider shadow-[5px_5px_0px_0px_var(--lime)] hover:shadow-[2px_2px_0px_0px_var(--lime)] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-y-1 active:shadow-none transition-all bg-foreground text-background">
See my work
<span class="inline-block ml-2 transition-transform group-hover:translate-x-1">&rarr;</span> </a> <a href="#contact" class="group border-3 border-black dark:border-white px-8 py-4 font-heading font-bold uppercase text-sm tracking-wider shadow-[5px_5px_0px_0px_var(--coral)] hover:shadow-[2px_2px_0px_0px_var(--coral)] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-y-1 active:shadow-none transition-all bg-background">
Let's talk
<span class="inline-block ml-2 transition-transform group-hover:translate-x-1">&rarr;</span> </a> </div> </div> <!-- Right column: widget cards --> <div class="lg:col-span-5 relative lg:pt-4 flex flex-col gap-5"> <!-- Floating Serbia badge --> <div class="hidden lg:block absolute -top-6 -right-4 z-10 border-3 border-black bg-coral text-white px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-float -rotate-2" style="animation-delay: 0.6s">
Based in Serbia
</div> <!-- Last Commit --> <div class="border-3 border-black dark:border-white bg-background p-5 shadow-[6px_6px_0px_0px_var(--lime)] animate-slide-in-right" style="animation-delay: 0.4s"> <div class="flex items-center gap-2 mb-3"> <svg class="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"> <path d="M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5Zm-1.43-.25a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path> </svg> <span class="font-heading text-xs font-bold uppercase tracking-wider text-muted-foreground">Last Commit</span> </div> <div> <p id="commit-msg" class="font-heading text-sm font-bold truncate mb-1">Loading...</p> <p id="commit-meta" class="text-xs text-muted-foreground font-mono truncate">&mdash;</p> </div> </div> <!-- Current Stack --> <div class="border-3 border-black dark:border-white bg-background p-5 shadow-[6px_6px_0px_0px_var(--coral)] animate-slide-in-right" style="animation-delay: 0.5s"> <div class="flex items-center gap-2 mb-3"> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"> <path stroke-linecap="square" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0L12 17.25l-5.571-3m11.142 0L21.75 16.5 12 21.75l-9.75-5.25 4.179-2.25"></path> </svg> <span class="font-heading text-xs font-bold uppercase tracking-wider text-muted-foreground">Current Stack</span> </div> <div class="flex flex-wrap gap-2"> ${stack.map((tech) => renderTemplate`<span class="border-2 border-black dark:border-white px-3 py-1 text-xs font-bold uppercase tracking-wider bg-background hover:bg-lime hover:text-black transition-colors cursor-default"> ${tech} </span>`)} </div> </div> </div> </div> </div> <!-- Marquee ticker --> <div class="border-t-4 border-b-4 border-black dark:border-white bg-lime text-black py-3 overflow-hidden"> <div class="flex whitespace-nowrap animate-marquee"> ${[...Array(4)].map(() => renderTemplate`<span class="font-heading text-sm font-black tracking-[0.2em] uppercase"> ${marqueeText} </span>`)} </div> </div> </section> ` }));
}, "/Users/apple/Sites/dusanosmokrovicrs/src/pages/index.astro", void 0);

const $$file = "/Users/apple/Sites/dusanosmokrovicrs/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
