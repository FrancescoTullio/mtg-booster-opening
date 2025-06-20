import { Link, } from "react-router-dom";
function Homepage() {

    return (
        <>
            <Link to={"/booster"} className="btn btn-primary"> all boosater </Link>
            <Link to={"/booster/2ED"} className="btn btn-primary">try Unlimited Edition</Link>
        </>
    )
}

export default Homepage
