function makeLine(size) {
    let line = '';
    for(i = 0; i < size; i++){
    line += '#';
}
return line;
}
console.log(makeLine(5));