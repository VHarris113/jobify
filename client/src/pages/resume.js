import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Image } from 'cloudinary-react';
import Alert from '../components/Alert';

export default function Upload() {
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.onerror = () => {
            console.error('Error');
            setErrMsg('something went wrong!');
        };
    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            await fetch('/api/upload', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { 'Content-Type': 'application/json' },
            });
            setFileInputState('');
            setPreviewSource('');
            setSuccessMsg('Image uploaded successfully');
        } catch (err) {
            console.error(err);
            setErrMsg('Something went wrong!');
        }
    };
    return (
      <Container>
        <div>
            <h1 className="title">Upload your resume</h1>
            <Alert msg={errMsg} type="danger" />
            <Alert msg={successMsg} type="success" />
            <form onSubmit={handleSubmitFile} className="form">
                <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    className="form-input"
                />
                <button className="btn" type="submit">
                    Submit
                </button>
            </form>
            {previewSource && (
                <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: '300px' }}
                />
            )}
        </div>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Created</th>
      <th scope="col">Modified</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className = "text-left" >
      <h2>EloyResume1</h2>
      </td>
      <td className = "text-left" >
      <h2>11/20/2020</h2>
      </td>
      <td className = "text-left" >
      <h2>11/20/2020</h2>
      </td>
      <td className = "text-right" >
      <div  className="row">
            <div className="col md-3">
            <button id ="gridedit"  type="button" class="btn">edit</button>
            </div>
            <div >
            <button  id ="griddelete"  type="button" class="btn">delete</button>
            </div>
        </div>
      </td>
    </tr>
    <td className = "text-left" >
      <h2>EloyResume1</h2>
      </td>
      <td className = "text-left" >
      <h2>11/20/2020</h2>
      </td>
      <td className = "text-left" >
      <h2>11/20/2020</h2>
      </td>
      <td className = "text-right" >
      <div  className="row">
            <div className="col md-3">
            <button id ="gridedit"  type="button" class="btn">edit</button>
            </div>
            <div >
            <button  id ="griddelete"  type="button" class="btn">delete</button>
            </div>
        </div>
      </td>
  </tbody>
</table>
               </Container>
    );
}
 // const [book, setBook] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
//   const {id} = useParams()
//   useEffect(() => {
//     API.getBook(id)
//       .then(res => setBook(res.data))
//       .catch(err => console.log(err));
//   }, [])



