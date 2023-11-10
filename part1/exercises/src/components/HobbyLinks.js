export default function HobbyLinks() {
    const hobbyLinks = ["https://www.uefa.com/uefachampionsleague/",
        "https://www.youtube.com/",
    ];
    return (
        <div style={{ border: "1px solid", background: "lightgrey" }}>
            <ul> Hobbies 
                <li><a href={hobbyLinks[0]}>Soccer</a></li>
                <li><a href={hobbyLinks[1]}>Watching Youtube</a></li>
            </ul>
            
        </div>
        
    )

}