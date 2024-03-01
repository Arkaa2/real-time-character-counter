const  textareaEl=document.getElementById("textarea");
const totalcounterEl= document.getElementById("totalcounter");
const remainingEl=document.getElementById("remaining")
textareaEl.addEventListener("keyup",()=>{
    updatecounter()
})
updatecounter()
function updatecounter(){
    totalcounterEl.innerText=textareaEl.value.length
    remainingEl.innerText= textareaEl.getAttribute("maxlength")-textareaEl.value.length
}