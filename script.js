let a=document.getElementsByClassName('q1-div');
let b=document.getElementsByClassName('button');

for(let i=0;i<a.length;i++)
{
   a[i].addEventListener('click',function (){
    let x=document.getElementsByClassName('answer')
  
    x[i].classList.toggle('none');
    if(b[i].innerHTML=='+')
    {
        b[i].innerHTML='-';
    }else{
        b[i].innerHTML='+';
    }
   })
}
