const fs=require('fs');
const readFile=(fileName)=>{
    try{
        return JSON.parse( fs.readFileSync("productList.json"));
     }
     catch(e){
  return[]
     }
     
}
const writeOnFile=(list)=>{
    return fs.writeFileSync("productList.json",JSON.stringify(list));
}
const add=(item,price)=>{

    let productList = readFile("productList.json") ;
       let index=productList.findIndex((x)=>x.item===item);
   if(index===-1){
       productList.push({item,price});
   }
   else{
       productList[index].price+=price;
   }
   writeOnFile(productList);
   console.log(productList)
}

const remove=(item)=>{
    let productList = readFile("productList.json") ;
    const filteredList=productList.filter((x)=>x.item!=item);
     writeOnFile(filteredList);
     console.log(filteredList)
}

const print =()=>{
    let productList = readFile("productList.json") ;
         console.log(productList)
}
const getPrice=(item)=>{
    let productList = readFile("productList.json") ;
    
     let index=productList.findIndex((x)=>x.item===item);
   if(index!=-1){
       console.log(`price of ${item} is ${productList[index].price}`)
   }
}
module.exports={
    add,
    remove,
    print,
    getPrice
};