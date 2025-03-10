let saldo = 5;

// queremos retirar 10 euros

// Si mi saldo es 0 no puedo retirar dinero
if (saldo < 10) {
    console.log("Saldo insuficiente");
} else {
    // Decrementar en 10 el saldo de nuestra cuenta
    // Decirle al usuario cuanto saldo le queda

    saldo = saldo - 10;
    console.log("Su saldo restante es: ", saldo);
}