//Ôn tập
// 1. Biến số
var a = 10;
console.log("Giá trị của a là: ", a);
let b = "String";
console.log("Giá trị b là: ", b);
const c = "value";
console.log("Giá trị c là: ", c)

// 2. Kiểu dữ liệu
/*
- Number: Dùng để biểu diễn các số, cả số nguyên và số thực.
Ví dụ: let age = 30;, let pi = 3.14;
- String: Dùng để biểu diễn chuỗi ký tự.
Ví dụ: let name = "John Doe";
- Boolean: Chỉ có hai giá trị: true hoặc false.
Ví dụ: let isStudent = true;
- Null: Biểu thị một giá trị không có.
Ví dụ: let data = null;
- Undefined: Biểu thị một biến chưa được gán giá trị.
Ví dụ: let x; (Giá trị của x là undefined)
- Symbol: Dùng để tạo ra các giá trị duy nhất và không thể thay đổi.
Ví dụ: let symbol1 = Symbol();
- BigInt: Dùng để biểu diễn các số nguyên lớn vượt quá khả năng biểu diễn của kiểu Number.
Ví dụ: let bigInt = 9007199254740991n;
Nâng cao
- Array: Mảng
- Object: Đối tượng
*/
let num = 789; //number
let str = "7 ate 9"; //string
let isTrue = false; //boolean
let nothing = null; //null
let undefinedVar = undefined; //undefined
let bigInt = 23080250250150210200180101401901201020050200809019n // Big number

console.log(typeof num);
console.log(typeof str)
console.log(typeof isTrue)
console.log(typeof nothing)
console.log(typeof undefinedVar)
console.log(typeof bigInt)

// 3. Array <=? List in python
let arr = [1,2,3,4, "value", true]

// Thêm phần tử vào Arry (CREATE)
arr.push("add value") // Thên phần tử vào cuối mảng
console.log("add new item: ", arr);

// Thay đổi giá trị trong mảng (UPDATE)
arr[0] = "Change Value"
console.log("new array ", arr);

// Đọc dữ liệu (READ)
console.log("output: ", arr);

// Xóa phần tử (DELETE)
arr.splice(0, 3) //
console.log("Mảng sau khi xóa: ", arr);

// Truy cập phần tử
let value = arr[2]
console.log("Lấy giá trị: ", value);

/*
Các phương thức thường dùng với mảng
Thêm phần tử:
    push(): Thêm phần tử vào cuối mảng.
    unshift(): Thêm phần tử vào đầu mảng.
Xóa phần tử:
    pop(): Xóa phần tử cuối mảng và trả về phần tử đó.
    shift(): Xóa phần tử đầu mảng và trả về phần tử đó.
    splice(): Xóa phần tử tại một vị trí bất kỳ và có thể thêm phần tử mới vào.
Kiểm tra:
    includes(): Kiểm tra xem mảng có chứa một giá trị hay không.
Lặp qua mảng:
    for loop: Lặp qua từng phần tử của mảng.
    forEach(): Thực hiện một hàm cho mỗi phần tử của mảng.
    map(): Tạo ra một mảng mới bằng cách thực hiện một hàm cho mỗi phần tử của mảng gốc.
    filter(): Tạo ra một mảng mới chứa các phần tử thỏa mãn một điều kiện.
*/

// 4. Object (Đối tượng: key: value)
// Tạo 1 đối tượng Object
let person = {
    firstName: "Hưng",
    lastName: "Mạnh",
    gender: "Male",
    age: 110,
    address: "Hà Lội"
}
console.log("Output Object: ", person);

// CREATE
person.sport = "Golf"
console.log("new person: ", person);

// DELETE
delete person.address;
console.log("new person V2: ", person);

// Áp dụng hàm tạo ra 1 đối tượng
function Car(year, name, model) {
    this.year = year;
    this.name = name;
    this.model = model;
    this.start = function() {
        console.log("The car is starting");
    };
}
let myCar = new Car(2036, "Lamboghini", "Bugatti")
myCar.start()
console.log("My dream car: ", myCar);

// 5. For in
/*
for...in
Mục đích: Dùng để lặp qua các key (thuộc tính) của một đối tượng.
Sử dụng: Thường được dùng với object (đối tượng).
Cách hoạt động: Với mỗi lần lặp, vòng lặp sẽ trả về tên của thuộc
tính (key) của đối tượng đó.
*/
const person2 = {name: "Nam", age: 1000, city: "HA LOI"};

for (let key in person2) {
    console.log("key in person2: ", key);
    console.log(" Value in person2: ", person2[key]);
}

// 6. For of
/*
Mục đích: Dùng để lặp qua các giá trị của các đối tượng có thể lặp (iterable), chẳng hạn như array, string, map, set, v.v.
Sử dụng: Thường dùng với mảng (array), chuỗi (string), hoặc các đối tượng iterable khác.
Cách hoạt động: Với mỗi lần lặp, vòng lặp sẽ trả về giá trị của từng phần tử.
*/
const array = [10, 20, 30];
for (let value of array) {
    console.log("Giá trị của array: ", value);
}

//7. Loop while
// Vòng lặp thường
let count = 0;
while (count < 10) {
    console.log(count);
    count ++;
}

// Vòng lặp vô hạn
//let count_infinity = 0;
//while (true) {
//    console.log(count_infinity);
//    count_infinity ++
//}

// Sử dụng break
let break_count = 0;
while (true) {
    console.log(break_count);
    if (break_count == 100) {break

    };
    break_count ++;

}



