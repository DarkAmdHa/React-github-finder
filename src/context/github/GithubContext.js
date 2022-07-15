import { useReducer, createContext } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({children}) =>{

    const initialState = {
        users: [],
        user: [],
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);


    return <GithubContext.Provider value={{
        ...state,
        dispatch, repos: state.repos
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext