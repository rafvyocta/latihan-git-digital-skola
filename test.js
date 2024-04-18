function runTests() {
   
    function tambahkan(angka1, angka2) {
        return angka1 + angka2;
    }

    
    function testPenambahan() {
        let hasil = tambahkan(2, 3); 
        if (hasil === 5) {
            console.log('Test Case 1: Success!'); 
        } else {
            console.error('Test Case 1: Failed!'); 
        }
    }
    
    function testLainnya() {
        let hasil = tambahkan(5, 0);
        if (hasil === 0) {
            console.log('Test Case 2: Success!');
        } else {
            console.error('Test Case 2: Failed!');
        }
    }

    testPenambahan();
    testLainnya();
}


runTests();
