const sum = (...args) => {
	return args.reduce((acc, el) => {
         acc += el;
		 return acc;
	}, 0)
};

console.log(sum(1, 3, 5));
console.log(sum());
console.log(sum(0));
console.log(sum(-1, 2, -3, 5));