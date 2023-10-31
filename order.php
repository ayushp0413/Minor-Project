<?php

if(isset($_POST['submit']))
{
    $table = $_POST['table'];
    $name = $_POST['name'];
    $mobile = $_POST['mobile'];
   

    $conn = mysqli_connect('localhost','root','','food');

   // if(table no already taken not allot )
    //{

    //}
    //else{

        $sql = "INSERT INTO customers(tableno,name,mobile) values ('$table','$name','$mobile')";
        
        mysqli_query($conn,$sql);
        
        echo "Thankyou! Your Order is Placed."; 
    //}
    





}
?>