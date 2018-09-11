const place_a = [1, 2, 3, 4, 5, 6, 7, 8];
const place_b = [];
const place_c = [];

function concutArray(arr1, arr2, firstElementIndex) {
    arr2.forEach((element, index) => {
        if(index >= firstElementIndex) {
            arr1.push(element)
        }
        
    });
    arr2.splice(firstElementIndex, arr2.length);
}

// function concutArrayModefied(){

// }

function sortTypeLeftRight(arrA, arrB, arrC){
    console.log('1')
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('2'); // Конец первого этапа сортировки
    arrA.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    concutArray(arrC, arrB, 0);
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('3'); // Конец второго этапа сортировки
    //повтор стр 1, 2
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('4'); // Конец третьего этапа сортировки
    // Частичный повтор строк 3,4
    arrA.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('5');
    arrA.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    concutArray(arrC, arrB, 0);
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('6'); // Повтор второго этапа сортировки (когда всё попорядку и в конце один элемент)

    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('***')
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('7'); // Повтор первого этапа сортировки

    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('8');

    //повтор этапа 4, без пункта 1
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('9');
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    concutArray(arrC, arrB, 0);
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    
    console.log('10 ***');
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // repeat 7 
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // ...
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    //repeat 1
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrC.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('11');
    // repeat 1
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);

    arrA.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrC.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    
    console.log('12');

    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);

    // repeat 1
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('13');

    //repeat 2
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    concutArray(arrC, arrB, 0);
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('****');

    console.log('10 ***');
    // arrB.push(arrA.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // repeat 7 
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // ...
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    //repeat 1
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrC.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('11');
    
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrC.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);

    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);

    arrA.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    concutArray(arrA, arrB, 1);
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    concutArray(arrC, arrB, 0)
    
    console.log('Задача для шести плит');


    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('2'); // Конец первого этапа сортировки
    arrA.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    concutArray(arrC, arrB, 0);
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('3'); // Конец второго этапа сортировки
    //повтор стр 1, 2
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('4'); // Конец третьего этапа сортировки
    // Частичный повтор строк 3,4
    arrA.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('5');
    arrA.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    concutArray(arrC, arrB, 0);
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('6'); // Повтор второго этапа сортировки (когда всё попорядку и в конце один элемент)

    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('***')
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('7'); // Повтор первого этапа сортировки

    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('8');

    //повтор этапа 4, без пункта 1
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('9');
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    concutArray(arrC, arrB, 0);
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    
    console.log('10 ***');
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);

    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // ...
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    //repeat 1
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrC.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('11');

    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrC.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrA.push(arrB.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);

    arrC.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrA.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    arrB.push(arrC.pop());
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    console.log('!!!')
    concutArray(arrC, arrB, 0);
    console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // -----------------------
    // arrB.push(arrA.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrC.push(arrA.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrC.push(arrB.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrB.push(arrA.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrA.push(arrC.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrB.push(arrC.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrB.push(arrA.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrC.push(arrA.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    
    // arrC.push(arrB.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrA.push(arrB.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrA.push(arrC.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrC.push(arrB.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);

    // arrB.push(arrA.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrC.push(arrA.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrC.push(arrB.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrA.push(arrB.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);

    // // // repeat 1
    // arrB.push(arrC.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrA.push(arrC.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrA.push(arrB.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // // ...
    // arrB.push(arrC.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // //repeat 1
    // arrC.push(arrA.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrB.push(arrA.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrB.push(arrC.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrA.push(arrC.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrA.push(arrB.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrC.push(arrB.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);

    // arrC.push(arrA.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrA.push(arrB.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // // // repeat 1
    // arrB.push(arrC.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrA.push(arrC.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrA.push(arrB.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // // ...
    // console.log('-');

    // arrB.push(arrC.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // console.log('14');

    // arrB.push(arrA.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrC.push(arrA.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrC.push(arrB.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrB.push(arrA.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);

    // console.log('repeat');
    // arrA.push(arrC.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrB.push(arrC.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrB.push(arrA.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);

    // arrC.push(arrA.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // // // repeat 1
    
    // arrC.push(arrB.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrA.push(arrB.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrA.push(arrC.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    // arrC.push(arrB.pop());
    // console.log(place_a + ' __ ' + place_b + ' __ ' + place_c);
    

    
}

sortTypeLeftRight(place_a, place_b, place_c);