import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/icon-man.png";
import {NavLink} from "react-router-dom";

const User = ({user, follow, unfollow, isFollowing, ...props}) => {
    return (
        <div>
            {
                <div key={user.id}>
                      <span>
                          <div>
                              <NavLink to={"/profile/" + user.id}>
                                <img className={classes.photo}
                                     src={user.photos.small !== null ? user.photos.small : userPhoto} alt="image"/>
                              </NavLink>
                          </div>
                          <div>{user.followed
                              ? <button disabled={isFollowing.some(id => id === user.id)} onClick={() => {
                                  unfollow(user.id);
                              }}>unfollow</button>
                              : <button disabled={isFollowing.some(id => id === user.id)} onClick={() => {
                                  follow(user.id);
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
                </div>
            }
        </div>
    );
}

export default User;