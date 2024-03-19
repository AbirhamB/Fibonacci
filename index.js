function fib(n){
    let list=[];
    if(n===1){
        list=[0];
    }
    else if(n===2){
        list=[0,1];
    }
    else{
        list=[0,1];
        for(let i=0;i<(n-2);i++){
            list.push(list[list.length-2] +list[list.length-1])
        }
        
    }
    return list
    
}
console.log(fib(7))
