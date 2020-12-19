<?php

class Connection
{
    public static function getDB()
    {
        $conn = new PDO(
            "mysql:dbname=fseletro;host=localhost;charset=utf8",
            "root",
            ""
        );

        if ($conn) {
            return $conn;
        } else {
            return "<h3>Erro ao se conectar com o banco de dados!";
        }
    }
}