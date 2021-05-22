// const data = [{
//   abc_skdj: 'axjl',
//   ab_cd: [
//     {
//       test_adk: "dsfl"
//     }
//   ],
//   obj_data: {
//     test: {
//       x_y: 'ab',
//       p_q_r: [[1, 2, 3], [{ j_k: 123 }]]
//     }
//   }
// }, {
//   abc_skdj: 'axjl',
//   ab_cd: [
//     {
//       test_adk: "dsfl"
//     }
//   ],
//   obj_data: {
//     test: {
//       x_y: 'ab',
//       p_q_r: [[1, 2, 3], [{ j_k: 123 }]]
//     }
//   }
// }]



// function parser(data){
//     var isArray = Array.isArray(data);
//     if(isArray){
//         let temp = [];
//         data.forEach(ele => {
//             if(typeof ele === "object") temp.push(parser(ele));
//             else temp.push(ele);
//         })
//         return temp
//     }else{
//         let temp = {};
//         for(let key in data){
//             if(typeof data[key] === "object") temp[convertCamelCase(key)] = parser(data[key]);
//             else temp[convertCamelCase(key)] = data[key];
//         }
//         return temp
//     }
// }

// function convertCamelCase(str){
//     var result = "";

//     for(let i=0; i<str.length; i++){
//         if(str[i] == "_"){
//             result += str[i+1].toUpperCase();
//             i++;
//         }else{
//             result += str[i];
//         }
//     }
//     return result;
// }
// console.log(JSON.stringify(parser(data)));

fetch("http://localhost:3233/gettoken").then(res => res.text()).then(token => {
    fetch("https://cdn-api.co-vin.in/api/v2/auth/getRecaptcha", {
        method: 'post',
        headers: {
            authorization: `Bearer ${token}`
        }
    }).then(res => {
        return res.json();
    }).then(data => {
        document.getElementById("captcha").innerHTML = data.captcha;
    })
})