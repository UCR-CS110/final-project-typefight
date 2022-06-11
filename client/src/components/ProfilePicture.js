import { useState, useEffect } from 'react';
import { Buffer } from 'buffer';
import "./ProfilePicture.css"

export default function ProfilePicture(props){
	const [profilePictureBuffer, setProfilePictureBuffer] = useState(undefined);
	const [profilePictureType, setProfilePictureType] = useState(undefined);

	useEffect(() => {
		fetch(`http://localhost:8080/${props.username}/getProfileImage`)
			.then((res) => res.json())
			.then((data) => {
				let buffer = Buffer.from(data.profilePicture.data).toString('base64');
				let contentType = data.profilePicture.contentType;
				setProfilePictureBuffer(buffer);
				setProfilePictureType(contentType);
			})
			.catch((error) => console.log(error));
	}, [props.username]);

    return(
		<img src={`data:${profilePictureType};base64,${profilePictureBuffer}`} alt="profile" className='profile-picture'/>
	)
  }