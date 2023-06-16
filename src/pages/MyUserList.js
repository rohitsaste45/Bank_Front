import { useEffect, useState } from "react";

function MyUserList() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getAllUserAction();
  }, []);

  const getAllUserAction = async () => {
    let url = `http://localhost:4000/find-all-user`;
    let res = await fetch(url);
    let list = await res.json();

    setUserList([...list]);
  };

  return (
    <>
      <h1>User List</h1>

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
