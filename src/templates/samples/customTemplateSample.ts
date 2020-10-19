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

export interface VATTemplateCertificate extends v2.OpenAttestationDocument {
  containers: {
      number: string,
      quantity: string,
      temprature?: string,
      tempratureUnits: string,
      type: string,
      ventValue: string,
      ventYN: string
  }[],
  cosignee: {
    address: string,
    contactPersonName: string,
    contactTelephoneNumber: string,
    name: string
  },
  documentData: string,
  documentNumber: string,
  goods: {
    commercialValue?: string,
    currency?: string,
    eanCode?: string,
    internalCode?: string,
    methodOfPackaging?: string,
    name: string,
    natureOfGoods: string,
    numberOfPackages: string,
    productId: string,
    shortName: string,
    ssccCode?: string,
    statisticalNumber?: string,
    type: string,
    volume?: string,
    volumeUnit?: string,
    weight: string,
    weightUnit: string
  },
  invoiceNumber: string,
  locationList: {
      estimatedArrivalDate: string,
      estimatedDepartureArrivalDate: string,
      routingInformation: {
        cityOrPortCode: string,
        countryCode: string,
        typename: string
      }
  }[],
  messageName: string,
  messageNumber?: string,
  messageSenderIdentifier?: string,
  messageSenderName?: string,
  messageTypeIdentifier?: string,
  serviceTerm?: string,
  shipper: {
    address: string,
    code?: string,
    contactNumber: string,
    contactPersonName: string,
    contactTelephoneNumber: string,
    name: string
  },
  shippingLineOrganizationIdentifier?: string,
  shippingLineOrganizationName?: string,
  transportationType?: {
    code: string,
    codeDescription: string
  }
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

export const vatTemplateCertificate : VATTemplateCertificate = {

  documentData: "20201005",
  documentNumber: "SO077",
  invoiceNumber: "INV001",
  messageName: "Sales Order",

  cosignee: {
    address: "123 Main St, Anytown, UK",
    contactPersonName: "John Doe",
    contactTelephoneNumber: "0624324113",
    name: "John Doe" 
  },
  shipper: {
    address: "Delftsestraat 11, 3013AB, Rotterdam",
    contactNumber: "0624324113",
    contactPersonName: "Jorik Schouten",
    contactTelephoneNumber: "0624324113",
    name: "BlockLab" 
  },

  locationList: [
    {
      estimatedArrivalDate: "20201005",
      estimatedDepartureArrivalDate: "20201005",
      routingInformation: {
        cityOrPortCode: "RTM",
        countryCode: "NLD",
        typename: "PICKUP_PLACE" 
      }
    },
    {
      estimatedArrivalDate: "20201005",
      estimatedDepartureArrivalDate: "20201005",
      routingInformation: {
        cityOrPortCode: "NT",
        countryCode: "UK",
        typename: "FINAL_DESTINATION" 
      }
    }
    ],
  containers: [
    {
      number: "HDMU1234567",
      quantity: "1",
      tempratureUnits: "celcius",
      type: "40H",
      ventValue: "2",
      ventYN: "N" 
    }
  ],
  goods: {
    name: "Television",
    natureOfGoods: "Electronics",
    numberOfPackages: "100",
    productId: "55ktv001",
    shortName: "TV",
    type: "Electronics",
    weight: "1000",
    weightUnit: "Kilogram" 
  },
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
    name: "SALES_ORDER",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://issuer.mza.jp"
  }
};