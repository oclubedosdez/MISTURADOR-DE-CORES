

function exibirCor() {
    var r, g, b, t;

    r = Number(document.getElementById("slideRed").value);
    g = Number(document.getElementById("slideGreen").value);
    b = Number(document.getElementById("slideBlue").value);
    t = Number(document.getElementById("slideTranspa").value);




    document.getElementById("valorRed").innerHTML = r;
    document.getElementById("valorGreen").innerHTML = g;
    document.getElementById("valorBlue").innerHTML = b;
    document.getElementById("valorTranspa").innerHTML = `0.${t}`;

    document.getElementById("rgbtexto").innerHTML = `rgb(${r},${g},${b},0.${t})`


    document.getElementById("rgbcor").style.backgroundColor = `rgb(${r}, ${g}, ${b},0.${t})`

    document.getElementById('hexatexto').innerHTML = '#' + [r,g,b,t].map( x=> parseInt(x).toString(16).padStart(2, 0)).join('')


}






