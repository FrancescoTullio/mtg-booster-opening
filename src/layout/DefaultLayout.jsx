import { Link, Outlet } from "react-router-dom";
function DefaultLayout() {

    return (
        <>
            <header>
                <Link to="/" ><h1>Retro opening mtg booster</h1></Link>
            </header>
            <main>
                <Outlet />
            </main>

            <footer>
            </footer>
        </>
    )
}

export default DefaultLayout
