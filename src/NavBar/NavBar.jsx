import CardWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h2>Ecommers</h2>
            <div>
                <button>Menues</button>
                <button>Pedidos</button>
                <button>Valoraciones</button>
            </div>
            <CardWidget />
        </nav>
    )
}

export default NavBar