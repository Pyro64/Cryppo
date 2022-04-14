import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


export default function Events() {
    return (
        <Tabs>
            <TabList>
                <Tab>Title 1</Tab>
                <Tab>Title 2</Tab>
            </TabList>

            <TabPanel>
                <h2>хехе</h2>
            </TabPanel>
            <TabPanel>
                <h2>не хехе</h2>
            </TabPanel>
        </Tabs>
    )

};