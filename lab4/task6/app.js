const max = (twoDimArr) => {
	let maxEl = twoDimArr[0][0]
     for(const elArr of twoDimArr) {
		for(const el of elArr) {
            if(el > maxEl) {
				maxEl = el;
			}
		}
	 }
	 return maxEl;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);

