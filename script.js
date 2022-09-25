const tipcalcy = () => {
    let amount = document.getElementById('bill_amt').value;
    let perct = document.getElementById('tip_percnt').value;
    let tip =   amount*(perct/100);
    let total = tip+ Number(amount);
    document.getElementById('tip_amt').value =tip;
    document.getElementById('total_bill').value = total;
}