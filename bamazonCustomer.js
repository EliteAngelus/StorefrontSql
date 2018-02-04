// require mysql,inquirer, and table packages 
var mysql = require('mysql')
var inquirer = require('inquirer')
const cTable = require('console.table');
// create a connection to the database using my password and dd name 
var connection = mysql.createConnection({
    host: 'localhost',
    port:3306,
    user: 'root',
    password:'',
    database: 'bamazonDB'
});

connection.connect(function(err) {
   if(err) throw err; 
   // console.log("Okay this means we are connected to the db")
   purchase();
});


function purchase() {
    connection.query("SELECT * FROM products", function(err, results){
        if (err) throw err;
console.log("==================")     
 
 console.table([
  {
    item_id: '1',
    product_name: "Hat",
    department_name: "Clothing",
    Price: "2.00",
    Stock_quantity: "10"
  },
  {
    item_id: '2',
    product_name: "Jeans",
    department_name: "Clothing",
    Price: "12.00",
    Stock_quantity: "20"
  },
  {
    item_id: '3',
    product_name: "Shoes",
    department_name: "Clothing",
    Price: "2.00",
    Stock_quantity: "20"
  },
   {
    item_id: '4',
    product_name: "tShirt",
    department_name: "Clothing",
    Price: "7.00",
    Stock_quantity: "20"
  },
  {
    item_id: '5',
    product_name: "Destiny 2",
    department_name: "Video Games",
    Price: "19.00",
    Stock_quantity: "20"
  },
  {
    item_id: '6',
    product_name: "Monster Hunter World",
    department_name: "Video Games",
    Price: "49.00",
    Stock_quantity: "20"
  },
  {
    item_id: '7',
    product_name: "Antifreeze",
    department_name: "Auto",
    Price: "7.00",
    Stock_quantity: "20"
  },
  {
    item_id: '8',
    product_name: "Pens",
    department_name: "Office",
    Price: "7.00",
    Stock_quantity: "20"
  },
  {
    item_id: '9',
    product_name: "Street Fighter 5",
    department_name: "Video Games",
    Price: "19.00",
    Stock_quantity: "20"
  },
  {
    item_id: '10',
    product_name: "Monopoly",
    department_name: "Board Games",
    Price: "10.00",
    Stock_quantity: "20"
  }

]);
        inquirer.prompt([
            {
                name: "choice",
                type: "rawlist",
                choices: function() {
                    var choiceArray = [];
                    results.forEach(function(value){
                        choiceArray.push(value.product_name);
                    });
                    // for (var i = 0; i < results.length; i++) {
                    //     choiceArray.push(results[i]);
                    // }
                    return choiceArray;

                },
                message: "What item would you like to purchase?"
            },{
                name: "purchase",
                type: "input",
                message: "How many would like to purchase?"
            }
        ]).then(function(answer){
            nameArray = [];
            for (var i = 0; i < results.length; i++) {
                        // results[i]
            
            if(answer.choice === results[i].product_name) {

                var quantity= results[i].stock_quantity

                console.log(quantity);

                    console.log(results[i].price);

                     console.log("===================");

            console.log("Your purchase: " + answer.choice +"\nTotal Amount:" +"$" + answer.purchase * results[i].price);
            // console.log('Your order has been placed! Your total is $' + results[answer.choice].price );

            // console.log(results[0]
            console.log('Thank you for shopping with us!');
            console.log("\n=======================================\n");

                }
            }

                // return priceArray;
                
                // use product name to iterate through price. 


           



            // console.log(answer.choice);
            // console.log(answer.purchase);
                

           

        })
        

    });

};

//display items with id, name and price 

// App should ask user the ID number of the item they want to buy.
// App should ask how many units of the products they want to purchase.
// Should check how many items are in stock if less then 0 message 
	// insufficient funds.




