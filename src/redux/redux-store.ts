import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer, {ProfileActionsType} from './profileReducer';
import dialogsReducer, {DialogsActionsType} from './dialogsReducer';
import appReducer, {AppActionsType} from './appReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import authReducer, {AuthActionsType} from './authReducer';
import usersReducer, {UsersActionsType} from './usersReducer';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppRootActionsType =
    AppActionsType |
    AuthActionsType |
    DialogsActionsType |
    ProfileActionsType |
    UsersActionsType
type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>
export type ThunkType = ThunkAction<Promise<void>, AppRootStateType, unknown, AppRootActionsType>;
export default store;

// @ts-ignore
window.store = store;