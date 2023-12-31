import React, {PropsWithChildren} from "react";
import {Provider} from "react-redux";
import { store } from "./reducers/store";


const MainContext: React.FC<PropsWithChildren> = ({children}) => {

    return <Provider store={store}>
            {children}
        </Provider>
}

export default MainContext