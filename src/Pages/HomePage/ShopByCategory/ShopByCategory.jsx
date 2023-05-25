import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToysCard from './ToysCard';
import MathToyCard from './MathToyCard';

const ShopByCategory = () => {
  const [toys,setToys]=useState([]);
  const [mathToys,setMathToys]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/toys')
    .then(res=>res.json())
    .then(data=>setToys(data))
  },[])

  useEffect(()=>{
    fetch('http://localhost:5000/mathToys')
    .then(res=>res.json())
    .then(data=>setMathToys(data))
  },[])

    return (
        <div className='text-center mt-5'>
            <h2 className='text-4xl font-semibold text-center mb-6'>Shop by Category</h2>
        <Tabs className={''}>

        <TabList className={'flex gap-6 place-content-center mb-12'}>

          <Tab className={'bg-[#ff6799] rounded-3xl '}>
            <button className='btn btn-outline  rounded-3xl px-12'>
            engineering kits
            </button>
          </Tab>

          <Tab className={'bg-[#ff6799] rounded-3xl '}>
            <button className='btn btn-outline rounded-3xl px-12'>
            math learning toys
            </button>
          </Tab>

          <Tab className={' bg-[#ff6799] rounded-3xl '}>
            <button className='btn btn-outline rounded-3xl px-12'>
            Science kits
            </button>
          </Tab>

        </TabList>

        <TabPanel>
          <div className='grid md:grid-cols-3 gap-6'>
          {
            toys.map(toy=><ToysCard key={toy._id} toy={toy}></ToysCard>)
          }
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid md:grid-cols-3 gap-6'>
            {
              mathToys.map(mathToy=><MathToyCard 
                key={mathToy._id} 
                mathToy={mathToy}
              ></MathToyCard>)
            }
          </div>
        </TabPanel>

        <TabPanel>
        <div className='grid md:grid-cols-3 gap-6'>
          {
            toys.map(toy=><ToysCard key={toy._id} toy={toy}></ToysCard>)
          }
          </div>
        </TabPanel>

      </Tabs>
        </div>
    );
};

export default ShopByCategory;