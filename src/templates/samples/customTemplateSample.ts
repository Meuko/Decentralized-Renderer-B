import { v2 } from "@govtechsg/decentralized-renderer-react-components";

export interface CocTemplateCertificate extends v2.OpenAttestationDocument {
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

export const cocTemplateCertificate: CocTemplateCertificate = {
  recipient: {
    name: "Hamza Tokuchi",
    address: {
      street: "Prinsjesdijk 30E",
      zipCode: "3099ED",
      country: "The Netherlands"
    } 
  }, 
  vatNumber: "931287468781236EE",
  companyA: "BlockLab",
  companyB: "DeTech",
  issuers: [
    {
      name: "Hamza Tokuchi",
	  documentStore: "0xA92c7C46813aB9a7440CEcc5e0F10B7bB87Fee15",
	  identityProof: {
        location: "issuer.mza.jp",
        type: v2.IdentityProofType.DNSTxt
      }
    }
  ],
  $template: {
    name: "COC",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://issuer.mza.jp"
  }
};
