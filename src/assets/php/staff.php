<?php
error_reporting(E_ALL);
ini_set("display_errors",1);
// This allows to communicate as API
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");



include "DBConnect.php";

// connecting to server
$DB=new DBConnect;
$con=$DB->connect();

// Detecting the method of the request whether get request or
// post request
$method = $_SERVER["REQUEST_METHOD"];
switch($method){
    case "POST":
        //reading post request datas
        $users=json_decode(file_get_contents("php://input"));
        $sql="INSERT INTO STAFF VALUES(null,?,?)";

        // binding data to sql query
        $stmt=$con->prepare($sql);
        $stmt->bind_param("ss",$users->Username,$users->Password);

        if($stmt->execute()){
            $response=['status'=>1,'message'=>'Inserted successfully'];

        }
        else{
            $response=['status'=>0,'message'=>'Insertion Failed'];
            
        }

        echo json_encode($response);

        break;
    // case "GET"
}




?>