import './style.css';

export default function Footer() {
    return(
        <footer>
            <p className="pagamento"><b>Formas de Pagamento</b></p>
            <img className="mx-1"src={require(`../imagem/pagamento.png`).default}alt="payment"height="70px"/>
           <p> © 2020 <b>Recode Pro</b></p> 
        </footer>
    )
}