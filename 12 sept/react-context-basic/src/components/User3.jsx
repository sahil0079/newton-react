import React, { useContext } from 'react';
import { UserContext } from '../App';


function User3() {

    const value = useContext(UserContext)

    return (
        // <UserContext.Consumer>

        //     {(value) => <h1>{value} is inside component user 3</h1>}
        // </UserContext.Consumer>
        <h1>{value} is inside component user 3</h1>
    )
}

export default User3