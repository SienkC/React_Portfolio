export default function AboutMe() {
    // returns content for About Me page
    return (
        <div className="container columns is-mobile is-multiline is-centered box has-background-info-light">
            <figure className="image column is-3">
                <img className="is-rounded" src="../assets/images/Avatar.jpg" alt="Avatar to represent Courtney"></img>
            </figure>
            <p className="column is-10">
                        Hello, I am Courtney Sienkiewich, a developing developer currently based in Orlando, FL. 
                        At the moment I am going through a course with UCF Bootcamps to grow in full stack development.
                        Check out the work section below to see projects I have worked on.
                        <br></br><br></br>
                        When I'm not coding, I like to spend my time drawing, exploring the farmers' market, or 
                        expanding my ever growing comic book collection. Feel free to check out my contact information 
                        at the bottom of the page to reach out!
            </p>
        </div>
    );
}