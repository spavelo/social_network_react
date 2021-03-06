import React from 'react'
import './Profile.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../../Redux/profile_reducer";
import {Redirect, withRouter} from "react-router-dom";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    //ProfileContainer создается единажды как классовая
    // компонента, делая(грязную работу) запрос на сервер
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 12694
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        // debugger
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateUserStatus}

            />
        )
    }
}

// let authRedirectComponent = (props) => {
//
//     return <ProfileContainer {...props} />
// }
//
// let authRedirectComponent = () => {
//     if (!this.props.isAuth) return <Redirect to="/login"/>
//     return <ProfileContainer {...this.props}/>
// }


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export default compose(connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect)(ProfileContainer)

// withRouter вощвращает новую компоненту,
// которая отрисует ProfileContainer,
// но в нее еще закинутся данные из url

//оборачиваем ProfileContainer connect - ом,
// который делает(грязную работу) запросы к стору и получая от него коллбеки.
// Connect возвращает новую компоненту, которая отрисовывает ProfileContainer но данные закинет в нее из стора