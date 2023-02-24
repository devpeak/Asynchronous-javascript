
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

        setTimeout(() => {
            console.log("The fruits has been chopped");

            setTimeout(()=>{

                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is added`);

                setTimeout(()=>{

                    console.log("The machine has been started");
                },1000);

                    setTimeout(()=>{
                        
                        console.log(`ice cream placed in ${stocks.holder[1]} `)

                        setTimeout(()=>{

                            console.log(`${stocks.topping[1]} is added on top`);

                            setTimeout(() => {
                                
                                console.log("Ice cream is served :)");

                            }, 2000);

                        },3000)

                    },2000);

            },1000);

       }, 2000);
    ;
   }, 0000);

}

order(0,production);