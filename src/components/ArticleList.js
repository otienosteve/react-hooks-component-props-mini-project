import React from 'react'
import Article from './Article'


export default function ArticleList({posts}) {
  return (<main>{posts.map((item)=> <Article key={item.id} {...item} />) }</main>);

}
