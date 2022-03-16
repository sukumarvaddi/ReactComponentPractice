import React from "react";

function Tabs({ children }) {
  const [selected, setSelected] = React.useState(0);
  const onClick = (index) => {
    setSelected(index);
  };

  const tabButtons = (
    <div style={{ display: "flex", padding: "1rem" }}>
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

function TabButton({ title, index, onClick, disabled }) {
  return (
    <div
      style={{ padding: "1rem", cursor: "pointer" }}
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

export function TabItem({ children, index, selected }) {
  return index === selected ? <div> {children}</div> : null;
}

export default Tabs;
