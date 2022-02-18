// Method string
// Method array

// Thêm 1 phần tử vào cuối mảng (PUSH())------------
// numbers.push("N");
// console.log(numbers);

// Lấy 1 phần tử ở cuối mảng ra (POP())-------------
// numbers.pop();
// console.log(numbers);

// Thêm 1 phần tử vào đầu mảng (UNSHIFT())-----------
// numbers.unshift("ZZZ");
// console.log(numbers);

// Lấy 1 phần tử ở đầu mảng ra (SHIFT())-------------
// numbers.shift();
// console.log(numbers);

// Tìm vị trí đầu tiên nếu tìm thấy, không thì sẽ trả về -1; (indexOf())-----------------
// const index = numbers.indexOf("Z");
// console.log(index);

// Tìm ra vị trí cuối cùng nếu tìm thấy, không thì sẽ trả về -1 (lastIndexOf())-----------------
// const index = numbers.lastIndexOf("Z");
// console.log(index);

//
// Nếu tìm thấy thì sẽ trả về true, còn không thì sẽ trả về false (includes())------------
// const isTrue = numbers.includes("Zz");
// console.log(isTrue);

// Lấy ra chiều dài của 1 mảng (Length())-----------------
// console.log(numbers.length);

// Xóa hoặc thêm phần tử vào mảng tại vị trí nào đó (splice())-----------
// Tham số thứ 1 là vị trí muốn xóa, tham số thứ 2 là số phần tử muốn xóa, tham số thứ 3 là phần tử muốn thêm vào mảng
// numbers.splice(4, 0, "Nguyen Trieu Tien");
// console.log(numbers);
// console.log(numbers.flatMap());

// Filter => Nó sẽ trả về 1 cái mảng chứa các phần tử thỏa điều kiện
// const result = numbers.filter(function (value, index) {
//   return value > 4;
// });
// console.log(result);

// ForEach => Lặp từng phần tử trong 1 mảng và không có return;
// numbers.forEach(function (value, index) {
//   console.log(value * 2);
// });

// length => Độ dài của 1 mảng
// console.log(numbers.length);

// Find => Trả về phần tử đầu tiên nếu thỏa mãn điều kiện
// var result = numbers.find(function (value, index) {
//   return value === 1;
// });
// console.log(result);

// var result = numbers.every(function (value, index) {
//   return value > 0;
// });
// console.log(result);
// // Nó sẽ lặp qua từng phần tử trong mảng và trả về 1 mảng chứa các phần tử tùy theo xử lý của mình (Map())-------------

// var arrNumber = numbers.map(function (value) {
//   return value * 2;
// });
// var A = [5, 6, 10, 8];
var numbers = [1, 4, 7, 6, 9];

// // array.keys() method is called
// var iterator = A.keys();
// // printing index array using the iterator
// for (let key of iterator) {
//   console.log(key);
// }
// console.log(arrNumber);
// App todos
// var input = document.querySelector("input");
// var button = document.querySelector("button");
// var col6 = document.querySelector(".col-xs-6");
// var value = "";
// // Bắt sự kiện onkeydown cho input để lấy giá trị
// input.onkeyup = function (event) {
//   // Gán giá trị cho biến value
//   value = event.target.value;
// };
// // Bắt sự kiện click cho button

// var arrayTodo = [];
// button.onclick = function (event) {
//   event.preventDefault();
//   arrayTodo.push(value);
//   var resultMap = arrayTodo.map(function (value) {
//     return `<h1>${value}</h1>`;
//   });
//   col6.innerHTML = resultMap;
// };

// var phim = [
//   {
//     tenphim: "Than Dieu",
//     theloai: "kiemhiep",
//   },
//   {
//     tenphim: "Sieu nhan",
//     theloai: "kiemhiep",
//   },
//   {
//     tenphim: "Phim ma",
//     theloai: "kinhdi",
//   },
//   {
//     tenphim: "Hon nhan",
//     theloai: "tinhcam",
//   },
// ];
// var select = document.querySelector("select");
// select.onchange = function (event) {
//   const valuee = event.target.value;
//   const phimDaLoc = phim.filter(function (value) {
//     return value.theloai == valuee;
//   });
//   const phimMap = phimDaLoc.map(function (value) {
//     return value.tenphim;
//   });
//   col6.innerHTML = phimMap;
// };
