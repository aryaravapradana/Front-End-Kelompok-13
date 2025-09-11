document.addEventListener('DOMContentLoaded', function() {
    const selectBangunDatar = document.querySelector('select[name="bangunDatar"]');
    const opsiDiv = document.querySelector('.opsi');
    const kalkulatorContainer = document.querySelector('.kalkulator');
    const outputDiv = document.querySelector('.output');
    
    let hasilPerhitunganTerakhir = {
        value: null,
        isArea: false
    };
    
    const inputMappings = {
        segitiga: { luas: ['alas', 'tinggi'], keliling: ['sisi1', 'sisi2', 'sisi3'] },
        trapesium: { luas: ['atas', 'bawah', 'tinggiTr'], keliling: ['atas', 'bawah', 'miring'] },
        jajarGenjang: { luas: ['alasJG', 'tinggiJG'], keliling: ['alasJG', 'miringJD'] },
        belahKetupat: { luas: ['d1', 'd2'], keliling: ['sisiBK'] },
        layang: { luas: ['d1L', 'd2L'], keliling: ['sisiL1', 'sisiL2'] }
    };
        
    const toggleContainer = document.createElement('div');
    toggleContainer.id = 'calculation-toggle';
    toggleContainer.dataset.selected = 'luas'; 
    toggleContainer.innerHTML = `<button class="active" data-choice="luas">Luas</button><button data-choice="keliling">Keliling</button>`;
    opsiDiv.appendChild(toggleContainer);
    
    function updateFormVisibility() {
        const selectedShapeDiv = kalkulatorContainer.querySelector('div[style*="display: block"]');
        if (!selectedShapeDiv) return;
        const shapeId = selectedShapeDiv.querySelector('form').id;
        const calculationType = toggleContainer.dataset.selected;
        const mapping = inputMappings[shapeId];
        selectedShapeDiv.querySelectorAll('label, input[type="number"], select').forEach(el => {
            el.classList.remove('form-field-hidden');
            if (el.tagName === 'INPUT') el.required = true;
        });
        if (!mapping) return;
        const inputsToShow = mapping[calculationType] || [];
        const allMappedInputs = [...new Set([...mapping.luas, ...mapping.keliling])];
        allMappedInputs.forEach(inputName => {
            if (!inputsToShow.includes(inputName)) {
                const label = selectedShapeDiv.querySelector(`label[for="${inputName}"]`);
                const input = selectedShapeDiv.querySelector(`input[name="${inputName}"]`);
                const select = input ? input.nextElementSibling : null;
                if (label) label.classList.add('form-field-hidden');
                if (input) {
                    input.classList.add('form-field-hidden');
                    input.required = false;
                }
                if (select) select.classList.add('form-field-hidden');
            }
        });
    }

    function tampilkanKalkulator() {
        const pilihanValue = selectBangunDatar.value.toLowerCase();
        kalkulatorContainer.querySelectorAll('div').forEach(div => {
            const h2 = div.querySelector('h2');
            if (h2 && h2.textContent.toLowerCase() === pilihanValue) {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        });
        outputDiv.style.display = 'none';
        updateFormVisibility();
    }
    
    function formatHasil(luas, keliling, rumusLuas, rumusKeliling) {
        const calculationType = toggleContainer.dataset.selected;
        let hasResult = false;
        
        let rumusToDisplay = "";

        
        if (calculationType === 'luas' && luas !== null && !isNaN(luas)) {
            hasilPerhitunganTerakhir = { value: luas, isArea: true };
            rumusToDisplay = rumusLuas;
            hasResult = true;
        }

        if (calculationType === 'keliling' && keliling !== null && !isNaN(keliling)) {
            hasilPerhitunganTerakhir = { value: keliling, isArea: false };
            rumusToDisplay = rumusKeliling;
            hasResult = true;
        }
        
        if (!hasResult) {
            outputDiv.style.display = 'block';
            outputDiv.innerHTML = '<h2>Hasil Kalkulasi:</h2><p>Mohon masukkan nilai yang valid pada semua input yang terlihat untuk menghitung.</p>';
            return;
        }
        
        outputDiv.style.display = 'block';
        outputDiv.innerHTML = `
            <h2>Hasil Kalkulasi:</h2>
            <p>Rumus: <span class="rumus">${rumusToDisplay}</span></p>
            <div class="adaptive-result">
                <p id="hasil-utama" class="hasil"></p>
                <select id="unit-selector">
                    <option value="km">KM²</option>
                    <option value="hm">HM²</option>
                    <option value="dam">DAM²</option>
                    <option value="m" selected>M²</option>
                    <option value="dm">DM²</option>
                    <option value="cm">CM²</option>
                    <option value="mm">MM²</option>
                </select>
            </div>
        `;
        
        document.getElementById('unit-selector').addEventListener('change', updateHasilAdaptif);
        updateHasilAdaptif();
    }
    
    function updateHasilAdaptif() {
        const { value, isArea } = hasilPerhitunganTerakhir;
        if (value === null) return;

        const selector = document.getElementById('unit-selector');
        const unit = selector.value;
        const hasilElement = document.getElementById('hasil-utama');
        
        const factor = isArea ? konversiSatuan[unit].isAreaFactor : konversiSatuan[unit].factor;
        const convertedValue = value / factor;
        
        let formattedValue = convertedValue.toLocaleString('id-ID', { maximumFractionDigits: 5 });
        const unitDisplay = isArea ? `${unit}&sup2;` : unit;

        hasilElement.innerHTML = `${formattedValue} ${unitDisplay}`;
    }
    
    const konversiSatuan = {
        km: { factor: 1000, isAreaFactor: 1e6 }, hm: { factor: 100, isAreaFactor: 1e4 }, dam: { factor: 10, isAreaFactor: 1e2 },
        m: { factor: 1, isAreaFactor: 1 }, dm: { factor: 0.1, isAreaFactor: 1e-2 }, cm: { factor: 0.01, isAreaFactor: 1e-4 }, mm: { factor: 0.001, isAreaFactor: 1e-6 },
    };
    function getNilaiMeter(form, inputName) { }
   
    selectBangunDatar.addEventListener('change', tampilkanKalkulator);
    
    toggleContainer.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON') {
            toggleContainer.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            toggleContainer.dataset.selected = e.target.dataset.choice;
            updateFormVisibility();
            outputDiv.style.display = 'none';
        }
    });

    kalkulatorContainer.addEventListener('submit', function(e) { });
    
    tampilkanKalkulator();
    
    function getNilaiMeter(form, inputName) {
        const input = form.querySelector(`input[name="${inputName}"]`);
        const unitSelect = input ? input.nextElementSibling : null;
        if (!input || input.value === "" || !unitSelect) return NaN;
        const nilai = parseFloat(input.value);
        const unit = unitSelect.value;
        return nilai * konversiSatuan[unit].factor;
    }

    kalkulatorContainer.addEventListener('submit', function(e) {
        e.preventDefault();
        const form = e.target;
        const shapeId = form.id;
        const calculationType = toggleContainer.dataset.selected;
        let luas = null, keliling = null, rumusLuas = "", rumusKeliling = "";
        switch(shapeId) {
            case 'persegi':
                const s = getNilaiMeter(form, 'sisi');
                luas = s*s; keliling = 4*s;
                rumusLuas = "sisi x sisi"; rumusKeliling = "4 x sisi";
                break;
            case 'persegipanjang':
                const p = getNilaiMeter(form, 'panjang'); const l = getNilaiMeter(form, 'lebar');
                luas = p*l; keliling = 2*(p+l);
                rumusLuas = "p x l"; rumusKeliling = "2 x (p+l)";
                break;
            case 'segitiga':
                rumusLuas = "0.5 x alas x tinggi"; rumusKeliling = "sisi1 + sisi2 + sisi3";
                if (calculationType === 'luas') {
                    const a = getNilaiMeter(form, 'alas'); const t = getNilaiMeter(form, 'tinggi');
                    luas = 0.5 * a * t;
                } else {
                    const s1 = getNilaiMeter(form, 'sisi1'); const s2 = getNilaiMeter(form, 'sisi2'); const s3 = getNilaiMeter(form, 'sisi3');
                    keliling = s1 + s2 + s3;
                }
                break;
            case 'lingkaran':
                const r = getNilaiMeter(form, 'jari');
                luas = Math.PI * r * r; keliling = 2 * Math.PI * r;
                rumusLuas = "π x r²"; rumusKeliling = "2 x π x r";
                break;
            case 'trapesium':
                rumusLuas = "0.5 x (atas+bawah) x tinggi"; rumusKeliling = "atas+bawah+2 x sisi miring";
                const atas = getNilaiMeter(form, 'atas'); const bawah = getNilaiMeter(form, 'bawah');
                if (calculationType === 'luas') {
                    const tinggiTr = getNilaiMeter(form, 'tinggiTr');
                    luas = 0.5 * (atas + bawah) * tinggiTr;
                } else {
                    const miring = getNilaiMeter(form, 'miring');
                    keliling = atas + bawah + (2 * miring);
                }
                break;
            case 'jajarGenjang':
                rumusLuas = "alas x tinggi"; rumusKeliling = "2(alas+sisi miring)";
                const alasJG = getNilaiMeter(form, 'alasJG');
                if (calculationType === 'luas') {
                    const tinggiJG = getNilaiMeter(form, 'tinggiJG');
                    luas = alasJG * tinggiJG;
                } else {
                    const miringJD = getNilaiMeter(form, 'miringJD');
                    keliling = 2 * (alasJG + miringJD);
                }
                break;
            case 'belahKetupat':
                rumusLuas = "0.5 x d1 x d2"; rumusKeliling = "4 x sisi";
                if (calculationType === 'luas') {
                    const d1 = getNilaiMeter(form, 'd1'); const d2 = getNilaiMeter(form, 'd2');
                    luas = 0.5 * d1 * d2;
                } else {
                    const sisiBK = getNilaiMeter(form, 'sisiBK');
                    keliling = 4 * sisiBK;
                }
                break;
            case 'layang':
                rumusLuas = "0.5 x d1 x d2"; rumusKeliling = "2(sisi1+sisi2)";
                if (calculationType === 'luas') {
                    const d1L = getNilaiMeter(form, 'd1L'); const d2L = getNilaiMeter(form, 'd2L');
                    luas = 0.5 * d1L * d2L;
                } else {
                    const sisiL1 = getNilaiMeter(form, 'sisiL1'); const sisiL2 = getNilaiMeter(form, 'sisiL2');
                    keliling = 2 * (sisiL1 + sisiL2);
                }
                break;
        }
        formatHasil(luas, keliling, rumusLuas, rumusKeliling);
    });
});