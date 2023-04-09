import React from "react"
import Card from "./components/card"
import Data from "./data.json"
import Functional_card from "./components/Function_component"
import Class_card from "./components/class_component"
import Bs from "./components/react_bootstap"
import State from "./components/state"
import Conditional_rendering from "./components/conditional_rendering/indx"
import Onchange from "./components/event handler/onchange"
import Bind from "./components/event handler/binding"
import UseState from "./components/Hooks/Use State/UseState"
import Form from "./components/Form/form_controller"
import Form_using_sprade_operator from "./components/Form/form_using_sprade_operator"
import Data_from_chlid_to_parent from "./components/Child_to_parent_data_passing/c_to_p_data_passing"
import Formik_using from "./components/Formik_using_to_simplify_the_Form/formik_using"
import Main_todo from "./components/TODO  Application/mainTodo"
import Toggle from "./components/Toggle/toggle"
import FAQs from "./components/FAQ (Frequently Asked Questions)/FAQs"
import UseEffect from "./components/Hooks/UseEffect/UseEffect"
import Fetch_data_using_useEffect from "./components/Hooks/UseEffect/fetch_data_using_useEffect"
import FetchData from "./components/Hooks/UseEffect/fetchData"
import CustomDataFetching from "./components/Hooks/custom hooks/CustomDataFetching"
import Dynmaic_styling from "./components/Dynamic styling/dynamicStyling"
import Fragment from "./components/fragment/fragment"
import UseRef from "./components/Hooks/useRef/useRef"
import UseContext from "./components/Hooks/useContext/component1"
// import {v4 as uuidv4} from "uuid"

// let user=[
//   {
//     fullName:"Ibrahim",
//     school:"Nazipur Model High School",
//     phone:[
//       {home:"0132234"},
//       {office:"0132234"}
//     ]
//   },
//   {
//     fullName:"mahi",
//     school:"Nazipur Model High School",
//     phone:[
//       {home:"112321"},
//       {office:"12321313"}
//     ]
//   },
//   {
//     fullName:"anika",
//     school:"Nazipur Model High School",
//     phone:[
//       {home:"13232"},
//       {office:"013454352234"}
//     ]
//   }
// ]


let app = () => {

    const handle=(e)=>{
        console.log(e)
    }


  return <div className="maindiv">
   <h4>Here we create a Function Component and Class component</h4>
  <Functional_card title="functional component" body="functional body" />

  <Class_card title="Class component" body="Class Component" />

  <State  />

  <Conditional_rendering />

  <Onchange />

  <Bind />

  <UseState />

  <Form/>
  
  <Form_using_sprade_operator/>

  <Data_from_chlid_to_parent onhandle={handle}  />

  <Formik_using />

  <Main_todo/>

  <Toggle/>

  <FAQs />

  <UseEffect />

  {/* <Fetch_data_using_useEffect />

  <FetchData />
    
  <CustomDataFetching /> */}

  <Dynmaic_styling />
  
  <Fragment/>

  <UseRef />

  <UseContext />

      {/* showing the Cards */}

    {/* <div className="main_card">
     {Data.map((item)=> <Card   title={item.title} body={item.vrct} />)}
    </div> */}






{/* showing the nested data */}

  
  {/* {
    user.map((item)=>(
      <article>
        <h1>Name : {item.fullName}</h1>
        <p>school:{item.school}</p>
        {
          item.phone.map((phn)=>(
          <div>
              <p>{phn.home}</p>
            <p>{phn.office}</p>
          </div>
          ))
        }
      </article>
    ))
  } */}

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
  </div>
}


export default app