function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById(`txtano`)
    var res = window.document.getElementById(`res`)
    if (fano.value.length == 0 || fano.value > ano){
        alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName(`radiosex`)
        var idade = ano - fano.value
        var genero = ``
        var foto = document.getElementById(`foto`)
            if (fsex[0].checked){
            genero = `Homem`
            if (idade >=0 && idade <= 10){
                //crianca
                foto.innerHTML = ` <img src="./imgs/criancaMenino.jpg" alt="">`
                
            } else if (idade > 10 && idade < 21){
                //jovem
                foto.innerHTML = ` <img src="./imgs/jovemHomem.jpg" alt="">`
                                
            } else if (idade >= 21 && idade < 50){
                //adulto
                foto.innerHTML = ` <img src="./imgs/adultoHomem.jpg" alt="">`
                
            } else {
                //idoso
                foto.innerHTML = ` <img src="./imgs/idosoHomem.jpg" alt="">`
                
            }
            
        } else if (fsex[1].checked){
            genero = `Mulher`
            if (idade >=0 && idade <= 10){
                // crianca
                foto.innerHTML = ` <img src="./imgs/criancaMenina.jpg" alt="">`
            } else if (idade > 10 && idade < 21){
                //jovem
                foto.innerHTML = ` <img src="./imgs/jovemMulher.jpg" alt="">`
            } else if (idade >= 21 && idade < 50){
                //adulto
                foto.innerHTML = ` <img src="./imgs/adultoMulher.jpg" alt="">`
            } else {
                //idoso
                foto.innerHTML = ` <img src="./imgs/idosaMulher.jpg" alt="">`
            }
        }
        res.style.textAlign = `center`
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        
    }
}  