import { userTypes } from "../types/userTypes";


  export const verifyCodeAsync = (code) => {
    return (dispatch) => {
      console.log (window.confirmationResult)
      window.confirmationResult.confirm(code).then( (result) => {
        const user = result.user.auth.currentUser;
      console.log(user)
      }).catch((error) => {
        console.log(error)
       
      })
    }
  }
 const updateprofile= (data)=> {
  return{
    type: userTypes.USER_CREATE, payload:{user:data}
  }
 }

  export const UpdateProfileAsync= (data)  =>{
    return (dispatch) => {
   dispatch(updateprofile(data))

    }
  }
// hacer
  
  // export const actionSignPhoneAsync = (codigo) => {
  //   return (dispatch) => {
  //     const confirmationResult = window.confirmationResult;
  //     confirmationResult
  //       .confirm(codigo)
  //       .then((result) => {
  //         const user = result.user;
  //         console.log(user);
  //         const { displayName, email, phoneNumber, accessToken, photoURL, uid } =
  //           user.auth.currentUser;
  //         dispatch(
  //           actionSignPhoneSync({
  //             name: displayName,
  //             email,
  //             accessToken,
  //             phoneNumber,
  //             avatar: photoURL,
  //             uid,
  //             error: false,
  //           })
  //         );
  //         searchInfo(uid, displayName, email, photoURL, phoneNumber);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         dispatch(
  //           actionSignPhoneSync({ error: true, errorMessage: error.message })
  //         );
  //       });
  //   };
  // };
  // export const actionSignPhoneSync = (user) => {
  //   return {
  //     type: userTypes.USER_SIGNPHONE,
  //     payload: { ...user },
  //   };
  // };
  // export const actionAuthenticationSync = () => {
  //   return {
  //     type: userTypes.USER_AUTHENTICATION,
  //   };
  // };
  
  // export const actionUserCreateAsync = ({ password, email, name }) => {
  //   return async (dispatch) => {
  //     try {
  //       await updatePassword(auth.currentUser, password);
  
  //       await updateEmail(auth.currentUser, email);
  
  //       await updateProfile(auth.currentUser, {
  //         displayName: name,
  //       });
  //       dispatch(actionUserCreatesync({ name, email, password, error: false }));
     
  //     } catch (error) {
  //       console.log(error);
  //       dispatch(
  //         actionUserCreatesync({ error: true, errorMessage: error.message })
  //       );
  //     }
  //   };
  // };
  // const actionUserCreatesync = (parcialUser) => {
  //   return {
  //     type: userTypes.USER_CREATE,
  //     payload: { ...parcialUser },
  //   };
  // };
  
  // export const loginProviderAsync = () => {
  //   return (dispatch) => {
    
  //       .then((result) => {
  //         const user = result.user;
  //         console.log(user);
  //         const { displayName, accessToken, photoURL, phoneNumber, uid } =
  //           user.auth.currentUser;
  
  //         dispatch(
  //           actionLoginSync({
  //             email: user.email,
  //             name: displayName,
  //             accessToken,
  //             avatar: photoURL,
  //             phoneNumber,
  //             error: false,
  //           })
  //         );
  //         console.log(uid);
  //         searchInfo(uid, displayName, user.email, photoURL, phoneNumber);
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         console.log(errorCode);
  //         console.log(errorMessage);
  //         dispatch(
  //           actionLoginSync({
  //             error: true,
  //             errorMessage,
  //           })
  //         );
  //       });
  //   };
  // };
  // const searchInfo = async (uid, displayName, email, photoURL, phoneNumber) => {
  //   const docRef = doc(dataBase, `usuarios/${uid}`);
  //   const docu = await getDoc(docRef);
  //   const dataFinal = docu.data();
  //   console.log(dataFinal);
  
  //   if (dataFinal) {
  //     console.log(docu);
  //   } else {
  //     setDoc(docRef, {
  //       email: email,
  //       rol: 'usuario',
  //       name: displayName,
  //       phoneNumber,
  //       avatar: photoURL,
  //     });
  //   }
  // };
  
  // export const actionLoginSync = (user) => {
  //   return {
  //     type: userTypes.USER_LOGIN,
  //     payload: { ...user },
  //   };
  // };
  
  // export const actionUserLogOutAsync = () => {
  //   return (dispatch) => {
  //     signOut(auth)
  //       .then(() => {
  //         dispatch(actionUserLogOutSync());
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  // };
  // const actionUserLogOutSync = () => {
  //   return {
  //     type: userTypes.USER_LOGOUT,
  //   };
  // };