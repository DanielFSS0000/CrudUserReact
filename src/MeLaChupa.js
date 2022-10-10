const keys = ["name", "life", "power", "talk"];
const values = ["Manz", 99, 10, function() { return "Hola" }];

const chupemela = values.map((Tamayito, index) => [keys[index], Tamayito]);
const user = Object.fromEntries(chupemela);  // {name: 'Manz', life: 99, power: 10, talk: ƒ}
