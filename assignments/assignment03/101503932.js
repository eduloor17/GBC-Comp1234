function part1(){
    // Start your code here for first part. There is no need to return any value.
    const studentID='101503932';
    let FullName='Eduardo Loor';
    let LabTeacher = 'Leonard Zajaczkowski';
    let LabDay = 'Wednesday';
    let semester = 'Winter 2024';

    //I will encode and save in new variables.
    let studentID_E='';
    let FullName_E='';
    let LabTeacher_E='';
    let LabDay_E='';
    // I used for () {} to encode and save each variable.
    for (let s in studentID) {
        //To encoded student id
        let temp1=studentID[s];
        //console.log(studentID[s]);
        let code1 = studentID.charCodeAt(s);
        //console.log(code1);
        code1+= 1;
        //console.log(code1);
        let new_string1= String.fromCharCode(code1);
        //console.log(new_string1);
        studentID_E=studentID_E+new_string1;
        //console.log(studentID_E);
    }
    for (let f in FullName) {
        //To encoded FullName
        let temp2=FullName[f];
        // console.log(FullName[f]);
        let code2 = FullName.charCodeAt(f);
        // console.log(code2);
        code2+= 1;
        // console.log(code2);
        let new_string2= String.fromCharCode(code2);
        // console.log(new_string2);
        FullName_E=FullName_E+new_string2;
        //  console.log(FullName_E);
    }
    for (let l in LabTeacher) {
        //To encoded LabTeacher
        let temp3=LabTeacher[l];
        //console.log(LabTeacher[l]);
        let code3 = LabTeacher.charCodeAt(l);
        //console.log(code3);
        code3+= 1;
        //console.log(code3);
        let new_string3= String.fromCharCode(code3);
        //console.log(new_string3);
        LabTeacher_E=LabTeacher_E+new_string3;
        //console.log(LabTeacher_E);
    }
    for (let d in LabDay) {
        //To encoded LabDay
        let temp4=LabDay[d];
        // console.log(FullName[d]);
        let code4 = LabDay.charCodeAt(d);
        // console.log(code4);
        code4+= 1;
        // console.log(code4);
        let new_string4= String.fromCharCode(code4);
        // console.log(new_string);
        LabDay_E=LabDay_E+new_string4;
        //console.log(LabDay_E);
    }
//I am going to show the normal and encoded text
    document.write('<aside style="position:fixed; bottom: 80px; right:50px;">');
    document.write('<strong>Student ID: </strong>'+studentID+'<strong> Full Name: </strong>'+FullName+'<br>');
    document.write('<strong>Lab Professor: </strong>'+LabTeacher+'<strong> Lab Session Day: </strong>'+LabDay+'<br>');
    document.write('</aside>');
    document.write('<aside style="position:fixed; bottom: 20px; right:30px;">');
    document.write('<strong>Encoded Student ID: </strong>'+studentID_E+'<strong> Encoded Full Name: </strong>'+FullName_E+'<br>');
    document.write('<strong>Encoded Lab Professor: </strong>'+LabTeacher_E+'<strong> Encoded Lab Session Day: </strong>'+LabDay_E+'<br>');
    document.write('</aside>');
}

function part2(num1, num2) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here
    //console.log(num1);
    num1=num1+5; // here I add number 5 to num1. example:num1=4.. num1=4+5 => num1=9
    num2=num2-3; // here I Subtract number 3 to num2. example:num2=9.. num2=9-3 => num2=6
    //console.log(num1);   //console.log(num2);
    if (num1 < num2) {
        _return=-1; //if number1 is less than number2, the _return should be -1
    } else if (num1===num2) {
        _return=0; // if number1 and number2 are equal, the _return should be 0
    } else {
        _return=1; // if number1 is bigger than number2 , the _return should be 1
    }
    //console.log('the return is'+_return);
    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


