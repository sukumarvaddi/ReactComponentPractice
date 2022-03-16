import React from "react";

function Tabs({ children }) {
  const [selected, setSelected] = React.useState(0);
  const onClick = (index) => {
    setSelected(index);
  };

  const tabButtons = (
    <div style={{ display: "flex" }}>
      {React.Children.map(children, (child, index) => {
        return <TabButton title={child.props.title} index={index} disabled={child.props.disabled} onClick={onClick} />;
      })}
    </div>
  );

  const tabContents = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, { index, selected });
  });
  return [tabButtons, tabContents];
}
Tabs.displayName ='TabItemBySukumarVaddi'

function TabButton({ title, index, onClick, disabled }) {
  return (
    <div
      style={{ padding: "1rem", cursor: "pointer", width:'100px', height:'50px', border:'1px solid gray' }}
      onClick={() => {
        if (!disabled) {
          onClick(index);
        }
      }}
    >
      {title}
    </div>
  );
}
TabButton.displayName=''

export function TabItem({ children, index, selected }) {
  return index === selected ? <div style={{width:'100%', border:"1px solid gray"}}> {children}</div> : null;
}
TabItem.displayName='TabItemBySukumarVaddi'

export default Tabs;
