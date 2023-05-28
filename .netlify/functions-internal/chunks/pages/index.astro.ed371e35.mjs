/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro.ebb7085f.mjs';
import 'html-escaper';
import { a as $$BasePage } from './404.md.c2af8725.mjs';
import { useSSRContext, defineComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
/* empty css                           */import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                         */
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArticleList",
  props: {
    articles: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<ul${ssrRenderAttrs(_attrs)} data-v-5efadcaf><!--[-->`);
  ssrRenderList($setup.props.articles, (article) => {
    _push(`<li class="p-5px m-10px flex-wrap" data-v-5efadcaf><time data-v-5efadcaf>${ssrInterpolate(article.pubDate)}</time><a${ssrRenderAttr("href", article.url)} data-v-5efadcaf>${ssrInterpolate(article.title)}</a><i data-v-5efadcaf>${ssrInterpolate(article.author)}</i></li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ArticleList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArticleList = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5efadcaf"]]);

const $$Astro = createAstro("https://wordland.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await Astro2.glob(/* #__PURE__ */ Object.assign({"./别后记.md": () => import('./别后记.md.c15545f1.mjs').then(n => n._),"./去广州.md": () => import('./去广州.md.a4c52bfd.mjs'),"./又度今天.md": () => import('./又度今天.md.0d08ade6.mjs'),"./小与大.md": () => import('./小与大.md.ff0f8d0e.mjs'),"./等一等.md": () => import('./等一等.md.59982a0e.mjs'),"./走过操场.md": () => import('./走过操场.md.d645c35e.mjs'),"./迟钝之地.md": () => import('./迟钝之地.md.55d686e0.mjs')}), () => "./*.md")).sort(
    (a, b) => a.frontmatter.pubDate <= b.frontmatter.pubDate ? 1 : -1
  );
  return renderTemplate`${renderComponent($$result, "BasePage", $$BasePage, { "title": "\u6587\u7AE0\u5217\u8868\u{1F4DC}", "description": "\u6211\u642D\u5EFA\u68AD\u7F57\u7684\u5C0F\u5C4B \u53EA\u662F\u9762\u671D\u5927\u6D77" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<h1>文章列表📜</h1>
  <br>
  <p><i>我搭建梭罗的小屋</i></p>
  <p><i>只是面朝大海</i></p>
  <br>
  ${renderComponent($$result2, "ArticleList", ArticleList, { "client:idle": true, "articles": posts.map((post) => {
    return {
      title: post.title,
      url: post.url,
      pubDate: post.pubDate,
      author: post.author,
      description: post.description
    };
  }), "client:component-hydration": "idle", "client:component-path": "/home/runner/wordland/src/components/ArticleList.vue", "client:component-export": "default" })}
` })}`;
}, "/home/runner/wordland/src/pages/words/index.astro");

const $$file = "/home/runner/wordland/src/pages/words/index.astro";
const $$url = "/words";

export { $$Index as default, $$file as file, $$url as url };
