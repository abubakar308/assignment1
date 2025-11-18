
## ১ টাইপস্ক্রিপ্টে interfaces এবং types মধ্যে পার্থক্য

    interfaces ব্যাবহার করে একাধিক object, array, function shape এ ব্যাবহৃত হয়। একাধিক interface কে সহজে extend করা যায়। 
   সহজে একত্রিত করা যায়
    
    উদাহরণ
    interface IUser {
  name: string;
  age: number;
}

interface IUser {
  email?: string; // Merge হবে
}

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user: IUserWithRole = {
  name: "Abubakar",
  age: 23,
  role: "admin",
};


    types object union tuple function সবকিছু define করা যায়।
    টাইপ একত্রিত করা যায় না। 
    উদাহরণ
  type User = {
  name: string;
  age: number;
};

type Role = {
  role: "admin" | "user";
};

// Intersection (type merging)
type UserWithRole = User & Role;

const user1: UserWithRole = {
  name: "Siddique",
  age: 24,
  role: "admin",
};


## ২ টাইপস্ক্রিপ্টে any, unknown, and never এর মধ্যে পার্থক্য 
 any টাইপে যেকোন টাইপ বা ভ্যালু হতে পারে টাইপ যাচাই করার দরকার হয় না।
 টাইপ যাচাই করা ছাড়াই রিটার্ন বা ইক্সিকিউশন করা যায়। 

 উদাহরণ 
  const studentInfo = (stdInfo: any) : any => {
     return stdInfo
} 
console.log(studentInfo(101)); // number 
console.log(studentInfo("Abubakar")); // string

unknown টাইপে টাইপ জানা থাকে না। কিন্তু রিটার্ন বা ইক্সিকিউসনের সময় টাইপ যাচাই করার প্রয়োজন হয়
    উদাহরণ 
const studentInfo = (stdInfo: unkhown): unknown => {
    if(typeof stdId === "number"){
        return stdId;
    }
    else if(typeof stdId === "string"){
        return stdId.toString();
    }
    else{
        return "wrong info"
    }
} 

console.log(studentInfo(101)); // number 
console.log(studentInfo("202")); // string

never টাইপ হলো পুরোপুরি any টাইপের বিপরিত never টাইপ কখনো কিছু রিটার্ন করে না। ইরোর থ্রো করে বা অসিম লুপে কাজ করে 
উদাহরণ 
const throwError = (msg: string): never => {
  throw new Error(msg);
};

throwError("Error...");
 

## ৩ টাইপস্ক্রিপ্টে ইউনিয়ন এবং ইনটারসেকসন ব্যাবহারের উদাহরণ 

Union ইউনিয়ন টাইপ হলো অনেক গুলো টাইপের মধ্য থেকে ১টা গ্রহন করে যেটা প্রথমে মিলে যায়
যেমন একটা ফাংশন কে যদি আমরা কোনো ছাত্রের আইডি দেই নাম্বার অথবা স্ট্রিং সেটাই রিটার্ন করবে। ইউনিয়নের চিহ্ন ।

উদাহরণ 
const studentInfo = (stdId: number | string) => {
    if(typeof stdId === "number"){
        return stdId;
    }
    else if(typeof stdId === "string"){
        return stdId.toString();
    }
} 

console.log(studentInfo(101)); // number 
console.log(studentInfo("202")); // string

Intersection ইনটারসেকশন টাইপ হলো একাধিক টাইপের সমন্ময় করে ১টি গ্রহন করে। যদি সব টাইপ মিলে তবেই রিটার্ন বা ইক্সিকিউশন করবে। যেকোন একটি না মিলে গেলে রিটার্ন বা ইক্সিকিউশন করবে না। 

উদাহরণ 
 
type Person = {
    name: string,
    age: number
 }

 type Student = {
    studentId: number,
    department: string
 }

 type studentProfile = Person & Student;

 const studentInfo = (student: studentProfile) =>{
    console.log(student);
 }

 const student : studentProfile = {
    name: "Abubakar",
    age: 23,
    studentId: 1075,
    department: "CSE"
 }
 studentInfo(student)