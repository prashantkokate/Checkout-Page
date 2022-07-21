
para1=document.getElementById('para1')
para2=document.getElementById('para2')
para3=document.getElementById('para3')
minus=document.getElementById('minus')
plus=document.getElementById('plus')
minus1=document.getElementById('minus1')
plus1=document.getElementById('plus1')
minus2=document.getElementById('minus2')
plus2=document.getElementById('plus2')
totalquantity=document.getElementById('totalquantity')
tax=document.getElementById('tax')
totalprise=document.getElementById('totalprise')
let count=0;
minus.addEventListener('click',()=>{
    if(count<1){
        alert('quantity should grater than 0')
    }else{
        count=count-1
        para1.innerText=count;
        totalquantity.innerText=count;
        totalprise.innerText=count*40000+(40000*(12/100));
        
    }
})
plus.addEventListener('click',()=>{
    
        count=count+1
        para1.innerText=count;
        totalquantity.innerText=count
        totalprise.innerText=count*40000+(40000*(12/100));
});
minus1.addEventListener('click',()=>{
    if(count<1){
        alert('quantity should grater than 0')
    }else{
        count=count-1
        para2.innerText=count;
        totalquantity.innerText=count
        totalprise.innerText=count*40000+(40000*(12/100));
    }
})
plus1.addEventListener('click',()=>{
    
        count=count+1
        para2.innerText=count;
        totalquantity.innerText=count
        totalprise.innerText=count*30000+(30000*(12/100));
});
minus2.addEventListener('click',()=>{
    if(count<1){
        alert('quantity should grater than 0')
    }else{
        count=count-1
        para3.innerText=count;
        totalquantity.innerText=count
        totalprise.innerText=count*40000+(40000*(12/100));
        
    }
})
plus2.addEventListener('click',()=>{
    
        count=count+1
        para3.innerText=count;
        totalquantity.innerText=count
        totalprise.innerText=count*40000+(40000*(12/100));
});

