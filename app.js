// Show Splash Screen and then switch to the main app
window.onload = function () {
    setTimeout(() => {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('app-container').style.display = 'block';
    }, 3000); // Show splash for 3 seconds
};

// Global variables for balance and history
let balance = 0;
let history = [];

// Investment function
function invest(amount, returns) {
    const message = `You invested ₹${amount} and will receive ₹${returns} after 32 minutes.`;
    alert(message);
    balance += returns;
    history.push(`Invested ₹${amount} → Received ₹${returns}`);
    updateHistory();
}

// Deposit function
function deposit() {
    const depositAmount = prompt("Enter amount to deposit:");
    if (depositAmount) {
        alert(`Deposited ₹${depositAmount}`);
        balance += parseInt(depositAmount);
        history.push(`Deposited ₹${depositAmount}`);
        updateHistory();
    }
}

// Withdraw function
function withdraw() {
    const withdrawAmount = prompt("Enter amount to withdraw:");
    if (withdrawAmount) {
        if (withdrawAmount <= balance) {
            alert(`Withdrew ₹${withdrawAmount}`);
            balance -= parseInt(withdrawAmount);
            history.push(`Withdrew ₹${withdrawAmount}`);
            updateHistory();
        } else {
            alert("Insufficient balance!");
        }
    }
}

// Logout function
function logout() {
    alert("You have been logged out.");
    location.reload();
}

// Update transaction history
function updateHistory() {
    const historyElement = document.getElementById('history');
    historyElement.innerHTML = history.map(item => `<p>${item}</p>`).join('');
}
