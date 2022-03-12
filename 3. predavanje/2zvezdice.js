/* 4. Napisati program koji na osnovu unetog M i N crta pravougaonik tih dimenzija.
N = 5, M=3;

***
* *
* *
* *
***            */

{
    let N = 8;
    let M = 5;
    console.log('*'.repeat(M));
    let middleRow = '*' + ' '.repeat(M-2) + '*';
    for (let i = 1; i <= N-2; i++) {  
        console.log(middleRow);
    }
    
    console.log('*'.repeat(M));
}
console.log('---------');

/* 5. N=4;
   *
  **
 ***
****         */

{
    let N = 7;
    for (let i = 1; i<=N; i++){
            console.log(' '.repeat(N-i) + '*'.repeat(i));   
    }
}

console.log('----------');

/* 6. N=5;
    *
   **
  * *
 *  *
*****      */

{
    let N = 8;
    console.log(' '.repeat(N-1) + '*'); 
    for (let i = 0; i < N-2; i++) {
        console.log(' '.repeat(N-2-i) + '*' + ' '.repeat(i) + '*');
    }
    console.log('*'.repeat(N));
}

console.log('---------');

/* 7. 
N=5;               N=4;
 ****               ***
  ***                **
   **              ****
 ****              ****               
 ****                                          */

 
   