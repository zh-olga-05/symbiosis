function check()
 {
 var yes=0;
 var no=0;
 var otvet="";
 var choice;
 for (var v=1; v<=3; v++)
 {
 var q = document.forms['quiz'].elements['vopros'+v];
  for (var i=0; i<q.length; i++)
  {
  if (q[i].checked) {
  choice=q[i].value;
  }
  }
  if (choice=="yes") {yes++;}
  if (choice=="no") {no++;}
 }
 switch (true) {
 case (yes<2): otvet="оценка 3";break;
 case (yes==2): otvet="оценка 4";break;
 case (yes>2): otvet="оценка 5";break;
 default: otvet="очень плохо";break;
 }
 alert(otvet);
 }