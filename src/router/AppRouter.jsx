import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";
import { useAuthStore } from "../hooks";

export const AppRouter = () => {


    const { status, checkAuthToken} = useAuthStore();

    useEffect(() => {
      checkAuthToken();
    }, [])


    if (status === 'checking') {
        return (
            <h5>Cargando...</h5>
        )
    }
    //const authStatus = 'not-authenticated';

    return (
       <Routes>
           {
               (status === 'not-authenticated')  
               ? (
                    <>
                     <Route path="/auth/*" element={<LoginPage />} />
                     <Route path="/*" element={<Navigate to='/auth/login' />}/>    
                    </>
               )
               : (
                    <>
                         <Route path="/" element={<CalendarPage />} />
                        <Route path="/*" element={<Navigate to='/' />}/>    
                    </>

               )
               
           }  
       </Routes>
    );
}

