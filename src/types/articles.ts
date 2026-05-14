
type ArticleDisplaySection =
  | 'editorPickPrimary'
  | 'editorPickSecondary'
  | 'trending'
  | 'slider'
  | 'mostRecent'
  | 'mostRecentGrid'
  | 'gridAndAds';

export interface ArticleMeta {
    author:string,
    authorHref:string,
    category:string,
    categoryHref:string,
    date:string,
    readingTime:string,
    displaySection?:ArticleDisplaySection
}

export interface Article {
    _id:string,
    title:string,
    image:string,
    caption:string,
    href:string,
    imageAlt:string,
    excerpt:string,
    meta:ArticleMeta,
    tags?:string[]
}