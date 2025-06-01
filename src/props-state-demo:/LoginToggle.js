
import { useState } from "react";

function LoggedIn() {
    const [isActive, setIsActive] = useState(false);
    return (
        <div>
            <h1>{isActive ? "User is online." : "User is offline,"}</h1>
            <button onClick={() => setIsActive (!isActive)}>
                {isActive ? "Log Out" : "Log in"}
            </button>
        </div>
    )
};

export default LoggedIn;