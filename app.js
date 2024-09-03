var root = document.getElementById("root")
var pcs_1 = document.getElementById("1_pcs_pr_kitni")
var total_pcs = document.getElementById("total_kitna_pcs")
var chorai = document.getElementById("tap_ki_chorai")
var pana = document.getElementById("pana_kitna_ha")


function myfunction() {
    var total = ((total_pcs.value / pana.value) * pcs_1.value) * chorai.value 
    var list_continar_boder = document.createElement("div")
    var list_conter = document.createElement("div")
    var div_Text = document.createElement("div")
    div_Text.classList.add("text")
    var text = document.createTextNode("insallah " + total + " inch")
    div_Text.appendChild(text)
    var btn = document.createElement("button")
    btn.setAttribute("class","fa-solid fa-xmark btnCancel")
    btn.setAttribute("onclick","cancelbtn(this)")
    list_conter.appendChild(div_Text)
    list_conter.appendChild(btn)
    root.appendChild(list_continar_boder)
    list_continar_boder.appendChild(list_conter)
    list_conter.classList.add("list_conter")
    list_continar_boder.classList.add("list_continar_boder")
    pcs_1.value = ""
    total_pcs.value = ""
    chorai.value = ""
    pana.value = ""
}
function cancelbtn(e) {
    var parents = e.parentNode.parentNode
    root.removeChild(parents)
}
