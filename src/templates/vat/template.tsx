import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { VATTemplateCertificate } from "../samples/customTemplateSample";

const borderStyle = css`
  border-style: solid;
  border-width: 0.25px;
  border-color: #000;
  width: 100%;
  heigth: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const containerStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&display=swap');
  font-family: 'IBM Plex Sans', sans-serif;
  border-style: solid;
  border-width: 0.25px;
  border-color: #000;
  margin: 5px;
  flex: 1 1 40%;
  padding: 15px;
  heigth: 100%;
`;

const borderInnerStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&display=swap');
  font-family: 'IBM Plex Sans', sans-serif;
  border-style: solid;
  border-width: 0.25px;
  border-color: #000;
  margin: 5px;
  flex: 1 1 80%;
  padding: 15px;
  heigth: 100%;
`;

const borderInnerStyleAlt = css`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&display=swap');
  font-family: 'IBM Plex Sans', sans-serif;
  border-style: solid;
  border-width: 0.25px;
  border-color: #000;
  margin: 5px;
  padding: 15px;
  heigth: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const borderInnerStyleAltAlt = css`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&display=swap');
  font-family: 'IBM Plex Sans', sans-serif;
  border-style: solid;
  border-width: 0.25px;
  border-color: #000;
  margin: 5px;
  padding: 15px;
  heigth: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const VATTemplate: FunctionComponent<
  TemplateProps<VATTemplateCertificate> & { className?: string }
> = ({ document, className = "" }) => {
  return (
    <div id="parent">
    <div id="child">
        <div id="child-left">
            <div className="child-component" id="company-logo">
                <h1>BlockLab</h1>
            </div>
            <div className="child-component" id="info-left-1">
                <h4>Shipper</h4>
                <ul>
                    <li>Name: {document.shipper.name}</li>
                    <li>Address: {document.shipper.address}</li>
                    <li>Contact name: {document.shipper.contactPersonName}</li>
                    <li>Contact cell number: {document.shipper.contactNumber}</li>
                    <li>Contact phone number: {document.shipper.contactTelephoneNumber}</li>
                </ul>
            </div>
            <div className="child-component" id="info-left-2">
                <h4>Cosignee</h4>
                <ul>
                    <li>Name: {document.cosignee.name}</li>
                    <li>Contact Person: {document.cosignee.contactPersonName}</li>
                    <li>Address: {document.cosignee.address}</li>
                    <li>Phone Number: {document.cosignee.contactTelephoneNumber}</li>
                </ul>
            </div>
            <div className="child-component" id="info-left-3">
                            <h4>Container</h4>
                <ul>
                    <li>Container NO.: {document.containers[0]?.number || "Empty" }</li>
                    <li>Quantity: {document.containers[0]?.quantity || "Empty" }</li>
                    <li>Container Type: {document.containers[0]?.type || "Empty" }</li>
                    <li>Vent Value: {document.containers[0]?.ventValue || "Empty" }</li>
                    <li>Vent YN: {document.containers[0]?.ventYN || "Empty" }</li>
                </ul>
            </div>
            <div className="child-component" id="info-left-4">
                            <h4>Goods</h4>
                <ul>
                    <li>Name: {document.goods.name}</li>
                    <li>Nature of Goods: {document.goods.natureOfGoods}</li>
                    <li>NO. of Packages: {document.goods.numberOfPackages}</li>
                    <li>ProductID: {document.goods.productId}</li>
                    <li>Short Name: {document.goods.shortName}</li>
                    <li>Type: {document.goods.type}</li>
                    <li>Weight: {document.goods.weight}</li>
                </ul>
            </div>
        </div>
        <div id="child-right">
            <div className="child-component" id="document-info">
                <ul>
                    <li>Invoice NO. : {document.invoiceNumber}</li>
                    <li>Document NO. : {document.documentNumber}</li>
                    <li>Document Data : {document.documentData}</li>
                    <li>Document Type : {document.messageName}</li>
                </ul>
            </div>
            <div className="child-component" id="info-right-1">
                <h4>Location 1</h4>
                <ul>
                    <li>Estimated arrival date: {document.locationList[0]?.estimatedArrivalDate || "No Information"}</li>
                    <li>Estimated departure data: {document.locationList[0]?.estimatedDepartureArrivalDate || "No Information"}</li>
                    <li>City or Port code {document.locationList[0]?.routingInformation.cityOrPortCode || "No Information"}</li>
                    <li>Country code {document.locationList[0]?.routingInformation.countryCode || "No Information"}</li>
                    <li>Type code {document.locationList[0]?.routingInformation.typename || "No Information"}</li>
                </ul>
            </div>
            <div className="child-component" id="info-right-2">
                <h4>Location 2</h4>
                <ul>
                    <li>Estimated arrival date: {document.locationList[1]?.estimatedArrivalDate || "No Information"}</li>
                    <li>Estimated departure data: {document.locationList[1]?.estimatedDepartureArrivalDate || "No Information"}</li>
                    <li>City or Port code {document.locationList[1]?.routingInformation.cityOrPortCode || "No Information"}</li>
                    <li>Country code {document.locationList[1]?.routingInformation.countryCode || "No Information"}</li>
                    <li>Type code {document.locationList[1]?.routingInformation.typename || "No Information"}</li>
                </ul>
            </div>
            <div className="child-component" id="info-right-3">
                <h4>Location 3</h4>
                <ul>
                    <li>Estimated arrival date: {document.locationList[2]?.estimatedArrivalDate || "No Information"}</li>
                    <li>Estimated departure data: {document.locationList[2]?.estimatedDepartureArrivalDate || "No Information"}</li>
                    <li>City or Port code {document.locationList[2]?.routingInformation.cityOrPortCode || "No Information"}</li>
                    <li>Country code {document.locationList[2]?.routingInformation.countryCode || "No Information"}</li>
                    <li>Type code {document.locationList[2]?.routingInformation.typename || "No Information"}</li>
                </ul>
            </div>
            <div className="child-component" id="info-right-4">
                <h4>Location 4</h4>
                <ul>
                    <li>Estimated arrival date: {document.locationList[3]?.estimatedArrivalDate || "No Information"}</li>
                    <li>Estimated departure data: {document.locationList[3]?.estimatedDepartureArrivalDate || "No Information"}</li>
                    <li>City or Port code {document.locationList[3]?.routingInformation.cityOrPortCode || "No Information"}</li>
                    <li>Country code {document.locationList[3]?.routingInformation.countryCode || "No Information"}</li>
                    <li>Type code {document.locationList[3]?.routingInformation.typename || "No Information"}</li>
                </ul>
            </div>
            <div className="child-component" id="info-right-5">
    
            </div>
        </div>
    </div>
</div>
  );
};
