// 書き換え不可能な変数
const week = ["日","月","火","水","木","金","土","日"];
const today = new Date();

var showDate = new Date(today.getFullYear(),today.getMonth(),1)

// 初期化
window.onload = function(){
  showProcess(today,calendar);
}

//前月
function back(){
  showDate.setMonth(showDate.getMonth() -1);
  showProcess(showDate);
}

// 次月
function next(){
  showDate.setMonth(showDate.getMonth() + 1);
  showProcess(showDate);
}

// カレンダー表示
function showProcess(date){
  var year = date.getFullYear();
  var month = date.getMonth();
  document.querySelector("#header").innerHTML = year + "年" + (month + 1) + "月";

  var calendar = createProcess(year,month);
  document.querySelector("#calendar").innerHTML = calendar;
}

function createProcess(year,month){
  var calendar = "<table><tr class='dayOfWeek'>";
  for (var i =0; i < week.length; i++){
    calendar += "<th>" + week[i] +"</th>";
  }
  calendar += "</tr>";

  var count = 0;
  var startDayOfWeek= new Date(year,month,1).getDay(); //初日
  var endDate = new Date(year,month+1,0).getDate(); //末日
  var lastMonthEndDate = new Date(year,month,0).getDate(); //先月の末日
  var row = Math.ceil((startDayOfWeek + endDate) / week.length); //日付部分の行数

for (var i = 0; i < row; i++){
  calendar += "<tr>";
  for (var j = 0; j < week.length; j++){
    if (i == 0 && j < startDayOfWeek){
    //1日の前に先月の日付を表示
      calendar += "<td class='disabled'>"+(lastMonthEndDate - startDayOfWeek + j + 1) + "</td>";
    }else if (count >= endDate){
    //末日の後に翌月の日付を表示
      count ++;
      calendar += "<td class='disabled'>" + (count - endDate) +  "</td>";
    }else{
    // 当月の日付表示
      count++;
      if (year == today.getFullYear()
      && month == (today.getMonth())
      && count == today.getDate()){
        calendar += "<td class = 'today'>" + count + "</td>";
      }else{
        calendar += "<td>" + count + "</td>";
      }
    }
  }
  calendar += "</tr>";
  }
  return calendar;
}