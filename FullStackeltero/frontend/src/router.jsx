import {Switch, Route} from 'react-router-dom';
import Home from './pages/index';
import Produtos from './pages/produto';
import Lojas from './pages/lojas';
import Contato from './pages/contato';
import Pedidos from './pages/pedidos';

function Router() {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/index" component={Home}></Route>
            <Route exact path="/produto" component={Produtos}></Route>
            <Route exact path="/lojas" component={Lojas}></Route>
            <Route exact path="/contato" component={Contato}></Route>
            <Route exact path="/pedidos" component={Pedidos}></Route>
        </Switch>
    )
}

export default Router;
   