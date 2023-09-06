export default function Portfolio() {
    // returns content for Portfolio page
    return (
    <div>
        <div className="container box has-background-info-light columns is-mobile is-multiline is-centered">
            <a className="box has-background-info-dark column is-9" href="https://sienkc.github.io/The_Comic_Vault/" id="largeEx">
                <div className="workLabel">
                    <h4 className="has-text-centered has-text-info-light is-size-1">The Comic Vault</h4>
                    <p className="has-text-centered has-text-info-light is-size-4">HTML/ CSS/ JavaScript/ API</p>
                    <iframe className="image" style={{width: "100%", height: "50vh"}} src="https://sienkc.github.io/The_Comic_Vault/"></iframe>
                </div>
            </a>
            <a className="box has-background-info-dark column is-9" href="https://aqueous-garden-21223-0843a25d5cd3.herokuapp.com/" id="calculator" >
                <div className="workLabel">
                    <h4 className="has-text-centered has-text-info-light is-size-1">Pixel Perfect Reviews</h4>
                    <p className="has-text-centered has-text-info-light is-size-4">React/ JavaScript/ CSS</p>
                    <iframe className="image" style={{width: "100%", height: "50vh"}} src="https://aqueous-garden-21223-0843a25d5cd3.herokuapp.com/"></iframe>
                </div>
            </a>
            <a className="box has-background-info-dark column is-9" href="https://sienkc.github.io/Horiseon/" id="horiseon" >
                <div className="workLabel">
                    <h4 className="has-text-centered has-text-info-light is-size-1">Horiseon</h4>
                    <p className="has-text-centered has-text-info-light is-size-4">HTML/ CSS</p>
                    <iframe className="image" style={{width: "100%", height: "50vh"}} src="https://sienkc.github.io/Horiseon/"></iframe>
                </div>
            </a>
            <a className="box has-background-info-dark column is-9" href="https://img.freepik.com/free-vector/coming-soon-background-with-focus-spot-lights_1017-25513.jpg?w=740&t=st=1687884406~exp=1687885006~hmac=6d06fcf8b31938595792312ececa438abe371b4319f6f8c8ebd28bf7614c903b" id="puzzel" >
                <div className="workLabel">
                    <h4 className="has-text-centered has-text-info-light is-size-1">Pastel Puzzels</h4>
                    <p className="has-text-centered has-text-info-light is-size-4">MERN Stack</p>
                    <iframe className="image" style={{width: "100%", height: "50vh"}} src="https://img.freepik.com/free-vector/coming-soon-background-with-focus-spot-lights_1017-25513.jpg?w=740&t=st=1687884406~exp=1687885006~hmac=6d06fcf8b31938595792312ececa438abe371b4319f6f8c8ebd28bf7614c903b"></iframe>
                </div>
            </a>
        </div>
    </div>
    );
}