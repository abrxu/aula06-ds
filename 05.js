// É utilizado o Insertion Sort
// Obs: Código exemplo. NÃO RODA

function printNames() {
  for (i = 0; i <= pessoas.length - 1; i++) {
    console.log(pessoas[i].name);
  }
}

function Pessoa(name, age) {
  this.name = name;
  this.age = age;

  pessoas = new Array();
  pessoas.push(new Pessoa("Bjorn", 25));
  pessoas.push(new Pessoa("Lagertha", 32));
  pessoas.push(new Pessoa("Athelstan", 18));
  pessoas.push(new Pessoa("Ragnar", 30));
  pessoas.push(new Pessoa("Floki", 23));
  pessoas.push(new Pessoa("Rollo", 27));
  console.log("Ordem inicial");
  printNames();
}

for (i = 1; i <= pessoas.length - 1; i++) {
  var x = pessoas[i];
  var i = i - 1;

  while (x.name < pessoas[j].name) {
    pessoas[j + 1] = pessoas[j];
    j--;
    if (j < 0) {
      break;
    }

    pessoas[j + 1] = x;

    console.log("");
    console.log("Ordem final");
    printNames();
  }
}
