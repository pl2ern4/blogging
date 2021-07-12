import {
    Articles,
    ArticleInfo,
    ArticleItem,
    ArticleContent,
    ArticleFile,
    ArticleText,
    ArticleTitle,
    CreatedBy,
    CreatedOn
} from "./styles";

const ShowArticle = ({ articles }) => {

  if(articles.length===0){
    return <Articles><h1> No Article to show </h1></Articles>
  }

  return (
    <Articles>
      {articles.map((obj) => (
        <ArticleItem key={`article-${obj.id}`}>
          <ArticleTitle>{obj.title}</ArticleTitle>
          <ArticleInfo>
            <CreatedBy>
                <label>
                    Created by:  
                </label>
                {obj.createdBy}
            </CreatedBy>
            <CreatedOn>
                <label>
                    Created On:  
                </label>
                {obj.creation_time? (new Date(obj.creation_time)).toLocaleString() : ''}
            </CreatedOn>
          </ArticleInfo>
          <ArticleContent>
            {typeof obj.article !== 'string' ? (
              <ArticleFile download href={obj.article[0]}>
                Download file
              </ArticleFile>
            ) : (
              <ArticleText>{obj.article}
            </ArticleText>
            )}
          </ArticleContent>
        </ArticleItem>
      ))}
    </Articles>
  );
};

ShowArticle.defaultProps = {
  articles: [],
};
export default ShowArticle;
