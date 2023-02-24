let stocks = {
    Fruits: ["apple","banana","grapes","strawberry"],
    liquid: ["water","ice"],
    holder: ["cone","cup","stick"],
    topping: ["chocklate","peanuts"],
};


let is_shop_open = false;

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

.then(()=>{
    return order(0000, ()=>console.log("Production has started"));
})

.then(()=>{
    return order(2000, ()=>console.log("Fruits has been chopped"));
})

.then(()=>{
    return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`));
})

.then(()=>{
    return order(1000, ()=>console.log("start the machine"));
})

.then(()=>{
    return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[0]}`));
})

.then(()=>{
    return order(3000, ()=>console.log(`${stocks.topping[0]} was selected`));

})

.then(()=>{
    return order(1000,()=>console.log("ice cream was served :)"))
})               

.catch(()=>{
    console.log("Customer Left");
})


.finally(()=>{
    console.log("Day Ended !! our shop is closed"); // prints no matter ice cream is served or not
})