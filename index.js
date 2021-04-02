



const classHoje = () =>{
    const tds = document.querySelectorAll("td");
    for(var i = 0; i< tds.length;i++){
        if(tds[i].innerText === new Date().getDate().toString()){
            tds[i].classList.add("hoje")
            //console.log("é hoje")
        }  
    }
}


//console.log(new Date(2021,3,5).getDay())

const diasdasemana = ()=>{
    const tds = document.querySelector("table tr").querySelectorAll("td");
    tds[0].innerText = "dom";
    tds[1].innerText = "seg";
    tds[2].innerText = "ter";
    tds[3].innerText = "qua";
    tds[4].innerText = "qui";
    tds[5].innerText = "sex";
    tds[6].innerText = "sáb";
}
const primeirodiadomes = ()=>{
    const tds = document.querySelector("table tr:nth-child(2)").querySelectorAll("td");
    tds[new Date(2021,new Date().getMonth(),1).getDay()].innerText = "1";
    //console.log(new Date(2021,3,0).getDate())
}
const preechercalendario = () =>{
    const tds = document.querySelectorAll("td");
    let primeirodia = ""
    for(var i = 0;i<tds.length;i++){
        if(tds[i].innerText === "1"){
            primeirodia = i;
        }      
    }
    y = 1;
    for( var x = primeirodia + 1; x < tds.length;x++){        
        y<new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate()?tds[x].innerText = (y += 1):tds[x].style.display="none" ;
      
    }
}
const nomemes = ()=>{
    const  mes = new Date().getMonth()
    meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    document.title = meses[mes]
            
}
diasdasemana()
primeirodiadomes()
preechercalendario()
classHoje();
nomemes();
