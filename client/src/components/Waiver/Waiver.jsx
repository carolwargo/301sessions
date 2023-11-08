import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const MyPDFViewer = () => (
  <Worker workerUrl={`https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js`}>
    <Viewer fileUrl="/assets/waiver.pdf" />
  </Worker>
);

export default MyPDFViewer;
