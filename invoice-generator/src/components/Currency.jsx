import React from 'react';

const Currency = () => {
    return (
        <div>
            <div>Currency</div>
            <select className="form-select form-select-sm ng-valid ng-touched ng-dirty ng-valid-parse" 
                ng-model="document.currency" 
                ng-options="currency.code as currency.name for (code, currency) in currencies"
                style={{ width: "150px", height:"30px", margin:"10px" }}>
                <option value="AED" label="AED (د.إ)">AED (د.إ)</option>
                <option value="AFN" label="AFN">AFN</option>
                <option value="ALL" label="ALL (Lek)">ALL (Lek)</option>
                <option value="AMD" label="AMD">AMD</option>
                <option value="ANG" label="ANG (ƒ)">ANG (ƒ)</option>
                <option value="AOA" label="AOA (Kz)">AOA (Kz)</option>
                <option value="ARS" label="ARS ($)">ARS ($)</option>
                <option value="AUD" label="AUD ($)">AUD ($)</option>
                <option value="AWG" label="AWG (ƒ)">AWG (ƒ)</option>
                <option value="AZN" label="AZN (ман)">AZN (ман)</option>
                <option value="BAM" label="BAM (KM)">BAM (KM)</option>
                <option value="BBD" selected="selected" label="BBD ($)">BBD ($)</option>
                <option value="BDT" label="BDT (Tk)">BDT (Tk)</option>
                <option value="BGN" label="BGN (лв)">BGN (лв)</option>
                <option value="BHD" label="BHD">BHD</option>
                <option value="BIF" label="BIF">BIF</option>
                <option value="BMD" label="BMD ($)">BMD ($)</option>
                <option value="BND" label="BND ($)">BND ($)</option>
                <option value="BOB" label="BOB ($b)">BOB ($b)</option>
                <option value="BOV" label="BOV">BOV</option>
                <option value="BRL" label="BRL (R$)">BRL (R$)</option>
                <option value="BSD" label="BSD ($)">BSD ($)</option>
                <option value="BTN" label="BTN">BTN</option>
                <option value="BWP" label="BWP (P)">BWP (P)</option>
                <option value="BYN" label="BYN (Br)">BYN (Br)</option>
                <option value="BZD" label="BZD (BZ$)">BZD (BZ$)</option>
                <option value="CAD" label="CAD ($)">CAD ($)</option>
                <option value="CDF" label="CDF">CDF</option>
                <option value="CHE" label="CHE">CHE</option>
                <option value="CHF" label="CHF">CHF</option>
                <option value="CHW" label="CHW">CHW</option>
                <option value="CLF" label="CLF">CLF</option>
                <option value="CLP" label="CLP ($)">CLP ($)</option>
                <option value="CNY" label="CNY (¥)">CNY (¥)</option>
                <option value="COP" label="COP (p.)">COP (p.)</option>
                <option value="COU" label="COU">COU</option>
                <option value="CRC" label="CRC (₡)">CRC (₡)</option>
                <option value="CUC" label="CUC">CUC</option>
                <option value="CUP" label="CUP (₱)">CUP (₱)</option>
                <option value="CVE" label="CVE">CVE</option>
                <option value="CZK" label="CZK (Kč)">CZK (Kč)</option>
                <option value="DJF" label="DJF (CHF)">DJF (CHF)</option>
                <option value="DKK" label="DKK (kr)">DKK (kr)</option>
                <option value="DOP" label="DOP (RD$)">DOP (RD$)</option>
                <option value="DZD" label="DZD">DZD</option>
                <option value="EGP" label="EGP (E£)">EGP (E£)</option>
                <option value="ERN" label="ERN">ERN</option>
                <option value="ETB" label="ETB">ETB</option>
                <option value="EUR" label="EUR (€)">EUR (€)</option>
                <option value="FJD" label="FJD ($)">FJD ($)</option>
                <option value="FKP" label="FKP (£)">FKP (£)</option>
                <option value="GBP" label="GBP (£)">GBP (£)</option>
                <option value="GEL" label="GEL">GEL</option>
                <option value="GHS" label="GHS (GH¢)">GHS (GH¢)</option>
                <option value="GIP" label="GIP (£)">GIP (£)</option>
                <option value="GMD" label="GMD">GMD</option>
                <option value="GNF" label="GNF">GNF</option>
                <option value="GTQ" label="GTQ (Q)">GTQ (Q)</option>
                <option value="GYD" label="GYD ($)">GYD ($)</option>
                <option value="HKD" label="HKD (HK$)">HKD (HK$)</option>
                <option value="HNL" label="HNL (L)">HNL (L)</option>
                <option value="HTG" label="HTG">HTG</option>
                <option value="HUF" label="HUF (Ft)">HUF (Ft)</option>
                <option value="IDR" label="IDR (Rp)">IDR (Rp)</option>
                <option value="ILS" label="ILS (₪)">ILS (₪)</option>
                <option value="INR" label="INR (Rs)">INR (Rs)</option>
                <option value="IQD" label="IQD">IQD</option>
                <option value="IRR" label="IRR">IRR</option>
                <option value="ISK" label="ISK (kr)">ISK (kr)</option>
                <option value="JMD" label="JMD (J$)">JMD (J$)</option>
                <option value="JOD" label="JOD">JOD</option>
                <option value="JPY" label="JPY (¥)">JPY (¥)</option>
                <option value="KES" label="KES (KSh)">KES (KSh)</option>
                <option value="KGS" label="KGS (лв)">KGS (лв)</option>
                <option value="KHR" label="KHR (៛)">KHR (៛)</option>
                <option value="KMF" label="KMF">KMF</option>
                <option value="KPW" label="KPW (₩)">KPW (₩)</option>
                <option value="KRW" label="KRW (₩)">KRW (₩)</option>
                <option value="KWD" label="KWD (ك)">KWD (ك)</option>
                <option value="KYD" label="KYD ($)">KYD ($)</option>
                <option value="KZT" label="KZT (лв)">KZT (лв)</option>
                <option value="LAK" label="LAK (₭)">LAK (₭)</option>
                <option value="LBP" label="LBP (£)">LBP (£)</option>
                <option value="LKR" label="LKR (Rs)">LKR (Rs)</option>
                <option value="LRD" label="LRD ($)">LRD ($)</option>
                <option value="LSL" label="LSL">LSL</option>
                <option value="LYD" label="LYD (LD)">LYD (LD)</option>
                <option value="MAD" label="MAD">MAD</option>
                <option value="MDL" label="MDL">MDL</option>
                <option value="MGA" label="MGA">MGA</option>
                <option value="MKD" label="MKD (ден)">MKD (ден)</option>
                <option value="MMK" label="MMK">MMK</option>
                <option value="MNT" label="MNT (₮)">MNT (₮)</option>
                <option value="MOP" label="MOP">MOP</option>
                <option value="MRU" label="MRU">MRU</option>
                <option value="MUR" label="MUR (Rs)">MUR (Rs)</option>
                <option value="MVR" label="MVR">MVR</option>
                <option value="MWK" label="MWK">MWK</option>
                <option value="MXN" label="MXN ($)">MXN ($)</option>
                <option value="MXV" label="MXV">MXV</option>
                <option value="MYR" label="MYR (RM)">MYR (RM)</option>
                <option value="MZN" label="MZN (MT)">MZN (MT)</option>
                <option value="NAD" label="NAD (N$)">NAD (N$)</option>
                <option value="NGN" label="NGN (₦)">NGN (₦)</option>
                <option value="NIO" label="NIO (C$)">NIO (C$)</option>
                <option value="NOK" label="NOK (kr)">NOK (kr)</option>
                <option value="NPR" label="NPR (Rs)">NPR (Rs)</option>
                <option value="NZD" label="NZD ($)">NZD ($)</option>
                <option value="OMR" label="OMR">OMR</option>
                <option value="PAB" label="PAB (B/.)">PAB (B/.)</option>
                <option value="PEN" label="PEN (S/.)">PEN (S/.)</option>
                <option value="PGK" label="PGK">PGK</option>
                <option value="PHP" label="PHP (₱)">PHP (₱)</option>
                <option value="PKR" label="PKR (Rs)">PKR (Rs)</option>
                <option value="PLN" label="PLN (zł)">PLN (zł)</option>
                <option value="PYG" label="PYG (Gs)">PYG (Gs)</option>
                <option value="QAR" label="QAR">QAR</option>
                <option value="RON" label="RON (lei)">RON (lei)</option>
                <option value="RSD" label="RSD (Дин.)">RSD (Дин.)</option>
                <option value="RUB" label="RUB (руб)">RUB (руб)</option>
                <option value="RWF" label="RWF">RWF</option>
                <option value="SAR" label="SAR">SAR</option>
                <option value="SBD" label="SBD ($)">SBD ($)</option>
                <option value="SCR" label="SCR (Rs)">SCR (Rs)</option>
                <option value="SDG" label="SDG">SDG</option>
                <option value="SEK" label="SEK (kr)">SEK (kr)</option>
                <option value="SGD" label="SGD ($)">SGD ($)</option>
                <option value="SHP" label="SHP (£)">SHP (£)</option>
                <option value="SLE" label="SLE">SLE</option>
                <option value="SOS" label="SOS (S)">SOS (S)</option>
                <option value="SRD" label="SRD ($)">SRD ($)</option>
                <option value="SSP" label="SSP">SSP</option>
                <option value="STN" label="STN">STN</option>
                <option value="SVC" label="SVC ($)">SVC ($)</option>
                <option value="SYP" label="SYP (£)">SYP (£)</option>
                <option value="SZL" label="SZL">SZL</option>
                <option value="THB" label="THB (฿)">THB (฿)</option>
                <option value="TJS" label="TJS">TJS</option>
                <option value="TMT" label="TMT">TMT</option>
                <option value="TND" label="TND (DT)">TND (DT)</option>
                <option value="TOP" label="TOP">TOP</option>
                <option value="TRY" label="TRY">TRY</option>
                <option value="TTD" label="TTD (TT$)">TTD (TT$)</option>
                <option value="TWD" label="TWD (NT$)">TWD (NT$)</option>
                <option value="TZS" label="TZS (TSh)">TZS (TSh)</option>
                <option value="UAH" label="UAH (₴)">UAH (₴)</option>
                <option value="UGX" label="UGX (USh)">UGX (USh)</option>
                <option value="USD" label="USD ($)">USD ($)</option>
                <option value="USN" label="USN">USN</option>
                <option value="UYI" label="UYI">UYI</option>
                <option value="UYU" label="UYU ($U)">UYU ($U)</option>
                <option value="UYW" label="UYW">UYW</option>
                <option value="UZS" label="UZS (лв)">UZS (лв)</option>
                <option value="VED" label="VED">VED</option>
                <option value="VES" label="VES">VES</option>
                <option value="VND" label="VND (₫)">VND (₫)</option>
                <option value="VUV" label="VUV">VUV</option>
                <option value="WST" label="WST">WST</option>
                <option value="XAF" label="XAF">XAF</option>
                <option value="XAG" label="XAG">XAG</option>
                <option value="XAU" label="XAU">XAU</option>
                <option value="XBA" label="XBA">XBA</option>
                <option value="XBB" label="XBB">XBB</option>
                <option value="XBC" label="XBC">XBC</option>
                <option value="XBD" label="XBD">XBD</option>
                <option value="XCD" label="XCD ($)">XCD ($)</option>
                <option value="XDR" label="XDR">XDR</option>
                <option value="XOF" label="XOF">XOF</option>
                <option value="XPD" label="XPD">XPD</option>
                <option value="XPF" label="XPF">XPF</option>
                <option value="XPT" label="XPT">XPT</option>
                <option value="XSU" label="XSU">XSU</option>
                <option value="XTS" label="XTS">XTS</option>
                <option value="XUA" label="XUA">XUA</option>
                <option value="XXX" label="XXX">XXX</option>
                <option value="YER" label="YER">YER</option>
                <option value="ZAR" label="ZAR (R)">ZAR (R)</option>
                <option value="ZMW" label="ZMW (ZK)">ZMW (ZK)</option>
                <option value="ZWL" label="ZWL">ZWL</option></select>
        </div>
    );
};

export default Currency;
