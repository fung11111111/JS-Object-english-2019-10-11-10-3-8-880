// q1 
var user = {};
user.name = 'John';
user.surename = 'Mike';
user.name = 'Peter';
delete user.name;
console.log(user);

//q2 
var fruit = {
apple: 20,
pear: 20,
peach: 10
};
// write your code here...
var sum = fruit.apple + fruit.pear + fruit.peach;
console.log(sum);