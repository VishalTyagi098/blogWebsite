import React from "react";

export default function Filter(props) {
  // This callback function will send the value of filter to its parent (MainWrapper), then MainWrapper will send filterValue to the Article component

  function whenClicked(event){
  
    if (event.target.id==="technology"){
      props.changeState("technology");
    }
    else if (event.target.id==="nature"){
      props.changeState("nature");
    }
    else if (event.target.id==="food"){
      props.changeState("food");
    }
    else if (event.target.id==="all"){
      props.changeState("all");
    }

    event.preventDefault();
  }


  return (
    <div className="filter sticky top-32">
      <h1 className="text-3xl font-bold my-4">Filters</h1>
      <div className="container filter-container">
        <div className="row my-1">
          <button type="button" id="technology" className="bg-[#fff] border-[2px] border-[#6c757d] w-full rounded-lg py-2 px-10 text-[#6c757d] hover:bg-[#6c757d] hover:text-white transition ease-in-out" onClick={whenClicked}>
            Technology
          </button>
        </div>
        <div className="row my-1">
          <button type="button" id="nature" className="bg-[#fff] border-[2px] border-[#6c757d] w-full rounded-lg py-2 px-10 text-[#6c757d] hover:text-white hover:bg-[#6c757d] transition ease-in-out" onClick={whenClicked}>
            Nature
          </button>
        </div>
        <div className="row my-1">
          <button type="button" id="food" className="bg-[#fff] border-[2px] border-[#6c757d] w-full rounded-lg py-2 px-10 text-[#6c757d] hover:text-white hover:bg-[#6c757d] transition ease-in-out" onClick={whenClicked}>
            Food
          </button>
        </div>
        <div className="row my-1">
          <button type="button" id="all" className="bg-[#6c757d] border-[2px] border-[#6c757d] w-full rounded-lg py-2 px-10 text-[#fff] hover:bg-white hover:text-[#6c757d] transition ease-in-out" onClick={whenClicked}>
            All
          </button>
        </div>
      </div>
    </div>
  );
}
