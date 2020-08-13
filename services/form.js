const formEmail = {
    email(name,email,phoneNumber,description){
    return `
    <div style="font-family:Helvetica,sans-serif">
    <div style="width:600px;height:100%;margin:auto">
  <div style="margin:40px 0 44px 0">

    <div>
      <div>
        <h1 style="font-family:Verdana,Helvetica,sans-serif;font-weight:normal;font-size:32px;line-height:48px">
           
Thông tin học viên
        </h1>
      </div>
  </div>
  </div>

<div>
    <div style="margin-top:24px;font-size:16px">
      Họ tên: ${name}<br>
      Email: ${email}<br>
      Số điện thoại: ${phoneNumber}<br>
      Thông tin thêm: ${description}<br>
    </div>

<p>
      <span style="line-height:24px;font-size:16px">Trân trọng,</span><br>
    </p>
      <hr style="margin:40px 0 20px 0;display:block;height:1px;border:0;border-top:1px solid #c4cdd5;padding:0">
      <footer style="margin-bottom:40px">
        <span style="color:#919eab;line-height:28px;font-size:12px">
            Bạn đã nhận được điều này bởi vì có học viên gửi yêu cầu vui lòng không trả lời tin này</span><br>
            <span style="color:#919eab;line-height:28px;font-size:12px">
               mọi thắc mắc vui lòng liên hệ <a style="color:#919eab;line-height:28px;font-size:12px"  href="tel:0329579782">0329579782</a>  Nguyễn văn Tuệ</span><br>

      </footer><div class="yj6qo"></div><div class="adL">
      </div></div><div class="adL">
  </div></div>`}
}

module.exports = formEmail;