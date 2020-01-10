import React, { Component } from 'react'
import { Link ,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';


 class Test extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }
     
    render() {


         //Redirect
         let {isAuth} = this.props
        //  isAuth = isAuth || true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        //  console.log(isAuth)


        return  !isAuth?
        (
        <Redirect to = '/login'/>
        ): 
        (
            <div>
              <h1>  this is test Page</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuth:state.auth.isAuth
})

export default connect(mapStateToProps) (Test)