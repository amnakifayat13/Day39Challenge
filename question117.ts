/* Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.*/

function switchStatementFunc(food: any) {
    switch (food) {
        case "Pizza":{
            console.log("Best Option");
            break;
            
        }
        case "Cake": {
            console.log("Better Option");
            break;
            
        }
        case "Ice Cream": {
            console.log("Good Option");
            break;
            
        }
        default:
            console.log("Invalid Option!");
            break;
    }
}
switchStatementFunc("Ice Cream");
switchStatementFunc("Chocolate");