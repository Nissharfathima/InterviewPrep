import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";

export default function App() {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;
  const currentItems = users.slice(startIndex,endIndex);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  },[]);

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
    const filtered = users.filter((user) => user.name.includes(searchText));
    setFilteredUsers(filtered);
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
  }
  
  return (
    <div className="App">
      <h1>List of Users</h1>
      Search User<input type={"text"} value={searchText} onChange={handleSearchText} />
      {searchText
        ? filteredUsers.map((user) => <p>{user.name}</p>)
        : currentItems.map((user) => (
            <ul>
              <li>{user.name}</li>
            </ul>
          ))}
      {!searchText && <Pagination 
        paginate={handlePagination} 
        itemsPerPage={itemsPerPage}
        totalItems = {users.length}/>}
    </div>
  );
}
