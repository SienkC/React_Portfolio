export default function Portfolio() {
    // returns content for Portfolio page
    return (
    <div>
        <div className="container box has-background-info-light columns is-mobile is-multiline is-centered">
        <div className="box has-background-info-dark column is-9"  id="zero-proof">
                <div className="workLabel">
                    <h4 className="has-text-centered has-text-info-light is-size-1">Zero-Proof</h4>
                    <p className="has-text-centered has-text-info-light is-size-4">MERN</p>
                    <a href="https://guarded-river-60488-2757545d4c45.herokuapp.com/">
                        <img className="image" style={{width: "100%", height: "50vh"}} src="../assets/images/guarded-river-60488-2757545d4c45herokuapp.png"></img>
                    </a>
                    <p className="has-text-right"><a className="m-2 has-text-info-light is-size-5" href="https://github.com/kateleighb3/zero-proof">View Repository on GitHub</a></p>
                </div>
            </div>
            <div className="box has-background-info-dark column is-9" id="largeEx">
                <div className="workLabel">
                    <h4 className="has-text-centered has-text-info-light is-size-1">The Comic Vault</h4>
                    <p className="has-text-centered has-text-info-light is-size-4">HTML/ CSS/ JavaScript/ API</p>
                    <a href="https://sienkc.github.io/The_Comic_Vault/">
                        <img className="image" style={{width: "100%", height: "50vh"}} src="../assets/images/The_Comic_Vault.png"></img>
                    </a>
                    <p className="has-text-right"><a className="m-2 has-text-info-light is-size-5" href="https://github.com/SienkC/The_Comic_Vault">View Repository on GitHub</a></p>
                </div>
            </div>
            <div className="box has-background-info-dark column is-9" id="calculator" >
                <div className="workLabel">
                    <h4 className="has-text-centered has-text-info-light is-size-1">Pixel Perfect Reviews</h4>
                    <p className="has-text-centered has-text-info-light is-size-4">Sequelize/ JavaScript/ CSS</p>
                    <a href="https://aqueous-garden-21223-0843a25d5cd3.herokuapp.com/">
                        <img className="image" style={{width: "100%", height: "50vh"}} src="../assets/images/pixelperfect.png"></img>
                    </a>
                    <p className="has-text-right"><a className="m-2 has-text-info-light is-size-5" href="https://github.com/yanalejandro/Pixel-Perfect-Reviews">View Repository on GitHub</a></p>
                </div>
            </div>
            <div className="box has-background-info-dark column is-9" id="horiseon" >
                <div className="workLabel">
                    <h4 className="has-text-centered has-text-info-light is-size-1">Tech Blog</h4>
                    <p className="has-text-centered has-text-info-light is-size-4">HTML/ CSS/ JavaScript</p>
                    <a href="https://murmuring-journey-02432-4c40dbbc06eb.herokuapp.com/">
                        <img className="image" style={{width: "100%", height: "50vh"}} src="../assets/images/techblog.png"></img>
                    </a>
                    <p className="has-text-right"><a className="m-2 has-text-info-light is-size-5" href="https://github.com/SienkC/Tech_Blog">View Repository on GitHub</a></p>
                </div>
            </div>
            <div className="box has-background-info-dark column is-9" id="puzzel" >
                <div className="workLabel">
                    <h4 className="has-text-centered has-text-info-light is-size-1">Note Taker</h4>
                    <p className="has-text-centered has-text-info-light is-size-4">HTML/ CSS/ JavaScript</p>
                    <a href="https://guarded-reaches-33756-98317bd521b3.herokuapp.com/">
                        <img className="image" style={{width: "100%", height: "50vh"}} src="../assets/images/notetaker.png"></img>
                    </a>
                    <p className="has-text-right"><a className="m-2 has-text-info-light is-size-5" href="https://github.com/SienkC/Note_Taker">View Repository on GitHub</a></p>
                </div>
            </div>
        </div>
    </div>
    );
}