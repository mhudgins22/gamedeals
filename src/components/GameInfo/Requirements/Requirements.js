import React from "react";

import "./Requirements.css";

import Tab from "../../UI/Tab/Tab";

const requirements = (props) => {
	
	//funcstions to extract jsx elements from the requirements props
	const minPCRequirements = () => {
		return {__html: props.pcRequirements.minimum};
	}

	const recPCRequirements = () => {
		return {__html: props.pcRequirements.recommended};
	}

	const minMacRequirements = () => {
		return {__html: props.macRequirements.minimum};
	}

	const recMacRequirements = () => {
		return {__html: props.macRequirements.recommended};
	}

	const minLinuxRequirements = () => {
		return {__html: props.linuxRequirements.minimum};
	}

	const recLinuxRequirements = () => {
		return {__html: props.linuxRequirements.recommended};
	}


	//Set what requirements are shown based on redux state
	let requirements = null;

	if (props.showPC === true) {
		requirements = (
			<div>
				<h3>PC Requirements: </h3>
				<div className = "Min" dangerouslySetInnerHTML = {minPCRequirements()}></div>
				<div className = "Rec" dangerouslySetInnerHTML = {recPCRequirements()}></div>
			</div>
		);
	} else if (props.showMac === true) {
		requirements = (
			<div>
				<h3>Mac Requirements: </h3>
				<div className = "Min" dangerouslySetInnerHTML = {minMacRequirements()}></div>
				<div className = "Rec" dangerouslySetInnerHTML = {recMacRequirements()}></div>
			</div>
		);
	} else if (props.showLinux === true) {
		requirements = (
			<div>
				<h3>Linux Requirements: </h3>
				<div className = "Min" dangerouslySetInnerHTML = {minLinuxRequirements()}></div>
				<div className = "Rec" dangerouslySetInnerHTML = {recLinuxRequirements()}></div>
			</div>
		)
	}
	
	return(
		<div className = "Requirements">
			<div>
				{props.pcRequirements ? <Tab catagory = "PC" clicked = {props.toPCRec}/> : null}
				{props.macRequirements ? <Tab catagory = "Mac" clicked = {props.toMacRec}/> : null}
				{props.linuxRequirements ? <Tab catagory = "Linux" clicked = {props.toLinuxRec}/> : null}
			</div>
			{requirements}
		</div>
	);
}

export default requirements;