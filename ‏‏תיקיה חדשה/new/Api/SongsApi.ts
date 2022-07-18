import React from "react";
import axios from "axios";


// export async function gatAllSongs() {
//     debugger
//     let rec = await axios.get('http://localhost:8080/songs/all')
//     if (rec && rec.data) {
//         debugger
//         console.log(rec.data);
//         return rec.data
//     }
// }


export async function getAll1() {
    debugger
    let rec
    rec = await axios.get('http://localhost:8080/songs/all')
    if (rec && rec.data) {
        debugger
        console.log(rec.data);
        return rec.data
    }
}

// export const getAll = async () => {
//     try {
//         let alldata = await axios.get('http://localhost:8080/songs/all')
//         debugger
//         if (alldata ) {
//             debugger
//             console.log(alldata.data);
//             return alldata.data
//         }
//     }
//     catch (e) {
//         console.log(e);
//     }
// }