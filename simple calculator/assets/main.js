let b="";let num;let opr;let prevn=0;let total;let j=1;let prevop="";
 //function for ac button to clear all    
assign=()=>{ 
    
       let c="0"; 
       document.getElementById("one").innerHTML = c;
       b=""; total=0;prevn=0;num=0;opr=0;j=1;prevop="";}
       //assign values and form a string   
         redeclare=(a)=>{ 
            b+=a; 
           
            document.getElementById("one").innerHTML = b;
      
        }
       //get values from html page 
    function getvalue(a){ 
    
        
        if(a<=10){redeclare(a);}
         if(a==11){a="+";redeclare(a);}
         if(a==12){a="-";redeclare(a)} 
         if(a==13){a="x";redeclare(a)}
         if(a==14){a="/";redeclare(a)}
         if(a==15){a="%";redeclare(a)}
    }
    // split full string into calculation function

supera=()=>{  console.log(b);
    num= b.split(/[-+/x%]/);
    
    opr=b.split(/\d+/);
    if(num.length+1==opr.length){
      
        calculate(num,opr);}
    else{assign()}
   
    
    
}

//give 2 number and one operator to a next function
calculate=(num,opr)=>{ 
    
    for(let i=0;i<num.length;)
    {  
         num[i]=parseInt(num[i]);
       while(  j<opr.length-1){
        
        if(prevn==0){
        prevn=num[i];i++;
         }
        if(prevop==""){
        prevop=opr[j];
         }
      else{let u=num[i];ans=mass(u,prevop);j++;prevop="";i++}
          
      break; }

}}
//done calculation
function  mass(u,prevop) {
    
    switch(prevop){

        case "+": total=u+prevn;
        prevn=total;
        break;
        case "-": total=prevn-u;
        prevn=total;break;
         case "x": total=u*prevn;
        prevn=total; break;
         case "/": total=prevn/u;
        prevn=total; break;
         case "%": total=prevn%u;
        prevn=total; break;
        default: console.log("no");break;
        
        
        

    }
    document.getElementById("one").innerHTML = total;

    
    
} 
 
       
 
    
      
       
    
    