import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader";

class UsersClass extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    }

    onCurrentPage = (currentPage) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPages(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <>
                <div>{this.props.isFetching ? <Preloader /> : null}</div>
                <Users onCurrentPage={this.onCurrentPage}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       onFollow={this.props.onFollow}
                       onUnfollow={this.props.onUnfollow}
                />
            </>
        );
    }
}

export default UsersClass;
