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

				const html = updateImageReferences("<br>\n<p><em>在繁华的世界里</em></p>\n<p><em>找寻文字的痕迹</em></p>\n<br>\n<p>我希望在碌碌之外，有一处地方，允许我以文字表达真实的自己，随心而写，随性而阅。</p>\n<p>所以我来到文字岛，观潮起潮落，浪涌汤汤，而岛屿永远静止，坐标大海深处。</p>\n<br>\n<p><strong><a href=\"/words\">文章列表 📜</a></strong></p>\n<p><strong><a href=\"/declarations\">法律声明 📃</a></strong></p>\n<p><strong><a href=\"/rss.xml\">RSS 订阅 📰</a></strong></p>\n<p><strong>投稿邮箱 📬</strong> <a href=\"mailto:zhangzheheng12345@163.com\">zhangzheheng12345@163.com</a></p>");

				const frontmatter = {"layout":"../layouts/BaseArticle.astro","title":"文字岛 | Wordland 🏝️","description":"在繁华的世界里 找寻文字的痕迹"};
				const file = "/home/runner/wordland/src/pages/index.md";
				const url = "";
				function rawContent() {
					return "\n<br/>\n\n_在繁华的世界里_\n\n_找寻文字的痕迹_\n\n<br/>\n\n我希望在碌碌之外，有一处地方，允许我以文字表达真实的自己，随心而写，随性而阅。\n\n所以我来到文字岛，观潮起潮落，浪涌汤汤，而岛屿永远静止，坐标大海深处。\n\n<br/>\n\n**[文章列表 📜](/words)**\n\n**[法律声明 📃](/declarations)**\n\n**[RSS 订阅 📰](/rss.xml)**\n\n**投稿邮箱 📬** zhangzheheng12345@163.com\n";
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
