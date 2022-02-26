let foo = 'foo1'

( function bob() {
	let foo = 'foo2'
	console.log(foo)
} )()

console.log(foo)
