<?php

require "Connection.php";

class Pedido
{
    public $id;
    public $nomeCliente;
    public $endereco;
    public $telefone;
    public $nomeProduto;
    public $valorUnitario;
    public $quantidade;
    public $valorTotal;


    public static function getAll()
    {
        $connection = Connection::getDB();

        $stmt = $connection->query("SELECT * FROM pedidos ORDER BY id desc limit 10");

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function insertNewPedido()
    {
        $connection = Connection::getDB();

        $stmt = $connection->query("INSERT INTO comentarios(nomeCliente, endereco, telefone, nomeProduto, valorUnitario, quantidade, valorTotal) VALUES('$this->nomeCliente', '$this->endereco', '$this->telefone', '$this->nomeProduto', '$this->valorUnitario', '$this->quantidade', '$this->valorTotal')");

        if ($stmt->rowCount() > 0){
            return  true;
            } else {
                return false;
        }
    }
}