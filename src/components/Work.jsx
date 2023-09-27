const Work = ({
    item
}) => {
    return (
        <div className="card m-1" >
            <div className="card-image card-content p-0">
                <figure className="image">
                    <img style={{ width: "100%", height: "50vh" }} src={"../assets/images/" + item.image}></img>
                </figure>
            </div>
            <div className="card-content is-overlay hidden-content">
                <span className="transparent">
                    <div className="workLabel">
                        <h4 className="has-text-centered has-text-info is-size-2">{item.name}</h4>
                        <p className="has-text-centered has-text-info is-size-5">{item.tech}</p>
                        <p className="has-text-centered has-text-info is-size-5">{item.summary}</p>
                        <div className="columns">
                            <p className="column has-text-left"><a className="m-2 button has-text-info is-size-6" href={item.deployed}>View Deployed Website</a></p>
                            <p className="column has-text-right"><a className="m-2 button has-text-info is-size-6" href={item.repo}>View Repository on GitHub</a></p>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default Work;