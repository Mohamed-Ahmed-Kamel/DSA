function List() {
	this.data = [];
	this.size = 0;
	this.pos = 0;

	this.add = function (element) {
		this.data[this.size++] = element;
	};
	this.addAfter = function insert(element, after) {
		let index = this.find(after);
		if (index > -1) {
			this.data.splice(index + 1, 0, element);
			this.size++;
		}
	};
	this.find = function (element) {
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i] == element) {
				return i;
			}
		}
		return -1;
	};
	this.contains = function (element) {
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i] == element) {
				return true;
			}
		}
		return false;
	};
	this.delete = function (element) {
		let index = this.find(element);
		if (index > -1) {
			this.data.splice(index, 1);
			this.size--;
		}
	};
	this.clear = function () {
		delete this.data;
		this.data = [];
		this.size = this.pos = 0;
	};
	this.length = function () {
		return console.log(this.size);
	};
	this.toString = function () {
		return console.log(this.data);
	};
	this.front = function() {
		this.pos = 0;
	}
	this.end = function() {
		this.pos = this.size - 1;
	}
	this.prev = function() {
		if (this.pos > 0) {
			this.pos;
		}
	}
	this.next = function() {
		if (this.pos < this.size - 1) {
			this.pos++;
		}
	}
	this.currPos = function() {
		return this.pos;
	}
	this.moveTo = function(position) {
		this.pos = position;
	}
	this.getElement = function() {
		return this.data[this.pos]
	}
}
let list = new List();
list.add("Mohamed");
list.add("Ahmed");
list.add("Kamel");
list.add("Ali");
list.add("Hasan");
list.add("Mahmoud");
list.add("Karem");
list.add("Adil");
list.delete("Ahmed");
list.delete("Mohamed");
list.length();
list.toString();
list.addAfter("inserted", "Ahmed");
list.contains("Ahmed");
list.clear();
list.next();
list.next();
list.prev();

console.log(list);