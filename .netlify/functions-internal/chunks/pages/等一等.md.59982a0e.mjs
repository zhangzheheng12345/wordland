/* empty css                         */import { g as createVNode, s as spreadAttributes, F as Fragment } from '../astro.ebb7085f.mjs';
import { $ as $$Article } from './别后记.md.c15545f1.mjs';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import './404.md.c2af8725.mjs';
/* empty css                         */import './rss.xml.ts.7fa157b0.mjs';
import '@astrojs/rss';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>风怪叫</p>\n<p>静止我的呼吸</p>\n<p>雷穿过厅堂</p>\n<p>——和我的大脑</p>\n<p>我睡不着</p>\n<br>\n<p>睡不着的是滚云</p>\n<p>它的身 在雷电中</p>\n<p>震悚四肢</p>\n<p>甩出生命的液滴</p>\n<br>\n<p>睡不着的是惊鸟</p>\n<p>它的翼 沾水的利刃</p>\n<p>切割着零落的丝线</p>\n<p>黑亮的喙 撑不开的伞</p>\n<p>穿刺着水的炮弹</p>\n<br>\n<p>睡不着的是老树</p>\n<p>它的肤 雨水冲刷</p>\n<p>刮过纹路的粗糙</p>\n<p>长青已久的叶 摇晃</p>\n<p>在香樟花碎铺满的塘坳终结</p>\n<br>\n<p>我睡不着</p>\n<p>我要自己等一等</p>\n<p>待雨停住</p>\n<p>待云由我缓缓呼出</p>\n<p>鸟在树间栖身</p>\n<p>再同风暴里的一切宁息</p>");

				const frontmatter = {"layout":"../../layouts/Article.astro","title":"等一等","description":"等待暴风雨结束的夜","pubDate":"2023/05/06","author":"Youzuo Zhang","heroImage":"https://images.unsplash.com/photo-1542361040-f6a5ee3e7a2c?w=1740&fit=crop"};
				const file = "/home/runner/wordland/src/pages/words/等一等.md";
				const url = "/words/等一等";
				function rawContent() {
					return "\n风怪叫\n\n静止我的呼吸\n\n雷穿过厅堂\n\n——和我的大脑\n\n我睡不着\n\n<br/>\n\n睡不着的是滚云\n\n它的身 在雷电中\n\n震悚四肢\n\n甩出生命的液滴\n\n<br/>\n\n睡不着的是惊鸟\n\n它的翼 沾水的利刃\n\n切割着零落的丝线\n\n黑亮的喙 撑不开的伞\n\n穿刺着水的炮弹\n\n<br/>\n\n睡不着的是老树\n\n它的肤 雨水冲刷\n\n刮过纹路的粗糙\n\n长青已久的叶 摇晃\n\n在香樟花碎铺满的塘坳终结\n\n<br/>\n\n我睡不着\n\n我要自己等一等\n\n待雨停住\n\n待云由我缓缓呼出\n\n鸟在树间栖身\n\n再同风暴里的一切宁息\n";
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
					return createVNode($$Article, {
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
