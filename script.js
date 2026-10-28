$(document).ready(function() {
    // Aksi ketika tombol PROSES ditekan
    $('#btnProses').click(function() {
        let nama = $('#nama').val().trim();
        let usia = parseInt($('#usia').val());

        // Validasi jika field kosong
        if (nama === "" || isNaN(usia)) {
            alert("Mohon masukkan Nama dan Usia dengan benar!");
            return;
        }

        // Kondisi ketentuan usia (di atas 27 tahun boleh masuk / > 27)
        if (usia > 27) {
            alert("HELLO, " + nama.toUpperCase() + "\nANDA BOLEH MASUK");
        } else {
            alert("HELLO, " + nama.toUpperCase() + "\nANDA TIDAK BOLEH MASUK");
        }
    });

    // Aksi ketika tombol CLEAR ditekan (menghapus isi text field nama & usia)
    $('#btnClear').click(function() {
        $('#nama').val('');
        $('#usia').val('');
        $('#nama').focus(); // Mengembalikan kursor ke input nama
    });
});
