    import defaultUserMale from '../../images/user/usermale.jpg'
    import defaultUserFemale from '../../images/user/userfemale.png'
    import defaultUnknownUser from '../../images/user/unknown.jpg'
    import defaultUnknownUser2 from '../../images/user/unknown1.jpg'
    import defaultUserMale2 from '../../images/user/userfemale.jpg'
    import defaultUserFemale2 from '../../images/user/userfemale.jpg'
    import defaultUser from '../../images/user/defaultUser.jpeg'
    import defaultUser2 from '../../images/user/defaultUser2.jpeg'
    import userInterface from './props/userProps'

const getUserImage = (user:userInterface['user'])=>{
    if(user?.user_image && user?.user_image !== ''){
            return process.env.REACT_APP_BASE_URL+'/uploads/users/'+user?.user_image
        }else if(user?.gender === 'male'){
            return defaultUserMale
        }else if(user?.gender === 'female'){
            return defaultUserFemale
        }else if(!user?.gender){
            return defaultUser2
        }else{
            return defaultUnknownUser
        }
}

export default getUserImage