
const Article = require('engine/koa/tutorial').Article;
const TutorialTree = require('engine/koa/tutorial').TutorialTree;
const Task = require('engine/koa/tutorial').Task;
const _ = require('lodash');
const ArticleRenderer = require('engine/koa/tutorial').ArticleRenderer;
const localStorage = require('engine/local-storage').instance();
const t = require('engine/i18n');
const slug = require('limax');
const { result } = require('lodash');

t.requirePhrase('frontpage');

exports.get = async function (ctx, next) {

  ctx.locals.sitetoolbar = true;
  ctx.locals.siteToolbarCurrentSection = "tutorial";
  ctx.locals.title = t('frontpage.modern_javascript_tutorial');

  let topArticlesRendered = await localStorage.getOrGenerate('frontpage', renderTop, process.env.TUTORIAL_EDIT);

  if (!Object.keys(topArticlesRendered).length) {
    ctx.throw(404, "Database is empty?"); // empty db
  }


  let locals = {
    tutorialTree: TutorialTree.instance(),
    topArticlesRendered
  };
  //frontpage页面是html页面，locals页面是对象，也就是我们要传入的数据
  ctx.body = ctx.render('frontpage', locals);
};

// content
// metadata
// modified
// title
// isFolder
// prev
// next
// path
// siblings
async function renderTop() {
  const roots = TutorialTree.instance().roots;

  let articles = {};

  // render top-level content
  for (let slug of roots) {
    let article = TutorialTree.instance().bySlug(slug);

    let renderer = new ArticleRenderer();

    let rendered = await renderer.render(article);

    articles[slug] = rendered;
  }


  return articles;

}


//新增的search功能 
exports.search = async function (ctx, next) {
    const keyword = ctx.request.query.keyword;
    // ctx.body = searchAll(keyword);
    const result = await searchAll(keyword)
    let locals = {
      results:result
    };
    ctx.body = ctx.render('search',locals)
  }

const tree = TutorialTree.instance().bySlugMap;

async function searchAll(keyword) {
  const result = [];
  await Object.keys(tree).forEach(key => {
    const { title, content, slug } = tree[key];
    const index = content.indexOf(keyword);
    if (index != -1) {
      const start = Math.max(index - 100.0, 0)
      const end = index + 100.0;
      const context = content.slice(start, end).replace(keyword, `<mark>${keyword}</mark>`);
      result.push({
        head: title,
        content: context,
        slug: slug
      })
    }
  })
  return result;
}




