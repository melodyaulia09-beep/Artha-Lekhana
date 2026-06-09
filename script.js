let saldo = 0;

function formatRupiah(angka){
    return angka.toLocaleString('id-ID');
}

function tambahTransaksi(){

    const ket = document.getElementById("keterangan").value;
    const jumlah = parseInt(document.getElementById("jumlah").value);
    const jenis = document.getElementById("jenis").value;

    if(ket === "" || isNaN(jumlah)){
        alert("Lengkapi data terlebih dahulu!");
        return;
    }

    if(jenis === "pemasukan"){
        saldo += jumlah;
    }else{
        saldo -= jumlah;
    }

    document.getElementById("saldo").innerText =
        "Rp " + formatRupiah(saldo);

    const li = document.createElement("li");

    li.classList.add(jenis);

    if(jenis === "pemasukan"){
        li.innerHTML =
        `➕ ${ket} - Rp ${formatRupiah(jumlah)}`;
    }else{
        li.innerHTML =
        `➖ ${ket} - Rp ${formatRupiah(jumlah)}`;
    }

    document.getElementById("riwayat")
    .appendChild(li);

    document.getElementById("keterangan").value="";
    document.getElementById("jumlah").value="";
}
