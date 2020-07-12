function drawTable() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();  
  var sheet  = ss.getSheetByName("JS");
  var ss_data = getData();
    var data = ss_data[0];
    var range = sheet.getRange(1,3); 
  var week = range.getValues();
    var background = ss_data[1];
    var fontColor = ss_data[2];
    var fontStyles = ss_data[3];
    var fontWeight = ss_data[4];
    var fontSize = ss_data[5];
    var html = "<table border='1'>";
    for (var i = 0; i < data.length; i++) {
        html += "<tr>"
        for (var j = 0; j < data[i].length; j++) {
            html += "<td style='height:10px;background:" + background[i][j] + ";color:" + fontColor[i][j] + ";font-style:" + fontStyles[i][j] + ";font-weight:" + fontWeight[i][j] + ";font-size:" + (fontSize[i][j] + 2) + "px;'>" + data[i][j] + "</td>";
        }
        html += "</tr>";
    }
    html + "</table>"
    MailApp.sendEmail({
        to: "thao.ngo@navigosgroup.com, hieu.nguyen.van@navigosgroup.com, son.cai@navigosgroup.com, it-data@navigosgroup.com, ha.ngo@navigosgroup.com, anh.dang@vietnamworks.com,anh.vu@vietnamworks.com,chi.vu@vietnamworks.com,hien.le@vietnamworks.com,hien.vu@vietnamworks.com,Huyen.Nguyen@vietnamworks.com,mai.dang@vietnamworks.com,mo.vu@vietnamworks.com,my.hong.nguyen@vietnamworks.com,Ngoc.Anh.Nguyen@vietnamworks.com,trang.bui@vietnamworks.com,trang.nguyen@vietnamworks.com,trung.nguyen@vietnamworks.com,tuyen.dang@vietnamworks.com,van.dang@vietnamworks.com,yen.hai.tran@vietnamworks.com, anh.nguyen.mai@vietnamworks.com,ha.le.yen@vietnamworks.com, linh.phuong.nguyen@vietnamworks.com,Sayaka@vietnamworks.com, vy.huynh@vietnamworks.com, hang.nguyen@vietnamworks.com, hoang.duong@vietnamworks.com,huong.le@vietnamworks.com,kieu.pham@vietnamworks.com,ngoc.hua@vietnamworks.com,phuoc.truong@vietnamworks.com,phuong.thanh.nguyen@vietnamworks.com,phuong.ta@vietnamworks.com,thao.hoang@vietnamworks.com,thuy.nguyen@vietnamworks.com,trong@vietnamworks.com,truc.vu@vietnamworks.com,Uyen.Bui@vietnamworks.com,anh.nguyen@vietnamworks.com,van.lai@vietnamworks.com,vy.hoang@vietnamworks.com,Danh.Phan@vietnamworks.com,Khanh.Pham@vietnamworks.com,hang.le@navigosgroup.com, chuc.le@vietnamworks.com, thanh.mai@vietnamworks.com, khue.le@vietnamworks.com, khanh.mai@vietnamworks.com",
        subject: "Product Progress report Week " +  week + "- 2020",
      htmlBody: "This is an automatic report by Product team to update the workload and progress of VietnamWorks product development. For more information, please email hieu.nguyen.van@navigosgroup.com/ thao.ngo@navigosgroup.com . Have a good weekend! " +  html,
    })
}
function getData(){
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("JS").getDataRange();
  var background = ss.getBackgrounds();
  var val = ss.getDisplayValues();
  var fontColor = ss.getFontColors();
  var fontStyles = ss.getFontStyles();
  var fontWeight = ss.getFontWeights();
  var fontSize = ss.getFontSizes();
  return [val,background,fontColor,fontStyles,fontWeight,fontSize];
}
