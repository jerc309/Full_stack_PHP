console.log('holaaaaa')


const cantidadEntradas  = document.getElementById('cantidadEntradas')



const calcular= document.getElementById('calcular')

const categorias = document.getElementById('categorias')

const totalPagar = document.getElementById('totalPagar')




function resumen(){

    console.log(categorias.value)
    console.log(cantidadEntradas.value)
    var entradas=Number(cantidadEntradas.value)
    var total= 0
    var categoria= Number(categorias.value)

    if (categoria==1){
        total=(entradas*(200-(200*.8)))
        totalPagar.innerHTML= total
        console.log(total)
        
    }
    else if (categoria==2){
        total=(entradas*(200-(200*.5)))
        totalPagar.innerHTML= total
        console.log(total)
    }
    else if(categoria==3){
        total=(entradas*(200-(200*.15)))
        totalPagar.innerHTML= total
        console.log(total)
    }

}