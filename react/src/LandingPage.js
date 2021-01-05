import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


export default class LandingPage extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
            return (
                <div class="wrapper">
    
                <section class="topbar">
                  
                  <img class="logo" src="logo.png"/>
                  <button class="loginb" onClick={this.props.loginClick}>Log In</button>
                  <button class="signupb" onClick={this.props.signupClick}>Sign Up</button>
                
                </section>
            
                <section class="base content">
                  <div class="baserow1">
                    <div class="description">
                      <p class="primaryp">GearUp helps teams work more collaboratively and get more done.</p>
                      <p class="secondaryp">GearUp’s boards, lists, and cards enable teams to organize and prioritize projects in a fun, flexible, and rewarding way.</p>
                    </div>
                    <img class="banner" src="banner.jpg"/>
                  </div>
            
                  <div class="baserow2">
                    <input class="emailinput"/>
                    <button class="freesignupb">Sign Up - It's Free!</button>
                  </div>
                </section>
            
                <section class="info">
                  
                  <div class="teamtasks">
                    <div class="description">
                      <h2>Work with any team </h2>
                      <p>Whether it’s for work, a side project or even the next family vacation, GearUp helps your team stay organized.</p>
                    </div>
            
                    <div class="tasksboard">
                      <p>Team Tasks</p><br/>
            
                      <div class="cardsgrid">
                        <div class="card card1">
            
                          <p clas="p-black">Doing</p>
            
                          <div class="card-content">
                            <div class="label label-blue"></div>
                            <label>Client Meeting</label>
                            <div class="description">
                              <svg height="10" viewBox="0 0 16 10" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" fill-rule="evenodd" opacity=".3"></path> </svg>
                            </div>
                            <div class="card-users">
                              <div class="user user-1">
                                <i class="fa fa-user" aria-hidden="true"></i>
                              </div>
                            </div>
                          </div> 
            
                          <div class="card-content">
                            <div class="label label-red"></div>
                            <label>Plan webinar</label>
                            <div class="description">
                              <svg height="10" viewBox="0 0 16 10" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" fill-rule="evenodd" opacity=".3"></path> </svg>
                            </div>
                            <div class="card-users">
                              <div class="user user-1">
                                <i class="fa fa-user" aria-hidden="true"></i>
                              </div>
                              <div class="user user-2">
                                <i class="fa fa-user" aria-hidden="true"></i>
                              </div>
                            </div>
                          </div>
            
                          <div class="card-content">
                            <div class="label label-violet"></div>
                            <label>Email newsletter</label>
                            <div class="description">
                              <svg height="10" viewBox="0 0 16 10" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" fill-rule="evenodd" opacity=".3"></path> </svg>
                            </div>
                            <div class="card-users">
                              <div class="user user-1">
                                <i class="fa fa-user" aria-hidden="true"></i>
                              </div>
                              <div class="user user-2">
                                <i class="fa fa-user" aria-hidden="true"></i>
                              </div>
                            </div>
                          </div>
                          
                          <p class="p-white">Add a card..</p>
                        
                        </div>
            
                        <div class="card card2">
                          <p clas="p-black">Done</p>
            
                          <div class="card-content">
                            <div class="label label-red"></div>
                            <label>Publish Podcast</label>
                            <div class="description">
                              <svg height="10" viewBox="0 0 16 10" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" fill-rule="evenodd" opacity=".3"></path> </svg>
                            </div>
                            <div class="card-users">
                              <div class="user user-1">
                                <i class="fa fa-user" aria-hidden="true"></i>
                              </div>
                            </div>
                          </div> 
            
                          <div class="card-content">
                            <div class="label label-violet"></div>
                            <label>Launch Website</label>
                            <div class="description">
                              <svg height="10" viewBox="0 0 16 10" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" fill-rule="evenodd" opacity=".3"></path> </svg>
                            </div>
                            <div class="card-users">
                              <div class="user user-1">
                                <i class="fa fa-user" aria-hidden="true"></i>
                              </div>
                              <div class="user user-2">
                                <i class="fa fa-user" aria-hidden="true"></i>
                              </div>
                            </div>
                          </div>
            
                          <p class="p-white">Add a card..</p>
            
                        </div>
                    </div>  
                  </div>
                </div>  
            
                <div class="infoglance">
                  
                  <div class="infoboard">
                     <div class="top">
                     </div>
            
                     <div class="infocard">
                       <div class="cards">
                          <div class="infocard1">
                              <div class="window-header">
                              <svg class="description-icon" height="10" viewBox="0 0 16 10" width="30" xmlns="http://www.w3.org/2000/svg"> <path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" fill-rule="evenodd" opacity=".3"></path> </svg>
                            <div class="dummypara">
                              <div class="dummytext l-3 s-2"></div>
                              <div class="dummytext l-2 s-1"></div>
                            </div>
                            </div>
             
                            <div class="footer">
                            <div class="members">
                              <p>MEMBERS</p> 
                              <i class="fa fa-user" aria-hidden="true"></i>
                            </div>
            
                            <div class="labels">
                              <p>LABELS</p>
                              <div class="dummy-block">
                                <div class="block-sm"></div>
                              </div>
                            </div>
                          </div>  
                         
                        </div>
                        
                        <div class="infocard2">
                          <svg class="description-icon" height="10" viewBox="0 0 16 10" width="30" xmlns="http://www.w3.org/2000/svg"> <path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" fill-rule="evenodd" opacity=".3"></path> </svg>
                          
                          <div class="dummy-comment">
                            <div class="dummytext l-2 s-3"></div>
                            <div class="dummytext l-2 s-1"></div>
                          </div>
                        </div>
                        
                        <div class="infocard3">
                          <svg height="10" viewBox="0 0 16 10" width="30" xmlns="http://www.w3.org/2000/svg"> <path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" fill-rule="evenodd" opacity=".3"></path> </svg>
                          <p>Activity</p>
                          <i class="fa fa-user align-s" aria-hidden="true"></i>
                          <div class="dummy-activity">
                            <div class="dummytext l-2 s-2"></div>
                            <div class="dummytext l-2 s-1"></div>
                            <div class="activity-footer">
                              <button class="btn-ok"></button>
                               <img class="icon" src="attach.png"/>
                               <img class="icon" src="mention.png"/>
                               <img class="icon" src="emoji.png"/>
                               <img class="icon" src="card.png"/> 
                            </div>
                          </div> 
            
                        </div>   
                       
                      </div> 
                       <div class="buttons">
                        <p>SUGGESTED</p>
                        <div class="btn join">
                          <img class="icon" src="person.png"/>
                          <p>Join</p>
                        </div>
                        
                        <p>ADD TO CARD</p>
                        
                        <div class="btn join">
                          <img class="icon"  src="person.png"/>
                          <p>Join</p>
                        </div>
                        <div class="btn label">
                          <img class="icon"  src="label.png"/>
                          <p>Label</p>
                        </div>
                        <div class="btn checklist">
                          <img class="icon"  src="checklist.png"/>
                          <p>Checklist</p>
                        </div>
                        <div class="btn due-date">
                          <img class="icon" src="duedate.png"/>
                          <p>Due Date</p>
                        </div>
                        <div class="btn attachment">
                          <img class="icon"  src="attach.png"/>
                          <p>Attachment</p>
                        </div>
                        <div class="btn cover">
                          <img class="icon" src="card.png"/>
                          <p>Cover</p>
                        </div>
                        
                        <p>POWER-UPS</p>
                        <div class="btn butler">
                          <img class="icon" src="plane.png"/>
                          <p>Butler</p>
                        </div>  
                        
                        <p>ACTIONS</p>
                        <div class="btn move">
                          <img class="icon" src="arrow.png"/>
                          <p>Move</p>
                        </div>
                        <div class="btn watch">
                          <img class="icon"  src="eye.png"/>
                          <p>Watch</p>
                        </div>
                        <div class="btn make-template">
                          <img class="icon" src="template.png"/>
                          <p>Make Template</p>
                        </div>   
                       </div>
            
                     </div> 
            
                  </div>
                
                  <div class="description">
                    <h2>Information at a glance. </h2>
                    <p>Dive into the details by adding comments, attachments, due dates, and more directly to GearUp cards. Collaborate on projects from beginning to end.</p>
                  </div>
                
                </div>  
            
                <div class="workflow-automation">
                  <div class="description">
                    <h2>Work with any team </h2>
                    <p>Whether it’s for work, a side project or even the next family vacation, GearUp helps your team stay organized.</p>
                  </div>       
                  <img class="automation" src="automation.png"/>  
                </div>
            
                <div class="page-footer">
                    <select class="select-lang">
                      <option>English</option>
                      <option>English (US)</option>
                      <option>English (AU)</option>
                      <option>English (EU)</option>
                      <option>Deutsch</option>
                      <option>Italiono</option>
                      <option>Polski</option>
                    
                    </select>
                  <div class="links">
                    <a href="#">Templates</a>
                    <a href="#">Pricing</a>
                    <a href="#">Apps</a>
                    <a href="#">Jobs</a>  
                    <a href="#">Blog</a>
                    <a href="#">Developers</a>
                    <a href="#">About</a>
                    <a href="#">Help</a>
                    <a href="#">Legal</a>
                    <a href="#">Cookie Settings</a>
                    <a href="#">Privacy</a>
                  </div>
                  
                  <p>© Copyright 2020. All rights reserved. </p>
                </div>
            
                </section>
                </div>
            );
        }
}