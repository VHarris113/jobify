import React, { useState } from "react";
import { Container } from "../components/Grid";
import Alert from "../components/Alert";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Gallery from "./Gallery";

export default function Resume() {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
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
      console.error("Error");
      setErrMsg("something went wrong!");
    };
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({
          data: base64EncodedImage,
          userEmail: localStorage.getItem("userEmail"),
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      console.log("uploadImage status: ", data);
      setFileInputState("");
      setPreviewSource("");
      setSuccessMsg("Image uploaded successfully");
    } catch (err) {
      console.error(err);
      setErrMsg("Something went wrong!");
    }
  };
  return (
    <Container>
      <div class="resume">
        <h1 className="title">Resume Review</h1>
        <Alert msg={errMsg} type="danger" />
        <Alert msg={successMsg} type="success" />
        <form onSubmit={handleSubmitFile} className="formresume">
          <input
            id="fileInput"
            type="file"
            name="image"
            onChange={handleFileInputChange}
            value={fileInputState}
            className="form-input"
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
        {previewSource && (
          <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
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
            <td className="text-left">
              <h5>Resume Eloy</h5>
            </td>
            <td className="text-left">
              <h5>04/3/2021</h5>
            </td>
            <td className="text-left">
              <h5>04/3/2021</h5>
            </td>
            <td className="text-right">
              <div className="row">
                <div className="col md-3">
                  <button id="gridedit" type="button" class="btn">
                    edit
                  </button>
                </div>
                <div>
                  <button id="griddelete" type="button" class="btn">
                    delete
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <h5>Sculp your resume from reviewer</h5>
      {/* <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            I will recommend you to change the section bla bla "Eloy Gonzlez
            04/20/2021"
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form> */}

      <Button variant="primary" type="submit">
        Add Comment
      </Button>
      <Gallery />
    </Container>
  );
}
