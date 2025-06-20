import UseBooster from "./hook/UseBooster"
import Card from "../components/Card"

const AllSetOpening = () => {

    const filterSet = UseBooster()

    return (
        <>
        <div className="container">
            <h1>Scegli un pacchetto da aprire:</h1>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                {
                    filterSet && filterSet.map(curElem => <Card data={data}/>) 
                }
            </div>
        </div>
        </>
    )
}

export default AllSetOpening