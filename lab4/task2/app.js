const sum = (...args) => {
	let res = 0;
	for(const el of args){
		res += el;
	}
	return res
}

console.log(sum(1, 3, 5));
console.log(sum());
console.log(sum(0));
console.log(sum(-1, 2, -3, 5));