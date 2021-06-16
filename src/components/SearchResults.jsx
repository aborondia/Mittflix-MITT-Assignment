import Show from "./Show";

const SearchResults = ({ label, shows }) => {
    return (
        <div className="titleList">
            <div className="title">
                <h1>{label}</h1>
                <div className="titles-wrapper">
                    {shows.results.map(show => {
                        return (
                            < Show
                                show={show}
                                key={show.id}
                            />
                        )
                    })
                    }
                </div>
            </div>
        </div>);
}

export default SearchResults;