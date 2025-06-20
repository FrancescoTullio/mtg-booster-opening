import React from "react"

const Card = ({data}) => {

    const {code, name, type, releasedDate, block} = data

    
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{code}</h6>
                </div>
            </div>
        </>
    )
}

export default React.memo(Card)