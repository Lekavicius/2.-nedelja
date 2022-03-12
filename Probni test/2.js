/* 2. Zadatak

Napisati program koji ispisuje pescani sat za uneto N . (Nema potrebe proveravati ulazne podatke)

```  
    N=4           N=3        
    *       *     *     *    
     *     *       *   *      
      *   *         * *       
       * *           *      
        *           * *
       * *         *   *
      *   *       *     *     
     *     *      
    *       *
```

Za pola poena ispisati gornju polovinu slike na prikazan nacin:
```
    N=4          N=3         N=2
    *       *     *     *    *   *
     *     *       *   *      * *
      *   *         * *        
       * *                                                                       */

let N = 15;
for (let i = 1; i <= N; i++) {
    console.log(' '.repeat(i - 1) + '*' + ' '.repeat(2 * N - 2 * i + 1) + '*');
}
console.log(' '.repeat(N) + '*');
for (let i = N; i >= 1; i--) {
    console.log(' '.repeat(i - 1) + '*' + ' '.repeat(2 * N - 2 * i + 1) + '*');
}