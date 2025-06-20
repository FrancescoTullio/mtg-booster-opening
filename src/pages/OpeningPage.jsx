import { useParams, useNavigate } from "react-router-dom";
import UseSpecificSet from "../hook/UseSpecificSet";


const OpeningPage = () => {

    const { code } = useParams();
    const navigate = useNavigate();
    const { specificOpening, handleOpen } = UseSpecificSet(code);



    return (
        <>
            <h1>hai selezionato il pacchetto {code}</h1>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <div className="rettangolo "></div>
                </div>
                <button className="btn btn-success" onClick={handleOpen}> apri</button>
            </div>
            <div>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <h2>Pacchetto aperto</h2>
                        <div className="d-flex flex-wrap justify-content-center">
                            {specificOpening && specificOpening.map((card, index) => (
                                <div key={index} className="card m-2" style={{ width: "18rem" }}>
                                    <img src={card.imageUrl} className="card-img-top" alt={card.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{card.name}</h5>
                                        <p className="card-text">Rarity: {card.rarity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <button className="btn btn-danger" onClick={() => navigate(-1)}>indietro</button>

        </>
    )
}

export default OpeningPage