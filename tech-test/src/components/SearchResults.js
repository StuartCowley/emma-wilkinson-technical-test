import React from "react";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
    if (!results.length) {
        return <p>No results</p>;
    } else {
        return (
            <div className="img-container">
                {results.map((image) => (
                    <img
                        className="card-image"
                        src={image}
                        alt="space-image"
                    />
                ))}
            </div>
        )
    };
};

export default SearchResults;