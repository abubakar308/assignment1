

## ৫ টাইপস্ক্রিপ্টে ইউনিয়ন এবং ইনটারসেকসন ব্যাবহারের উদাহরণ 

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