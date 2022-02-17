let turno = false;//false turno es X
let gan = false;
let cont=0;



const cli = (even) => {//fucnión que recibe un evento
    const {id} = even.target;//target es el elemento que disparó el evento
    const div = document.getElementById(id);//obtengo el ID del elemento que disparó el evento
    if(div.innerText == ""&& gan==false){//si el div esta vacio
        div.innerText = turno ? "O" : "X";//Si turno es false entonces escribo X, si es false entonces O
        // if (turno){//si turno es true
        //     const botturno = document.getElementById(o).style.backgroundColor="red";
        //     // botturno.getComputedStyle().backgroundColor = "red";
        // }else{
        //     const botturn = document.getElementById(x).style.backgroundColor="red";
        //     // botturn.getComputedStyle().backgroundColor = "blue";
        // } 
        cont++;
        ganador();  
        turno = !turno;//cambio el valor de turno
        //Falta anadir que se cambie el boton turno
        
    }
    
    
}


const reiniciar = () => {
    turno=false;
    gan=false;
    cont=0;
    
    for (let i=0;i<9;i++){
        const di = document.getElementById(i+1);
        di.innerText="";  //Borro el valor del div
    }
}

const ganador = () => {
    const datos = [9];
    
    for (let i=0;i<9;i++){
        const div = document.getElementById(i+1);
        datos[i]=(div.innerText);  //obtengo el valor del div y lo agrego al arreglo
    }

  

     if((datos[0]==datos[1] && datos[0]==datos[2]&& datos[0]!=="")||//checo la primera fila
       (datos[3]==datos[4] && datos[3]==datos[5]&& datos[3]!=="")||//checo la segunda fila
       (datos[6]==datos[7] && datos[6]==datos[8]&& datos[6]!=="")||//checo la tercera fila
       (datos[0]==datos[3] && datos[0]==datos[6]&& datos[0]!=="")||//checo la primera columna
       (datos[1]==datos[4] && datos[1]==datos[7]&& datos[1]!=="")||//checo la segunda columna
       (datos[2]==datos[5] && datos[2]==datos[8]&& datos[2]!=="")||//checo la tercera columna
       (datos[0]==datos[4] && datos[0]==datos[8]&& datos[0]!=="")||//checo la primera diagonal
       (datos[2]==datos[4] && datos[2]==datos[6]&& datos[2]!=="")){//checo la segunda diagonal
        
        gan = true;
        if (gan&&turno){alert("Gana: O")}
        else if (gan){alert("Gana: X")}
    }
    else if(cont == 9){
       alert("Empate");
       cont=0;     
    }
}