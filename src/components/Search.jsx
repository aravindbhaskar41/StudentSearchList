import React from "react";

export default function Search(props) {
  const { searchResult, onClick, onChange } = props;

  console.log(searchResult);

  return (
    <>
      <input type="text" onChange={onChange} placeholder="search.." />
    </>
  );
}
