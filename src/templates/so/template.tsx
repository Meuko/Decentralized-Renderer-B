import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { SalesOrderTemplate } from "../samples/customTemplateSample";

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

// Function component containing our rendered document. As can be seen
// this document is pure HTML/CSS. The main prop worth noting is our 
// VATTemplateCertificate interface which specifies all the types we
// expect from the sales order document received by the renderer. 
export const SalesOrderDocument: FunctionComponent<
  TemplateProps<SalesOrderTemplate> & { className?: string }
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
                    <li>Name: {document.Shipper.Name}</li>
                    <li>Address: {document.Shipper.Address}</li>
                    <li>Contact name: {document.Shipper.ContactPersonName}</li>
                    <li>Contact cell number: {document.Shipper.ContactNumber}</li>
                    <li>Contact phone number: {document.Shipper.ContactTelephoneNumber}</li>
                </ul>
            </div>
            <div className="child-component" css={child_component} id="info-left-2">
                <h4 css={h4}>Cosignee</h4>
                <ul css={ul}>
                    <li>Name: {document.Consignee.Name}</li>
                    <li>Contact Person: {document.Consignee.ContactPersonName}</li>
                    <li>Address: {document.Consignee.Address}</li>
                    <li>Phone Number: {document.Consignee.ContactTelephoneNumber}</li>
                </ul>
            </div>
            <div className="child-component" css={child_component} id="info-left-3">
                            <h4 css={h4}>Container</h4>
                <ul css={ul}>
                    <li>Container NO.: {document.Containers[0]?.Number || "Empty" }</li>
                    <li>Quantity: {document.Containers[0]?.Quantity || "Empty" }</li>
                    <li>Container Type: {document.Containers[0]?.Type || "Empty" }</li>
                    <li>Vent Value: {document.Containers[0]?.VentValue || "Empty" }</li>
                    <li>Vent YN: {document.Containers[0]?.VentYN || "Empty" }</li>
                </ul>
            </div>
            <div className="child-component" css={child_component} id="info-left-4">
                            <h4 css={h4}>Goods</h4>
                <ul css={ul}>
                    <li>Name: {document.Goods.Name}</li>
                    <li>Nature of Goods: {document.Goods.NatureOfGoods}</li>
                    <li>NO. of Packages: {document.Goods.NumberOfPackages}</li>
                    <li>ProductID: {document.Goods.ProductId}</li>
                    <li>Short Name: {document.Goods.ShortName}</li>
                    <li>Type: {document.Goods.Type}</li>
                    <li>Weight: {document.Goods.Weight}</li>
                </ul>
            </div>
        </div>
        <div id="child-right" css={child_right} >
            <div className="child-component" css={child_component_info} id="document-info">
                <ul css={ul}>
                    <li>Invoice NO. : {document.InvoiceNumber}</li>
                    <li>Document NO. : {document.DocumentNumber}</li>
                    <li>Document Data : {document.DocumentData}</li>
                    <li>Document Type : {document.MessageName}</li>
                </ul>
            </div>
            <div className="child-component" css={child_component} id="info-right-1">
                <h4 css={h4}>Location 1</h4>
                <ul css={ul}>
                    <li>Estimated arrival date: {document.LocationList[0]?.EstimatedArrivalDate || "No Information"}</li>
                    <li>Estimated departure data: {document.LocationList[0]?.EstimatedDepartureArrivalDate || "No Information"}</li>
                    <li>City or Port code {document.LocationList[0]?.RoutingInformation.CityOrPortCode || "No Information"}</li>
                    <li>Country code {document.LocationList[0]?.RoutingInformation.CountryCode || "No Information"}</li>
                    <li>Type code {document.LocationList[0]?.RoutingInformation.TypeName || "No Information"}</li>
                </ul>
            </div>
            <div className="child-component" css={child_component} id="info-right-2">
                <h4 css={h4}>Location 2</h4>
                <ul css={ul}>
                    <li>Estimated arrival date: {document.LocationList[1]?.EstimatedArrivalDate || "No Information"}</li>
                    <li>Estimated departure data: {document.LocationList[1]?.EstimatedDepartureArrivalDate || "No Information"}</li>
                    <li>City or Port code {document.LocationList[1]?.RoutingInformation.CityOrPortCode || "No Information"}</li>
                    <li>Country code {document.LocationList[1]?.RoutingInformation.CountryCode || "No Information"}</li>
                    <li>Type code {document.LocationList[1]?.RoutingInformation.TypeName || "No Information"}</li>
                </ul>
            </div>
            <div className="child-component" css={child_component} id="info-right-3">
                <h4 css={h4}>Location 3</h4>
                <ul css={ul}>
                    <li>Estimated arrival date: {document.LocationList[2]?.EstimatedArrivalDate || "No Information"}</li>
                    <li>Estimated departure data: {document.LocationList[2]?.EstimatedDepartureArrivalDate || "No Information"}</li>
                    <li>City or Port code {document.LocationList[2]?.RoutingInformation.CityOrPortCode || "No Information"}</li>
                    <li>Country code {document.LocationList[2]?.RoutingInformation.CountryCode || "No Information"}</li>
                    <li>Type code {document.LocationList[2]?.RoutingInformation.TypeName || "No Information"}</li>
                </ul>
            </div>
            <div className="child-component" css={child_component} id="info-right-4">
                <h4 css={h4}>Location 4</h4>
                <ul css={ul}>
                    <li>Estimated arrival date: {document.LocationList[3]?.EstimatedArrivalDate || "No Information"}</li>
                    <li>Estimated departure data: {document.LocationList[3]?.EstimatedDepartureArrivalDate || "No Information"}</li>
                    <li>City or Port code {document.LocationList[3]?.RoutingInformation.CityOrPortCode || "No Information"}</li>
                    <li>Country code {document.LocationList[3]?.RoutingInformation.CountryCode || "No Information"}</li>
                    <li>Type code {document.LocationList[3]?.RoutingInformation.TypeName || "No Information"}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
  );
};