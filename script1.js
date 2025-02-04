document.getElementById('inputField').addEventListener('input', function(event) {
    const input = event.target.value;
    const outputText = document.getElementById('outputText');
    const outputImage = document.getElementById('outputImage');

    // Mapping angka ke shio dan gambar
    const angkaToShioDanGambar = {
        '0': { shio: 'HARIMAU', gambar: 'image/harimau.jpg' },
        '1': { shio: 'ULAR', gambar: 'image/ular.jpg' },
        '2': { shio: 'NAGA', gambar: 'image/naga.jpg' },
        '3': { shio: 'KELINCI', gambar: 'image/kelinci.jpg' },
        '4': { shio: 'HARIMAU', gambar: 'image/harimau.jpg' },
        '5': { shio: 'KERBAU', gambar: 'image/kerbau.jpg' },
        '6': { shio: 'TIKUS', gambar: 'image/tikus.jpg' },
        '7': { shio: 'BABI', gambar: 'image/babi.jpg' },
        '8': { shio: 'ANJING', gambar: 'image/anjing.jpg' },
        '9': { shio: 'AYAM', gambar: 'image/ayam.jpg' },
        '00': { shio: 'HARIMAU', gambar: 'image/harimau.jpg' },
        '01': { shio: 'ULAR', gambar: 'image/ular.jpg' },
        '02': { shio: 'NAGA', gambar: 'image/naga.jpg' },
        '03': { shio: 'KELINCI', gambar: 'image/kelinci.jpg' },
        '04': { shio: 'HARIMAU', gambar: 'image/harimau.jpg' },
        '05': { shio: 'KERBAU', gambar: 'image/kerbau.jpg' },
        '06': { shio: 'TIKUS', gambar: 'image/tikus.jpg' },
        '07': { shio: 'BABI', gambar: 'image/babi.jpg' },
        '08': { shio: 'ANJING', gambar: 'image/anjing.jpg' },
        '09': { shio: 'AYAM', gambar: 'image/ayam.jpg' },
        '10': { shio: 'MONYET', gambar: 'image/monyet.jpg' },
        '11': { shio: 'KAMBING', gambar: 'image/kambing.jpg' },
        '12': { shio: 'KUDA', gambar: 'image/kuda.jpg' },
        '13': { shio: 'ULAR', gambar: 'image/ular.jpg' },
        '14': { shio: 'NAGA', gambar: 'image/naga.jpg' },
        '15': { shio: 'KELINCI', gambar: 'image/kelinci.jpg' },
        '16': { shio: 'HARIMAU', gambar: 'image/harimau.jpg' },
        '17': { shio: 'KERBAU', gambar: 'image/kerbau.jpg' },
        '18': { shio: 'TIKUS', gambar: 'image/tikus.jpg' },
        '19': { shio: 'BABI', gambar: 'image/babi.jpg' },
        '20': { shio: 'ANJING', gambar: 'image/anjing.jpg' },
        '21': { shio: 'AYAM', gambar: 'image/ayam.jpg' },
        '22': { shio: 'MONYET', gambar: 'image/monyet.jpg' },
        '23': { shio: 'KAMBING', gambar: 'image/kambing.jpg' },
        '24': { shio: 'KUDA', gambar: 'image/kuda.jpg' },
        '25': { shio: 'ULAR', gambar: 'image/ular.jpg' },
        '26': { shio: 'NAGA', gambar: 'image/naga.jpg' },
        '27': { shio: 'KELINCI', gambar: 'image/kelinci.jpg' },
        '28': { shio: 'HARIMAU', gambar: 'image/harimau.jpg' },
        '29': { shio: 'KERBAU', gambar: 'image/kerbau.jpg' },
        '30': { shio: 'TIKUS', gambar: 'image/tikus.jpg' },
        '31': { shio: 'BABI', gambar: 'image/babi.jpg' },
        '32': { shio: 'ANJING', gambar: 'image/anjing.jpg' },
        '33': { shio: 'AYAM', gambar: 'image/ayam.jpg' },
        '34': { shio: 'MONYET', gambar: 'image/monyet.jpg' },
        '35': { shio: 'KAMBING', gambar: 'image/kambing.jpg' },
        '36': { shio: 'KUDA', gambar: 'image/kuda.jpg' },
        '37': { shio: 'ULAR', gambar: 'image/ular.jpg' },
        '38': { shio: 'NAGA', gambar: 'image/naga.jpg' },
        '39': { shio: 'KELINCI', gambar: 'image/kelinci.jpg' },
        '40': { shio: 'HARIMAU', gambar: 'image/harimau.jpg' },
        '41': { shio: 'KERBAU', gambar: 'image/kerbau.jpg' },
        '42': { shio: 'TIKUS', gambar: 'image/tikus.jpg' },
        '43': { shio: 'BABI', gambar: 'image/babi.jpg' },
        '44': { shio: 'ANJING', gambar: 'image/anjing.jpg' },
        '45': { shio: 'AYAM', gambar: 'image/ayam.jpg' },
        '46': { shio: 'MONYET', gambar: 'image/monyet.jpg' },
        '47': { shio: 'KAMBING', gambar: 'image/kambing.jpg' },
        '48': { shio: 'KUDA', gambar: 'image/kuda.jpg' },
        '49': { shio: 'ULAR', gambar: 'image/ular.jpg' },
        '50': { shio: 'NAGA', gambar: 'image/naga.jpg' },
        '51': { shio: 'KELINCI', gambar: 'image/kelinci.jpg' },
        '52': { shio: 'HARIMAU', gambar: 'image/harimau.jpg' },
        '53': { shio: 'KERBAU', gambar: 'image/kerbau.jpg' },
        '54': { shio: 'TIKUS', gambar: 'image/tikus.jpg' },
        '55': { shio: 'BABI', gambar: 'image/babi.jpg' },
        '56': { shio: 'ANJING', gambar: 'image/anjing.jpg' },
        '57': { shio: 'AYAM', gambar: 'image/ayam.jpg' },
        '58': { shio: 'MONYET', gambar: 'image/monyet.jpg' },
        '59': { shio: 'KAMBING', gambar: 'image/kambing.jpg' },
        '60': { shio: 'KUDA', gambar: 'image/kuda.jpg' },
        '61': { shio: 'ULAR', gambar: 'image/ular.jpg' },
        '62': { shio: 'NAGA', gambar: 'image/naga.jpg' },
        '63': { shio: 'KELINCI', gambar: 'image/kelinci.jpg' },
        '64': { shio: 'HARIMAU', gambar: 'image/harimau.jpg' },
        '65': { shio: 'KERBAU', gambar: 'image/kerbau.jpg' },
        '66': { shio: 'TIKUS', gambar: 'image/tikus.jpg' },
        '67': { shio: 'BABI', gambar: 'image/babi.jpg' },
        '68': { shio: 'ANJING', gambar: 'image/anjing.jpg' },
        '69': { shio: 'AYAM', gambar: 'image/ayam.jpg' },
        '70': { shio: 'MONYET', gambar: 'image/monyet.jpg' },
        '71': { shio: 'KAMBING', gambar: 'image/kambing.jpg' },
        '72': { shio: 'KUDA', gambar: 'image/kuda.jpg' },
        '73': { shio: 'ULAR', gambar: 'image/ular.jpg' },
        '74': { shio: 'NAGA', gambar: 'image/naga.jpg' },
        '75': { shio: 'KELINCI', gambar: 'image/kelinci.jpg' },
        '76': { shio: 'HARIMAU', gambar: 'image/harimau.jpg' },
        '77': { shio: 'KERBAU', gambar: 'image/kerbau.jpg' },
        '78': { shio: 'TIKUS', gambar: 'image/tikus.jpg' },
        '79': { shio: 'BABI', gambar: 'image/babi.jpg' },
        '80': { shio: 'ANJING', gambar: 'image/anjing.jpg' },
        '81': { shio: 'AYAM', gambar: 'image/ayam.jpg' },
        '82': { shio: 'MONYET', gambar: 'image/monyet.jpg' },
        '83': { shio: 'KAMBING', gambar: 'image/kambing.jpg' },
        '84': { shio: 'KUDA', gambar: 'image/kuda.jpg' },
        '85': { shio: 'ULAR', gambar: 'image/ular.jpg' },
        '86': { shio: 'NAGA', gambar: 'image/naga.jpg' },
        '87': { shio: 'KELINCI', gambar: 'image/kelinci.jpg' },
        '88': { shio: 'HARIMAU', gambar: 'image/harimau.jpg' },
        '89': { shio: 'KERBAU', gambar: 'image/kerbau.jpg' },
        '90': { shio: 'TIKUS', gambar: 'image/tikus.jpg' },
        '91': { shio: 'BABI', gambar: 'image/babi.jpg' },
        '92': { shio: 'ANJING', gambar: 'image/anjing.jpg' },
        '93': { shio: 'AYAM', gambar: 'image/ayam.jpg' },
        '94': { shio: 'MONYET', gambar: 'image/monyet.jpg' },
        '95': { shio: 'KAMBING', gambar: 'image/kambing.jpg' },
        '96': { shio: 'KUDA', gambar: 'image/kuda.jpg' },
        '97': { shio: 'ULAR', gambar: 'image/ular.jpg' },
        '98': { shio: 'NAGA', gambar: 'image/naga.jpg' },
        '99': { shio: 'KELINCI', gambar: 'image/kelinci.jpg' }
    };

    // Mapping shio ke angka dan gambar
    const shioToAngkaDanGambar = {
    'ULAR': { angka: ['01', '13', '25', '37', '49', '61', '73', '85', '97'], gambar: 'image/ular.jpg' },
    'NAGA': { angka: ['02', '14', '26', '38', '50', '62', '74', '86', '98'], gambar: 'image/naga.jpg' },
    'KELINCI': { angka: ['03', '15', '27', '39', '51', '63', '75', '87', '99'], gambar: 'image/kelinci.jpg' },
    'HARIMAU': { angka: ['04', '16', '28', '40', '52', '64', '76', '88', '00'], gambar: 'image/harimau.jpg' },
    'KERBAU': { angka: ['05', '17', '29', '41', '53', '65', '77', '89'], gambar: 'image/kerbau.jpg' },
    'TIKUS': { angka: ['06', '18', '30', '42', '54', '66', '78', '90'], gambar: 'image/tikus.jpg' },
    'BABI': { angka: ['07', '19', '31', '43', '55', '67', '79', '91'], gambar: 'image/babi.jpg' },
    'ANJING': { angka: ['08', '20', '32', '44', '56', '68', '80', '92'], gambar: 'image/anjing.jpg' },
    'AYAM': { angka: ['09', '21', '33', '45', '57', '69', '81', '93'], gambar: 'image/ayam.jpg' },
    'MONYET': { angka: ['10', '22', '34', '46', '58', '70', '82', '94'], gambar: 'image/monyet.jpg' },
    'KAMBING': { angka: ['11', '23', '35', '47', '59', '71', '83', '95'], gambar: 'image/kambing.jpg' },
    'KUDA': { angka: ['12', '24', '36', '48', '60', '72', '84', '96'], gambar: 'image/kuda.jpg' }
    };

    if (angkaToShioDanGambar[input]) {
        outputText.textContent = `Shio: ${angkaToShioDanGambar[input].shio}`;
        outputImage.src = angkaToShioDanGambar[input].gambar;
        outputImage.style.display = 'block';
    }
    else if (shioToAngkaDanGambar[input.toUpperCase()]) {
        outputText.textContent = `Angka: ${shioToAngkaDanGambar[input.toUpperCase()].angka}`;
        outputImage.src = shioToAngkaDanGambar[input.toUpperCase()].gambar;
        outputImage.style.display = 'block';
    }
    else {
        outputText.textContent = 'Input tidak valid';
        outputImage.style.display = 'none';
    }
});
