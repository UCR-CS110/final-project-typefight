import { useState } from "react";
import axios from 'axios';

export default function FileUpload(props) {
	const [file, setFile] = useState(undefined)

	function selectFile(event) {
		setFile(event.target.files[0]);
	};

	function handleSubmit(event) {
		event.preventDefault()
		console.log(file);
		const url = `http://localhost:8080/${props.sessionUsername}/updateProfilePicture`;
		const formData = new FormData();
		formData.append('file', file);
		formData.append('fileName', file.name);
		console.log(file.name);
		
		const config = {
			headers: {
				'content-type': 'multipart/form-data' 
			}
		};
		axios.post(url, formData, config).then(res => {
			//Now do what you want with the response;
		})
	}

	return(
		<div>
			<h1>Upload File to Server</h1>
			<div>
				<form onSubmit={handleSubmit}>
					<input type="file" name="profilePicture" onChange={selectFile} required/>
					<button type="submit">Submit</button>
				</form>
			</div>
		
			<h1>Uploaded Image</h1>
		</div>
	)
}