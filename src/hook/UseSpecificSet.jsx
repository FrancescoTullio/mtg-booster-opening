import axios from "axios";
import { useState } from "react";

const UseSpecificSet = (set) => {

    const [specificOpening, setSpecificOpening] = useState(null);
    const [load, setLoad] = useState(false)

    const handleOpen = () => {
        setLoad(true)
        axios.get(`https://api.magicthegathering.io/v1/sets/${set}/booster`)
            .then((res) => {
                setSpecificOpening(res.data.cards);
            })
            .catch((error) => {
                console.error("Error fetching specific set:", error);
            })
            .finally(() => setLoad(false)
            );

    }



    return {
        specificOpening,
        handleOpen,
        load
    };
}
export default UseSpecificSet;