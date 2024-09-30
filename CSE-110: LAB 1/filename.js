window.onload = function() {
    document.getElementById("subscribe-form").addEventListener("submit", alertSubFunc);
}
    
function alertSubFunc(event) {
    event.preventDefault();
    const inputValue = document.getElementById("email").value;
    alert("Subscription from " + inputValue);
}

