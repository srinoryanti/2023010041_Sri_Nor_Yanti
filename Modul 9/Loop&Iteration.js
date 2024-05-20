// While Statement
function whilestatement() {
    var whstaawal = document.getElementById("whstaawal").value;
    var whstaakhir = document.getElementById("whstaakhir").value;
    while (whstaawal<=whstaakhir) {
        document.getElementById("while").innerHTML+=("Perulagan ke-"+whstaawal+++"<br/>");
    }
}

// 


// For Statement
var dataforsta = ["Yanti","Rira","Firnika","Rira","Bila","Susi"];
function forstatement() {
    var forstano2 = document.getElementById("forstano2").value;
    for(var i =0; i <forstano2; i++) {
        // document.write("Looping ke-"+ i + " : "+data[i] +"<br>");
    
    var hasilBodyfor = "<tr>"+
                            "<td>"+(i+1)+"</td>"+
                            "<td>"+dataforsta[i]+"</td>"+
                        "</tr>";
    }
var bodyforsta = document.getElementById('outputBody.forsta');
bodyforsta.innerHTML += hasilBodyfor;
}

// Do While Statement
var datadwsta = ["Yanti","Rira","Serli","Bila","Susi"];
function dowhilestatement() {
    var dwsta = document.getElementById('dwsta').value;
    var dataawalDo=0;
    do {
       dataawalDo += 1;
       document.getElementById('hasildwsta').innerHTML+= dataawalDo+". " +datadwsta[dataawalDo]+"<br/>"; 
    } while (dataawalDo<dwsta);
}

// For Of Statement
var dataforof = ["Yanti","Firnika","Susi","Rira","Bila","Serli"];
function forofstatement() {
    var forof = document.getElementById("forof").value;
    for (var i=0; i<forof; i++) {
        for (var dataarr of dataforof) {
            document.getElementById('hasilforof').innerHTML += i+1+". "+dataarr+"<br/>";
        }
    }
}

// For In Statement
var dataforin = ["Yanti","Rira","Serli","Susi","Bila","Firnika","Hana","Maya","Muthia","Alya","Aliza","Aulia",];
function forinstatement() {
    for (var indexforin in dataforin) {
        document.getElementById('hasilforin').innerHTML+= indexforin+". "+dataforin[indexforin]+"<br/>";
    }
}

// Break Statement
var databreak = ["Yanti","Rira","Serli","Bila","Susi","Hana","Muthia","Alya","Maya","Ulya","Aliza","Aulia",];
function breakstatement() {
    var brestaberhenti = document.getElementById('brestaberhenti').value;
    var brestanilaiawal = document.getElementById('brestanilaiawal').value;
    var brestanilaiakhir = document.getElementById('brestanilaiakhir').value;
    for (brestanilaiawal; brestanilaiawal<brestanilaiakhir;brestanilaiawal++) {
        if (brestanilaiawal==brestaberhenti) break;
        document.getElementById('hasilbresta').innerHTML+= brestanilaiawal+". "+databreak[brestanilaiawal]+"<br/>";
    }
}

// Continue statement
function continuestatement() {
    var constaberhenti = document.getElementById('constaberhenti').value;
    var constanilaiawal = document.getElementById('constanilaiawal').value;
    var constanilaiakhir = document.getElementById('constanilaiakhir').value;
    for (constanilaiawal; constanilaiawal<constanilaiakhir;constanilaiawal++) {
        if (constanilaiawal==constaberhenti) continue;
        document.getElementById('hasilconsta').innerHTML+= constanilaiawal+". "+databreak[constanilaiawal]+"<br/>";
    }
}

// Labeled Statement
function labeledstatement() {
    var labstaberhenti = document.getElementById('labstaberhenti').value;
    var labstanilaiawal = document.getElementById('labstanilaiawal').value;
    var labstanilaiakhir = document.getElementById('labstanilaiakhir').value;
    var str= "";
    for (labstanilaiawal; labstanilaiawal<labstanilaiakhir;labstanilaiawal++) {
        if (labstanilaiawal==labstaberhenti) continue;
        str = str+labstanilaiawal;
        document.getElementById('hasillabsta').innerHTML+= str+"<br/>";
    }
}