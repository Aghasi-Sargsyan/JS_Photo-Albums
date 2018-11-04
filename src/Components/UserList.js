import React from 'react';
import fetchData from "../fetchData";
import {NavLink} from 'react-router-dom';

export default class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userList: []
        };
    }

    User(props) {
        const {user} = props;

        return (
            <li>
                <NavLink to={`/users/${user.id}`}
                         activeStyle={{fontWeight: "bold"}}>
                    {user.name}
                </NavLink>
            </li>);
    }

    componentDidMount() {
        fetchData("/users")
            .then(data => this.setState({userList: data}))
    }

    render() {

        const {userList} = this.state;

        return (
            <ul>
                {userList.map(user => <this.User user={user}
                                                 key={user.id}/>)}
            </ul>
        );
    }
}