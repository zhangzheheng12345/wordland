import rss, { pagesGlobToRssItems } from '@astrojs/rss';

const SITE_TITLE = "文字岛 | Wordland 🏝️";
const SITE_DESCRIPTION = "在繁华的世界里 找寻文字的痕迹";
const AUTHORS = {
  "Youzuo Zhang": {
    cnName: "张又左",
    email: "zhangzheheng12345@163.com"
  },
  "Yanru Chen": {
    cnName: "陈晏如",
    email: ""
  }
};

async function get(context) {
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./words/别后记.md": () => import('./别后记.md.c15545f1.mjs').then(n => n._),"./words/去广州.md": () => import('./去广州.md.a4c52bfd.mjs'),"./words/又度今天.md": () => import('./又度今天.md.0d08ade6.mjs'),"./words/小与大.md": () => import('./小与大.md.ff0f8d0e.mjs'),"./words/等一等.md": () => import('./等一等.md.59982a0e.mjs'),"./words/走过操场.md": () => import('./走过操场.md.d645c35e.mjs'),"./words/迟钝之地.md": () => import('./迟钝之地.md.55d686e0.mjs')}))
  });
}

const rss_xml = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get
}, Symbol.toStringTag, { value: 'Module' }));

export { AUTHORS as A, rss_xml as r };
