import Image from 'next/image';
import { useRouter } from 'next/router';
import {
    Articles,
    ArticleDelete,
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

const ShowArticle = ({ articles, showDelete }) => {
  const router = useRouter();
  const handleDelete = async (params)=>{
    const resp = await fetch(`/api/delete-article/${params}`, {
      method: "DELETE"
    });
    if(resp.ok){
      router.push('/');
    }
  }
  if(articles.length===0){
    return <Articles><h1> No Article to show </h1></Articles>
  }

  return (
    <Articles>
      {articles.map((obj) => (
        <ArticleItem key={`article-${obj.id}`}>
          <ArticleTitleProfileWrapper>
            <ProfileImg>
              <Image src={obj.img} alt={obj.createdBy} width="100" height="100"/>
            </ProfileImg>
            <ArticleTitle>{obj.title}</ArticleTitle>
            <ArticleDelete onClick={()=>handleDelete(obj.id)}>Delete it...</ArticleDelete>
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
