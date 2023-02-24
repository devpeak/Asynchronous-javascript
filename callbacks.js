//callback: calling a function inside another function

let order = (call_production) => {
    console.log("Order placed, please call the production");
    call_production();
}

let production =()=>{
    console.log("order received, starting production");
}

order(production);