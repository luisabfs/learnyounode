const args = process.argv; 
	
const sum = args.reduce( function(prevVal, elem, index) {
	return index >= 2 ? Number(prevVal) + Number(elem) : '';
}, +args[2]);

console.log(sum);
