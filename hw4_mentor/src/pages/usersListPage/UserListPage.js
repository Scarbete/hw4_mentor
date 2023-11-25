import React from "react";
import {useSelector} from "react-redux";

function UsersListPage() {
    const { users } = useSelector(state => state.users)

    return (
        <div>
            <h2>UsersListPage</h2>
            {users?.map((item, index) =>
                <div key={index}>
                    <p>Username: {item?.username}</p>
                    <p>Name: {item?.name}</p>
                    <p>Email: {item?.email}</p>
                </div>
            )}
        </div>
    )
}

export default UsersListPage