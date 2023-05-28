/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, s as spreadAttributes, d as renderSlot, e as renderComponent, f as renderHead, g as createVNode, F as Fragment } from '../astro.ebb7085f.mjs';
import 'html-escaper';
/* empty css                         */
const $$Astro$5 = createAstro("https://wordland.netlify.app");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/favicon.svg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta name="generator"${addAttribute(Astro2.generator, "content")}>

<!-- Canonical URL -->
<link rel="canonical"${addAttribute(canonicalURL, "href")}>

<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title"${addAttribute(title, "content")}>
<meta name="description"${addAttribute(description, "content")}>

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url"${addAttribute(Astro2.url, "content")}>
<meta property="og:title"${addAttribute(title, "content")}>
<meta property="og:description"${addAttribute(description, "content")}>
<meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url"${addAttribute(Astro2.url, "content")}>
<meta property="twitter:title"${addAttribute(title, "content")}>
<meta property="twitter:description"${addAttribute(description, "content")}>
<meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/home/runner/wordland/src/components/BaseHead.astro");

const $$Astro$4 = createAstro("https://wordland.netlify.app");
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${addAttribute([[className], "astro-EIMMU3LG"], "class:list")}${spreadAttributes(props)}>
  ${renderSlot($$result, $$slots["default"])}
</a>`;
}, "/home/runner/wordland/src/components/HeaderLink.astro");

const $$Astro$3 = createAstro("https://wordland.netlify.app");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header class="astro-3EF6KSR2">
  <nav class="flex items-center p-3px astro-3EF6KSR2">
    <img src="/favicon.svg" alt="favicon" class="astro-3EF6KSR2">
    ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "class": "astro-3EF6KSR2" }, { "default": ($$result2) => renderTemplate`家` })}
    ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/words", "class": "astro-3EF6KSR2" }, { "default": ($$result2) => renderTemplate`文` })}
    ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/declarations", "class": "astro-3EF6KSR2" }, { "default": ($$result2) => renderTemplate`声明` })}
  </nav>
</header>`;
}, "/home/runner/wordland/src/components/Header.astro");

const $$Astro$2 = createAstro("https://wordland.netlify.app");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead($$result)}<footer class="astro-SZ7XMLTE">
  <p class="astro-SZ7XMLTE">&copy; ${today.getFullYear()} 文字岛撰写人 版权所有</p>
  <p class="astro-SZ7XMLTE">&copy; ${today.getFullYear()} Wordland Authors. All rights reserved.</p>
</footer>`;
}, "/home/runner/wordland/src/components/Footer.astro");

const $$Astro$1 = createAstro("https://wordland.netlify.app");
const $$BasePage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BasePage;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en">
  <head>
    ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}
  ${renderHead($$result)}</head>

  <body>
    ${renderComponent($$result, "Header", $$Header, {})}
    <main>
      <article>
        ${renderSlot($$result, $$slots["default"])}
      </article>
    </main>
    ${renderComponent($$result, "Footer", $$Footer, {})}
  </body></html>`;
}, "/home/runner/wordland/src/layouts/BasePage.astro");

const $$Astro = createAstro("https://wordland.netlify.app");
const $$BaseArticle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseArticle;
  const {
    content: { title, description }
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BasePage", $$BasePage, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<h1 class="text-2em m-0.25em ml-0 mr-0">
    ${title}
  </h1>
  ${renderSlot($$result2, $$slots["default"])}
` })}`;
}, "/home/runner/wordland/src/layouts/BaseArticle.astro");

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p><em>文字触及不到的地方</em></p>\n<p><em>用心灵来到达</em></p>\n<p>回家 <a href=\"/\">..</a></p>");

				const frontmatter = {"layout":"../layouts/BaseArticle.astro","title":404,"description":"404 Not Found"};
				const file = "/home/runner/wordland/src/pages/404.md";
				const url = "/404";
				function rawContent() {
					return "\n_文字触及不到的地方_\n\n_用心灵来到达_\n\n回家 [..](/)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$BaseArticle, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  images,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseArticle as $, _404 as _, $$BasePage as a };
