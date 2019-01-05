function tampilkota(provinsi){
    var kota = "";
    switch(provinsi)
    {
        case "Jabar":
        {
            kota = "<ul><li>Bandung</li><li>Bogor</li><li>Garut</li></ul>";
        }break;
        case "Jateng":
        {
            kota = "<ul><li>Cilacap</li><li>Demak</li><li>Magelang</li></ul>";
        }break;
        default : kota = "";
    }
    document.getElementById('kota').innerHTML = kota;
}
