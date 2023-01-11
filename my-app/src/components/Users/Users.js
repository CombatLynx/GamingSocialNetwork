import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/icon-man.png";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(page => {
                    return <span className={props.currentPage === page ? classes["select-page"] : ""}
                                 onClick={() => {
                                     props.onCurrentPage(page)
                                 }}>{page}</span>
                })}
            </div>
            {
                props.users.map((user) => <div key={user.id}>
                      <span>
                          <div>
                              <NavLink to={"/profile/" + user.id}>
                                <img className={classes.photo}
                                     src={user.photos.small !== null ? user.photos.small : userPhoto} alt="image"/>
                              </NavLink>
                          </div>
                          <div>{user.followed
                              ? <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => {
                                  props.unfollow(user.id);
                              }}>unfollow</button>
                              : <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => {
                                  props.follow(user.id);
                              }}>follow</button>}
                          </div>
                      </span>
                    <span>
                          <span>
                              <div>{user.name}</div>
                              <div>{user.followed}</div>
                          </span>
                          <span>
                              <div>userId: {user.id}</div>
                              <div>country</div>
                              <div>city</div>
                          </span>
                      </span>
                </div>)
            }
        </div>
    );
}

export default Users;