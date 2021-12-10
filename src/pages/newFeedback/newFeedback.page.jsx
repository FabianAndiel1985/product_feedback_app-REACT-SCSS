import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../../components/shared/input.component.jsx";
import { Helmet } from "react-helmet";
import * as newFeedbackStyles from "./newFeedback.module.scss";
import Heading from "../../components/shared/heading.component";
import CustomButton from "../../components/shared/button.component.jsx";
import {darkViolet,darkBlueColor, hooverDarkBlue} from "../../constants/color.constants";
import CircleSymbol from "../../components/shared/circleSymbol.jsx";
import { FaPlus } from 'react-icons/fa';
import RouteBack from "../../components/shared/routeBack.component.jsx";



function NewFeedback() {
  const methods = useForm();
  const { handleSubmit } = methods;
  const onSubmit = data => console.log(data);

  const feedbackTitle = <Heading 
  heading={"Feedback Title"}
  subtext={"Add a short descriptive headline"}
  />;

  const feedbackCategory = <Heading 
  heading={"Category"}
  subtext={"Choose a category for a feedback"}
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
      className={newFeedbackStyles.contentContainer}
    >

    <RouteBack/>
    
    <div 
      className={newFeedbackStyles.formContainer}
    >
    
    <CircleSymbol
      symbol={<FaPlus/>}
    />

      <h2>Create new Feedback</h2>

    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
        heading={feedbackTitle}
        name={"title"}
        rows={2} 
        type={"textarea"}
        />
        <Input
        heading={feedbackCategory}
        name={"category"}
        type={"select"}
        />

        {/* ab hier weiter die Kategorie fortsetenb */}
         <Input
        heading={feedbackDetail}
        name={"detail"}
        rows={4} 
        type={"textarea"}
        />
        <div className={newFeedbackStyles.formButtonRow}>
          <CustomButton
          text={"Cancel"}
          color={darkBlueColor}
          hoverColor={hooverDarkBlue}
          />
          <CustomButton
          text={"Save Changes"}
          color={darkViolet}
          type={"submit"}
          />
        </div>
      </form>
    </FormProvider>
    </div>
    </div>  
    </>
  );
}



export default NewFeedback;
  