const but=document.querySelector("#btn")
but.addEventListener("click", ()=>{
    const num=document.getElementById("n").value;
    const ones=["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
    const tens=["","","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"];
    var str2,k1,k2,k3;
    if(num<0 || num>999){
        str2="out of range";
    }
    else if(num==0){
        str2="Zero";
    }
    else if(num<20){
        str2=ones[num];
    }
    else if(num>=20 && num<100){
        k1=num%10;
        k2=(Math.floor(num/10));
        str2=tens[k2]+ones[k1];
    }
    else if(num>100){
        k1=num%10;
        k2=(Math.floor(num/10))%10;
        k3=(Math.floor(Math.floor(num/10)/10));
        if(k3==0 && k2==0)
        {
            str2=ones[k1]+" Hundred";
        }
        else if(k2==1){
            str2=ones[k3]+" Hundred and "+ones[k1+k2*10];
        }
        else
        {
            str2=ones[k3]+" Hundred and " +tens[k2]+" "+ones[k1];
        }
    }
    document.getElementById("o").value=str2;
})