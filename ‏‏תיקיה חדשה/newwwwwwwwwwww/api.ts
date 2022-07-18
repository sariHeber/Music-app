import axios from "axios";
import React from "react";

export async function gatAllSongs() {
    debugger
    let rec = await axios.get('http://localhost:8080/songs/all')
    if (rec && rec.data) {
        debugger
        console.log(rec.data);
        return rec.data
    }
}











// function fetchData(someValue) {
//     return async (dispatch, getState) => {
//       dispatch(requestStarted())
  
//       // Have to declare the response variable outside the try block
//       let response
  
//       try {
//         response = await myAjaxLib.post('/someEndpoint', { data: someValue })
//       } catch (error) {
//         // Ensure we only catch network errors
//         dispatch(requestFailed(error.message))
//         // Bail out early on failure
//         return
//       }
  
//       // We now have the result and there's no error. Dispatch "fulfilled".
//       dispatch(requestSucceeded(response.data))
//     }
//   }