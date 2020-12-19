import { useState, useEffect } from 'react';

import Produto from './Produto/Produto';
import { Container, Row } from 'react-bootstrap';

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const resposta = await fetch("http://localhost/FullStackeltero/backend/getProdu.php")
           
            const dados = await resposta.json()
            setProdutos(dados);
        }
        fetchData();
    }, []);

    return (
        <Container>
            <Row>
                {produtos && produtos.map(item => <Produto key={item.id} imagem={item.imagem} nome={item.descricao} preco={item.preco} categoria={item.categoria}
                preco_final={item.preco_final} />)}
            </Row>
        </Container>
    )
}