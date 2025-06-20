import React from "react"

const Card = (data) => {

    const {code, name, type, releasedDate, block} = data
    return (
        <>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{code}</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        </>
    )
}

export default React.memo(Card)