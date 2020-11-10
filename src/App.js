import React from "react";
import "./styles.css";
import SearchAppBar from "./components/SearchAppBar";
import Search from "./components/Search";
import ShowDetails from "./components/ShowDetails";
import AlignItemsList from "./components/AlignItemsList";
import Box from "@material-ui/core/Box";
import TitleBar from "./components/TitleBar";
export default function App() {
  const studentData = {
    101: {
      id: 101,
      name: "Ranjan",
      age: 21,
      hobby: ["Reading", "Programming", "Dancing"],
      about: "I am good person..."
    },
    102: {
      id: 102,
      name: "Maxwell",
      age: 21,
      hobby: ["Cricket", "Football"],
      about: "I the best"
    },
    103: {
      id: 103,
      name: "Katherine",
      age: 21,
      hobby: ["Music", "Reading"],
      about: "I am nice person..."
    },
    104: {
      id: 104,
      name: "Vivek",
      age: 21,
      hobby: ["Chess"],
      about: "I am a unique person..."
    }
  };
  const [searchResult, setSearchResult] = React.useState([]);
  const [student, setStudent] = React.useState({});
  const handleClick = (_id) => {
    console.log("clicked id= " + _id);
    setStudent(studentData[_id]);
  };
  const handleSearch = (event) => {
    let searchValue = event.target.value;
    if (searchValue === "") {
      console.log("empty string");
      setSearchResult([]);
      return;
    }
    let newSearchResult = [];
    for (const [key, value] of Object.entries(studentData)) {
      if (value.name.toLowerCase().includes(searchValue.toLowerCase()))
        newSearchResult.push(value);
    }
    setSearchResult(newSearchResult);
  };
  return (
    <div className="App">
      <TitleBar />
      <br />
      <br />
      <Box className="container" display="flex" justifyContent="space-around">
        <Box className="search">
          <Search onChange={handleSearch} />
          <AlignItemsList
            className="searchResult"
            searchResult={searchResult}
            onClick={handleClick}
          />
        </Box>
        <ShowDetails student={student} />
      </Box>
    </div>
  );
}
