import { useParams, useNavigate } from "react-router-dom";
import UseSpecificSet from "../hook/UseSpecificSet";
import { useState } from "react";
import CardOpening from "../components/cardopening";


const OpeningPage = () => {

    const { code } = useParams();
    const navigate = useNavigate();
    const { specificOpening, handleOpen } = UseSpecificSet(code);
    const [reveled, setReveled] = useState(false);



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
                                    <CardOpening card={card} />
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