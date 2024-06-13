class Set {
	constructor() {
		this.data = [];
		this.index = 0;
		this.size = 0;
	}
	has(element) {
		return this.data.indexOf(element) !== -1;
	}
	add(element) {
		if (this.has(element) == false) {
			this.data[this.index] = element;
			this.index++;
			this.size++;
		}
	}
	delete(element) {
		if (this.has(element)) {
			let theIndex = this.data.indexOf(element);
			let deleted = this.data.splice(theIndex, 1);
			this.size--;
			this.index--;
		}
	}
	keys() {
		return this.data;
	}
	values() {
		return this.data;
	}
}
let set = new Set();
set.add(10);
set.add(20);
set.add(30);
set.add(40);
set.add(50);
set.delete(10);
set.delete(20);
for (item of set.keys()) {
	console.log(item)
}
for (item of set.values()) {
	console.log(item)
}
console.log(set);