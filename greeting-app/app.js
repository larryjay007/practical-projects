function greetUser(name) {

    if (!name) {
        name = "Guest";
    }
    return "Hello, " + name.toUpperCase();
}

console.log(greetUser("john"));
console.log(greetUser(""));
console.log(greetUser(null));
console.log("Greeting function updated");