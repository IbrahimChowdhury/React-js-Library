import { useFormik } from 'formik'
import React from 'react'
import { object, string, number, date, InferType } from 'yup';

export default function Formik_using() {

    let formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:""
        },
        validationSchema:object({
            name:string().min(3,"name mustbe atleast three cherecter").required(),
            email:string().email().required(),
            password:string().min(3,"password mustbe atleast four cherecter").required(),
        }),
        onSubmit:(values,{resetForm})=>{
            console.log(values)
            resetForm({values: ""})
        }
    })

    console.log(formik.errors)

  return (
    <div>
        <hr />
        <h3>Using formik to simplify the form data and use yup to validate the form data</h3> 
        <form action="" onSubmit={formik.handleSubmit} >
            <div>
                <label htmlFor="name3">Name:</label>
                <input type="text" id='name3' onChange={formik.handleChange} name="name" value={formik.values.name} />
                <br />
                {formik.touched.name && formik.errors.name && <span>{formik.errors.name}</span>}
            </div>
            <div>
                <label htmlFor="email3">email:</label>
                <input type="email" id='email3' onChange={formik.handleChange} name="email" value={formik.values.email} />
                <br />
                {formik.touched.email &&  formik.errors.email && <span>{formik.errors.email}</span>}
            </div>
            <div>
                <label htmlFor="password3">password:</label>
                <input type="password" id='password3' onChange={formik.handleChange} name="password" value={formik.values.password} />
                <br />
                {formik.touched.password  &&formik.errors.password && <span>{formik.errors.password}</span>}
            </div>

            <button type="submit">Submit</button>
        </form>

    </div>
  )
}
