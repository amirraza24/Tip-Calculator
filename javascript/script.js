const tipcalcy = () => {
    let amount = document.getElementById('bill_amt').value;
    let perct = document.getElementById('tip_percnt').value;
    let people = document.getElementById('num_of_ppl').value;
    let tip =   amount*(perct/100)/Number(people);
    let total = tip+Number(amount)/Number(people);
    document.getElementById('tmpp').value =tip;
    document.getElementById('total_bill').value = total;
}