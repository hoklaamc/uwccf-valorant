import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Col, Row, Typography } from 'antd';
import bracketPdf from '../assets/bracket.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function BracketPage() {
  const { Title } = Typography;
  return (
    <Row>
      <Col md={{ span: 14, offset: 5 }} span={24}>
        <Title>Tournament Bracket</Title>
        <Document file={bracketPdf}>
          <Page pageNumber={1} />
        </Document>
      </Col>
    </Row>
  );
}

export default BracketPage;
