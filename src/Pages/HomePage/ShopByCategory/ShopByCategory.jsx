import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    return (
        <div className='text-center'>
            <h2 className='text-4xl font-semibold text-center mb-6'>Shop by Category</h2>
        <Tabs className={''}>

        <TabList className={'flex gap-6 place-content-center'}>

          <Tab className={'bg-[#ff6799] rounded-3xl '}>
            <button className='btn btn-outline  rounded-3xl px-12'>
                Science kits
            </button>
          </Tab>

          <Tab className={'bg-[#ff6799] rounded-3xl '}>
            <button className='btn btn-outline rounded-3xl px-12'>
            math learning toys
            </button>
          </Tab>

          <Tab className={' bg-[#ff6799] rounded-3xl '}>
            <button className='btn btn-outline rounded-3xl px-12'>
            engineering kits
            </button>
          </Tab>

          <Tab className={' bg-[#ff6799] rounded-3xl '}>
            <button className='btn btn-outline rounded-3xl px-12'>
            engineering tools
            </button>
          </Tab>

        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>

        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>

        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>

        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>

      </Tabs>
        </div>
    );
};

export default ShopByCategory;