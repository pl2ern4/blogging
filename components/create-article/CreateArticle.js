import { useFormik } from "formik";
import { useRouter } from 'next/router'
import validate from "./validate";
import { useEffect, useState } from "react";
import {
  Error,
  FormWrapper,
  SubmitButton,
  Input,
  TextArea,
  InputWrapper,
  Separator,
  Button,
} from "./styles";

const CreateArticle = ({ submitStatus, submitForm }) => {
  const [article, setArticle] = useState("");
  const router = useRouter();
  const handleSubmit = (data) => {
    submitForm(data);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      data: "",
      fileData: "",
    },
    validate,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    return () => formik.resetForm();
  }, []);

  const handleOnChangeSubmitStatus = () => {
    if (Object.keys(submitStatus).length === 0) {
      formik.resetForm();
      router.push('/');
    }
    if ('error' in submitStatus) {
      formik.setFieldError("error", submitStatus.error);
    }
  };

  useEffect(handleOnChangeSubmitStatus, [submitStatus]);

  const handleDeleteFileClick = () => {
    formik.setFieldValue("fileData", "");
    formik.setFieldTouched('fileData', false);
  };
  return (
    <FormWrapper>
      <h2>Create Article</h2>
      {formik.errors && (
        <Error>
          {Object.entries(formik.errors).map((obj) => (
            <li key={`key-${obj[0]}`}>{obj[1]}</li>
          ))}
        </Error>
      )}
      <form onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            onChange={formik.handleChange}
            value={formik.values.title}
            error={formik.errors.title}
            maxLength={35}
          />
        </InputWrapper>
        <InputWrapper>
          <TextArea
            wrap="on"
            cols="30"
            rows="5"
            name="data"
            disabled={!!formik.values.fileData}
            placeholder="article..."
            onChange={formik.handleChange}
            value={formik.values.data}
            error={formik.errors.data}
            maxLength={200}
          />
        </InputWrapper>
        {/* <Separator>
          <span>Or</span>
        </Separator>
        <InputWrapper displayType>
          <Input
            type="file"
            name="fileData"
            accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
            disabled={!!formik.values.data}
            onChange={(event) => {
              setArticle(["file", event.currentTarget.files[0]]);
              formik.handleChange(event);
            }}
            error={formik.errors.data}
            value={formik.values.fileData}
          />
          <Button
            disabled={!!formik.values.data}
            type="click"
            onClick={handleDeleteFileClick}
          >
            Delete file
          </Button> 
        </InputWrapper>*/}
        <SubmitButton type="submit">Save my article</SubmitButton>
      </form>
    </FormWrapper>
  );
};

CreateArticle.defaultProps = {
  submitStatus: {},
};

CreateArticle.displayName = "CreateArticle";

export default CreateArticle;
