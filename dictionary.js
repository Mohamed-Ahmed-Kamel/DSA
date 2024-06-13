class Dictionary {
	constructor() {
		this.data = [];
	}
	add(key, value) {
		this.data[key] = value;
		console.log(Object.keys(this.datastore))
	}
	find(key) {
		return this.data[key];
	}
	remove(key) {
		delete this.data[key];
	}
	showAll() {
		return this.data
	}
}
let phones = new Dictionary();
phones.add("Oppo", "10000");
phones.add("IPhone", "20000");
phones.add("Vivo", "8000");

console.log(phones.find("Vivo"));
phones.remove("Vivo");
console.log(phones.showAll())
// console.log(phones);
