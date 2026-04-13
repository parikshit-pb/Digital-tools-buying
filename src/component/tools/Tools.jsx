import { use } from 'react';
import Product from '../product/Product';

const Tools = ({toolsPromise}) => {
    console.log(toolsPromise);
    const Tools = use(toolsPromise);
    console.log(Tools);
    return <div className='container mx-auto'>
        Tools : {Tools.length}
       <div className='text-center'>
         <h3 className='text-3xl font-bold pt-25'>Premium Digital Tools</h3>
        <p className='text-sm py-3'>Choose from our curated collection of premium digital products designed <br />
        to boost your productivity and creativity.</p>
        <div className='pb-6 flex justify-center font-semibold'>
            <button className=''>Products</button>
            <button className='btn rounded-full'>Cart (2)</button>
        </div>

       </div>
        <Product Tools={Tools}/>

        </div>
    
};

export default Tools;