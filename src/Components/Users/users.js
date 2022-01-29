import React, {useEffect} from 'react';
import {getUsers} from "../../api";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"
import {Table} from "antd"
import 'antd/dist/antd.css';

const Users = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        getUsers(dispatch)
    }, []);


    const users = useSelector(state => state.users_reducer.users)

    const columns = [{
        title: "#",
        dataIndex: "id",
        render: (text, value) => (<div>{text}</div>),
        sorter: (a, b) => a.name.length - b.name.length
    },
        {
            title: "Name", dataIndex: "name", render: (text, value) => (<div onClick={() => navigate("/user-info", {
                 state: {id: value.id}
            })}>{text}</div>), sorter: (a, b) => a.name.length - b.name.length
        }, {
            title: "Email",
            dataIndex: "email",
            render: (text, value) => (<div>{text}</div>),
            sorter: (a, b) => a.email.length - b.email.length
        }, {
            title: "Phone",
            dataIndex: "phone",
            render: (text, value) => (<div>{text}</div>),
            sorter: (a, b) => a.phone.length - b.phone.length
        }]

    function onChange(pagination, filters, sorter, extra) {
        // console.log('params', pagination, filters, sorter, extra);
    }

    return (<div>
        <Table dataSource={users} columns={columns} rowKey={record => record.id} pagination={{pageSize: 5}}/>
    </div>);
};

export default Users;