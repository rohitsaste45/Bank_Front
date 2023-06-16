import { useState } from "react";

function MyUserList() {
  const [userList, setUserList] = useState([]);

  const getAllUserAction = async () => {
    let url = `http://localhost:4000/find-all-user`;
    let res = await fetch(url);
    let list = await res.json();

    setUserList([...list]);
  };

  return (
    <>
      <h1>User List</h1>
      <input type="button" value="Get All User " onClick={getAllUserAction} />

      {userList.map((item) => (
        <>
          <div>
            {item.username} {item.password} {item.email} {item.mobile}
          </div>
        </>
      ))}
    </>
  );
}

export default MyUserList;
