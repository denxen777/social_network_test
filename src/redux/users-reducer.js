import {usersAPI} from "../api/api";

//Action Type
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const IS_DISABLE = 'IS-DISABLE';

const initialState = {
  users: [],
  count: 3,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

//Reducer
export function usersReducer(state = initialState, action) {
  switch (action.type) {

    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      };
    }

    case SET_USERS: {
      return {
        ...state,
        users: [...action.users]
      };
    }

    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalCount: action.totalCount
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.page
      };
    }

    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
      };
    }

    case IS_DISABLE: {
      return {
        ...state,
        followingInProgress: action.disable ?
          [...state.followingInProgress, action.userId] :
          state.followingInProgress.filter(id => id !== action.userId)
      };
    }

    default:
      return state;
  }
}

//Action Creators
export const acceptFollow = (userId) => ({
  type: FOLLOW,
  userId
});

export const acceptUnfollow = (userId) => ({
  type: UNFOLLOW,
  userId
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users
});

export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount
});

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  page
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

export const toggleIsDisable = (disable, userId) => ({
  type: IS_DISABLE,
  disable,
  userId
})

//Thunk
export const getUsers = (currentPage, count) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, count).then((data) => {
      dispatch(setCurrentPage(currentPage));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(toggleIsFetching(false));
    });
  }
}

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsDisable(true, userId));

    usersAPI.follow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(acceptFollow(userId));
        dispatch(toggleIsDisable(false, userId));
      }
    });
  };
}

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsDisable(true, userId));

    usersAPI.unfollow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(acceptUnfollow(userId));
        dispatch(toggleIsDisable(false, userId));
      }
    });
  };
}