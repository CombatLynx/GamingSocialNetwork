import React from "react";
import Post from "./Post";
import classes from "./MyPosts.module.css";
import dataPost from "../../../dataPost.json"

const MyPosts = () => {

    let dataPosts = dataPost.map(
        (dataElement) => {
            return <Post message={dataElement.message} countLikes={dataElement.countLikes}></Post>
        }
    );

    return (
        <div className={classes.posts}>
            {dataPosts}
        </div>
    );
}

export default MyPosts;
