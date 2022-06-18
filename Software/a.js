function init() {


    btn = document.getElementById('btn')





btn.onclick = function(e) {
    var cn = prompt("¿Cuantas notas hay registradas?")
    cn = parseFloat(cn)



    n1 = document.getElementById('nota1').value
    n2 = document.getElementById('nota2').value
    n3 = document.getElementById('nota3').value
    n4 = document.getElementById('nota4').value
    n5 = document.getElementById('nota5').value
    n6 = document.getElementById('nota6').value
    n7 = document.getElementById('nota7').value
    n8 = document.getElementById('nota8').value
    n9 = document.getElementById('nota9').value 
    n10 = document.getElementById('nota10').value

    ne = document.getElementById('notae').value

    na = document.getElementById('notaa').value

    nf = document.getElementById('notaf')


    
    var rn
    rn = parseFloat(rn)

    var r
    r = parseFloat(r)




    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    n3 = parseFloat(n3)
    n4 = parseFloat(n4)
    n5 = parseFloat(n5)
    n6 = parseFloat(n6)
    n7 = parseFloat(n7)
    n8 = parseFloat(n8)
    n9 = parseFloat(n9)
    n10 = parseFloat(n10)

    ne = parseFloat(ne)

    na = parseFloat(na)


    if (cn === 1) {
        rn = (n1 / cn)*0.7
        
    }
    else if (cn === 2) {
        rn = ((n1 + n2) / cn)*0.7

    }
    else if (cn ===3) {
        rn = ((n1 + n2 + n3) / cn)*0.7

    }
    else if (cn === 4) {
        rn = ((n1 + n2 + n3 + n4) / cn)*0.7

    }
    else if (cn === 5) {
        rn = ((n1 + n2 + n3 + n4 + n5) / 5)*0.7

    }
    else if (cn === 6) {
        rn = ((n1 + n2 + n3 + n4 + n5 + n6) / cn)*0.7

    }
    else if (cn === 7) {
        rn = ((n1 + n2 + n3 + n4 + n5 + n6 + n7) / cn)

    }
    else if (cn === 8) {
        rn = ((n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8) / cn)*0.7

    }
    else if (cn === 9) {
        rn = ((n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9) / cn)*0.7

    }
    else if (cn === 10) {
        rn = ((n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10) / cn)*0.7

    }


    ne = ne*0.2

    na = na*0.1

    r = rn + ne + na
    



    nf.textContent = r
}

}