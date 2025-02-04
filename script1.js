
    if (angkaToShioDanGambar[formattedInput]) {
        outputText.textContent = `Shio: ${angkaToShioDanGambar[formattedInput].shio}`;
        outputImage.src = angkaToShioDanGambar[formattedInput].gambar;
        outputImage.style.display = 'block';
    }
    else if (shioToAngkaDanGambar[input.toUpperCase()]) {
        const shioInfo = shioToAngkaDanGambar[input.toUpperCase()];
        outputText.textContent = `Angka: ${shioInfo.angka.join(', ')}`;
        outputImage.src = shioInfo.gambar;
        outputImage.style.display = 'block';
    }
    else {
        outputText.textContent = 'Input tidak valid';
        outputImage.style.display = 'none';
    }
});
