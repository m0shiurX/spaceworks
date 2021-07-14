// function solution(A, B, P) {
//     let sorted_contacts = [];
//     for (i = 0; i < B.length; i++) {
//         (B[i].includes(P)) && sorted_contacts.push(A[i]);
//     }
//     console.log(sorted_contacts.sort());
//     return sorted_contacts.length == 0 ? "NO CONTACT" : sorted_contacts.sort()[0];
// }

// // var A = ["adam", "eva", "leo"], B = ["121212121", "111111111", "444555666"], P = "121";
// var A = ['sander', 'amy', 'ann', 'michael'], B = ['123456789', '1234567890', '789123456', '123123123'], P= '1'
// let res = solution(A,B,P);
// console.log(res);


// function solution(S) {
//     //clean all dash and spaces
//     let phone_digits = S.replace(/-|\s/g,"");
//     let remaining_digits = phone_digits.length%3;
//     // console.log(remaining_digits);
//     if(remaining_digits == 1) {
//         return phone_digits.replace(/(\d{3})(?=\d\d)/g, '$1-').replace(/(\d{2})(?=\d\d)/g, '$1-');
//     } else {
//         return phone_digits.replace(/(\d{3})(?=\d)/g, '$1-');
//     }
// }


// let ans = solution('222--22-22 222');
// let ans_2 = solution('222');
// let ans_3 = solution('222--22-22 22');

// console.log("i-1: ", ans);
// console.log("i-2: ", ans_2);
// console.log("i-3: ", ans_3);
