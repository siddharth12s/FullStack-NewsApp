import React from 'react'
import NewsItem from './NewsItem'



const NewsList = (props) => {
  const articles = props.articles
  
  
  return (
    <>
      {articles.map((elem,index) => {
            return (
              <div className="col-md-4" key={index}>
                <NewsItem
                  title={elem.title ? elem.title : ""}
                  description={
                    elem.description ? elem.description.slice(0, 0) : ""
                  }
                  imageUrl={elem.urlToImage}
                  newsUrl={elem.url}
                  author={elem.author}
                  date={elem.publishedAt}
                  source={elem.source.name}
                />
              </div>
            );
          })}
    </>
  )
}



export default NewsList
