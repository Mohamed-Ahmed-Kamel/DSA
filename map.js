class myMap {
	constructor() {
		this.items = {};
		this.size = 0;
	}
	set(key, value) {
		if (!this.items.hasOwnProperty(key)) this.size++;
		this.items[key] = value;
	}
	delete(key) {
		if (this.items.hasOwnProperty(key)) {
			this.size--;
			return delete this.items[key];
		}
	}
	get(key) {
		return this.items[key];
	}
	size() {
		return this.size;
	}
	has(key) {
		return this.items.hasOwnProperty(key)
	}
}
let map = new myMap();
map.set("a", 10);
map.set("b", 20);
map.set("c", 30);

map.delete("b");

map.get("a");

console.log(map);
