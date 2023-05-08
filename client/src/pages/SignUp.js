import React, { useState, useEffect } from "react";
import SignupForm from "../component/form/SignupForm";
const SignUp = () => {
    // const [dataUsers, setDataUsers] = useState([]);

    // useEffect(() => {
    //     fetch("/user")
    //         .then((response) => response.json())
    //         .then((data) => setDataUsers(data));
    // }, []);

    // const userRows = dataUsers.map((user) => (
    //     <tr key={user.id}>
    //         <td>{user.id}</td>
    //         <td>{user.name}</td>
    //     </tr>
    // ));

    return (
        <div className="flex bg-white">
            <div>
                <img
                    src="https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="SignUp picture"
                    className="w-full h-full"
                />
            </div>
            {/* <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>{userRows}</tbody>
            </table> */}
            <SignupForm></SignupForm>
        </div>
    );
};

export default SignUp;
