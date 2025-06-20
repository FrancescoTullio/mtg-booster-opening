import axios from "axios";
import { useState } from "react";

const UseSpecificSet = (set) => {
    console.log('sono all inizio')

    const [specificOpening, setSpecificOpening] = useState(null);

    const handleOpen = () => {
        console.log("sono qui");
        axios.get(`https://api.magicthegathering.io/v1/sets/${set}/booster`)
            .then((res) => {
                setSpecificOpening(res.data.cards);
            })
            .catch((error) => {
                console.error("Error fetching specific set:", error);
            });

    }



    return {
        specificOpening,
        handleOpen
    };
}
export default UseSpecificSet;