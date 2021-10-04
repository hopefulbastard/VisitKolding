const listchoice = [
    "Trapholt",
    "Galleri Avanti",
    "Galleri Bruun",
    "Arthausted",
    "Billedhugger Søren Cip Nielsen",
    "Doctor Artes kunst Crematorium"
]


listoptions = document.querySelectorAll("#ol1 li");
console.log(listoptions)
for (let index = 0; index < listoptions.length; index++) {

    listoptions[index].addEventListener("click", (event)=>{
    
        let a = Array.from(event.target.parentElement.children).indexOf(event.target);
        
        console.log(listchoice[a])
        
    });
    
    }

    function setarticleh(){
        document.getElementById("ListArticleH1").innerHTML = listchoice[a]
    }


