function greetUser(name) {
    if (!name || typeof name !== "string") {
        name = "Guest";
    } else {
        name = name.trim();
        if (name === "") {
            name = "Guest";
        }
    }

    return "Hello, " + name.toUpperCase();
}

console.log(greetUser("john"));
console.log(greetUser(""));
console.log(greetUser(null));
console.log(greetUser("  john  "));