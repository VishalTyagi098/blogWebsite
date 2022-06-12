import React, { useState } from 'react'
import Articles from "./Articles";
import Filter from "./Filter";

export default function MainWrapper() {
  // useState for Filter
  const [state, setstate] = useState({data:""})

  // This function will recieve filterValue from its child (Filter) which will be send as 'data' to the Article component
  const changeState = (filterValue) => {  
    setstate({data:filterValue}); 
   };


  return (
    <div>

      <div class="container">
        <div class="row">
          <div class="col-10">

            <Articles data={state.data}/>

          </div>
          <div class="col">

            <Filter changeState={changeState}/>

          </div>
        </div>
        
      </div>
    </div>
  )
}
