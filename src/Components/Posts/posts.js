import React, {useEffect} from 'react';
import {get_posts} from "../../api/posts";
import {useDispatch, useSelector} from "react-redux";
import {Table} from "antd";

const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts_reducer.posts)
    console.log(posts)
    useEffect(() => {
        get_posts(dispatch)
    }, [])
    const columns = [
        {
            title: "#",
            dataIndex: 'id',
            render: (text) => (
                <div>{text}</div>
            )
        },
        {
            title: "Title",
            dataIndex: 'title',
            render: (text) => (
                <div>{text.slice(0, 10)}</div>
            )
        },
        {
            title: "Body",
            dataIndex: 'body',
            render: (text) => (
                <div>{text.slice(0, 10)}</div>
            )
        }
    ]
    return (
        <div>
            <Table dataSource={posts} columns={columns} rowKey={record => record.id} pagination={{pageSize: 5}}/>

        </div>
    );
};

export default Posts;