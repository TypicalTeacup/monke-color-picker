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
    
    displayImg(rgbResult);
}

function displayImg(newcolor){

    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    var img = document.getElementById("fur");
    canvas.crossOrigin = "Anonymous";
    

    let imgData = context.getImageData(0,0,64,64);
    newcolor.r = newcolor.r / 255;
    newcolor.g = newcolor.g / 255;
    newcolor.b = newcolor.b / 255;
    for (var i = 0; i < imgData.length; i += 4) {
        
        img.data[i] = Math.floor(255 * r * newcolor.r);
        img.data[i+1] = Math.floor(255 * g * newcolor.g);
        img.data[i+2] = Math.floor(255 * b * newcolor.b);
    }

    context.putImageData(imgData, 0, 0);
    context.drawImage(img, 10, 10);
}

function swapTheme(){
    if(root.style.getPropertyValue("--text-color") === "aliceblue"){
        root.style.setProperty("--text-color", "black");
        root.style.setProperty("--header-color", "lightgray");
        root.style.setProperty("--bg-color", "white");
        document.getElementById("themeSwap").innerHTML = "dark mode";
    } else{
        root.style.setProperty("--text-color", "aliceblue");
        root.style.setProperty("--header-color", "#161616");
        root.style.setProperty("--bg-color", "#1a1a1a");
        document.getElementById("themeSwap").innerHTML = "\"ouch oof my eyes\" mode";
    }
}

window.onload=function(){
    let colorInput = document.getElementById('color-input');

    colorInput.addEventListener('input', () =>{
        update(colorInput);
    });
}
