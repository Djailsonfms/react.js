<?php

require "Connection.php";

class Comment
{
    public $id;
    public $nome;
    public $email;
    public $msg;

    public static function getAll()
    {
        $connection = Connection::getDB();

        $stmt = $connection->query("SELECT * FROM comentarios ORDER BY id desc limit 10");

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function insertNewComment()
    {
        $connection = Connection::getDB();

        $stmt = $connection->query("INSERT INTO comentarios(nome, email, msg) VALUES('$this->nome', '$this->email', '$this->msg')");

        if ($stmt->rowCount() > 0){
            return  true;
            } else {
                return false;
        }
    }
}