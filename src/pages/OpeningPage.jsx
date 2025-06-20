import { useParams, useNavigate } from "react-router-dom";


const OpeningPage = () => {

    const { code } = useParams();
    const navigate = useNavigate();


    return (
        <>
            <h1>hai selezionato il pacchetto {code}</h1>
            <button className="btn btn-danger" onClick={() => navigate(-1)}>indietro</button>
        </>
    )
}

export default OpeningPage