function part3(startNum, endNum) {
    // Assign the return value to a variable named _return
    let _return = '';
    // To hold the sum of numbers for the divisibility condition
    //my code start here. I am going to use console to know what are the startNum and endNum.
    //console.log('start'+startNum);
    //console.log('end'+endNum);
    // I used temp(1-5) variables to put in different order
    let temp1='';
    let temp2='';
    let temp3='';
    let temp4='';
    let temp5='';
    let sum=0;
    if (startNum<endNum) {
        //ascending order
        for (let a = startNum; a <= endNum; a++) {
            temp1 += a;
            sum += a;
        }
        if (sum % 3 === 0) {
            _return='Magic'+temp1;
            /*console.log('string is ' + temp1);
            console.log('Sum  ' + sum);*/
        }
    }else if (startNum>endNum) {
        //descending order without " Magic"
        for (let b = startNum; b >= endNum; b--) {
            temp2 += b;
            sum += b;
        }
        if (sum % 3 !== 0) {
            _return = temp2;
      //      console.log('string is(2)' + temp2);
      //      console.log('Sum (2) ' + sum);
        }

        for (let c = startNum; c >= endNum; c--) {
            temp3 += c;
            sum += c;
        }
        if (sum % 3 === 0) {
            _return = 'Magic'+temp3;
        //    console.log('string is(3)' + temp3);
        //    console.log('Sum (3) ' + sum);
        }
    } else if (startNum===endNum) {
        //the sum as a string and prepend "MAGIC" when sum is divisible by 3
        sum += startNum+endNum;
        if (sum % startNum === 0) {
            temp4 = sum;
            _return = '' + temp4;
        //    console.log('string is(4)' + temp4);
        //    console.log('Sum (4) ' + sum);
        }
        if (sum % 3 === 0) {
            temp5 = sum;
            _return = 'Magic' + temp5;
       //     console.log('string is(5)' + temp5);
       //     console.log('Sum (5) ' + sum);
        }
    }
    /* Your code ends here.
       Don't add or change anything after this line.*/
       return _return;      
}




function part4(array_index, array) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here
    /*console.log('array index ' + array_index);*/
    //console.log('array ' + array);
    if ((array_index>=0) && (array_index<array.length)){
        //console.log('valid '+array_index);
        /*If the value at array_index is even, sum the values from the
        beginning of the array to just before array_index (exclude the value
        at array_index itself). Set _return to this sum.*/
        if (array[array_index] === 0) {
            _return = true;
            //If array_index is zero, set _return=true, and override the next conditions
        } else
        if (array[array_index] % 2 === 0) { // Check if the value at array_index is even
            let even = 0;
            // Sum the values from the beginning of the array to just before array_index
            for (let e = 0; e < array_index; e++) {
                even += array[e];
            }
            _return = even;
        } else { // If the value at array_index is odd
            let odd = 0;
            // Sum the values from just after array_index to the end of the array
            for (let o = array_index + 1; o < array.length; o++) {
             odd = odd + array[o];
            }
            _return = odd;
        }
    } else {
        //console.log('no valid '+array_index);
       _return=false;
    }
    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


function part5(array) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here
    // totalOdd and totalEven, I used to make sum of numbers in two groups.
    let totalOdd=0;
    let totalEven=0;
    //I created new_array's to organize first the odd numbers and then even numbers.
    let new_array=[];
    let new_array1 = [];
    let new_array2 = [];

    for (let a in array) {
        if (array[a] % 2 === 0) {
            // even number section. Example 2 4 6
            totalEven+=array[a]; //I add to totalEven only if the number is even.
            new_array1.push(array[a]); //If array[a] contain an even number, I add to new_array1
            //console.log(new_array1);
        } else {
            // odd number section. Example 1 3 5.
            totalOdd=totalOdd+array[a]; //I add to totalOdd only if the number is odd.
            new_array2.push(array[a]); //If array[a] contain an odd number, I add to new_array2
          //  console.log(new_array2);
        }
    }

    // Concatenate the arrays to get odd numbers followed by even numbers
    new_array = new_array2.concat(new_array1);
    //console.log("Original array:", array);
    //console.log("Rearranged array:", new_array);
    // I am going to add sum into my new_array.
    new_array.push(totalOdd);
    new_array.push(totalEven);
    //console.log("Rearranged array:", new_array);
    _return=new_array; //After Organized and looking in console.log() all numbers and sum of odd and even properly, I show new_array

    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


