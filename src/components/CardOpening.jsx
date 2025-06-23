
import { useState, memo } from "react";


const CardOpening = ({ card }) => {




    const [reveled, setReveled] = useState(false);



    return (
        <>

            {reveled ?
                <>
                    <img src={card.imageUrl} className="card-img-top" alt={card.name} /> <div className="card-body">
                        <h5 className="card-title">{card.name}</h5>
                        <p className="card-text">Rarity: {card.rarity}</p>
                    </div>
                </>
                :
                <>
                    <img src="/img/back.jpg" className="card-img-top" alt={card.name} onClick={() => setReveled(true)} />  <div className="card-body">
                        <h5 className="card-title">clicca il retro per scoprirlo </h5>
                        <p className="card-text">Rarity: ????</p>
                    </div>
                </>}


        </>
    )
}

export default memo(CardOpening)