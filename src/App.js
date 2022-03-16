import Tabs, { TabItem } from "./components/tabs/Tabs";

function App() {
  return (
    <div style={{width:'600px', margin:'auto'} }>

    <Tabs>
      <TabItem title="Papaya Whip">
        <TabContent  color='papayawhip'> This is Papaya whip tab</TabContent>
      </TabItem>
      <TabItem title="Tab2"> This is Item 2</TabItem>
      <TabItem title="Tab3"  >
          <Tabs>
            <TabItem title='nestedTab'><TabContent color='azure'> This is nested Tab </TabContent> </TabItem>
       </Tabs>
      </TabItem>
    </Tabs>
    </div>
  );
}

function TabContent({ color, children}) {
  return <div style={{ width: "100%", height: "500px", backgroundColor: ` ${color}`, overflow: 'hidden' }}> { children}</div>;
}

export default App;
