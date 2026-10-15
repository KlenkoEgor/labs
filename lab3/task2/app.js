const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';


const generateKey = (length, characters) => {
	let key = '';
	for(let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		key += characters[randomIndex];
		}
		return key;
	}
      
console.log(generateKey(16, characters));
console.log(generateKey(25, characters));
