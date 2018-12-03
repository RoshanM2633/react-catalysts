import React from 'react';
import About from './About';
import Contact from './contact';
import {Link,Switch,Route} from 'react-router-dom';
import HomeComponent from './Homepage';
import RecruitmentCompo from './recruitementCompo';
import RpoCompo from './RpoCompo';
import TempStaffCompo from './Temp-Staff';
import AiRecruitCompo from './Ai_recruitment';
import ScholershipCompo from './ScholershipCompo';



class MainContent extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomeComponent} />
                    <Route path="/About/"  exact component={About} />
                    <Route path="/Contact/"  exact component={Contact} />
                    <Route path="/services/recruitment/" component={RecruitmentCompo} />
                    <Route path="/services/rpo/" component={RpoCompo} />
                    <Route path='/services/temp-staffing/' component={TempStaffCompo} />
                    <Route path='/services/ai_recruit' component={AiRecruitCompo} />
                    <Route path='/services/scholarship' component={ScholershipCompo} />
                </Switch>
            </div>

        );

    }
}
export default MainContent;