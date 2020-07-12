function emailSpreadsheetAsPDF() {

    var email = "sample@email.com"; // Enter the required email address here

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("sheet1"); // Enter the name of the sheet here
  
  var range = sheet.getRange(3,1); 
  var data = range.getValues();
  //var range_content = sheet.getRange(1,1,10,9);
 // var data_content = range_content.getTables();
  
  var subject = "Autoreport: Job Seeker Product Progress Week " + data;

    var body = "\n This is an autoreport " + " for week " + data;

    // Base URL
    var url = "https://docs.google.com/spreadsheets/d/SS_ID/export?".replace("SS_ID", ss.getId());

    /* Specify PDF export parameters
    From: https://code.google.com/p/google-apps-script-issues/issues/detail?id=3579
     */

      var url_ext = 'exportFormat=pdf&format=pdf' // export as pdf / csv / xls / xlsx
         + '&size=letter' // paper size legal / letter / A4
         + '&printtitle=true'
         + '&portrait=false' // orientation, false for landscape
         + '&fitw=true' // fit to page width, false for actual size
         + '&sheetnames=false' // hide optional headers and footers
         + '&pagenumbers=false&gridlines=true' // hide page numbers and gridlines
         + '&fzr=false' // do not repeat row headers (frozen rows) on each page
         + '&gid='; // the sheet's Id
      

    var token = ScriptApp.getOAuthToken();

    var response = UrlFetchApp.fetch(url + url_ext + sheet.getSheetId(), {
            headers : {
                'Authorization' : 'Bearer ' + token
            }
        }).getBlob().setName(sheet.getName() + ".pdf");

    // Uncomment the line below to save the PDF to the root of your drive. 
    //  var newFile = DriveApp.createFile(response).setName(sheet.getName() + ".pdf")

    if (MailApp.getRemainingDailyQuota() > 0)
        GmailApp.sendEmail(email, subject, body, {
            htmlBody : body,
            attachments : [response]
        });
}
