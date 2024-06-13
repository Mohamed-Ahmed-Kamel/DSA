/*
Hash Table
    - Hash Tables are a data structure that allow you to create a list of paired values.
    - You can then retrieve a certain value by using the key for that value, which you put into the table beforehand.
    - A Hash Table transforms a key into an integer index using a hash function, and the index will decide where to store the key/value pair in memory.
Why Hash Tables?
    - Hash Tables are useful because they allow you to store and retrieve data in constant time.
    - This is because the hash function will always return the same value for a given key, so the index will always be the same.
How the data stored in our Hash Table implementation?
    [
        [ "key", value ],
        [ "key", value ],
        [ And so on... ]
    ]
*/
/* Implement a Hash Table
    1. Create a HashTable class with table and size
    2. Add a "hash" function to transform keys into integer index
        - Make sure the hash function is private.
    3. Add the "set" and "get" methods for adding and retrieving key/value pairs from the table.
        - Set method
            - What happend when i add the key "mohamed" to the table?
                1. Using the hash function to get the index.
                    1. Convert to ASCI
                        "mohamed".charCodeAt(0) = 109
                        "mohamed".charCodeAt(1) = 111
                        "mohamed".charCodeAt(2) = 104
                        "mohamed".charCodeAt(3) = 109
                        "mohamed".charCodeAt(4) = 97
                        "mohamed".charCodeAt(5) = 109
                        "mohamed".charCodeAt(6) = 101
                        "mohamed".charCodeAt(7) = 0
                    2. Calculate Hash
                        hash = 109 + 111 + 104 + 97 + 109 + 101 + 100 = 731
                            - 731 -> The sum of the ASCII values of each character in the key "mohamed".
                    3. Modulus Operation
                        final hash = 731 % 100 = 31
                        - 31 -> The index of the table.
                    The index is 31, so the value of the key "mohamed" will be stored in the 31th index of the table using the get method.
                2. Add the key "mohamed" to the table.
                3. Increase the size of the table.
        - Get method
            - What happend when i get the key "mohamed" from the table?
                1. Get the index of the key "mohamed" using the hash function like in the set method.
                2. Return the value of the key "mohamed" from the table.
    4. Remove Data
        - What happend when i remove the key "mohamed" from the table?
            1. Get the index of the key "mohamed" using the hash function.
            2. Check if the index is not null.
            3. Set the index to null.
            4. Decrease the size of the table.
*/
// class HashTable {
//     constructor() {
//         this.table = new Array(100);
//         this.size = 0;
//     }
//     _hash(key) {
//         let hash = 0; // To accumulate the hash value.
//         for (let i = 0; i < key.length; i++) { // Loop through each character in the key.
//             hash += key.charCodeAt(i); // Add the ASCII value of each character to the hash value.
//         }
//         return hash % this.table.length; // Modulo the hash value by the length of the table.
//     }
//     set(key, value) {
//         let index = this._hash(key); // Get the index of the table.
//         this.table[index] = [key, value]; // Store the key and the value in the index of the table.
//         this.size++; // Increase the size of the table.
//     }
//     get(key) {
//         let index = this._hash(key);
//         return this.table[index];
//     }
//     remove(key) {
//         let index = this._hash(key); // Get the index of the table.
//         if (this.table[index] && this.table[index].length) { // Check if the index is not null.
//             this.table[index] = undefined; // Set the index to undefined.
//             this.size--; // Decrease the size of the table.
//             return true; // Return true if the key was removed.
//         } else {
//             return false; // Return false if the key was not removed.
//         }
//     }
// }
// let hashTable = new HashTable();
// hashTable.set("mohamed", "23");
// hashTable.get("mohamed"); // ["mohamed", "23"]
// hashTable.remove("mohamed"); // true
// console.log(hashTable); // { table: [ [empty × 100] ], size: 0 }

// // Spain and ǻ has thhe same index
// hashTable.set("Spain", 110);
// hashTable.set("ǻ", 192);
// console.log(hashTable.get("Spain")); // [ 'ǻ', 192 ]
// console.log(hashTable.get("ǻ")); // [ 'ǻ', 192 ]

/* How to Handle Index Collision
    - When the hash function returns the same index for two different keys, we need to handle the collision.
    - To handle the index number collision, you need to store the key/value pair in a second array so that the end result looks as follows:
        [
            [
                [ "key", value ],
                [ "key", value ],
            ],
            [
                [ "key", value ],
                [ "key", value ],
            ],
        ]
*/
// So let's implement the Hash Table with collision handling.
class HashTable {
    constructor() {
        this.table = new Array(100);
        this.size = 0;
    }
    _hash(key) {
        let hash = 0; // To accumulate the hash value.
        for (let i = 0; i < key.length; i++) { // Loop through each character in the key.
            hash += key.charCodeAt(i); // Add the ASCII value of each character to the hash value.
        }
        return hash % this.table.length; // Modulo the hash value by the length of the table.
    }
    set(key, value) {
        let index = this._hash(key); // 7
        if (this.table[index]) { // in first = undefind
            for (let i = 0; i < this.table[index].length; i++) {
                // console.log(this.table[index]) // [ [ 'Spain', 110 ] ]
                // console.log(this.table[index].length) // 1
                // console.log(this.table[index][i]) // [ 'Spain', 110 ]
                // console.log(this.table[index][i][0]) // Spain
                // console.log(this.table[index][i][0] === key) // Spain === ǻ = false
                if (this.table[index][i][0] === key) {
                    this.table[index][i][1] = value;
                    return;
                }
            }
            // console.log(this.table[index]) // [ [ 'Spain', 110 ] ]
            this.table[index].push([key, value]); // 3
            // console.log(this.table[index]) // [ [ 'Spain', 110 ], [ 'ǻ', 192 ] ]
        } else {
            // console.log(this.table[index]); // undefined
            this.table[index] = [];
            // console.log(this.table[index]); // []
            this.table[index].push([key, value]);
            // console.log(this.table[index]) // [ [ 'Spain', 110 ] ]
        }
        this.size++;
    }
    get(key) {
        let index = this._hash(key); // 7
        if (this.table[index]) {
            for(let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    return this.table[index][i][1]
                }
            }
        } else {
            return undefined
        }
    }
    remove(key) {
        let index = this._hash(key); // Get the index of the table.
        if (this.table[index] && this.table[index].length) { // Check if the index is not null.
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        } else {
            return false; // Return false if the key was not removed.
        }
    }
    display() {
        this.table.forEach((values, index) => {
        const chainedValues = values.map(
          ([key, value]) => `[ ${key}: ${value} ]`
        );
        console.log(`${index}: ${chainedValues}`);
        });
    }
}
let hashTable = new HashTable();
hashTable.set("Spain", 110);
hashTable.set("ǻ", 192);
// hashTable.set("ǻ", 195);

hashTable.get("Spain");
hashTable.get("ǻ");

hashTable.display();

hashTable.remove("Spain");
hashTable.remove("ǻ");