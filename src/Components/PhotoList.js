import React from "react";
import fetchData from "../fetchData";

export default class PhotoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            albumPhotos: []
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;

        fetchData(`/albums/${id}/photos`)
            .then(data => this.setState({albumPhotos: data}))
    }


    Photo(props) {

        const liStyle = {marginRight: "15px"};
        const pStyle = {width: "150px"};

        return (
            <li style={liStyle}>
                <img src={props.photo.thumbnailUrl} alt={"img"}/>
                <p style={pStyle}>{props.photo.title}</p>
            </li>

        )
    }

    render() {
        const ulStyle = {
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
        };

        const {albumPhotos} = this.state;

        return (
            <ul style={ulStyle}>
                {albumPhotos.map(photo => <this.Photo photo={photo}
                                                      key={photo.id}/>)}
            </ul>
        );
    }

    componentDidUpdate(prevProps) {
        const {url} = this.props.match;

        if (prevProps.match.url !== url) {
            const {id} = this.props.match.params;

            fetchData(`/albums/${id}/photos`)
                .then(data => this.setState({albumPhotos: data}))
        }
    }
}