<html lang="en">

<head>
    <title>Belajar JavaScript document.write</title>
</head>

<body>
    <h1>Hello World!</h1>
    <script>
        document.write("<hr>");
        document.write("<p>Lagi belajar JavaScript nih</p>");
        document.write("di <a href=https://blog.xsis.academy>Xsis Academy</a>")
        </script>
        <!-- Menggunakan document.write() setelah dokumen HTML dimuat, akan menghapus semua HTML yang ada contohnya dibawah-->
        <hr>
        <button type="button"
            onclick="document.write(Ini contoh menggunakan document.write() setelah dokumen HTML dimuat, akan menghapus semua HTML yang ada)">Coba deh!</button>

</body>
</html>