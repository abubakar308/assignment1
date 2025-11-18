
const formatValue = (value: string| number | boolean) =>{
    if(typeof value === "string"){
        return value.toUpperCase();
    }
    else if(typeof value === "number"){
        return value*10;
    }
    else if(typeof value === "boolean"){
        return !value;
    }
}



const getLength = (value: string | number[]) =>{
    if(typeof value === "string"){
        return value.length;
    }
    else if(Array.isArray(value)){
        return value.length;
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
        return `'Name: ${this.name},  Age: ${this.age}'`;
    }

}
    const person1 = new Person('John Doe', 30);
    const person2 = new Person('Alice', 25);





    
    type item = {
        title: string,
        rating: number
    }
    
    const filterByRating = (item: item[]) =>{
    
    
       const filterItem =  item.filter(i=> i.rating>=4);
 return filterItem;
     
    }

  const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];



type User = {
    id: number,
    name: string,
    email: string,
    isActive: boolean
}

const filterActiveUsers = (user: User[]) =>{
const filterActiveuser = user.filter(u=>u.isActive === true)
return filterActiveuser
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];



interface Book {
title: string,
author: string,
publishedYear: number
isAvailable: boolean
}


const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

const printBookDetails = (book: Book) =>{
    return `Title: ${book.title}, Authyor: ${book.author}, Published: ${book.publishedYear}, Availabe: ${book.isAvailable? "Yes" : "No"}`;
}



const getUniqueValues = (array1: number[], array2: number[]) =>{
   const margeArray = array1.concat(array2);
   let newArray : number[] = []
    for(let i=0; i<margeArray.length; i++){
       margeArray.indexOf
        
    }

}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

// console.log(getUniqueValues(array1, array2));


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

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];


 