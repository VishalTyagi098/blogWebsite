import React from 'react'

function FilterBtn(props) {
  return (
    <div>
      <button className='bg-[#6c757d] w-full rounded-lg py-2 px-10 text-white'>
        {props.title}
      </button>
    </div>
  )
}

export default FilterBtn