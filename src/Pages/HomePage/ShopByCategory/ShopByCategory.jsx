import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    return (
        <div className='text-center'>
        <Tabs className={''}>
        <TabList className={'flex gap-6 place-content-center'}>

          <Tab className={' bg-rose-300 rounded-3xl '}>
            <button className='btn btn-outline btn-success rounded-3xl px-12'>
                Title
            </button>
          </Tab>

          <Tab className={' bg-red-300 rounded-3xl '}>
            <button className='btn btn-outline btn-success  rounded-3xl px-12'>
                Title
            </button>
          </Tab>

          <Tab className={' bg-red-300 rounded-3xl '}>
            <button className='btn btn-outline btn-success rounded-3xl px-12'>
                Title
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
      </Tabs>
        </div>
    );
};

export default ShopByCategory;