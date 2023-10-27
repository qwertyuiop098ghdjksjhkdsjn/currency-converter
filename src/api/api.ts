

const apiKey = "https://free.currconv.com/api/v7/convert?q=RUB_USD,RUB_EUR&compact=ultra&apiKey=9d20c42f2ea583f224a4"; 


type Age = number | string;


interface Person {
   name: string;
   age: Age;
   isAdmin?: boolean
}

const person1: Person = {
   name: "aswd",
   age: 12,
}

type PersonType = {
   name: string;
   age: Age;
}


const obj: Person = {
   name: "Pete",
   age: 40
}


 

function getRate () {
   return fetch(apiKey).then(response => response.json())
};

export default getRate
