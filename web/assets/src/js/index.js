const resposta = document.querySelector(".resposta");
// resposta.innerHTML = ""
console.log(resposta)

const cliqueBotao = document.getElementsByTagName("button")

if(cliqueBotao != null){
    for(let item of cliqueBotao){
        item.addEventListener("click", (e)=>{
            console.log(!Number.isNaN(e.target.outerText));
            if(!Number.isNaN(e.target.outerText)){
                resposta.innerHTML += e.target.outerText
            }
        //    switch(e.target.outerText){
        //     case 'C':
        //         resposta.innerHTML = "0"
        //      break;
        //        case '1':
        //            if(resposta.innerHTML == "0"){
        //                resposta.innerHTML = "1"
        //            }else resposta.innerHTML += "1"
        //         break;
        //         case '2':
        //             if(resposta.innerHTML == "0"){
        //                 resposta.innerHTML = "2"
        //             }else resposta.innerHTML += "2"
        //         break;
        //         case '3':
        //             if(resposta.innerHTML == "0"){
        //                 resposta.innerHTML = "3"
        //             }else resposta.innerHTML += "3"
        //         break;
        //         case '4':
        //             if(resposta.innerHTML == "0"){
        //                 resposta.innerHTML = "4"
        //             }else resposta.innerHTML += "4"
        //         break;
        //         case '5':
        //             if(resposta.innerHTML == "0"){
        //                 resposta.innerHTML = "5"
        //             }else resposta.innerHTML += "5"
        //         break;
        //         case '6':
        //             if(resposta.innerHTML == "0"){
        //                 resposta.innerHTML = "6"
        //             }else resposta.innerHTML += "6"
        //         break;
        //         case '7':
        //             if(resposta.innerHTML == "0"){
        //                 resposta.innerHTML = "7"
        //             }else resposta.innerHTML += "7"
        //         break;
        //         case '8':
        //             if(resposta.innerHTML == "0"){
        //                 resposta.innerHTML = "8"
        //             }else resposta.innerHTML += "8"
        //         break;
        //         case '9':
        //             if(resposta.innerHTML == "0"){
        //                 resposta.innerHTML = "9"
        //             }else resposta.innerHTML += "9"
        //         break;
        //         case '0':
        //             if(resposta.innerHTML == "0"){
        //                 resposta.innerHTML = "0"
        //             }else resposta.innerHTML += "0"
        //         break;
        //         case '.':
        //             // if(resposta.innerHTML == isNaN){
                        
        //             // }else 
        //             resposta.innerHTML += "."
        //         break;
        //    }
        })
    }
}