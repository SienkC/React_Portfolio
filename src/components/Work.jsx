const Work = ({
    item
}) => { 
    return (
        <div className="box has-background-info-dark column is-9">
                <div className="workLabel">
                    <h4 className="has-text-centered has-text-info-light is-size-1">{item.name}</h4>
                    <p className="has-text-centered has-text-info-light is-size-4">{item.tech}</p>
                    <a href={item.deployed}>
                        <img className="image" style={{width: "100%", height: "50vh"}} src={"../assets/images/" + item.image}></img>
                    </a>
                    <p className="has-text-right"><a className="m-2 has-text-info-light is-size-5" href={item.repo}>View Repository on GitHub</a></p>
                </div>
        </div>
    );
}

export default Work;