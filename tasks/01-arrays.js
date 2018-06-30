//task #1.1
// Преобразовать массив 
// arr = [1, 4, 5, 6, ['form', 1, 6], 67, 'list']
// в массив newArr = [1, 4, 5, 6, 'form', 1, 6, 67, 'list']

function changeArr(arr) {    
    let innerArr = arr.map(el => el);
    
    for (let i = 0; i < innerArr.length; i++) {

        if (Array.isArray(innerArr[i])) {
            let dellElemOfArr = innerArr.splice(i, 1);
            let j = i;

            for (let el of dellElemOfArr[0]) {                
                innerArr.splice(j, 0, el);
                j++;
            }
        }
    }
    
    return innerArr;
}

console.log(changeArr([1, 4, 5, 6, ['form', ['row', 23, 'user'], 1, 6], 67, 'list', [23, 'login']]));
