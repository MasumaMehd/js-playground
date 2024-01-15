//let employees = ['irrevion', 'masuma', 'tofu', 'londiks'];
let employees = [];
employees[1] = 'irrevion';
employees[3] = 'masuma';
employees[4] = undefined;
employees[5] = null;
employees[9] = 'tofu';
employees[25] = 'londiks';
console.log(employees);
employees = employees.filter((v) => v!=undefined);
//delete(employees[1]);
//employees.splice(1, 1);
//employees[1] = undefined;

employees.forEach((v, i) => {
    console.log(`${i} => ${v}`);
});
console.log('---');
for (i=0; i<employees.length; i++) {
    console.log(`${i} => ${employees[i]}`);
}
console.log('---');
for (i in employees) {
    console.log(`${i} => ${employees[i]}`);
}
console.log('---');
for (const [i, v] of employees.entries()) {
    console.log(`${i} => ${v}`);
}

let a = 'length';
console.log(employees[a]);