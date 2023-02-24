
let stocks = {
    Fruits: ["apple","banana","grapes","strawberry"],
    liquid: ["water","ice"],
    holder: ["cone","cup","stick"],
    topping: ["chocklate","peanuts"],
};

let order = (Fruits_name, call_production)=>{
    setTimeout(() => {
        
        console.log(`${stocks.Fruits[Fruits_name]} was selected`);

        call_production();
        
    }, 2000);

    
};

let production = ()=>{
   setTimeout(() => {
        console.log("Production has started");
   }, 0000);
};

order(0,production);