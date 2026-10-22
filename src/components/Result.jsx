
import { searchEmoji } from "../helpers/searchEmoji";
import Item from "./Item";

//Map results
const Result = ({ valueEmoji, darkMode }) => {
    //searchEmoji result List
    const arrayEmojis = searchEmoji(valueEmoji);

    return (
        <section className="container results">
            {
                arrayEmojis && arrayEmojis.map(item => (
                    <Item
                        key={item.title}
                        title={item.title}
                        emoji={item.symbol}
                        darkMode={darkMode}
                    />
                ))
            }
            
        </section>
    );
}
 
export default Result;