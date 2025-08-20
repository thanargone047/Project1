const selects=document.querySelectorAll("select");
const totalDisplay=document.getElementById("total");

function updateTotal(){
    let total=0;

    selects.forEach(select => {
        total+=parseInt(select.value)||0;
    });

    totalDisplay.innerHTML="Total:"+total.toLocaleString()+"&#3647;";
}

selects.forEach(select => {
    select.addEventListener("change",updateTotal);
});