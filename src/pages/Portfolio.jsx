import Work from "../components/Work";
import works from "../utils/works";

export default function Portfolio() {
    // returns content for Portfolio page

    return (
    <div>
        <div className="container box has-background-info-light columns is-mobile is-multiline is-centered">
            {works.map((item) => (
                <Work item={item} key={item.name} className="columns is-full-mobile" />
            ))}
        </div>
    </div>
    );
}