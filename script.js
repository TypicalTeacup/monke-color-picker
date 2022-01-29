const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}

function rgbToMonke(r,g,b) {
    return {
      r: Math.round(r/28.333),
      g: Math.round(g/28.333),
      b: Math.round(b/28.333)
    };
}

function monkeToRgb(monkeR, monkeG, monkeB){
    return {
        r: clamp(Math.floor(monkeR*28.333),0,255),
        g: clamp(Math.floor(monkeG*28.333),0,255),
        b: clamp(Math.floor(monkeB*28.333),0,255)
      };
}

window.onload=function(){
    let colorInput = document.getElementById('color');

    colorInput.addEventListener('input', () =>{
        let inputRgb = hexToRgb(colorInput.value);
        let monke = rgbToMonke(inputRgb.r,inputRgb.g,inputRgb.b);
        
        document.getElementById("monke").innerHTML = "Monke color: " + monke.r + ", " + monke.g + ", " + monke.b;
        let rgbResult = monkeToRgb(monke.r, monke.g, monke.b);
        console.table(inputRgb);console.table(rgbResult);console.table(monke);
        document.getElementById("rgb").innerHTML = "RGB equivalent: " + rgbResult.r + ", " + rgbResult.g + ", " + rgbResult.b;
    });
}