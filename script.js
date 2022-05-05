let root = document.documentElement;

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
        r: Math.round(monkeR*28.333),
        g: Math.round(monkeG*28.333),
        b: Math.round(monkeB*28.333)
    };
}

function peepeepoopoo(ok,ok2){
	document.getElementById(ok2[0]).innerHTML = ok.r;
    document.getElementById(ok2[1]).innerHTML = ok.g;
    document.getElementById(ok2[2]).innerHTML = ok.b;
}

function update(colorInput){
    let inputRgb = hexToRgb(colorInput.value);
    let monke = rgbToMonke(inputRgb.r,inputRgb.g,inputRgb.b);
    peepeepoopoo(monke,["monkeR","monkeG","monkeB"]);

    let rgbResult = monkeToRgb(monke.r, monke.g, monke.b);
    peepeepoopoo(rgbResult,["r","g","b"])

    document.getElementById("results").style = "";
	document.getElementById("prompt").innerHTML = "<span class=red>" + inputRgb.r 
                                                + "</span>, <span class=green>" + inputRgb.g 
                                                + "</span>, <span class=blue>" + inputRgb.b 
                                                + "</span>";
    document.getElementById("preview").style = 'background-color: rgb(' + rgbResult.r * (181 / 255) + ',' + rgbResult.g * (181 / 255) + ',' + rgbResult.b * (181 / 255) + ')'; //rgb(181, 180, 181)
}

window.onload=function(){
    let colorInput = document.getElementById('color-input');

    colorInput.addEventListener('input', () =>{
        update(colorInput);
    });
}
