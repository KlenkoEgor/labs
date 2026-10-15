const random = ((min, max) => {
	if(max === undefined) {
		max = min;
		min = 0;  
	};
    const res = Math.floor(Math.random() * (max - min + 1)) + min;
	return res;
});

console.log(random(10, 15));
console.log(random(9));