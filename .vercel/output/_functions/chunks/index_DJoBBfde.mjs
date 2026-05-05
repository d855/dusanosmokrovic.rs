import { c as createComponent, b as VALID_INPUT_FORMATS } from './consts_H8tlbtXL.mjs';
import 'piccolore';
import { r as renderTemplate, m as maybeRenderHead, h as addAttribute, n as renderComponent, o as renderSlot, p as renderHead, q as generateCspDigest, s as spreadAttributes, u as unescapeHTML, v as removeBase, b as isRemotePath, A as AstroError, w as UnknownContentCollectionError } from './entrypoint_BbVBoy0g.mjs';
import 'clsx';
import 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import * as z from 'zod/v4';
import * as devalue from 'devalue';

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
    { label: "Writings", href: "#writings" },
    { label: "Contact", href: "#contact" }
  ];
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<header class="border-b-4 border-black dark:border-white bg-background sticky top-0 z-50"> <div class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between"> <div class="flex flex-col -ml-2"> <a href="/" class="font-heading text-xl font-black tracking-tight uppercase hover:bg-lime hover:text-black px-2 py-0.5 transition-colors">\nDušan Osmokrović\n</a> <div class="px-2 flex items-center gap-1.5" id="now-playing-header"> <span id="now-playing-icon" class="flex items-end gap-[2px] shrink-0 h-3 hidden"> <span class="w-[3px] h-3 bg-coral origin-bottom animate-equalizer-1"></span> <span class="w-[3px] h-3 bg-coral origin-bottom animate-equalizer-2"></span> <span class="w-[3px] h-3 bg-coral origin-bottom animate-equalizer-3"></span> </span> <span id="now-playing-text" class="text-[10px] text-muted-foreground whitespace-nowrap font-mono">\nNot playing\n</span> </div> </div> <nav class="flex items-center gap-1 sm:gap-2"> ', " ", ' <button id="mobile-menu-btn" class="sm:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] ml-1" aria-label="Toggle menu" aria-expanded="false"> <span class="w-5 h-[3px] bg-foreground transition-all duration-200 origin-center" id="burger-top"></span> <span class="w-5 h-[3px] bg-foreground transition-all duration-200" id="burger-mid"></span> <span class="w-5 h-[3px] bg-foreground transition-all duration-200 origin-center" id="burger-bot"></span> </button> </nav> </div> <div id="mobile-menu" class="sm:hidden hidden border-t-2 border-black dark:border-white bg-background"> ', " </div> </header> <script>\n  (function() {\n    var textEl = document.getElementById('now-playing-text');\n    var iconEl = document.getElementById('now-playing-icon');\n\n    async function fetchNowPlaying() {\n      if (!textEl) return;\n      try {\n        var res = await fetch('/api/now-playing');\n        var data = await res.json();\n        if (data.isPlaying) {\n          textEl.textContent = data.title + ' — ' + data.artist;\n          iconEl?.classList.remove('hidden');\n        } else {\n          textEl.textContent = 'Not playing';\n          iconEl?.classList.add('hidden');\n        }\n      } catch {}\n    }\n\n    fetchNowPlaying();\n    setInterval(function() {\n      if (!document.hidden) fetchNowPlaying();\n    }, 30000);\n  })();\n\n  (function() {\n    var btn = document.getElementById('mobile-menu-btn');\n    var menu = document.getElementById('mobile-menu');\n    var top = document.getElementById('burger-top');\n    var mid = document.getElementById('burger-mid');\n    var bot = document.getElementById('burger-bot');\n    if (!btn || !menu) return;\n\n    var open = false;\n    btn.addEventListener('click', function() {\n      open = !open;\n      menu.classList.toggle('hidden', !open);\n      btn.setAttribute('aria-expanded', String(open));\n      top.style.transform = open ? 'rotate(45deg) translate(2.5px, 2.5px)' : '';\n      mid.style.opacity = open ? '0' : '1';\n      bot.style.transform = open ? 'rotate(-45deg) translate(2.5px, -2.5px)' : '';\n    });\n\n    menu.querySelectorAll('.mobile-nav-link').forEach(function(link) {\n      link.addEventListener('click', function() {\n        open = false;\n        menu.classList.add('hidden');\n        btn.setAttribute('aria-expanded', 'false');\n        top.style.transform = '';\n        mid.style.opacity = '1';\n        bot.style.transform = '';\n      });\n    });\n  })();\n<\/script>"])), maybeRenderHead(), navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-foreground hover:text-background px-3 py-2 transition-colors hidden sm:block"> ${link.label} </a>`), renderComponent($$result, "ThemeToggle", $$ThemeToggle, {}), navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="block font-heading text-sm font-bold uppercase tracking-wider px-6 py-4 border-b border-border hover:bg-foreground hover:text-background transition-colors mobile-nav-link"> ${link.label} </a>`));
}, "/Users/apple/Sites/dusanosmokrovicrs/src/components/Header.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Dušan Osmokrović — Software Engineer",
    description = "Software engineer who builds things for the web. Portfolio of Dušan Osmokrović."
  } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"', '><meta name="description"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', "><title>", "</title>", "</head> <body data-astro-cid-sckkx6r4> ", " <main data-astro-cid-sckkx6r4> ", " </main> <script>\n	(function() {\n		const theme = localStorage.getItem('theme') ||\n			(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');\n		if (theme === 'dark') document.documentElement.classList.add('dark');\n	})();\n<\/script> </body></html>"])), addAttribute(Astro2.generator, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), title, renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]));
}, "/Users/apple/Sites/dusanosmokrovicrs/src/layouts/Layout.astro", void 0);

function createSvgComponent({ meta, attributes, children, styles }) {
  const hasStyles = styles.length > 0;
  const Component = createComponent({
    async factory(result, props) {
      const normalizedProps = normalizeProps(attributes, props);
      if (hasStyles && result.cspDestination) {
        for (const style of styles) {
          const hash = await generateCspDigest(style, result.cspAlgorithm);
          result._metadata.extraStyleHashes.push(hash);
        }
      }
      return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
    },
    propagation: hasStyles ? "self" : "none"
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_NhDCz9r4.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

z.object({
  tags: z.array(z.string()).optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        if (imported.__svgData) {
          const { __svgData: svgData, ...meta } = imported;
          ctx.update(createSvgComponent({ meta, ...svgData }));
        } else {
          ctx.update(imported);
        }
      } else {
        ctx.update(src);
      }
    }
  });
}

// astro-head-inject

const liveCollections = {};

const getCollection = createGetCollection({
	liveCollections,
});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const marqueeText = "SOFTWARE ENGINEER · WEB DEVELOPER · OPEN SOURCE · CLEAN CODE · ";
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort((a, b) => b.data.date.getTime() - a.data.date.getTime()).slice(0, 3);
  return renderTemplate(_a || (_a = __template(["", " <script>\n	(function memphisInteract() {\n		const container = document.getElementById('memphis-container');\n		if (!container || window.matchMedia('(pointer: coarse)').matches) return;\n\n		const shapes = container.querySelectorAll('[data-memphis]');\n		let mouseX = -1000, mouseY = -1000;\n		let rafId = null;\n\n		document.addEventListener('mousemove', function(e) {\n			mouseX = e.clientX;\n			mouseY = e.clientY;\n			if (!rafId) rafId = requestAnimationFrame(update);\n		});\n\n		function update() {\n			rafId = null;\n			const containerRect = container.getBoundingClientRect();\n\n			shapes.forEach(function(shape) {\n				const rect = shape.getBoundingClientRect();\n				const cx = rect.left + rect.width / 2;\n				const cy = rect.top + rect.height / 2;\n				const dx = cx - mouseX;\n				const dy = cy - mouseY;\n				const dist = Math.sqrt(dx * dx + dy * dy);\n				const radius = 300;\n\n				if (dist < radius) {\n					const speed = parseFloat(shape.dataset.speed) || 1;\n					const force = (1 - dist / radius) * 40 * speed;\n					const angle = Math.atan2(dy, dx);\n					const tx = Math.cos(angle) * force;\n					const ty = Math.sin(angle) * force;\n					shape.style.translate = tx + 'px ' + ty + 'px';\n				} else {\n					shape.style.translate = '0px 0px';\n				}\n			});\n		}\n\n		document.addEventListener('mouseleave', function() {\n			shapes.forEach(function(shape) {\n				shape.style.translate = '0px 0px';\n			});\n		});\n	})();\n\n	(function scrollAnimate() {\n		var els = document.querySelectorAll('[data-animate]');\n		if (!els.length) return;\n		var observer = new IntersectionObserver(function(entries) {\n			entries.forEach(function(entry) {\n				if (entry.isIntersecting) {\n					entry.target.classList.add('is-visible');\n					observer.unobserve(entry.target);\n				}\n			});\n		}, { threshold: 0.1 });\n		els.forEach(function(el) { observer.observe(el); });\n	})();\n\n	(function grain() {\n		const canvas = document.createElement('canvas');\n		const ctx = canvas.getContext('2d');\n		canvas.width = 256;\n		canvas.height = 256;\n		const imageData = ctx.createImageData(256, 256);\n		const data = imageData.data;\n		for (let i = 0; i < data.length; i += 4) {\n			const v = Math.random() * 255;\n			data[i] = v;\n			data[i + 1] = v;\n			data[i + 2] = v;\n			data[i + 3] = 255;\n		}\n		ctx.putImageData(imageData, 0, 0);\n		const el = document.getElementById('grain');\n		if (el) el.style.backgroundImage = `url(${canvas.toDataURL()})`;\n	})();\n<\/script>"], ["", " <script>\n	(function memphisInteract() {\n		const container = document.getElementById('memphis-container');\n		if (!container || window.matchMedia('(pointer: coarse)').matches) return;\n\n		const shapes = container.querySelectorAll('[data-memphis]');\n		let mouseX = -1000, mouseY = -1000;\n		let rafId = null;\n\n		document.addEventListener('mousemove', function(e) {\n			mouseX = e.clientX;\n			mouseY = e.clientY;\n			if (!rafId) rafId = requestAnimationFrame(update);\n		});\n\n		function update() {\n			rafId = null;\n			const containerRect = container.getBoundingClientRect();\n\n			shapes.forEach(function(shape) {\n				const rect = shape.getBoundingClientRect();\n				const cx = rect.left + rect.width / 2;\n				const cy = rect.top + rect.height / 2;\n				const dx = cx - mouseX;\n				const dy = cy - mouseY;\n				const dist = Math.sqrt(dx * dx + dy * dy);\n				const radius = 300;\n\n				if (dist < radius) {\n					const speed = parseFloat(shape.dataset.speed) || 1;\n					const force = (1 - dist / radius) * 40 * speed;\n					const angle = Math.atan2(dy, dx);\n					const tx = Math.cos(angle) * force;\n					const ty = Math.sin(angle) * force;\n					shape.style.translate = tx + 'px ' + ty + 'px';\n				} else {\n					shape.style.translate = '0px 0px';\n				}\n			});\n		}\n\n		document.addEventListener('mouseleave', function() {\n			shapes.forEach(function(shape) {\n				shape.style.translate = '0px 0px';\n			});\n		});\n	})();\n\n	(function scrollAnimate() {\n		var els = document.querySelectorAll('[data-animate]');\n		if (!els.length) return;\n		var observer = new IntersectionObserver(function(entries) {\n			entries.forEach(function(entry) {\n				if (entry.isIntersecting) {\n					entry.target.classList.add('is-visible');\n					observer.unobserve(entry.target);\n				}\n			});\n		}, { threshold: 0.1 });\n		els.forEach(function(el) { observer.observe(el); });\n	})();\n\n	(function grain() {\n		const canvas = document.createElement('canvas');\n		const ctx = canvas.getContext('2d');\n		canvas.width = 256;\n		canvas.height = 256;\n		const imageData = ctx.createImageData(256, 256);\n		const data = imageData.data;\n		for (let i = 0; i < data.length; i += 4) {\n			const v = Math.random() * 255;\n			data[i] = v;\n			data[i + 1] = v;\n			data[i + 2] = v;\n			data[i + 3] = 255;\n		}\n		ctx.putImageData(imageData, 0, 0);\n		const el = document.getElementById('grain');\n		if (el) el.style.backgroundImage = \\`url(\\${canvas.toDataURL()})\\`;\n	})();\n<\/script>"])), renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative min-h-[calc(100vh-65px)] flex flex-col justify-between overflow-hidden"> <!-- Grain overlay --> <div class="pointer-events-none absolute inset-0 z-0 opacity-[0.035] dark:opacity-[0.06]" id="grain"></div> <!-- Memphis floating shapes --> <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden" id="memphis-container" aria-hidden="true"> <!-- Circle — top right --> <div data-memphis data-speed="0.8" class="absolute -top-8 right-[12%] w-28 h-28 sm:w-36 sm:h-36 rounded-full border-[4px] border-black dark:border-white bg-coral/30 dark:bg-coral/20 animate-memphis-float transition-transform duration-700 ease-out" style="animation-delay: 0s"></div> <!-- Small filled circle --> <div data-memphis data-speed="1.2" class="absolute top-[30%] right-[8%] w-8 h-8 rounded-full bg-foreground/10 animate-memphis-float transition-transform duration-700 ease-out" style="animation-delay: 1.2s"></div> <!-- Triangle — mid left --> <div data-memphis data-speed="0.6" class="absolute top-[40%] -left-4 sm:left-[5%] w-0 h-0 animate-memphis-spin transition-[margin] duration-700 ease-out" style="border-left: 30px solid transparent; border-right: 30px solid transparent; border-bottom: 52px solid var(--lime); animation-delay: 0.5s"></div> <!-- Square — bottom right --> <div data-memphis data-speed="1.0" class="absolute bottom-[20%] right-[18%] w-16 h-16 sm:w-20 sm:h-20 border-[4px] border-black dark:border-white bg-lime/25 dark:bg-lime/15 rotate-12 animate-memphis-float transition-transform duration-700 ease-out" style="animation-delay: 0.8s"></div> <!-- Cross / plus — top left area --> <div data-memphis data-speed="1.4" class="absolute top-[15%] left-[20%] w-10 h-10 animate-memphis-float transition-transform duration-700 ease-out" style="animation-delay: 1.5s"> <div class="absolute top-1/2 left-0 w-full h-[4px] bg-coral -translate-y-1/2"></div> <div class="absolute left-1/2 top-0 h-full w-[4px] bg-coral -translate-x-1/2"></div> </div> <!-- Squiggly line (zigzag via SVG) — bottom left --> <svg data-memphis data-speed="0.5" class="absolute bottom-[12%] left-[10%] w-24 h-8 animate-memphis-float transition-transform duration-700 ease-out" style="animation-delay: 2s" viewBox="0 0 96 32" fill="none"> <path d="M0 24 L12 8 L24 24 L36 8 L48 24 L60 8 L72 24 L84 8 L96 24" stroke="currentColor" stroke-width="4" stroke-linecap="square" class="text-foreground/20"></path> </svg> <!-- Donut — right mid --> <div data-memphis data-speed="0.9" class="absolute top-[55%] right-[5%] sm:right-[10%] w-14 h-14 rounded-full border-[5px] border-lime/40 animate-memphis-spin transition-transform duration-700 ease-out" style="animation-delay: 0.3s"></div> <!-- Tiny dots scatter --> <div data-memphis data-speed="1.8" class="absolute top-[22%] right-[35%] w-3 h-3 rounded-full bg-coral/40 animate-memphis-float transition-transform duration-700 ease-out" style="animation-delay: 1.8s"></div> <div data-memphis data-speed="1.6" class="absolute top-[65%] left-[30%] w-3 h-3 rounded-full bg-lime/50 animate-memphis-float transition-transform duration-700 ease-out" style="animation-delay: 2.2s"></div> <div data-memphis data-speed="2.0" class="absolute top-[75%] right-[40%] w-2 h-2 rounded-full bg-foreground/15 animate-memphis-float transition-transform duration-700 ease-out" style="animation-delay: 0.7s"></div> </div> <!-- Main hero content --> <div class="relative z-10 max-w-7xl mx-auto px-6 pt-16 sm:pt-24 pb-12 w-full"> <div class="max-w-3xl"> <p class="font-heading text-sm font-bold uppercase tracking-widest mb-6 animate-fade-up" style="animation-delay: 0.1s"> <span class="inline-block bg-lime text-black px-3 py-1 border-2 border-black mr-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">Hey</span>
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
<span class="inline-block ml-2 transition-transform group-hover:translate-x-1">&rarr;</span> </a> </div> </div> </div> <!-- Marquee ticker --> <div class="border-t-4 border-b-4 border-black dark:border-white bg-lime text-black py-3 overflow-hidden"> <div class="flex whitespace-nowrap animate-marquee"> ${[...Array(4)].map(() => renderTemplate`<span class="font-heading text-sm font-black tracking-[0.2em] uppercase"> ${marqueeText} </span>`)} </div> </div> </section>  <section id="work" class="relative py-24 sm:py-32 px-6"> <div class="max-w-7xl mx-auto"> <div class="flex items-center gap-4 mb-16" data-animate> <h2 class="font-heading text-4xl sm:text-5xl font-black uppercase tracking-tight">Latest Work</h2> <div class="flex-1 h-[4px] bg-foreground"></div> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> <!-- Project 1 --> <article data-animate data-animate-delay="1" class="group border-3 border-black dark:border-white bg-card hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--lime)] transition-all duration-200"> <div class="aspect-video bg-muted border-b-3 border-black dark:border-white flex items-center justify-center"> <span class="font-heading text-sm uppercase tracking-widest text-muted-foreground">Screenshot</span> </div> <div class="p-6"> <div class="flex flex-wrap gap-2 mb-3"> <span class="text-xs font-bold uppercase tracking-wider bg-lime text-black px-2 py-0.5 border border-black">React</span> <span class="text-xs font-bold uppercase tracking-wider bg-lime text-black px-2 py-0.5 border border-black">TypeScript</span> </div> <h3 class="font-heading text-xl font-bold uppercase mb-2">Project Alpha</h3> <p class="text-muted-foreground text-sm leading-relaxed mb-4">Full-stack web app with real-time collaboration features and a slick dashboard interface.</p> <a href="#" class="inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider group-hover:text-coral transition-colors">
View project <span class="transition-transform group-hover:translate-x-1">&rarr;</span> </a> </div> </article> <!-- Project 2 --> <article data-animate data-animate-delay="2" class="group border-3 border-black dark:border-white bg-card hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--coral)] transition-all duration-200"> <div class="aspect-video bg-muted border-b-3 border-black dark:border-white flex items-center justify-center"> <span class="font-heading text-sm uppercase tracking-widest text-muted-foreground">Screenshot</span> </div> <div class="p-6"> <div class="flex flex-wrap gap-2 mb-3"> <span class="text-xs font-bold uppercase tracking-wider bg-coral text-white px-2 py-0.5 border border-black">Next.js</span> <span class="text-xs font-bold uppercase tracking-wider bg-coral text-white px-2 py-0.5 border border-black">Prisma</span> </div> <h3 class="font-heading text-xl font-bold uppercase mb-2">Project Beta</h3> <p class="text-muted-foreground text-sm leading-relaxed mb-4">E-commerce platform with custom CMS, payment integration, and inventory management system.</p> <a href="#" class="inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider group-hover:text-coral transition-colors">
View project <span class="transition-transform group-hover:translate-x-1">&rarr;</span> </a> </div> </article> <!-- Project 3 --> <article data-animate data-animate-delay="3" class="group border-3 border-black dark:border-white bg-card hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--lime)] transition-all duration-200"> <div class="aspect-video bg-muted border-b-3 border-black dark:border-white flex items-center justify-center"> <span class="font-heading text-sm uppercase tracking-widest text-muted-foreground">Screenshot</span> </div> <div class="p-6"> <div class="flex flex-wrap gap-2 mb-3"> <span class="text-xs font-bold uppercase tracking-wider bg-lime text-black px-2 py-0.5 border border-black">Astro</span> <span class="text-xs font-bold uppercase tracking-wider bg-lime text-black px-2 py-0.5 border border-black">Tailwind</span> </div> <h3 class="font-heading text-xl font-bold uppercase mb-2">Project Gamma</h3> <p class="text-muted-foreground text-sm leading-relaxed mb-4">Open-source developer tool that simplifies API testing with an intuitive visual interface.</p> <a href="#" class="inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider group-hover:text-coral transition-colors">
View project <span class="transition-transform group-hover:translate-x-1">&rarr;</span> </a> </div> </article> </div> </div> </section>  <section id="writings" class="relative py-24 sm:py-32 px-6 border-t-4 border-black dark:border-white"> <div class="max-w-7xl mx-auto"> <div class="flex items-center gap-4 mb-16" data-animate> <h2 class="font-heading text-4xl sm:text-5xl font-black uppercase tracking-tight">Writings</h2> <div class="flex-1 h-[4px] bg-foreground"></div> </div> <div class="grid gap-6 max-w-3xl"> ${posts.map((post, i) => renderTemplate`<a${addAttribute(`/blog/${post.id}`, "href")} data-animate${addAttribute(String(i + 1), "data-animate-delay")} class="group flex items-baseline justify-between gap-4 border-b-2 border-border pb-6 hover:border-coral transition-colors"> <div> <h3 class="font-heading text-lg sm:text-xl font-bold uppercase group-hover:text-coral transition-colors">${post.data.title}</h3> <p class="text-muted-foreground text-sm mt-1">${post.data.description}</p> </div> <span class="text-xs text-muted-foreground whitespace-nowrap font-mono"> ${post.data.date.toLocaleDateString("en-US", { year: "numeric", month: "2-digit" }).replace("/", "-")} </span> </a>`)} </div> </div> </section>  <footer id="contact" class="border-t-4 border-black dark:border-white bg-foreground text-background py-16 px-6"> <div class="max-w-7xl mx-auto"> <div class="grid md:grid-cols-2 gap-12 items-start"> <div data-animate> <h2 class="font-heading text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">Let's connect</h2> <p class="text-background/70 max-w-md leading-relaxed">Got a project in mind, want to collaborate, or just say hi? I'm always open to interesting conversations.</p> <a href="mailto:dosmokrovic@yahoo.com" class="inline-block mt-6 font-heading font-bold text-lg border-b-2 border-lime hover:text-lime transition-colors">dosmokrovic@yahoo.com</a> </div> <div data-animate data-animate-delay="1" class="flex flex-col gap-4 md:items-end"> <span class="font-heading text-sm font-bold uppercase tracking-widest text-background/50">Find me on</span> <div class="flex gap-4"> <a href="https://github.com/dusanosmokrovic" target="_blank" rel="noopener" class="border-2 border-background/30 hover:border-lime hover:text-lime px-5 py-3 font-heading font-bold text-sm uppercase tracking-wider transition-colors">GitHub</a> <a href="https://linkedin.com/in/dusanosmokrovic" target="_blank" rel="noopener" class="border-2 border-background/30 hover:border-lime hover:text-lime px-5 py-3 font-heading font-bold text-sm uppercase tracking-wider transition-colors">LinkedIn</a> <a href="https://x.com/dusanosmokrovic" target="_blank" rel="noopener" class="border-2 border-background/30 hover:border-lime hover:text-lime px-5 py-3 font-heading font-bold text-sm uppercase tracking-wider transition-colors">X</a> </div> <p class="text-background/40 text-xs mt-8 font-mono">&copy; 2025 Dušan Osmokrović</p> </div> </div> </div> </footer> ` }));
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
