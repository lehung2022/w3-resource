let var_name = "newVariable";
let var_value = "newValue";
  
this[var_name] = var_value;
console.log(var_name);
console.log(this[var_name]);
// write this one the screen
// document.write(var_name);
document.write(this[var_name]);

