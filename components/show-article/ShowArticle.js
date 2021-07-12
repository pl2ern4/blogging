import Image from 'next/image'
import {
    Articles,
    ArticleTitleProfileWrapper,
    ArticleInfo,
    ArticleItem,
    ArticleContent,
    ArticleFile,
    ArticleText,
    ArticleTitle,
    CreatedBy,
    CreatedOn,
    ProfileImg
} from './styles';

const ShowArticle = ({ articles }) => {

  if(articles.length===0){
    return <Articles><h1> No Article to show </h1></Articles>
  }

  return (
    <Articles>
      {articles.map((obj) => (
        <ArticleItem key={`article-${obj.id}`}>
          <ArticleTitleProfileWrapper>
            <ProfileImg>
              <Image style={{'border-radius':'50%'}} src={obj.img} alt={obj.createdBy} width="100" height="100"/>
            </ProfileImg>
            <ArticleTitle>{obj.title}</ArticleTitle>
          </ArticleTitleProfileWrapper>
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
            {!!obj.article && typeof obj.article !== 'string' ? (
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
