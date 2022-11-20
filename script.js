const pre = document.querySelector('.previous');
const nxt = document.querySelector('.next');

let n1=0,n2=1,n3=0, temp=0;
const nxtButton=()=>{
    if(n3==0)
    {
        document.getElementById("txt").value=1;
        document.getElementById("para").innerHTML=" ";

n3=1


    }
    else
    {
    n3=n1+n2;
    document.getElementById("txt").value=n3;
    document.getElementById("para").innerHTML=" ";

    temp=n1
    n1=n2
    n2=n3
    }


}
const preButton=()=>{
    if(n3!=0)
    {
        temp=n1-temp
        n2=n1-temp
        n1=temp
      n3=n1+n2
    
    document.getElementById("txt").value=n3
   
    temp=n1
    n1=n2
    n2=n3
    }
    else{
        document.getElementById("para").innerHTML="please tap next button";
        let par=  document.getElementById("para").innerText;

        console.log(par);

        n1=0
        n2=1
    }
}

pre.addEventListener('click',()=>preButton());
nxt.addEventListener('click',()=>nxtButton());
let val=document.getElementById("txt").value;



// const val=document.querySelector("#txt").value;
// console.log(val);

