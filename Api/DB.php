<?php

class DB{
    // Connection Details
    private $SERVER="localhost";
    private $USERNAME="root";
    private $PASSWORD="";
    private $DATABASE="feedback";
    private $CONNECT=FALSE;

    public function connect(){
        try{
            // Connecting to Database
            $this->CONNECT=new mysqli($this->SERVER,$this->USERNAME,$this->PASSWORD,$this->DATABASE);
            // Handling the internal server errors
                if($this->CONNECT->connect_errno){
                    echo "Connection refused: ".$this->CONNECT->connect_error;
                    exit();
                }
            return $this->CONNECT;
        }
        
        catch(Exception $e){
            //Handling external code error 
            echo "Error Connection to server : ".$e->getMessage();
            exit();
        }
    }


}




?>