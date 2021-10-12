import React from 'react'
import { Helmet } from "react-helmet";
import { useForm, FormProvider, useFormContext}  from "react-hook-form";
import * as newFeedbackStyles from "./newFeedback.module.scss";
import Heading from "../../components/shared/heading.component";
import Input from '../../components/shared/input.component';


function NewFeedback() {
  const { register,methods, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

    return (
        <>
        <FormProvider {...methods} > 
            <Helmet>
                <title>
                    New Feedback
                </title>
            </Helmet>
            
            <div 
            className={newFeedbackStyles.formContainer}
            >
                 
                <form
                 className={newFeedbackStyles.form}
                 onSubmit={handleSubmit(onSubmit)}
                 >


                
                <Input
                    heading={<Heading 
                        heading={"Im the best heading"}
                        subtext={"im the sub"}
                    />}
                    rows={2}            
                />        
                {/* <input 
                className={newFeedbackStyles.form__title}
                defaultValue="test" {...register("FeedbackTitle")} /> */}

                {/* <select 
                    {...register("FeedbackCategory")}
                    className={newFeedbackStyles.form__category}
                    >
                    <option value="UI">UI</option>
                    <option value="UX">UX</option>
                    <option value="Enhancement">Enhancement</option>
                    <option value="Bug">Bug</option>
                    <option value="Feature">Feature</option>
                </select>

                <textarea {...register("FeedbackDetail")}
                    className={newFeedbackStyles.form__detail}
                />
                 */}
                <input type="submit" />
                </form>
                
            </div>
            </FormProvider>
        </>
    )
}




export default NewFeedback;
