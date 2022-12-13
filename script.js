const button = document.querySelector(".btn button");
const rules = document.querySelector("rulesbox"); 


button.onclick = () => {
   rules.classlist.add("activeInfo");
}
