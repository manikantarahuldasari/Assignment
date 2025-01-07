import React from 'react'
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";


const PdfViewer = () => {
    const file="./public/sample.pdf"
  return (
    <div tyle={{ width: "100%", height: "100vh" }}>
              <Worker workerUrl={`https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js`}>

        <Viewer fileurl={file}/>
        </Worker>
    </div>
  )
}

export default PdfViewer