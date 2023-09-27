import Work from "../components/Work";

export default function Portfolio() {
    // returns content for Portfolio page
    const works = [
        {
            name: "Zero Proof",
            image: "guarded-river-60488-2757545d4c45herokuapp.png",
            deployed: "https://guarded-river-60488-2757545d4c45.herokuapp.com/",
            repo: "https://github.com/kateleighb3/zero-proof",
            summary: "Zero-Proof is a vibrant community-driven app where non-alcoholic enthusiasts & sober individuals can unite to share their favorite mocktail recipes, review the latest non-alcoholic beers & spirits, & discover nearby non-alcoholic bars & lounges.",
            tech: "MERN"
        },
        {
            name: "The Comic Vault",
            image: "The_Comic_Vault.png",
            deployed: "https://sienkc.github.io/The_Comic_Vault/",
            repo: "https://github.com/SienkC/The_Comic_Vault",
            summary: "A website that aims to bring together the exciting worlds of comic books, movies, and TV series. By leveraging the power of the Comicvine API and the Google Books API, The Comic Vault provides users with a unique platform to explore and discover related content in an effortless manner.",
            tech: "HTML/ CSS/ JavaScript/ API"
        },
        {
            name: "Pixel Perfect Reviews",
            image: "pixelperfect.png",
            deployed: "https://aqueous-garden-21223-0843a25d5cd3.herokuapp.com/",
            repo: "https://github.com/yanalejandro/Pixel-Perfect-Reviews",
            summary: "Pixel Perfect reviews is a search engine for games using the Steam Database. This website also acts a social thread for comments where the user can leave reviews on video games. Before the user can leave a review, they will be prompted to make an account or log in if they have made one already.",
            tech: "Sequelize/ JavaScript/ CSS"
        },
        {
            name: "Tech Blog",
            image: "techblog.png",
            deployed: "https://murmuring-journey-02432-4c40dbbc06eb.herokuapp.com/",
            repo: "https://github.com/SienkC/Tech_Blog",
            summary: "An application to create a database for saving users and their posts and comments.The application was designed to go along with learning and display student ability to utilize knowledge on JavaScript, node.js, and sequelize.",
            tech: "HTML/ CSS/ JavaScript"
        },
        {
            name: "Note Taker",
            image: "notetaker.png",
            deployed: "https://guarded-reaches-33756-98317bd521b3.herokuapp.com/",
            repo: "https://github.com/SienkC/Note_Taker",
            summary: "An application to take and save notes. The user will go use the provided typing space to enter in a title and text for a note and click the save icon to save it. The note will then be added to the list of notes appearing on the left of the page. Notes can be clicked on to be viewed or deleted by clicking the trash can icon. The application was designed to go along with learning and display student ability to utilize knowledge on JavaScript, node.js, express.js, and deploying with Heroku.",
            tech: "HTML/ CSS/ JavaScript"
        }
    ];

    return (
    <div>
        <div className="container box has-background-info-light columns is-mobile is-multiline is-centered">
            {works.map((item) => (
                <Work item={item} />
            ))}
        </div>
    </div>
    );
}