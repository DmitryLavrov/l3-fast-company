import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { loadQualitiesList } from '../../../store/qualities'
import { loadProfessionsList } from '../../../store/professions'
import { getIsLoggedIn, getUsersLoadingStatus, loadUsersList } from '../../../store/users'

const AppLoader = ({children}) => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(getIsLoggedIn())
  const usersIsLoading = useSelector(getUsersLoadingStatus())

  useEffect(() => {
    dispatch(loadQualitiesList())
    dispatch(loadProfessionsList())
    if (isLoggedIn) {
      dispatch(loadUsersList())
    }
  }, [])

  if (usersIsLoading) {
    return <h2>Loading...</h2>
  }

  return children
}

AppLoader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

export default AppLoader
