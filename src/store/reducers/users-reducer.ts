export interface UsersStateType {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type UserType = {
    id: number;
    name: string;
    status?: string;
    photos: {
        small?: string;
        large?: string;
    }
    followed: boolean;
}

export enum UsersEnum {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
}

export type UsersAction = (
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setUsersTotalCount> |
    ReturnType<typeof toggleIsFetching>
    )


const initialState = {
    users: [] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}


export default function usersReducer(state: UsersStateType = initialState, action: UsersAction): UsersStateType {

    switch (action.type) {
        case UsersEnum.FOLLOW:
            return {
                ...state,
                users: state.users
                    .map(u => (u.id === action.userID)
                        ? {...u, followed: true}
                        : u
                    )
            }
        case UsersEnum.UNFOLLOW:
            return {
                ...state,
                users: state.users
                    .map(u => (u.id === action.userID)
                        ? {...u, followed: false}
                        : u
                    )
            }
        case UsersEnum.SET_USERS:
            return {...state, users: action.users}
        case UsersEnum.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case UsersEnum.SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case UsersEnum.TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const follow = (userID: number) => ({type: UsersEnum.FOLLOW, userID} as const)
export const unfollow = (userID: number) => ({type: UsersEnum.UNFOLLOW, userID} as const)
export const setUsers = (users: UserType[]) => ({type: UsersEnum.SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: UsersEnum.SET_CURRENT_PAGE, currentPage} as const)
export const setUsersTotalCount = (totalCount: number) => ({type: UsersEnum.SET_USERS_TOTAL_COUNT, totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: UsersEnum.TOGGLE_IS_FETCHING, isFetching} as const)