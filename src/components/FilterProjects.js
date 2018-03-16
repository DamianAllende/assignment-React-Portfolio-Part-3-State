import React, { Component } from 'react';
import { projectData } from '../data/datasource'
import ProjectData from './ProjectData'

/*  Advice:
   (1) Create the component's JSX by using .map() on `projectData`

       <div className="project project--«...PROJECT-TYPE...»">
         <span className="project__title">«...PROJECT-NAME...»</span>
       </div>

       -- substitute values for PROJECT-TYPE and PROJECT-NAME


   (2) add an onClick event listener to the  <span> elements in .project-types-list
        that calls a method to change the FilterProjects component state

        Hint: you will want to set the component's initial state in the
              constructor() function

   (3) Use .filter() in the render() method `projectData` based on FilterProjects
       component state

       Hint: you may want to use .filter() then .map()
 */

class FilterProjects extends Component {


  constructor() {
    super()
    this.state = {
      projects: projectData,
      filter: 'all'
    }
  }


 jobs = (item) => {
  this.setState({
      filter: item
    });
  }
  


  filterJobs = (item) =>{
    if(item === "all") return this.state.projects
    if(item === false)return this.state.projects.filter(function(newItem){return newItem.solo === false});
    if(item === true)return this.state.projects.filter(function(newItem){return newItem.solo === true});
  }

  render() {

  const typeFilter = this.state.filter
  const newList = this.filterJobs(typeFilter)
  //console.log(jessy)

    return (
      <section>
          <h4>Projects</h4>

          <div className="project-types-list">
            <span onClick={ () => { this.jobs('all')  } } data-ptype="all" className="project-type project-type--all project-type--selected">
              All
            </span>

            <span onClick={ () => { this.jobs(true)  } } data-ptype="solo" className="project-type project-type--solo ">
              <i className="ion-person"></i>Solo
            </span>

            <span onClick={ () => { this.jobs(false)  } } data-ptype="team" className="project-type project-type--team">
              <i className="ion-person-stalker"></i>Team
            </span>
          </div>

          <div className='projects-list'>
            
           {newList.map(function(list){
            return <ProjectData info={list}/>
           })}
           
          
          </div>
        </section>

    );
  }
}

export default FilterProjects;