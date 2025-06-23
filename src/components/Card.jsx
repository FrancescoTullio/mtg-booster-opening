import React from "react"
import { Link } from "react-router-dom"

const Card = ({ data }) => {

    const { code, name} = data


    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{code}</h6>
                    <Link className="btn btn-primary" to={`/booster/${code}`}> apri</Link>
                </div>
            </div>
        </>
    )
}

export default React.memo(Card)