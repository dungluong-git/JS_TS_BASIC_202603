//let loiChao = 'Xin chao buoi sang';
//let loiChao = "Xin chao buoi sang";
//let mynane = "I'm Hoang";

const tenHocVien = "Hoàng";

//dùng backstick nhúng biến tên học viên vào giữa câu hoặc 1 chuỗi khác

const loiGioiThieu = `ten toi la ${tenHocVien}`;
console.log(loiGioiThieu);

const productName = "iphone 15 promax";
const productSelector = `h2:has-text("${productName}")`;
console.log(productSelector);

//ví dụ number
let tuoi = 30;
const PI = 3.14;
let ketQua = (tuoi - 5) * 2;
console.log('KetQua');

//Kiểu boolean

let denDangBat = true; //đèn sáng
let daTotNghiep = false; // chưa tốt nghiệp


let matKhau = "123456";
console.log(matKhau.length);

//trim()
let email = " user01 ";
let emailChuan = email.trim();
console.log(emailChuan);
console.log(emailChuan.length);

//toUpperCase- toLowerCase()
//IPHoNE 15 - data test lại là iphone 15
// giải pháp chuyển cả 2 về cùng 1 kiểu ( thường là lowercase) rồi mới so sánh

let tenSanPham = 'iPhOne 15';
console.log(tenSanPham.toLowerCase());
console.log(tenSanPham.toUpperCase());

//includes
let thongBao = "Đăng nhập thất bại. Sai mật khẩu"

console.log(thongBao.includes("Thành công"));
console.log(thongBao.includes("mật khẩu"));

//Ví dụ 2

let msg = "login Error: invalid password";
console.log(msg.includes("Error"));
console.log(msg.includes("error"));

//Ví dụ
let giaTien = "100$";
let giaTienSo =giaTien.replace("$","");
console.log(giaTienSo);

let tien = "1.000.000";
console.log (tien.replace(".",""));
console.log(tien.replaceAll(".",""));

let tenUI = "Nguyen Van A";
console.log(tenUI.replaceAll(".",""));

//Ví dụ indexof

let urlUI = "https://shopee.vn/product.12345";
console.log(urlUI.indexOf("product"));

//ví dụ kết hợp idexof với trsing() để cắt lấy 1 phần chuỗi từ vị trí tìm được
let errorMsg = "Error 404: Page not found"

//slice số âm
//let filName = "report_2026.pdf";
// console.log(filName.slice(-4));
//subString 
 let maDon = "ORD-2026-00567";
 console.log(maDon.substring(4,8));
    
  










