
//Emoji List json
import emojiList from "./emojiList.json"

export const searchEmoji = (value) => {
    const lowerValue = value.toLowerCase();
    const response = [];
    emojiList.map(item => {
        if (item.keywords.includes(lowerValue)) {
            response.push(item);
        }
    })

    //Limit 24 items
    return value === "" ? response : response.slice(0, 24);
}