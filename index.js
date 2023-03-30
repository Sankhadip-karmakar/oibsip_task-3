const input = document.querySelector('input');
const btn = document.querySelector(".addtask > button");
btn.addEventListener("click", addlist);
function addlist(e){
    const nc= document.querySelector(".notcompleted");
    const c = document.querySelector(".completed");
    const newli  =document.createElement("li");
    const checkbtn  =document.createElement("button");
    const delbtn  =document.createElement("button");

    checkbtn.innerHTML = '<i class="fa-regular fa-square-check"></i>';
    delbtn.innerHTML = '<i class="fa fa-trash"></i>';

    if(input.value !==''){
        newli.textContent = input.value;
        input.value = '';
        nc.appendChild(newli);
        newli.appendChild(checkbtn);
        newli.appendChild(delbtn);
    }
    else{
        alert("Invalid Operation !");
    }

    checkbtn.addEventListener("click",function(){
        const parent = this.parentNode;
        parent.remove();
        c.appendChild(parent);
        checkbtn.style.display = 'none';
    });

    delbtn.addEventListener("click",function(){
        const parent = this.parentNode;
        parent.remove();
    });


}