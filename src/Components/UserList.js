import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Components/UserList.css";

function UserList() {
    const [listOfUSer, setListOfUSer] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                setListOfUSer(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <div className="all">
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
            {listOfUSer.map((user, index) => (
                <div key={index} className="userCard">
                    <div className="profileimg">
                        <img
                            className="Avatar"
                            src="https://cdn2.iconfinder.com/data/icons/ui-coloured/40/user-512.png"
                            alt="avatar"
                        />
                    </div>
                    <div className="profileBody">
                        <h3>{user.name}</h3>
                        <span>{user.email}</span> <br />
                        <span style={{ fontStyle: "italic" }}>
                            {user.company.catchPhrase}
                        </span>
                        <p>
                            <strong>{user.company.name}</strong>
                        </p>
                        <span>Phone number:{user.phone}</span>
                        <p>
                            Adress: {user.address.street}, {user.address.suite},{" "}
                            {user.address.city}, {user.address.zipcode}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UserList;
