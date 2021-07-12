import styled from "styled-components";

const Articles = styled.div`
    top: 6rem;
    position: relative;
`;

const ArticleItem = styled.div`
    width:100%;
    height: max-content;
    border: 1px solid;
    margin: 1rem 0;
    border-radius: 0.5rem;
    padding: 1rem 1.5rem;
`;

const CreatedBy = styled.span`
    font-size: 12px;
    color: dimgrey;
    margin-right: 1rem
`;

const CreatedOn =  styled.span`
    font-size: 12px;
    color: dimgrey;
`;

const ArticleContent = styled.div``;

const ArticleFile =  styled.a``;

const ArticleText =  styled.div`
    transition: 1s ease-in-out;
    width: 75vw;
`;

const ArticleTitle = styled.div`
    font-size: 20px;
    font-weight: 700;
`;

const ArticleInfo = styled.div`
    display: flex;
    
`;
const ArticleTitleProfileWrapper = styled.div`
   display:flex;
`;

const ProfileImg = styled.span`
  height:1.5rem;
  width:1.5rem;
  margin: 0 0.5rem;
  img{
      border-radius: 50%;
  }
`;

export {
    Articles,
    ArticleInfo,
    ArticleItem,
    ArticleContent,
    ArticleFile,
    ArticleText,
    ArticleTitle,
    CreatedBy,
    CreatedOn,
    ProfileImg,
    ArticleTitleProfileWrapper
}