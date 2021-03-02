import React, { Component } from 'react'

export class User extends Component {
    render() {

      const{login, avatar_url,html_url,repos_url}=this.props.user;
        return (
            <div>
                 <div class="card">
                          
                          <img class="card-img-top" src={avatar_url} alt=""/>
                          <div class="card-body">
                              <h4 class="card-title">{login}</h4>
                              <p class="card-text"> 
                              <a href={'users/' +User.login} className="btn btn-danger">show more</a>
                              <a href= {html_url} className="btn btn-dark">repositories</a>
                              </p>
                          </div>
                      </div>
            </div>
        )
    }
}

export default User
