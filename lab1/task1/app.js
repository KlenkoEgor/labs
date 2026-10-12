function inc(n) {
	return n + 1;
}

const a = 5;
const b = inc(a);
console.log({a ,b});

function incObj(num) {
	num.n++;
}
const obj = { n: 5 };
incObj(obj);
console.log(obj);

