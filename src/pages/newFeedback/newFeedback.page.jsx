import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../../components/shared/input.component.jsx";
import { Helmet } from "react-helmet";
import * as newFeedbackStyles from "./newFeedback.module.scss";
import Heading from "../../components/shared/heading.component";

function NewFeedback() {
  const methods = useForm();
  const { register, handleSubmit } = methods;
  const onSubmit = data => console.log(data);

  const feedbackTitle = <Heading 
  heading={"Feedback Title"}
  subtext={"Add a short descriptive headline"}
  />;

  const feedbackDetail = <Heading 
  heading={"Feedback Detail"}
  subtext={"Include any specific comments on what should be improved, added, etc."}
  />; 


  return (
<>
    <Helmet>
                <title>
                    New Feedback
                </title>
            </Helmet>

    <div 
      className={newFeedbackStyles.formContainer}
    >
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
        heading={feedbackTitle}
        rows={2} 
        type={"textarea"}
        />
        <Input
        heading={feedbackDetail}
        type={"select"}
        />
         <Input
        heading={feedbackDetail}
        rows={4} 
        type={"textarea"}
        />
        <input type="submit" />
      </form>
    </FormProvider>
    </div>  
    </>
  );
}



export default NewFeedback;
  