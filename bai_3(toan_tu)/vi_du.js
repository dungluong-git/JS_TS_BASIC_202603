console.log(10 + 5);

console.log(Number("10"+5));

console.log("10" -5);

console.log();

//Bài tập toán tử
let userage = 20;
let passwordInput = "Net1234";
let isTermAccepted = true;
// tạo biến isAgeValid để kiểm tra tuổi >=18 hay ko
// tạo biến isPasswordValid để kiểm tra có đúng 8 ký tự
// kết hợp toàn bộ điều kiện để tạo biến isSubmidButtonEnlabed
//in ra consologe
let isAgeValid = userage >=18;
let isPasswordValid = passwordInput ===8;
let isSubmidButtonEnlabed = isAgeValid && passwordInput && isTermAccepted;
console.log(isSubmidButtonEnlabed);


let i = 3;
let resultPostFix = i*2;
++1;
console.log(resultPostFix);
