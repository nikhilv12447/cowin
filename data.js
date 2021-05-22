const input = require('./input');
const centers = {
    "centers": [
        {
            "center_id": 585312,
            "name": "KAITHOON CHC (18-44 Yrs)",
            "address": "KAITHOON CHC",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Ladpura",
            "pincode": 325001,
            "lat": 25,
            "long": 75,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "0f26ce9e-1609-47d4-9fae-409c461402a2",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 550645,
            "name": "Dhulet PHC (45 Yrs)",
            "address": "Dhulet",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Sangod",
            "pincode": 325602,
            "lat": 24,
            "long": 76,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "d854f362-8f8e-4054-a451-cfb0fd5590f2",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 688978,
            "name": "ESI Thermal Disp (COVAX 45 Y )",
            "address": "THERMAL DISPENSERY ESI KOTA",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Urban",
            "pincode": 324008,
            "lat": 25,
            "long": 75,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "2a3fd3f3-78a4-46a7-9ca7-4753d6688bf2",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 593672,
            "name": "Rampura DH (18-44 Yrs)",
            "address": "Rampura District Hospital",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Urban",
            "pincode": 324006,
            "lat": 25,
            "long": 75,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "c42df35a-1d7e-4e7b-87e6-a4fb68e7be64",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 550635,
            "name": "Ramganjmandi CHC (18-44)",
            "address": "Ramganjmandi",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Khairabad",
            "pincode": 326519,
            "lat": 24,
            "long": 75,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "165e8e31-9e12-4dd1-b182-ece4f41855c0",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 615114,
            "name": "RAC Dispensary (COVAX - 45Yrs)",
            "address": "RAC Ground Bhitriya Kund",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Urban",
            "pincode": 324009,
            "lat": 25,
            "long": 75,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "4c2e3b15-18fc-4d15-8f36-bba81ff033ac",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 550647,
            "name": "Kanwas CHC (45 Yrs.)",
            "address": "Kanwas",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Sangod",
            "pincode": 325602,
            "lat": 24,
            "long": 76,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "cd81b9d4-5ea8-4a84-9e24-83d325fe573d",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 117996,
            "name": "Kaithun CHC (45 Yrs)",
            "address": "Kaithun CHC",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Ladpura",
            "pincode": 325001,
            "lat": 25,
            "long": 75,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "59fa1218-d7e3-4c6f-8a97-27b710c5170d",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 589744,
            "name": "Dadabadi UCHC (18-44 Yrs)",
            "address": "Dadabadi UCHC",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Urban",
            "pincode": 324009,
            "lat": 25,
            "long": 75,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "ed1ce609-0b68-4827-9329-b56d8633aef4",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 550660,
            "name": "Sultanpur CHC (45 Yrs)",
            "address": "CHC Sultanpur",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Sultanpur",
            "pincode": 325204,
            "lat": 25,
            "long": 76,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "f4e4678b-d7a1-4673-9b30-fcf4fea424c1",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 550648,
            "name": "Kundanpur PHC (18-44 Yrs)",
            "address": "PHC Kundanpur",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Sangod",
            "pincode": 325601,
            "lat": 25,
            "long": 76,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "03e33c29-de62-4400-8bf5-b754142c89ba",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 551405,
            "name": "Itawa CHC (45 Yrs)",
            "address": "Itawa",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Itawa",
            "pincode": 325004,
            "lat": 25,
            "long": 76,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "a39f2177-a0b0-42e5-9148-37ce24c5b4ab",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 550655,
            "name": "Digod PHC (Coviesh.) (45 Yrs)",
            "address": "Digod",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Sultanpur",
            "pincode": 325201,
            "lat": 26,
            "long": 82,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "950079f6-d611-4e89-8041-8fc2feabcae4",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 584089,
            "name": "Kalatalab UPHC (18-44 Yrs)",
            "address": "Kalatalab UPHC",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Urban",
            "pincode": 324002,
            "lat": 25,
            "long": 75,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "75c596e2-f203-4147-8085-32183461d91f",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 598225,
            "name": "Bhimganjmandi UCHC (45 Yrs)",
            "address": "Bhimganjmandi UCHC",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Urban",
            "pincode": 324002,
            "lat": 25,
            "long": 75,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "76f1fca9-7cc4-4532-8811-b8da05d8f77c",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 585352,
            "name": "SULTANPUR CHC (18-44 Yrs)",
            "address": "SULTANPUR CHC",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Sultanpur",
            "pincode": 325204,
            "lat": 25,
            "long": 76,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "c4f4a8d1-baba-4e47-b52b-d0b47a73ac15",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 570463,
            "name": "IMA Hall JK Lon Hosp (45 Yrs)",
            "address": "Nayapura Kota",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Urban",
            "pincode": 324001,
            "lat": 25,
            "long": 75,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "11b748b6-d1b9-40d3-be5c-fc962a0af849",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 117287,
            "name": "Vigyan Nagar UPHC (45 Yrs)",
            "address": "Vigyan Nagar UPHC",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Urban",
            "pincode": 324005,
            "lat": 25,
            "long": 75,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "b270ecd6-68d7-4f02-a2be-62196893b4f3",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 584145,
            "name": "Govind Nagar UPHC (45 Yrs.)",
            "address": "Govind Nagar UPHC",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Urban",
            "pincode": 324005,
            "lat": 25,
            "long": 75,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "9891ccec-18ec-4f6e-9d59-f4993fe037e4",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 550651,
            "name": "Sangod CHC (45 Yrs.)",
            "address": "Sangod CHC",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Sangod",
            "pincode": 325601,
            "lat": 24,
            "long": 76,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "13a396dd-fb42-4768-b378-6a66bf3202fe",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 550659,
            "name": "Simliya PHC (45 Yrs.)",
            "address": "Simliya PHC",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Sultanpur",
            "pincode": 325203,
            "lat": 25,
            "long": 76,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "cfedc085-46ef-4b9f-b641-1984ccc32f2a",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 550626,
            "name": "Khatoli CHC (45 Yrs)",
            "address": "Khatoli CHC",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Itawa",
            "pincode": 325009,
            "lat": 25,
            "long": 76,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "41e00921-3284-41bb-93d4-12921ef2f4ba",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 615131,
            "name": "Police Line Disp (COVAX 45Yrs)",
            "address": "Police Line Kota",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Urban",
            "pincode": 324001,
            "lat": 25,
            "long": 75,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "edb230ba-c558-40d7-bc3b-187266b7484e",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVAXIN",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 591870,
            "name": "Kanwas CHC (18-44 Yrs)",
            "address": "Kanwas CHC",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Sangod",
            "pincode": 325602,
            "lat": 24,
            "long": 76,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "05038918-356a-434e-9856-6e493db7304a",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 117331,
            "name": "Talwandi UPHC (45 Yrs)",
            "address": "Talwandi UPHC",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Urban",
            "pincode": 324005,
            "lat": 25,
            "long": 75,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "35e19e6b-7d3a-48a9-a7a2-c9a58dfe4cf4",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 660836,
            "name": "UPHC Nanta (18-44 Yrs)",
            "address": "UPHC Nanta",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Urban",
            "pincode": 324008,
            "lat": 25,
            "long": 75,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "2fcd4737-9cf2-45c5-8779-acef3db47d22",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "2fcd4737-9cf2-45c5-8779-acef3db47d22",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 10,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 117540,
            "name": "Tipta UPHC (45 Yrs)",
            "address": "Tipta UPHC",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Urban",
            "pincode": 324006,
            "lat": 25,
            "long": 75,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "fcd958b3-a7ec-4a5f-864a-d05821f7c770",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 570200,
            "name": "MBS PG NURSING COLL (18-44Yrs)",
            "address": "Govt PG Nursing Collage MBS Hospital",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Urban",
            "pincode": 324001,
            "lat": 25,
            "long": 75,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "df7de93b-c8a3-466f-aba1-117ef51773d0",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 585275,
            "name": "ITAWA CHC (18-44 Yrs)",
            "address": "ITAWA CHC",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Itawa",
            "pincode": 325004,
            "lat": 25,
            "long": 76,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "e7fe7b70-3518-47db-9ff8-15dd23c63f85",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 598189,
            "name": "NMCH SSB 2 (18-44 Yrs)",
            "address": "New Medical College Hospital",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Urban",
            "pincode": 324005,
            "lat": 0,
            "long": 0,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "71efedef-a959-4261-86e3-84cf9da50aaa",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 585333,
            "name": "SANGOD CHC (18-44 Yrs.)",
            "address": "SANGOD CHC",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Sangod",
            "pincode": 325601,
            "lat": 24,
            "long": 73,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "7d6a98f0-9c49-44ca-8867-bcb6204cdd6b",
                    "date": "20-05-2021",
                    "available_capacity": 1,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 1,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 550640,
            "name": "Mandana CHC (45 Yrs)",
            "address": "Mandana",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Ladpura",
            "pincode": 325003,
            "lat": 0,
            "long": 0,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "ecbc12d6-00ae-4581-99d0-2f1726f37b01",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 677936,
            "name": "Kunhadi UCHC (18-44 Yrs.)",
            "address": "KUNHADI UCHC",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Urban",
            "pincode": 324008,
            "lat": 25,
            "long": 75,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "ea5ed97f-0dc8-4c9a-a991-2a113be0f5e9",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 10,
                    "available_capacity_dose2": 0
                },
                {
                    "session_id": "ea5ed97f-0dc8-4c9a-a991-2a113be0f5e9",
                    "date": "21-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 18,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 10,
                    "available_capacity_dose2": 0
                }
            ]
        },
        {
            "center_id": 585590,
            "name": "BORKHEDA UPHC (45 Yrs)",
            "address": "BORKHEDA UPHC",
            "state_name": "Rajasthan",
            "district_name": "Kota",
            "block_name": "Urban",
            "pincode": 324001,
            "lat": 25,
            "long": 75,
            "from": "09:00:00",
            "to": "18:00:00",
            "fee_type": "Free",
            "sessions": [
                {
                    "session_id": "6dc07fc6-dad1-4fec-a834-e391d4547793",
                    "date": "20-05-2021",
                    "available_capacity": 0,
                    "min_age_limit": 45,
                    "vaccine": "COVISHIELD",
                    "slots": [
                        "09:00AM-11:00AM",
                        "11:00AM-01:00PM",
                        "01:00PM-03:00PM",
                        "03:00PM-06:00PM"
                    ],
                    "available_capacity_dose1": 0,
                    "available_capacity_dose2": 0
                }
            ]
        }
    ]
}


var newCenters = []
centers.centers.forEach(center => {
    let newSession = center.sessions.filter(session => session.date === "21-05-2021" && session.min_age_limit === 18 && (session.available_capacity > 0 || session.available_capacity_dose1 > 0))
    // console.log(center.address, newSession)
    if(newSession.length && input.lookingCenters[center.center_id] && center.fee_type === "Free"){
        newCenters.push({
            ...center,
            sessions: newSession
        })
    }
})

newCenters = newCenters.map(center => {
    return {
        center_id: center.center_id,
        captcha: "captcha",
        session_id: center.sessions[0].session_id,
        slot: center.sessions[0].slots[0]
    }
})
newCenters.forEach(center => console.log(center))