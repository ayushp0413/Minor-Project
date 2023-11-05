 <?php

if(isset($_POST['submit']))
{
    $table = $_POST['table'];
    $name = $_POST['name'];
    $mobile = $_POST['mobile'];

        $conn = mysqli_connect('localhost','root','','food');

        $sql = "INSERT INTO customers(tableno,name,mobile) values ('$table','$name','$mobile')";
        
        $data = mysqli_query($conn,$sql);
    
        ?>
            <head>
                <link rel="stylesheet" href="order_style.css">
            </head>
             <h1>THANKS! Your Order Is Placed.</h1>
           
             <div class="container">
                <div class="item1">
                    <button id="close"> <a href="index.html">Back to Menu</a></button>
                </div>
                <a href="index.html">
                <div class="item2">
                    <button  onclick="mycancel()" id="cancel-order">Cancel Order</button>
                </div>
                </a>

                <div class="item3">
                    <button id="view-order"><a href="view.php">View Order</a></button>
                </div>
             </div>
              
             <script>
                    function mycancel(){
                    alert("Your Order is Cancelled !!");
                }
                  
            </script>
      
        <?php
        

}
?>
