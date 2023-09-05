export default function Portfolio() {
    // returns content for Portfolio page
    return (
    <div>
        <div className="">
            <a href="https://sienkc.github.io/The_Comic_Vault/" id="largeEx">
                <div className="workLabel">
                    <h4>The Comic Vault</h4>
                    <p>HTML/ CSS/ JavaScript/ API</p>
                </div>
            </a>
            <a href="https://aqueous-garden-21223-0843a25d5cd3.herokuapp.com/" id="calculator" className="smallEx">
                <div className="workLabel">
                    <h4>Pixel Perfect Reviews</h4>
                    <p>React/ JavaScript/ CSS</p>
                </div>
            </a>
            <a href="https://sienkc.github.io/Horiseon/" id="horiseon" className="smallEx">
                <div className="workLabel">
                    <h4>Horiseon</h4>
                    <p>HTML/ CSS</p>
                </div>
            </a>
            <a href="https://img.freepik.com/free-vector/coming-soon-background-with-focus-spot-lights_1017-25513.jpg?w=740&t=st=1687884406~exp=1687885006~hmac=6d06fcf8b31938595792312ececa438abe371b4319f6f8c8ebd28bf7614c903b" id="puzzel" className="smallEx">
                <div className="workLabel">
                    <h4>Pastel Puzzels</h4>
                    <p>MERN Stack</p>
                </div>
            </a>
        </div>
    </div>
    );
}