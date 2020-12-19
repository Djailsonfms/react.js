import { useState } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import '../pages/pedidos.css'

export default function PagePedidos() {
    const [form, setForm] = useState({
        nomeCliente: "",
        telefone: "",
        nomeProduto:"",
        valorUnitario: "",
        quantidade: "",
        valorTotal: "",
    });

    const controleMudanca = (evento) => {
        console.log(evento.target.value)
        setForm({
            ...form,
            [evento.target.id]: evento.target.value
        })
    }

    const controleEnvio = async (evento) => {
        evento.preventDefault();
        const valorTotal = parseFloat(form.valor) * parseFloat(form.quantidade);
        document.getElementById("valorTotal").value = `R$ ${valorTotal}`;

        setForm({
            ...form,
            valorTotal: valorTotal
        })

        const json = JSON.stringify(form);
        const opcoes = {
            crossDomain: true,
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        }
        const resposta = await fetch("http://localhost/FullStackeltero/backend/postPedidos.php", opcoes);
        const dados = await resposta.json()
        console.log(dados);
    }

    return (
        <Row>
            <div className="col-2 col-md-6 align-items-left mt-0">
                <Form onSubmit={controleEnvio} >
                    <h4>Fazer Pedidos</h4>
                    <Form.Group>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="nome" />
                    </Form.Group>
                
                    <Form.Group>
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="tefone" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Produto:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="produto" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Valor Unitário:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="valor" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="quantidade" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Preço Final:</Form.Label>
                        <Form.Control disabled type="text" id="preco_final" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Cadastrar
            </Button>
                </Form>
            </div>
        </Row>
    );
}