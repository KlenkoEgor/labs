const sum = (...args) => {
	let res = 0;
	for(i = 0; i < args.length; i++){
		res += args[i];
	};
	return res;
}

console.log(sum(1, 3, 5));
console.log(sum());
console.log(sum(0));
console.log(sum(-1, 2, -3, 5));