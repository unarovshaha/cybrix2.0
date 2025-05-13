import {Suspense} from 'react';
import {createRoutesFromElements, Route, RouterProvider} from "react-router";
import {createBrowserRouter, Navigate} from "react-router-dom";
import {HomePage} from "../../../pages/homePage/index";



export const AppRouter = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path={"/*"}
                    element={<HomePage/>}
                />





                {/*<Route*/}
                {/*    index*/}
                {/*    element={<Navigate to={"login"}/>}*/}
                {/*/>*/}
            </>
        )
    );

    return (
        <Suspense>
            <RouterProvider router={router}/>
        </Suspense>
    );
};
