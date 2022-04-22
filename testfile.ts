function greet() {
    document.getElementById('click').innerHTML='Stop It';
}

async function circle(){
    var c = <HTMLCanvasElement> document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
  
    for(let x =0; x<5; x++){
        ctx.arc(65+(x*4),20+(x*4),10,0,2*Math.PI);
        await new Promise(r => setTimeout(r, 100));
    }


ctx.stroke();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}