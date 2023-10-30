/* TODO - add your code to create a functional React component 
that renders account details for a logged in user. 
Fetch the account data from the provided API. 
You may consider conditionally rendering a message for other users 
that prompts them to log in or create an account.  */
import { useGetUserInfoQuery, selectToken } from "../Auth/authSlice"
import { useSelector } from "react-redux";
import HistoryCard from "./HistoryCard"

export default function Account() {
    const token = useSelector(selectToken)
    const { data } = useGetUserInfoQuery(token);

    return data ? (
        <>
            <h1>Profile</h1>
            <h2>{data.firstname} {data.lastname}</h2>
            <h3>Book History:</h3>
            <HistoryCard token={token} />
        </>
    ) : (<p>Loading profile...</p>)
}


