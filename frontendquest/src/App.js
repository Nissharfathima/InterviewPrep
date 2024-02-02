import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  },[]);

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
    const filtered = users.filter((user) => user.name.includes(searchText));
    console.log(filtered);
    setFilteredUsers(filtered);
  };

  
  return (
    <div className="App">
      <h1>List of Users</h1>
      Search User<input type={"text"} value={searchText} onChange={handleSearchText} />
      {searchText
        ? filteredUsers.map((user) => <p>{user.name}</p>)
        : users.map((user) => (
            <ul>
              <li>{user.name}</li>
            </ul>
          ))}
    </div>
  );
}
