import { useState, useEffect, useMemo } from "react"
import axios from "axios"

const UseBooster = () => {

    const [allSet, setAllSet] = useState([])

    useEffect(() => {
        axios.get(`https://api.magicthegathering.io/v1/sets`)
            .then((res) => {
                setAllSet(res.data.sets)
            })
    }, [])

    const fiteredSet = useMemo(() => {
        return (allSet.filter(curElem => "booster" in curElem))
    }, [allSet])


    return fiteredSet

}

export default UseBooster