/* empty css                         */import { g as createVNode, s as spreadAttributes, F as Fragment } from '../astro.ebb7085f.mjs';
import { $ as $$BaseArticle } from './404.md.c2af8725.mjs';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                         */
const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<br>\n<p><em>诗有它的韵脚</em></p>\n<p><em>岛有它的天平</em></p>\n<br>\n<p>网站代码采用 <a href=\"https://www.gnu.org/licenses/gpl-3.0.en.html\">GPL 3.0</a> 开源许可协议。</p>\n<p>所有本网站文章，除获作者亲自书面（含电子邮件）允许外，均不得转载或摘编。获准后进行转载或摘编时，应当遵循 <a href=\"https://creativecommons.org/licenses/by-nc\">CC BY-NC</a> 协议。</p>\n<p>本网站图片均为原创或来源于网络。侵删。</p>");

				const frontmatter = {"layout":"../layouts/BaseArticle.astro","title":"声明 | Declarations 📃","description":"诗有它的韵脚 岛有它的天平"};
				const file = "/home/runner/wordland/src/pages/declarations.md";
				const url = "/declarations";
				function rawContent() {
					return "\n<br/>\n\n_诗有它的韵脚_\n\n_岛有它的天平_\n\n<br/>\n\n网站代码采用 [GPL 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html) 开源许可协议。\n\n所有本网站文章，除获作者亲自书面（含电子邮件）允许外，均不得转载或摘编。获准后进行转载或摘编时，应当遵循 [CC BY-NC](https://creativecommons.org/licenses/by-nc) 协议。\n\n本网站图片均为原创或来源于网络。侵删。\n";
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
