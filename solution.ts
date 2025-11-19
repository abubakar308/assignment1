
const formatValue = (value: string| number | boolean) : string | number | boolean =>{
    if(typeof value === "string"){
        return value.toUpperCase();
    }
    else if(typeof value === "number"){
        return value*10;
    }
    else if(typeof value === "boolean"){
        return !value;
    }
    else {
        return "wrong type";
        ;
    }
}



const getLength = (value: string | number[]): string | number =>{
    if(typeof value === "string"){
        return value.length;
    }
     else if(Array.isArray(value)){
        return value.length;
    }
    else{
        return "wrong value type"
    }
}



class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getDetails (){
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }

}


    
    type item = {
        title: string,
        rating: number
    }
    const filterByRating = (item: item[]): item[] =>{
       const filterItem: item[] =  item.filter(i=> i.rating>=4);
        return filterItem; 
    }



type User = {
    id: number,
    name: string,
    email: string,
    isActive: boolean
}
const filterActiveUsers = (users: User[]) =>{
const filterActiveuser: User[] = users.filter(user=>user.isActive === true)
    return filterActiveuser;
}



interface Book {
title: string,
author: string,
publishedYear: number
isAvailable: boolean
}
const printBookDetails = (book: Book) =>{
    return `Title: ${book.title}, Authyor: ${book.author}, Published: ${book.publishedYear}, Availabe: ${book.isAvailable? "Yes" : "No"}`;
}


const getUniqueValues = (array1: (string | number)[], array2: (string | number)[]): (string| number)[] =>{
   const mergedArray = [...array1, ...array2];

   const result: (string | number)[] = []; 
    const exists = (arr: (string | number)[], value: string | number): boolean => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) return true;
    }
    return false;
  };

for (let i = 0; i < mergedArray.length; i++) {
    if (!exists(result, mergedArray[i])) {
      result[result.length] = mergedArray[i]; 
    }
  }
return result;
}



type Product = {
    name: string,
    price: number,
    quantity: number,
    discount?: number
}
const calculateTotalPrice = (product: Product[]) =>{
    const totalPrice = product.reduce((acc, item) => {
        if(item?.discount){
            item.price = item.price - item.price*item.discount/100;
        }
        return acc + item.price*item.quantity;
    }, 0)
  return totalPrice;

}


 