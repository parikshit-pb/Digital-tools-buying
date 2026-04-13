import React from 'react';

const Product = ({Tools}) => {
    console.log(Tools, "Tools")
    return <div>

    <div className='grid grid-cols-1 sm:grid-cols-3'>
        {
    Tools.map(Tools => {
        console.log(Tools, "Tools")
        return  <div className="card w-96 bg-base-100 shadow-sm flex">
  <div className="card-body ">
    <div className='flex justify-end'>
        <span className="badge badge-xs badge-warning ">{Tools.tag}</span>
    </div>
    <div className=" justify-between">
      <h2 className="text-3xl font-bold">{Tools.name}</h2>
      <p>{Tools.description}</p>
      <span className="text-2xl font-bold">{Tools.price}</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{Tools.detailsOne}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{Tools.detailsTwo}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{Tools.detailsThree}</span>
      </li>
     
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block  rounded-full bg-gradient-to-r from-blue-600 to-purple-600">Buy Now</button>
    </div>
  </div>
</div>
    })
}
    </div>

           
        </div>
    
};

export default Product;