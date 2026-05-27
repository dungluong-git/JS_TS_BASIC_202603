- Cách khai báo biến
+ Cú pháp:`[từ khóa] [tên biến] = [gias trij]`
A. `let` ( chiếc hộp linh hoạt)
- Dùng khi bạn biết giá trị của biến có thể thay đổi trong tương lai
- Khi sử dụng `let` lần đầu tiên thì lần sau gọi biến không cần sử dụng `let`nữa
Dùng `consoloe.log(tenbien)`để in thông tin của biến đó ra màn hình để debug

B. Const ( Chiếc hộp niêm phong)
Viết tắt cảu constan ( hằng số) dùng khi bạn muốn giá trị này không bao giờ được thay đổi

- Các quy tắc đặt tên biến
1. ký tự đặc biệt: chỉ dùng dấu gạch dưới
2. Số ở đầu là cấm kỵ
3. Khoảng trắng
4. từ khóa
5. không được dùng các từ khóa mà js đang dùng
6. Quy tắc ngầm ( naming convention). vi phạm cái này vẫn chạy, nhưng đồng nghiệp đánh giá là amateur ( nghiệp dư)
let thongtinhocvien = "abc"
let thong_tin_hoc_vien (snake case)=> tạm dùng được vì thường dùng trong python/sql
let ThongTinHocVien => chỉ dành cho calass ( học sau) không dùng cho biến.

camel case (chuan js) let thongTinHocVien => Chuẩn men

C. Nghệ thuật đặt tên (clean code)
- hãy đặt tên sao cho đọc lên là hiểu n chứa cái gì
1. Tránh đặt tên vô nghĩa
let d=10 ( vô nghĩa)
let daysToFinished = 10 ( là số ngày để hoàn thành)

2. Đặt teeb viến boolean (dung/sai)
let check = true
let open = false

let isopen = false ( cửa có đang mở không => sai đóng)
let haspermission = true ( có quyền truy cập hay không -> có)

3. Tiếng anh hay tiếng việt
- Tốt nhất là tiếng anh ( fullname, age,...)

Kiểu dữ liệu (data types)
nhóm kiểu dữ liệu nguyên thủy (primitive types)

1. string ( chuỗi ký tự)
- Sẽ bao bọc bởi dấu "" , '' , `` ( nháy kép, nháy đơn, backtick)
- nếu chuỗi bình thường mà không cần nhúng biến thì dùng '', "" đều được
- Dùng chuỗi có dấu bên trong, nếu bên trong có dấu nháy kép ""
- sẽ có những extension đẻ forrmat code cho đẹp ví dụ như là prettier/ eslint

2. Number (số): Viết trần không cần bao quanh gì hết
- Nó không phân biệt số nguyên( 10) hay số thập phân(3.14). Tất cả đều gọi chung là number.

3. Boolen ( Luận lý) - Cái công tắc đèn
- Nó chỉ có 2 trạng thái duy nhất: Bật true/ tắt false
- Quy tắc đóng gói: viết trần chụi là true hoặc fail

4. Hộp đồ nghề sử lý string
 4.1 .length : Dùng để đếm xem chuỗi có bao nhiêu ký tự
 - Cú pháp: tenBien.length ( Lưu ý ko có dấu () vì đây là thuộc tính, không phải ,method)

 4.2 trim() : cái kéo cắt tỉa, nó sẽ làm sạch khoảng trắng ở hai đầu

 input: " email. com " => "email.com"
- Cú pháp: tenbien.trim()

4.3 toUpperCase() và toLowerCase() : giống cái máy biến hình dùng để biến tất cả thành chữ hoa hoặc chữ thường
- Cú pháp: tenBien.ToupperCase()

4.4. includes : kính núp
- kiểm tra xem 1 thằng chuỗi con có nằm trong chuỗi mẹ hay không
- Kết quả trả về:  true hoặc false
- Phân biệt hoa/thường/ khoảng trắng cludes so khớp chính xác bao gồm cả chữ hoa, chữ thưởng.
ví dụ: Error và error là 2 thứ khác nhau

4.5 relace : Xóa và sửa lỗi
 - có đặc điểm là mặc định nó chỉ thay thế Chỗ Đầu Tiên nó tìm thấy
 - Cú pháp: tenBien.replace("cu","moi"")

 4.6 replaceAll :xóa toàn bộ
  - Cú pháp: tenBien.replaceAllu("cu","moi"")

  4.7 index(): máy đo vị trí
  Tìm vị trí (index) tìm vị trí (index) đầu tiên của một chuỗi con bên trong chuỗi mẹ. nếu không tìm thấy thì trả về -1
  - Cú pháp: chuoiMe.indexof("chuoiCon")
  - Kết quả: Trả về số (vị trí bắt đầu tính từ 0)

  4.8 subString() - slice()
  - Cắt lấy 1 phần của chuỗi dựa trên vị trí bắt đầu và vị trí kết thúc
  - điểm cực kỳ quan trọng là:
  start: được tính vào
  end: không được tính vào

  let text = "ABCDEFG"
  text.slice(1,4)
  // A là 0, B là 1,...
  //do lấy từ 1 tới 4 nên n sẽ lấy là: BCD
  - Cú pháp: 
  chuoi.supString(batdau,ketthuc): cắt từ bắt đầu đến trước kết thúc
  chuỗi slice(batdau,ketthuc): ctaws tương tự nhưng hỗ trợ số âm
  // ví dụ:
  let maDon = "ORD-2026-00567"
  substring(4,8) => 2026
  let filName = "report_2026.pdf"
  filName.slice(-4) => số âm thì lấy từ phải qua, kết quả là .pdf



