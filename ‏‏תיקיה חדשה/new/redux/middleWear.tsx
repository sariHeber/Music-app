import axios from 'axios';
// import React from   'react';
// import { useDispatch } from 'react-redux';
// import { getAll1 } from '../Api/SongsApi';
 
// const url = 'http://localhost:8080/songs/';

// export const recipeMiddleware = async ({  }) => (next: (arg0: any) => any) => (action: { type: string; payload: any; }) => {
//     debugger
//     // {type:'GET_RECIPES',payload:null}
//     if (action.type == 'GET_RECIPES') {
//         // const getRecipes = async () => {
//         //     const recipes = await axios.get(`${URL}/getRecipes`) 
//         const getAll = async () => {
//             try {
//                 let alldata = await getAll1()
//                 debugger
//                 action.payload = alldata.data;
//                 return next(action)
//             }
//             catch (e) {
//                 console.log(e);
//             }
//         }
//         debugger
//         getAll()
//         return next(action);
//     }

//     return next(action)
// }