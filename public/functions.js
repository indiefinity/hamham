function roll(variable, max, amount) {
    eval(`var pepe = ${variable}`);
    pepe += amount;
    while (pepe > max) {pepe -= max;};
    eval(`${variable} = pepe`);
};