function hitungluas() {
    var alas= document.getElementById("alas").value;
    var tinggi= document.getElementById("tinggi").value;
    var luas= 1/2*alas*tinggi;
    document.getElementById("luas").innerHTML = luas;
}

function hitungkeliling() {
    var sisi1= +document.getElementById("sisi1").value;
    var sisi2= +document.getElementById("sisi2").value;
    var sisi3= +document.getElementById("sisi3").value;

    keliling= sisi1+sisi2+sisi3;
    document.getElementById("keliling").innerHTML= keliling;
}
