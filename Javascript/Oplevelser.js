const listchoice = [
    "Trapholt",
    "Galleri Avanti",
    "Galleri Bruun",
    "Arthausted",
    "Billedhugger Søren Cip Nielsen",
    "Doctor Artes kunst Crematorium",
    "Marienlund",
    "Stenderup",
    "Ådal",
    "Åpark Hundeskov",
    "Svanemosen",
    "Noret",
    "Discoteque Tordenskiold",
    "Skræddergaarden Kolding",
    "The Old Irish pub",
    "Zwei Grosse Bier Bar",
    "Den Engelske Pub",
    "New York",
    "Skamlingsbanken",
    "Hylkedalen",
    "Ferup",
    "Stalerup sø",
    "Harte skov",
    "Hjertestien",
    "Koldinghus",
    "Kolding Centrum",
    "Det Gamle Borgerhus",
    "Skamlingsbanken",
    "Sankt Nicolai kirke",
    "Chresten Berg",
    "Kolding Storcenter",
    "Kolding City",
    "Vamdrup",
    "Kirppu loppemarked",
    "Skaersogaard Vin"
    ]


    const alleOl = document.querySelectorAll("ol");
console.log(alleOl)
for (let index = 0; index < alleOl.length; index++) {

    alleOl[index].addEventListener("click", (event)=>{
    
        let a = Array.from(event.target.parentElement.children).indexOf(event.target);
        
        console.log(listchoice[a])
        console.log(a)

        function ol1choice(){
            document.getElementById("ListArticleH1").innerHTML = listchoice[a]
            document.getElementById("listimg1").src = "/imgs/listAtricleImgs/" + listchoice[a] + ".jpg"
        }
        ol1choice()
        
    });
    
    }



