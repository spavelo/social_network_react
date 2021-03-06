import React from 'react'
import * as s from './Users.module.css'
import './User/User.css'
import userPhoto from '../../../assets/images/user.png'
import {NavLink, Redirect} from "react-router-dom";

const Users = (props) => {
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i < 20; i++) {
        pages.push(i)
    }
    // debugger
    return (
        <div>
            <div>
                {pages.map(page => <span key={Math.random()}
                                         className={props.currentPage === page && s.selectedPage}
                                         onClick={() => props.onPageChanged(page)}
                    >{page}</span>
                )}
            </div>
            {props.users.map(user => {
                if(!props.isAuth) return <Redirect to="/login" />

                return (
                    <div className="user" key={user.id}>
                        <div className='follow'>
                            <NavLink to={'/profile/' + user.id}>
                                <img className="avatarInD"
                                     src={user.photos.small != null ? user.photos.small : userPhoto}
                                     alt=""/>
                            </NavLink>
                            <div>
                                {user.followed
                                    ? <button
                                        disabled={props.followingInProcess.some(id => id === user.id)}
                                        onClick={() => {
                                            props.unfollow(user.id)
                                        }}
                                    >Unfollow</button>
                                    : <button
                                        disabled={props.followingInProcess.some(id => id === user.id)}
                                        onClick={() => {
                                            props.follow(user.id)
                                        }}
                                    >Follow</button>
                                }
                            </div>
                        </div>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                    </div>
                )
            })}</div>
    )
}

export default Users