import Tabs, { TabItem } from "./components/tabs/Tabs";

function App() {
  return (
    <Tabs>
      <TabItem title="Papaya Whip">
        <TabContent />
      </TabItem>
      <TabItem title="Tab2"> This is Item 2</TabItem>
      <TabItem title="Tab3" disabled>
        This is item 3
      </TabItem>
    </Tabs>
  );
}

function TabContent() {
  return <div style={{ width: "200px", height: "200px", backgroundColor: "papayawhip" }}> This is custom Component</div>;
}

export default App;
