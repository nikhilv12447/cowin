const http = require("https");
const readline = require("readline");
const crypto = require("crypto");
const fs = require("fs");
const inputs = require("./input");
var txnId = "2d8a5fc1-28c9-4498-94e2-2dc23cd322d6";
const secret = "U2FsdGVkX1/SgTB8aZz1a+Yxg+VUBVZJfTDbOo6ppo2YcDSgGgayFl5EtiQ5vHZALo/AjTNq3du3OKFf6sbC4g==";
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJjYmZlYmUzMy0zMmFiLTQ3MmYtOGFkNi03ZWU0NmNjN2RlYjciLCJ1c2VyX2lkIjoiY2JmZWJlMzMtMzJhYi00NzJmLThhZDYtN2VlNDZjYzdkZWI3IiwidXNlcl90eXBlIjoiQkVORUZJQ0lBUlkiLCJtb2JpbGVfbnVtYmVyIjo4OTUzNDMxODc0LCJiZW5lZmljaWFyeV9yZWZlcmVuY2VfaWQiOjM4ODIzODQ1MjE1MjIwLCJzZWNyZXRfa2V5IjoiYjVjYWIxNjctNzk3Ny00ZGYxLTgwMjctYTYzYWExNDRmMDRlIiwidWEiOiJNb3ppbGxhLzUuMCAoWDExOyBMaW51eCB4ODZfNjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS85MC4wLjQ0MzAuNzIgU2FmYXJpLzUzNy4zNiIsImRhdGVfbW9kaWZpZWQiOiIyMDIxLTA1LTE5VDEzOjM0OjAyLjA0NloiLCJpYXQiOjE2MjE0MzEyNDIsImV4cCI6MTYyMTQzMjE0Mn0.6Ftfh6WH38DBgrHJBiCpXIuwIm-HG29QGog7GIRNLwk";

const distId = inputs.distId.kota, 
date=inputs.date,
minAgeLimit=inputs.ageLimit.age18to44, 
mobileNumber = inputs.mobileNumber, 
slotIndex = inputs.slotIndex, 
beneficiarieIndex=inputs.beneficiarieIndex
lookingCenters= inputs.lookingCenters;

var captcha = "";

const baseUrl = "https://cdn-api.co-vin.in/api";
const urls = {
    calenderByDist: `/v2/appointment/sessions/calendarByDistrict?district_id=${distId}&date=${date}`,
    beneficiaries: "/v2/appointment/beneficiaries",
    schedule: "/v2/appointment/schedule",
    getRecaptcha: "/v2/auth/getRecaptcha",
    generateOTP: "/v2/auth/generateMobileOTP",
    confirmOTP: "/v2/auth/validateMobileOtp",
    logout: "/v2/auth/logout",
    settoken: "http://localhost:3233/settoken"
    // schedule: "/mockapi"
}

const permanentHeaders = {
    authority: "cdn-api.co-vin.in",
    "sec-ch-ua": `" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"`,
    accept: "application/json, text/plain, */*",
    "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36",
    origin: "https://selfregistration.cowin.gov.in",
    referer: "https://selfregistration.cowin.gov.in/",
    "accept-language": "en-US,en;q=0.9,hi;q=0.8"
}

/**
 * 
 * @param {*} url 
 * @param {*} method 
 * @param {*} headers 
 * @param {*} reqData 
 * @returns 
 */
function apiCall(url, method, headers={}, reqData={}){
    var body = JSON.stringify(reqData);
    return new Promise((resolve, reject) => {
        const req = http.request(url, {
            method: method.toUpperCase(),
            headers
        }, res => {
            var chunk = [];
            res.on("data", data => {
                chunk.push(data)
            })

            res.on("end", () => {
                resolve(Buffer.concat(chunk).toString())
            })
        });
        
        req.on("error", error => {
            reject(error);
        });
        
        if(method.toUpperCase() === "GET") req.end();
        else req.end(body);
    })
}

function readFile(filePath){
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, function(err, buf) {
            if(err) reject(err);
            else resolve(buf.toString());
        });
    })
}

function writeFile(token, filePath){
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, token, (err) => {
            if (err) reject(err);
            else resolve("Successfully Written to File.");
        });
    })
}

function getBeneficiariesRefIds(){
    let headers = {
        ...permanentHeaders,
        authorization: `Bearer ${token}`
    }

    return apiCall(baseUrl+urls.beneficiaries, "get", headers).then(data => {
        if(data.trim() === "Unauthenticated access!"){
            throw Error(data)
        }else{
            var beneficiaries = JSON.parse(data).beneficiaries.map(ele => ele.beneficiary_reference_id);
            return beneficiarieIndex === null ? beneficiaries : [beneficiaries[beneficiarieIndex]];
        }
    })
}

