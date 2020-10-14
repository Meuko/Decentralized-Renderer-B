import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { VATTemplateCertificate } from "../samples/customTemplateSample";

const parent = css`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
    font-family: 'Raleway', sans-serif;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const child = css`
    width: 70%;
    height: 100%;
    border: 1px solid #222;
    display: flex;
    font-size: 80%;
    
`;

const child_left = css` 
    width: 40%; 
    height: 100%;
    margin: 5%;
    display: flex;
    flex-flow: column;
`;

const child_right = css`
    width: 40%; 
    height: 100%;
    margin: 5%;
    display: flex;
    flex-flow: column;
`;

const child_component = css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column;
    flex-basis: content;
    padding-top: 5%;
`;

const child_component_logo = css` // company-logo
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding-top: 0;
    flex-flow: column;
    flex-basis: content;
    height: 12.5%;
    justify-content: flex-start;
`;
const child_component_info = css` // document-info
    width: 100%;
    display: flex;
    padding-top: 0;
    align-items: flex-start;
    flex-flow: column;
    flex-basis: content;
    height: 12.5%;
    justify-content: flex-start;
`;


const h4 = css`
margin: 0;
padding: 0 0 2.5% 0;
`;

const ul  = css`
    list-style: none;
    padding: 0;
    margin: 0;
`;


export const VATTemplate: FunctionComponent<
  TemplateProps<VATTemplateCertificate> & { className?: string }
> = ({ document, className = "" }) => {
  return (
    <div css={parent} id="parent">
    <div css={child} id="child">
        <div css={child_left} id="child-left">
            <div className="child-component" css={child_component_logo} id="company-logo">
                <h1>BlockLab</h1>
            </div>
            <div className="child-component" css={child_component} id="info-left-1">
                <h4 css={h4}>Shipper</h4>
                <ul css={ul}>
                    <li>Name: {document.shipper.name}</li>
                    <li>Address: {document.shipper.address}</li>
                    <li>Contact name: {document.shipper.contactPersonName}</li>
                    <li>Contact cell number: {document.shipper.contactNumber}</li>
                    <li>Contact phone number: {document.shipper.contactTelephoneNumber}</li>
                </ul>
            </div>
            <div className="child-component" css={child_component} id="info-left-2">
                <h4 css={h4}>Cosignee</h4>
                <ul css={ul}>
                    <li>Name: {document.cosignee.name}</li>
                    <li>Contact Person: {document.cosignee.contactPersonName}</li>
                    <li>Address: {document.cosignee.address}</li>
                    <li>Phone Number: {document.cosignee.contactTelephoneNumber}</li>
                </ul>
            </div>
            <div className="child-component" css={child_component} id="info-left-3">
                            <h4 css={h4}>Container</h4>
                <ul css={ul}>
                    <li>Container NO.: {document.containers[0]?.number || "Empty" }</li>
                    <li>Quantity: {document.containers[0]?.quantity || "Empty" }</li>
                    <li>Container Type: {document.containers[0]?.type || "Empty" }</li>
                    <li>Vent Value: {document.containers[0]?.ventValue || "Empty" }</li>
                    <li>Vent YN: {document.containers[0]?.ventYN || "Empty" }</li>
                </ul>
            </div>
            <div className="child-component" css={child_component} id="info-left-4">
                            <h4 css={h4}>Goods</h4>
                <ul css={ul}>
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
        <div id="child-right" css={child_right} >
            <div className="child-component" css={child_component_info} id="document-info">
                <ul css={ul}>
                    <li>Invoice NO. : {document.invoiceNumber}</li>
                    <li>Document NO. : {document.documentNumber}</li>
                    <li>Document Data : {document.documentData}</li>
                    <li>Document Type : {document.messageName}</li>
                </ul>
            </div>
            <div className="child-component" css={child_component} id="info-right-1">
                <h4 css={h4}>Location 1</h4>
                <ul css={ul}>
                    <li>Estimated arrival date: {document.locationList[0]?.estimatedArrivalDate || "No Information"}</li>
                    <li>Estimated departure data: {document.locationList[0]?.estimatedDepartureArrivalDate || "No Information"}</li>
                    <li>City or Port code {document.locationList[0]?.routingInformation.cityOrPortCode || "No Information"}</li>
                    <li>Country code {document.locationList[0]?.routingInformation.countryCode || "No Information"}</li>
                    <li>Type code {document.locationList[0]?.routingInformation.typename || "No Information"}</li>
                </ul>
            </div>
            <div className="child-component" css={child_component} id="info-right-2">
                <h4 css={h4}>Location 2</h4>
                <ul css={ul}>
                    <li>Estimated arrival date: {document.locationList[1]?.estimatedArrivalDate || "No Information"}</li>
                    <li>Estimated departure data: {document.locationList[1]?.estimatedDepartureArrivalDate || "No Information"}</li>
                    <li>City or Port code {document.locationList[1]?.routingInformation.cityOrPortCode || "No Information"}</li>
                    <li>Country code {document.locationList[1]?.routingInformation.countryCode || "No Information"}</li>
                    <li>Type code {document.locationList[1]?.routingInformation.typename || "No Information"}</li>
                </ul>
            </div>
            <div className="child-component" css={child_component} id="info-right-3">
                <h4 css={h4}>Location 3</h4>
                <ul css={ul}>
                    <li>Estimated arrival date: {document.locationList[2]?.estimatedArrivalDate || "No Information"}</li>
                    <li>Estimated departure data: {document.locationList[2]?.estimatedDepartureArrivalDate || "No Information"}</li>
                    <li>City or Port code {document.locationList[2]?.routingInformation.cityOrPortCode || "No Information"}</li>
                    <li>Country code {document.locationList[2]?.routingInformation.countryCode || "No Information"}</li>
                    <li>Type code {document.locationList[2]?.routingInformation.typename || "No Information"}</li>
                </ul>
            </div>
            <div className="child-component" css={child_component} id="info-right-4">
                <h4 css={h4}>Location 4</h4>
                <ul css={ul}>
                    <li>Estimated arrival date: {document.locationList[3]?.estimatedArrivalDate || "No Information"}</li>
                    <li>Estimated departure data: {document.locationList[3]?.estimatedDepartureArrivalDate || "No Information"}</li>
                    <li>City or Port code {document.locationList[3]?.routingInformation.cityOrPortCode || "No Information"}</li>
                    <li>Country code {document.locationList[3]?.routingInformation.countryCode || "No Information"}</li>
                    <li>Type code {document.locationList[3]?.routingInformation.typename || "No Information"}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
  );
};
