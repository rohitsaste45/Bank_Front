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
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-11">
          <h3>User List</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Password</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td className="text-capitalize">{item.username}</td>
                  <td>*******</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td className="fs-5">
                    <input type="button" value="&#x270E;" /> /{" "}
                    <input type="button" value="&#128686;" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MyUserList;
