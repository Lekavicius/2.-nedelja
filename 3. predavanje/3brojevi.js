/*  N=5;
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1                                             */
{
let N = 5;
let row = ''
for (let i = 1; i <= N; i++){
    for (let j = 0; j <=N-i; j++) {
        row +=j + 1 + ' '
        
    }
    row+='\n'
}
console.log(row);
}
console.log('----------');

