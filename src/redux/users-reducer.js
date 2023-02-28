const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

const initialState = {
  users: [],
  count: 3,
  totalCount: 0,
  currentPage: 1
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {

    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      };

    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      };

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalCount: action.totalCount
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      }

    default:
      return state;
  }
}

export const followCreator = (userId) => ({
  type: FOLLOW,
  userId
});

export const unfollowCreator = (userId) => ({
  type: UNFOLLOW,
  userId
});

export const setUsersCreator = (users) => ({
  type: SET_USERS,
  users
});

export const setTotalUsersCountCreator = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount
});

export const setCurrentPageCreator = (page) => ({
  type: SET_CURRENT_PAGE,
  page
});
