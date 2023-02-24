let stocks = {
    Fruits: ["apple","banana","grapes","strawberry"],
    liquid: ["water","ice"],
    holder: ["cone","cup","stick"],
    topping: ["chocklate","peanuts"],
};


let is_shop_open = true;

let order = (time,work) => {

    return new Promise ( (resolve, reject)=>{

        if (is_shop_open){

            setTimeout(()=>{

                resolve(work())

            },time)
            
        }

        else{
            reject(console.log("Our shop is closed"));
        }

    });
};

order(2000, ()=>console.log(`${stocks.Fruits[3]} was selected`))