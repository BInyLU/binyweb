window.onload=function(){
  var onhamburger=document.getElementById("hamburger");
  var onnav=document.getElementById("nav");
  var count=0;
  onhamburger.onclick=function(){
    count=count+1;
    if(count%2==0){
      onnav.style.display="none";
	  console.log('偶数时关闭')
	  console.count()
    }
    else{
      onnav.style.display="block";
	  console.log('奇数时出现')
	  console.count()
    }
  }
}