function getCenters(){
    let headers = {
        ...permanentHeaders,
        authorization: `Bearer ${token}`
    }

    return apiCall(baseUrl+urls.calenderByDist, "get", headers).then(data => {
        // var centers = JSON.parse(data).centers.filter(ele => ele.sessions[0].min_age_limit === minAgeLimit && lookingCenters[ele.center_id] && ele.fee_type === "Free" && (ele.sessions[0].available_capacity > 0 || ele.sessions[0].available_capacity_dose1 > 0));
        var newCenters = []
        JSON.parse(data).centers.forEach(center => {
            let newSession = center.sessions.filter(session => session.date === date && session.min_age_limit === minAgeLimit)// && (session.available_capacity > 0 || session.available_capacity_dose1 > 0))
            
            if(newSession.length && lookingCenters[center.center_id] && center.fee_type === "Free"){
                newCenters.push({
                    ...center,
                    sessions: newSession
                })
            }
        })
        newCenters = newCenters.map(center => {
            return {
                center_id: center.center_id,
                captcha: captcha,
                session_id: center.sessions[0].session_id,
                slot: center.sessions[0].slots[slotIndex]
            }
        })
        return newCenters
    })
}

function BookSlot(reqBody){
    let headers = {
        ...permanentHeaders,
        authorization: `Bearer ${token}`,
        "Content-Length": Buffer.byteLength(JSON.stringify(reqBody)),
        'Content-Type': 'application/json'
    }

    return apiCall(baseUrl+urls.schedule, "post", headers, reqBody).then(data => {
        var id = JSON.parse(data);
                
        return id;
    })
}

function askQuestion(question){
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        rl.question(question, function(ans) {
            resolve(ans);
            rl.close();
        });
    })
}

function getOtp(){
    let reqData = {
        mobile: mobileNumber,
        secret
    }
    let headers = {
        ...permanentHeaders,
        "Content-Length": Buffer.byteLength(JSON.stringify(reqData)),
        'Content-Type': 'application/json'
    }
    return apiCall(baseUrl+urls.generateOTP, "post", headers, reqData).then(data => {
        console.log(data)
        if(data === "OTP Already Sent") {
            return readFile("txnid.txt").then(txnId => {
                console.log("read -->", txnId);
                return {txnId}
            })
        }else {
            data = JSON.parse(data);
            console.log("write -->", data);
            writeFile(data.txnId, "txnid.txt");
            return data
        }
    }).catch(err => {
        throw new Error(err);
    })
}

function confirmOtp(otp, txnId){
    let reqData = {
        otp: crypto.createHash("sha256").update(otp).digest('hex'),
        txnId: txnId
    }
    console.log(reqData)
    let headers = {
        ...permanentHeaders,
        "Content-Length": Buffer.byteLength(JSON.stringify(reqData)),
        'Content-Type': 'application/json'
    }
    return apiCall(baseUrl+urls.confirmOTP, "post", headers, reqData).then(data => JSON.parse(data)).catch(err => {
        throw new Error(err);
    })
}

function logout(token){
    let headers = {
        ...permanentHeaders,
        authorization: `Bearer ${token}`
    }

    return apiCall(baseUrl+urls.logout, "get", headers).then(data => {
        console.log(data)
    })
}

function setToken(token){
    let reqData = JSON.stringify({ token })
    let headers = {
        "Content-Length": Buffer.byteLength(reqData),
        'Content-Type': 'application/json'
    }
    
    return new Promise((resolve, reject) => {
        const req = require("http").request(urls.settoken, {
            method: "POST",
            headers
        }, res => {
            var chunk = [];
            res.on("data", data => {
                chunk.push(data)
            })
    
            res.on("end", () => {
                resolve(Buffer.concat(chunk).toString())
            })
        });
        
        req.on("error", error => {
            reject(error);
        });

        req.end(reqData);
    })
}

function fn(num){
    getBeneficiariesRefIds().then(ben => {
        getCenters().then(centers => {
            if(centers.length){
                console.log(num, centers, ben.length)
                centers.forEach(center => {
                    BookSlot({
                        dose: 1,
                        beneficiaries: ben,
                        ...center
                    }).then(id => console.log(id))
                })
            }else {
                console.log(num, centers, ben.length)
                setTimeout(() => {
                    fn(num+1);
                },1000)
            };
        })
    }).catch(err => {
        console.log(err.message);
        getOtp().then(otpRes => {
            txnId = otpRes.txnId;
            askQuestion("Enter Otp:").then(otp => {
                confirmOtp(otp, otpRes.txnId).then(cnfOtpRes => {
                    token = cnfOtpRes.token;
                    writeFile(token, "token.txt");
                    setToken(token).then(() => askQuestion("Enter Captcha:")).then(data => {
                        captcha = data;
                        fn(1);
                    })
                })
            })
        }).catch(err => {
            console.log(err)
        })
    })
}

readFile("token.txt").then(data => {
    setToken(data).then(() => askQuestion("Enter Captcha:")).then(capdata => {
        askQuestion("logout?:").then(ans => {
            if(ans.trim() === "y"){
                logout(data)
            }else{
                captcha = capdata;
                console.log("read -->", data);
                token = data;
                fn(1);
            }
        })
    })
})

// console.log(crypto.createHash("sha256").update("397931").digest('hex'));

