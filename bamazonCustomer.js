// require mysql & inquirer packages 
var mysql = require('mysql')
var inquirer = require('inquirer')
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
   console.log("Okay this means we are connected to the db")
   purchase();
});


function purchase() {
    connection.query("SELECT * FROM products", function(err, results){
        if (err) throw err;
        inquirer.prompt([
            {
                name: "choice",
                type: "rawlist",
                choices: function() {
                    var choiceArray = [];
                    results.forEach(function(value){
                        choiceArray.push(value.product_name);
                    });
                    return choiceArray;
                },
                message: "What item would you like to purchase?"
            },{
                name: "purchase",
                type: "input",
                message: "How many would like to purchase?"
            }
        ]).then(function(answer){
            var remainder; 
            results.forEach(function(value) {
                
            console.log(answer);


            });

            // Chosenitem not contains the data I want to use from the database
            // if(chosenItem.highest_bid < parseInt(answer.bid)) {
            //     connection.query("UPDATE auctions SET ? WHERE ?", [
            //         {
            //             highest_bid: answer.bid
            //         },
            //         {
            //             id: chosenItem.id
            //         }
            //     ], function(error){
            //         console.log(error);
            //         console.log("You are now the highest bidder!!!");
            //         start();
            //     })

            // }else{
            //     console.log("Sorry you are not the highest bidder")
            //     start();
            // }

        })
        
    });
};

//display items with id, name and price 

// App should ask user the ID number of the item they want to buy.
// App should ask how many units of the products they want to purchase.
// Should check how many items are in stock if less then 0 message 
	// insufficient funds.




