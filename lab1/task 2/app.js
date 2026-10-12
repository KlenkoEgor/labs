const arr = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  3.14, 'JS', 0, 'KPI', true, 42, '', false,
  100, 'array', -7, true,
];

const count = {
	string: 0,
	number: 0,
	boolean: 0
};


for (const element of arr) {
	const type = typeof element;
	count[type]++;
};

console.log(count);



const countDynamic = {};
for(const element of arr) {
	const type = typeof element;
	if(countDynamic[type] === undefined){
		countDynamic[type] = 0;
	}
	countDynamic[type]++;
}

console.log(countDynamic);
		
