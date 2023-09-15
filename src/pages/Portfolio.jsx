export default function Portfolio() {
    // returns content for Portfolio page
    return (
    <div>
        <div className="container box has-background-info-light columns is-mobile is-multiline is-centered">
        <a className="box has-background-info-dark column is-9" href="" id="zero-proof">
                <div className="workLabel">
                    <h4 className="has-text-centered has-text-info-light is-size-1">Zero-Proof</h4>
                    <p className="has-text-centered has-text-info-light is-size-4">MERN</p>
                    <iframe className="image" style={{width: "100%", height: "50vh"}} src="https://guarded-river-60488-2757545d4c45.herokuapp.com/"></iframe>
                    <p className="has-text-right"><a className="m-2 has-text-info-light is-size-5" href="https://guarded-river-60488-2757545d4c45.herokuapp.com/">View Repository on GitHub</a></p>
                </div>
            </a>
            <a className="box has-background-info-dark column is-9" href="https://sienkc.github.io/The_Comic_Vault/" id="largeEx">
                <div className="workLabel">
                    <h4 className="has-text-centered has-text-info-light is-size-1">The Comic Vault</h4>
                    <p className="has-text-centered has-text-info-light is-size-4">HTML/ CSS/ JavaScript/ API</p>
                    <iframe className="image" style={{width: "100%", height: "50vh"}} src="https://sienkc.github.io/The_Comic_Vault/"></iframe>
                    <p className="has-text-right"><a className="m-2 has-text-info-light is-size-5" href="https://github.com/SienkC/The_Comic_Vault">View Repository on GitHub</a></p>
                </div>
            </a>
            <a className="box has-background-info-dark column is-9" href="https://aqueous-garden-21223-0843a25d5cd3.herokuapp.com/" id="calculator" >
                <div className="workLabel">
                    <h4 className="has-text-centered has-text-info-light is-size-1">Pixel Perfect Reviews</h4>
                    <p className="has-text-centered has-text-info-light is-size-4">Sequelize/ JavaScript/ CSS</p>
                    <iframe className="image" style={{width: "100%", height: "50vh"}} src="https://aqueous-garden-21223-0843a25d5cd3.herokuapp.com/"></iframe>
                    <p className="has-text-right"><a className="m-2 has-text-info-light is-size-5" href="https://github.com/yanalejandro/Pixel-Perfect-Reviews">View Repository on GitHub</a></p>
                </div>
            </a>
            <a className="box has-background-info-dark column is-9" href="https://sienkc.github.io/Horiseon/" id="horiseon" >
                <div className="workLabel">
                    <h4 className="has-text-centered has-text-info-light is-size-1">Tech Blog</h4>
                    <p className="has-text-centered has-text-info-light is-size-4">HTML/ CSS/ JavaScript</p>
                    <iframe className="image" style={{width: "100%", height: "50vh"}} src="https://murmuring-journey-02432-4c40dbbc06eb.herokuapp.com/"></iframe>
                    <p className="has-text-right"><a className="m-2 has-text-info-light is-size-5" href="https://github.com/SienkC/Tech_Blog">View Repository on GitHub</a></p>
                </div>
            </a>
            <a className="box has-background-info-dark column is-9" href="https://img.freepik.com/free-vector/coming-soon-background-with-focus-spot-lights_1017-25513.jpg?w=740&t=st=1687884406~exp=1687885006~hmac=6d06fcf8b31938595792312ececa438abe371b4319f6f8c8ebd28bf7614c903b" id="puzzel" >
                <div className="workLabel">
                    <h4 className="has-text-centered has-text-info-light is-size-1">Note Taker</h4>
                    <p className="has-text-centered has-text-info-light is-size-4">HTML/ CSS/ JavaScript</p>
                    <iframe className="image" style={{width: "100%", height: "50vh"}} src="https://guarded-reaches-33756-98317bd521b3.herokuapp.com/"></iframe>
                    <p className="has-text-right"><a className="m-2 has-text-info-light is-size-5" href="https://github.com/SienkC/Note_Taker">View Repository on GitHub</a></p>
                </div>
            </a>
        </div>
    </div>
    );
}