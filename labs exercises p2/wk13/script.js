// encode name
let full_name='Ana Alcivar';
let encoded_full_name='';

for (let i in full_name) {
    let temp=full_name[i];
    console.log(full_name[i]);
    let code = full_name.charCodeAt(i);
    console.log(code);
    code+= 1;
    console.log(code);
    let new_string= String.fromCharCode(code);
    console.log(new_string);
    encoded_full_name=encoded_full_name+new_string;
    console.log(encoded_full_name);
}

// *******************


//Display the plain and encoded text
document.write('<aside style="position:fixed; top: 70px; right:40px;">');
document.write('<strong>Full Name: </strong>'+full_name+'<br>');
document.write('</aside>');
document.write('<aside style="position:fixed; top: 50px; right:40px;">');
document.write('<strong>Full Name: </strong>'+encoded_full_name+' <br>');
document.write('</aside>');

