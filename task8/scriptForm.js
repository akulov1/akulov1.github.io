let info =
    {
        n1:"",
        n2:"",
        n3:"",
        email:"",
        tel:"",
        org:"",
        mess:""
    }
function infoConstructor(n1, n2, n3,email, tel, org, mess)
{
    return {n1,n2,n3,email,tel,orgm,mess};
}
function getLSvalue()
{
    return JSON.parse(localStorage.user);
}
function saveLSvalue(info)
{
    localStorage.user = JSON.stringify(info);
}

window.addEventListener('DOMContentLoaded', function(event)
{
    localStorage.clear();
    let n1 = document.getElementById("first-name");
    let n2 = document.getElementById("second-name");
    let n3 = document.getElementById("third-name");
    let org = document.getElementById("organization");
    let email = document.getElementById("email");
    let tel = document.getElementById("tel");
    let mess = document.getElementById("message");
    let check = document.getElementById("form-checkbox");

    function recoverInfo()
    {
        if(localStorage.length==0) console.log("LS empty");
        else
        {
            let info = getLSvalue();
            n1.value = info.n1;
            n2.value = info.n2;
            n3.value = info.n3;
            org.value = info.org;
            email.value = info.email;
            tel.value = info.tel;
            mess.value = info.mess;
        }
    }
    function clearForm()
    {
        n1.value = "";
        n2.value = "";
        n3.value = "";
        org.value = "";
        email.value = "";
        tel.value = "";
        mess.value = "";
    }

    document.getElementById("form-close").addEventListener("click", function()
    {
        document.getElementById("form-popup").classList.remove("open");
        history.replaceState(null,null,"/")
        let info = infoConstructor(n1.value, n2.value, n3.value, email.value, tel.value, org.value, mess.value);
        saveLSvalue(info);
        clearForm();

    })

    document.getElementById("form-submit-button").addEventListener("click", function(){
        if(check.value ==false) return;
        fetch("https://formcarry.com/s/EHtMLew1to",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json','Accept': 'application/json'},
                body: JSON.stringify(info),
            })
            .then(response=>{console.log(respone);
                localStorage.clear();
                clearForm();})
            .catch(error=>{console.log(error);
                localStorage.clear();
                clearForm();});
    })

    document.getElementById("form-open").addEventListener("click",function(){
        document.getElementById("form-popup").classList.add("open");
        history.pushState(null, null, "taks-8form");
        recoverInfo();
    })
});
