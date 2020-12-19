import{ Navbar, Nav, section} from 'react-bootstrap';
import {Link , withRouter} from 'react-router-dom';
import './style.css';



 function baseMenu(props) {
     const { location } = props
    return (
        <Navbar className="navbar-dark" bg="success" expand="lg" fixed="top">
            <Navbar.Brand>
                FullStack Eletro
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="item-menu"/>
            <Navbar.Collapse id="item-menu">
                <Nav activeKey={location.pathname} className="ml-auto mr-3">
                    <Nav.Link a={Link} href="/index" to="/index">Página Inicial</Nav.Link>

                    <Nav.Link a={Link} href="/produto" to="/produto">Produtos</Nav.Link>

                    <Nav.Link a={Link} href="/lojas" to="/lojas">Nossas Lojas</Nav.Link>

                    <Nav.Link a={Link} href="/contato" to="/contato">Fale Conosco</Nav.Link>

                    <Nav.Link a={Link} href="/pedidos" to="/pedidos">Pedidos</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

const Menu = withRouter(baseMenu);

export default Menu;