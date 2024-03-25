<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
include "DB.php";
// Getting request method
$METHOD=$_SERVER["REQUEST_METHOD"];

// Creating Database Object
$DB=new DB();
$CONNECT=$DB->connect();


function Response($status){
    print_r(json_encode([
        "status"=>$status
    ]));
}

$HASH='$2y$10$VZmoXlReR1BgutAahHvz9ufNkEmQxU7P1p7YZiemClsln1vu6RjAO';
$attri=[
    "course"=>["BE","ME","B.TECH"],
    "dept"=>["CSE","EEE","ECE","IT"],
    "sec"=>["A","B","C","D"],
    "sem"=>[1,2,3,4,5,6],
];

switch($METHOD){
    case "POST":
        $path=explode("/",$_SERVER["REQUEST_URI"]);
        // print_r($path);
        $POST=json_decode(file_get_contents("php://input"));

        if(isset($path[2]) && $path[2]=="CreateAdmin"){
             $ADMIN_INSERT="INSERT INTO admin values(null,?,?)";

             $USERNAME=$POST->{"Username"};
             $PASSWORD=crypt($POST->{"Password"},$HASH);
            //  $OLD_PASSWORD=$PASSWORD;

             $STMT=$CONNECT->prepare($ADMIN_INSERT);
             $STMT->bind_param("ss",$USERNAME,$PASSWORD);
            if( $STMT->execute()){
                echo "Admin Created";
            }
            else echo "Failed to create ";
            echo $PASSWORD;

            // if(hash_equals($OLD_PASSWORD,'$2y$10$VZmoXlReR1BgutAahHvz9uhwgylQEDzHLASV5CDrp24Wl/U7CsGOe'))
            //     echo "Access Granted";
            // else 
            //     echo "Access Denied";
             //  print_r($STMT->execute());
             
            //  $pre=mysqli_prepare($ADMIN_INSERT);    
        }
        else if(isset($path[2]) && $path[2]=="CreateStaff"){
            $ADMIN_INSERT="INSERT INTO staff values(null,?,?)";

            $USERNAME=$POST->{"Username"};
            $PASSWORD=crypt($POST->{"Password"},$HASH);
           //  $OLD_PASSWORD=$PASSWORD;

            $STMT=$CONNECT->prepare($ADMIN_INSERT);
            $STMT->bind_param("ss",$USERNAME,$PASSWORD);
           if( $STMT->execute()){
               echo "Staff account Created";
           }
           else echo "Failed to create ";
           echo $PASSWORD;
   
       }
        else if(isset($path[2]) && $path[2]=="Adminlogin"){

            // striping lashes to preventing from sql injection
            $USERNAME=stripcslashes($POST->{"Username"});
            $USERNAME=$CONNECT->real_escape_string($USERNAME);

            $PASSWORD=stripslashes($POST->{"Password"});
            $PASSWORD=$CONNECT->real_escape_string(crypt($PASSWORD,$HASH));
            // login details
            $ADMIN_LOGIN="SELECT * FROM admin where username= '$USERNAME' and password= '$PASSWORD' ";
            $LOGIN=$CONNECT->query($ADMIN_LOGIN);
            $LOGIN_VALID=$LOGIN->num_rows;
            
            Response(($LOGIN_VALID==1)?true:false);

       }

       else if(isset($path[2]) && $path[2]=="Stafflogin"){

            // striping lashes to preventing from sql injection
            $USERNAME=stripcslashes($POST->{"Username"});
            $USERNAME=$CONNECT->real_escape_string($USERNAME);

            $PASSWORD=stripslashes($POST->{"Password"});
            $PASSWORD=$CONNECT->real_escape_string(crypt($PASSWORD,$HASH));
            // login details
            $STAFF_LOGIN="SELECT * FROM staff where username= '$USERNAME' and password= '$PASSWORD' ";
            $LOGIN=$CONNECT->query($STAFF_LOGIN);
            $LOGIN_VALID=$LOGIN->num_rows;
            Response(($LOGIN_VALID==1)?true:false);

   }
        break;
    case "GET":
        // print_r(json_decode(file_get_contents("./details.json"))) ;
        $path=explode("/",$_SERVER["REQUEST_URI"]);

        $response=[];
        if(isset($path[2]) && $path[2]=="getData"){
                $path_length=sizeof($path);
                for($i=3;$i<$path_length;$i++){
                    $response[$path[$i]]=$attri[$path[$i]];
                }

            
            }
        print_r(json_encode($response));
        break;
}


// Connection connection 
if($CONNECT!=FALSE){
   $CONNECT->close();
}
?>