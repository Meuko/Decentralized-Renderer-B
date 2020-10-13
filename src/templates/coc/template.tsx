import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CocTemplateCertificate } from "../samples/customTemplateSample";

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
/*
{
  recipient?: {
    name: string;
    address: {
      street: string;
      zipCode: string;
      country: string;
    };
  };
  vatNumber?: string;
  companyA?: string;
  companyB?: string;
}
*/

export const CocTemplate: FunctionComponent<
  TemplateProps<CocTemplateCertificate> & { className?: string }
> = ({ document, className = "" }) => {
  return (
    <div css={borderStyle} className={className} id="custom-template">
      <div css={borderInnerStyleAltAlt}>
        <div css={css` align-self: center;`}>
          <svg css={css`height: 72px;`} xmlns="http://www.w3.org/2000/svg">
            <path d="M19.372 19.694h19.507c6.277 0 10.719 3.767 10.719 9.175 0 2.704-1.303 4.972-3.428 6.276v.097c2.848 1.498 4.635 4.395 4.635 7.82 0 7.053-4.442 10.432-13.617 10.432H19.372v-33.8zm17.72 12.796c2.028 0 3.04-.87 3.04-2.511 0-1.593-1.012-2.414-3.04-2.414h-8.498v4.925h8.498zm.772 13.133c2.463 0 3.525-.916 3.525-2.994 0-1.93-1.158-2.992-3.525-2.992h-9.27v5.986h9.27zM54 54V20h9v34h-9zm11.845-13.301c0-8.16 6.374-13.81 15.209-13.81 8.79 0 15.163 5.65 15.163 13.81s-6.373 13.81-15.163 13.81c-8.835 0-15.21-5.65-15.21-13.81zm21.1 0c0-3.332-2.267-5.796-5.891-5.796-3.667 0-5.938 2.464-5.938 5.796 0 3.332 2.27 5.793 5.938 5.793 3.624 0 5.892-2.461 5.892-5.793zm11.027 0c0-8.064 6.326-13.81 14.92-13.81 6.954 0 12.65 3.766 14.148 9.27l-8.594 2.656c-.725-2.366-2.752-3.912-5.554-3.912-3.332 0-5.649 2.318-5.649 5.796 0 3.476 2.317 5.793 5.65 5.793 2.801 0 4.877-1.593 5.553-3.91l8.594 2.656c-1.498 5.504-7.194 9.27-14.148 9.27-8.594 0-14.92-5.746-14.92-13.81zM130 20h9.338v16.87h.097l9.969-8.736H162l-12.352 10.443L161.903 54h-10.749l-7.585-10.004h-.098l-4.133 3.318V54H130V20zm34 0h9.346v25.645H190V54h-26V20zm29.025 26.057c0-4.586 3.524-7.049 11.78-8.16 4.683-.676 6.228-1.303 6.228-2.607 0-1.16-1.545-2.028-3.766-2.028-3.137 0-5.213 1.545-5.744 4.153l-8.402-1.303c.916-5.36 6.712-9.223 13.906-9.223 8.207 0 13.376 4.2 13.376 10.961v15.644h-8.501v-2.318h-.096c-2.173 2.028-5.07 3.041-8.836 3.041-6.132 0-9.945-3.09-9.945-8.16zm18.3-2.414v-2.172h-.097c-.434.676-1.497 1.11-4.297 1.737-3.623.773-4.781 1.353-4.781 2.414 0 1.161 1.11 1.788 3.283 1.788 3.09 0 5.892-1.788 5.892-3.767zm20.802 7.388h-.097v2.463h-8.499v-33.64h9.272v9.883h.096c2.029-1.786 4.585-2.56 7.387-2.56 7.871 0 13.857 5.989 13.857 13.57 0 7.628-5.697 13.18-13.76 13.18-3.333 0-6.374-1.157-8.257-2.896zm12.745-10.382c0-3.233-2.558-5.455-6.373-5.455-3.136 0-5.696 1.835-5.696 4.152v2.414c0 2.367 2.56 4.2 5.697 4.2 3.911 0 6.373-2.122 6.373-5.311zM272 72h-49v-9.567h39.545V9.566H223V0h49v72zM0 72V0h49v9.566H9.455v52.867H49V72H0z" />
          </svg>
        </div>
      </div>
      <div css={borderInnerStyleAlt}> 
        <div css={css`flex-basis: fit-content; align-self: center;`}>
         <b>Recipient: </b> {(document.recipient?.name || "John Doe")} <br/>
         <b>Address: </b> {(document.recipient?.address.street || "Randomstreet 102BB")} <br/>
         <b>ZIP Code: </b> {(document.recipient?.address.zipCode || "39482ED")} <br/>
         <b>Country: </b> {(document.recipient?.address.country || "United NoAddressDom")} <br/>
        </div>  
        <div css={css`flex-basis: fit-content; align-self: center;`}>
          <b>VAT Number: </b> {(document.vatNumber || "0000000000000EE")} <br/>
          <b>Initiating Company: </b> {(document.companyA || "CompanyA")} <br/>
          <b>Receiving Company: </b>{(document.companyB || "CompanyB")} <br/>
        </div>  
      </div>
      <div css={containerStyle}> <b>Description: </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae placeat, reiciendis, dolore deleniti explicabo, officia eligendi nesciunt numquam facere itaque at. Molestias, expedita quisquam exercitationem ducimus ex dolore ipsum optio? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, nihil blanditiis, et qui maxime rerum, sit a doloribus ea laboriosam reiciendis. Cupiditate, atque a! Quis ea ipsam aperiam consectetur hic.</div>
      <div css={containerStyle}> <b>Description: </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae placeat, reiciendis, dolore deleniti explicabo, officia eligendi nesciunt numquam facere itaque at. Molestias, expedita quisquam exercitationem ducimus ex dolore ipsum optio? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, nihil blanditiis, et qui maxime rerum, sit a doloribus ea laboriosam reiciendis. Cupiditate, atque a! Quis ea ipsam aperiam consectetur hic.</div>
      <div css={borderInnerStyle}> <b>Description: </b> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat inventore aspernatur eligendi sunt hic at repellat. Cumque odio cupiditate, reprehenderit molestiae atque ipsum maxime tenetur tempora suscipit iste voluptatum fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit labore culpa neque cum sunt dolor molestiae tenetur, alias expedita laudantium? Veritatis optio, labore consectetur sapiente earum sunt voluptatum possimus ipsum.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus placeat ipsam molestiae libero corporis unde sit harum velit distinctio eius. Iste quod voluptas rem expedita dolorem illo, nam laudantium quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit pariatur molestiae vitae, nemo fuga reiciendis temporibus esse necessitatibus totam quasi, nisi quas dolor distinctio ducimus ullam, iure blanditiis animi?</div>
    </div>
  );
};
