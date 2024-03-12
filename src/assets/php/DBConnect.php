
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
// 
class DBConnect{
    private $server="localhost";
    private $dbname="vec_feedback";
    private $username="root";
    private $pwd="";

    public function connect(){
        try{
            $con = new mysqli($this->server,$this->username,$this->pwd,$this->dbname);
            return $con;
        }
        catch(Exception $exception){
            echo "Database Error".$exception->getMessage();

        }
    }
}



?>