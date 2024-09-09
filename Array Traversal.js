// for of 

const friends = ['Elon', 'Bill', 'hasan', 'mark'];

for (const friend of friends){
  console.log(friend);
}

for (let i = 0; i <= friends.length; i++){
    console.log(i)
  console.log(friends[i])
}

let numbers = [5, 7, 8, 44, 43, 33, 555, 55];

// for loop 
for (let i = 3; i <= numbers.length; i++){
    console.log(numbers[i])
}

let i = 0;

// while loop 
while(i < numbers.length){
    console.log(numbers[i]);
    i++
}