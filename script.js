function updateTextInput(val) {
    document.getElementById('rateshow').innerHTML = `${val}%`;
}

function showInterest() {
    const amount = document.getElementById("amount").value
    const rate = document.getElementById("rate").value
    const years = document.getElementById("years").value
    const total=((amount * rate * years) / 100)+Number(amount)
    document.getElementById("interestDescription").innerHTML = `<pre>If you deposit ${amount}.
at an interest rate of ${rate}.
You will receive an amount of ${total},
in the year ${years}.
    </pre>`

}
