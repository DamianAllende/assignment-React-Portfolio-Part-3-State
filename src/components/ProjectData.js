import React, { Component } from 'react';

class ProjectData extends Component{

	render() {
		//console.log(this.props.info.solo)
		const clases = this.props.info.solo
		const clasestatus = clases ? 'project--solo' : 'project--team';

		return(
			<div className="project">
         		<span className={`project__title ${clasestatus}`}>{this.props.info.projectName}</span>
       		</div>
		);
	}
}

export default ProjectData;