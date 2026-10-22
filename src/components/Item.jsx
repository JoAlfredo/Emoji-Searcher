
import { useState } from "react";

const Item = ({ title, emoji, darkMode }) => {
    const [copy, setCopy] = useState(false);
    
    const handleCopy = () => {
        //Copy Emoji
        setCopy(true);
        navigator.clipboard.writeText(emoji);
        //Copied message will be deleted after 3 seconds.
        setTimeout(() => setCopy(false), 3000);
    }

    return (
        <article className={`card-emoji ${darkMode?"dark-mode":""}`}>
            <p 
                className="emoji-icon"
                onClick={handleCopy}    
            >{emoji}
            </p>
            <h4>{title}</h4>
            { copy && <p className="copied">Copied!</p> }
        </article>
    );
}
 
export default Item;