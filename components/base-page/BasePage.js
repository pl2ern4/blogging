import { useState, lazy, Suspense } from 'react';
import ShowArticle from '../show-article';
import { AddArticleIcon, ToolTip } from './styles';
import ApplicationModal from '../application-modal';

const CreateArticle = lazy(()=>import('../create-article'));
const BasePage = ({articles, submit, submitForm}) => {
    const [showForm, setShowForm] = useState();

    const handleClick = () => setShowForm(!showForm);

    return (
        <>
            <ShowArticle articles={articles}/>
            <AddArticleIcon onClick={handleClick}>
                +
                <ToolTip>Create Article</ToolTip>
            </AddArticleIcon>
            {showForm && 
            <Suspense fallback={<div>Loading...</div>}>
                <ApplicationModal handleClick={handleClick} isOpen={showForm}>
                    <CreateArticle submitStatus={submit} submitForm={submitForm}/>
                </ApplicationModal>
            </Suspense>}
        </>
    )
};

BasePage.defaultProps = {};
BasePage.displayName = "BasePage";
export default BasePage;
