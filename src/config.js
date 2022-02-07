import {Redirect} from "react-router-dom";
import About from "./views/about";
import Comingsoon from "./views/comingsoon";
import Error from "./views/error";
import Experience from "./views/experience";
import Home from "./views/home";
import Login from "./views/login";
import PrivacyPolicy from "./views/privacy";
import Register from "./views/register";
import Services from "./views/services";

const appCfg = {
    routes:[
        {navItem:true, exact:true, path:"/",name:"Home",view:<Home/>},  
        {navItem:true, exact:true, path:"/story",name:"Our Story",view:<About/>}, 
        {navItem:true, exact:true, path:"/experience",name:"Experience",view:<Experience/>}, 
        {navItem:true, exact:true, path:"/services",name:"Services",view:<Services/>}, 
        {navItem:true, exact:true, path:"/login",name:<span className="fa fa-user-circle-o"></span>,view:<Login backLink={{name:" Register now!",href:"/register"}}/>}, 
        {navItem:false, exact:false, path:"/register",name:"Register",view:<Register backLink={{name:" Login now!",href:"/login"}}/>}, 
        {navItem:false, exact:true, path:"/comingsoon",name:"Comingsoon",view:<Comingsoon/>},                
        {navItem:false, exact:false, path:"/error",name:"Error",view:<Error backLink={{name:"back to Home",href:"/"}}/>},
        {navItem:false, exact:true, path:"/privacy",name:"Privacy",view: <PrivacyPolicy backLink={{name:"back to Home",href:"/"}}/>},                
        {navItem:false, exact:false, path:"*",name:"any",view:<Redirect to="/error"/>}
    ]
};

const APP_LINKS = {
    messages: "http://localhost/hike_guide/public/message.php",
    register: "register.php",
    users: "http://localhost/hike_guide/public/user.php"
};

const msgCfg = {
    pageSize: 10
};

export {
    appCfg,
    APP_LINKS,
    msgCfg
}