const Work = ({
    item
}) => {
    return (
        <div className="column is-three-quarters card m-3 p-0" >
            <div className="card-image card-content p-0">
                <figure className="image">
                    <img src={"../assets/images/" + item.image}></img>
                </figure>
            </div>
            <div className="card-content is-overlay hidden-content">
                <div className="workLabel">
                    <h4 className="has-text-centered has-text-info-light is-size-2 is-size-6-mobile">{item.name}</h4>
                    <p className="has-text-centered has-text-info-light is-size-5 is-size-7-mobile">{item.tech}</p>
                    <p className="has-text-centered has-text-info-light is-size-5 is-size-7-mobile">{item.summary}</p>
                    <div className="columns is-mobile">
                        <p className="column has-text-left"><a className="m-2 button has-background-info-light has-text-info-dark is-size-6 is-size-8-mobile" href={item.deployed}>View Deployed Website</a></p>
                        <p className="column has-text-right"><a className="m-2 button has-background-info-light has-text-info-dark is-size-6 is-size-8-mobile" href={item.repo}>View Repository on GitHub</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;