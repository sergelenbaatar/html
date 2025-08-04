function printPyramid(totalLines){
    for (let i=1; i<totalLines; i++) {
        let spaces = " ".repeat(totalLines - i);
        let stars = "*".repeat(2 * i-1);
        console.log(spaces + stars);
    }
}

printPyramid(20);