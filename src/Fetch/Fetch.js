import React, {Component} from "react";
import MediaCard from "../Cards/Cards";

const API_KEY = process.env.REACT_APP_NY_TIMES_API_KEY

class Fetch extends Component{
    state = {
        items: [{ }]
    };

    componentDidMount() {
        fetch(
            `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${API_KEY}`
        )
            .then(res => res.json())
            .then(json =>
                this.setState({
                    items: json.results
                })
            );
    }

    render() {
        const newsItem = this.state.items.map(item => (
            <MediaCard image={item.thumbnail_standard || `https://developers.google.com/maps/documentation/maps-static/images/error-image-generic.png?authuser=0&hl=uk`} newsTitle={item.title}/>
        ));

        return <div style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
        }}>{newsItem}</div>;
    }
}

export default Fetch
