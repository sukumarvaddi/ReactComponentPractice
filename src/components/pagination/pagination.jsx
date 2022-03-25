import React from "react";
const defaultPageSize = 5;

function callAll(fns) {
  return (args) => {
   return ()=> fns.forEach(fn => { 
      if (fn) {
        fn(args)
      }
    })
  }
}


function usePagination() {
  const [data, setData] = React.useState([]);
  const [pageSize, setPageSize] = React.useState(defaultPageSize);
  const [selectedPage, setSelectedPage] = React.useState(1);
  const updatePageSize = (pageSize) => {
    setPageSize(pageSize);
    setDataForPage(data.slice(0, pageSize));
    setSelectedPage(1);
  };
  const [dataForPage, setDataForPage] = React.useState([]);
  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setDataForPage(json.slice(0, defaultPageSize));
      });
  }, []);

  function updateDataForPage(pageNumber = 1) {
    const startIndex = pageNumber * pageSize - pageSize;
    const endIndex = pageNumber * pageSize < data.length ? pageNumber * pageSize : data.length;
    setDataForPage(data.slice(startIndex, endIndex));
    setSelectedPage(pageNumber);
  }



  function getPropsForPageButton(props) {
    const { pageNumber, id,onClick: updateButtonLog } = props;
    return {
      onClick: callAll([updateButtonLog, updateDataForPage])(pageNumber),
      key: id,
      value: pageNumber,
      disabled: pageNumber === selectedPage,
      "aria-label": `Page No ${pageNumber}`,
      title: pageNumber,
      id
    };
  }

  function getPropsForPageSizeInput(props) {
    return {
      value: pageSize,
      onInput: (event) => {
        updatePageSize(Number(event.target.value));
      },
      ...props
    };
  }

  return {
    getPropsForPageSizeInput,
    dataForPage,
    noOfPages: data.length / pageSize,
    getPropsForPageButton
  };
}
export default usePagination;
