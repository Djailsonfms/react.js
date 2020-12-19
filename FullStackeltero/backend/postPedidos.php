<?php

require "Comment.php";

header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");

$comment = new Pedido;
$comment->nomeCliente = $_POST['nomeCliente'];
$comment->endereco = $_POST['endereco'];
$comment->telefone = $_POST['telefone'];
$comment->nomeProduto = $_POST['nomeProduto'];
$comment->valorUnitario = $_POST['valorUnitario'];
$comment->quantidade = $_POST['quantidade'];
$comment->valorTotal = $_POST['valorTotal'];

$validate = $comment->insertNewPedido();

if ($validate == true){
    echo json_encode(true);
} else {
    echo json_encode(false);
}
