import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {single_users} from "../../api";

const UserInfo = () => {
    const location = useLocation()
    const {id} = location.state
    const dispatch = useDispatch()
    const user = useSelector(state => state.users_reducer.single_user)
    useEffect(() => {
        single_users(dispatch, id)
    }, [])
    console.log(user)
    return (
        <div className={"p-4 grid grid-cols-12"}>
            <div className={"shadow-2xl col-span-12"}>
                {user.name}
            </div>
        </div>
    );
};

export default UserInfo;