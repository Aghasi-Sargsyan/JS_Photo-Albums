import React from "react";
import fetchData from "../fetchData";
import {NavLink} from 'react-router-dom';

export default class AlbumList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userAlbumList: []
        };

    }

    componentDidMount() {
        const {url} = this.props.match;

        fetchData(`${url}/albums`)
            .then(data => this.setState({userAlbumList: data}))
    }

    Album = (props) => {
        const {url} = this.props.match;
        const {title, id} = props.album;

        return (
            <li>
                <NavLink to={`${url}/albums/${id}`}
                         activeStyle={{fontWeight: "bold"}}>
                    {title}
                </NavLink>
            </li>
        )
    };

    componentDidUpdate(prevProps) {
        const {url} = this.props.match;

        if (url !== prevProps.match.url) {
            fetchData(`${url}/albums`)
                .then(data => this.setState({userAlbumList: data}))
        }
    }

    render() {
        const {userAlbumList} = this.state;

        return (
            <ul>
                {userAlbumList.map(album => <this.Album key={album.id}
                                                        album={album}/>)}
            </ul>
        );
    }
}