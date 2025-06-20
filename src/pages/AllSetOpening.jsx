import UseBooster from "../hook/UseBooster"
import Card from "../components/Card"
import Looder from "../components/Looder"
import { useNavigate } from "react-router-dom"

const AllSetOpening = () => {

    const filterSet = UseBooster()
    const navigate = useNavigate()

    return (
        <>
            <div className="container">
                <h1>Scegli un pacchetto da aprire:</h1>
                {!filterSet ? <Looder /> : <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    {
                        filterSet && filterSet.map((curElem, index) => <Card data={curElem} key={index} />)
                    }
                </div>
                }

                <button className="btn btn-danger" onClick={() => navigate(-1)}>indietro</button>
            </div>
        </>
    )
}

export default AllSetOpening