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

export interface SalesOrderTemplate extends v2.OpenAttestationDocument {
  Containers: {
      Number: string,
      Quantity: string,
      Temprature?: string,
      TempratureUnits: string,
      Type: string,
      VentValue: string,
      VentYN: string
  }[],
  Consignee: {
    Address: string,
    ContactPersonName: string,
    ContactTelephoneNumber: string,
    Name: string
  },
  DocumentData: string,
  DocumentNumber: string,
  Goods: {
    CommercialValue?: string,
    Currency?: string,
    EanCode?: string,
    InternalCode?: string,
    MethodOfPackaging?: string,
    Name: string,
    NatureOfGoods: string,
    NumberOfPackages: string,
    ProductId: string,
    ShortName: string,
    SsccCode?: string,
    StatisticalNumber?: string,
    Type: string,
    Volume?: string,
    VolumeUnit?: string,
    Weight: string,
    WeightUnit: string
  },
  InvoiceNumber: string,
  LocationList: {
      EstimatedArrivalDate: string,
      EstimatedDepartureArrivalDate: string,
      RoutingInformation: {
        CityOrPortCode: string,
        CountryCode: string,
        TypeName: string
      }
  }[],
  MessageName: string,
  MessageNumber?: string,
  MessageSenderIdentifier?: string,
  MessageSenderName?: string,
  MessageTypeIdentifier?: string,
  ServiceTerm?: string,
  Shipper: {
    Address: string,
    Code?: string,
    ContactNumber: string,
    ContactPersonName: string,
    ContactTelephoneNumber: string,
    Name: string
  },
  ShippingLineOrganizationIdentifier?: string,
  ShippingLineOrganizationName?: string,
  TransportationType?: {
    Code: string,
    CodeDescription: string
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

export const SalesOrderTemplateDummy : SalesOrderTemplate = {

  DocumentData: "20201005",
  DocumentNumber: "SO077",
  InvoiceNumber: "INV001",
  MessageName: "Sales Order",

  Consignee: {
    Address: "123 Main St, Anytown, UK",
    ContactPersonName: "John Doe",
    ContactTelephoneNumber: "0624324113",
    Name: "John Doe" 
  },
  Shipper: {
    Address: "Delftsestraat 11, 3013AB, Rotterdam",
    ContactNumber: "0624324113",
    ContactPersonName: "Jorik Schouten",
    ContactTelephoneNumber: "0624324113",
    Name: "BlockLab" 
  },
  LocationList: [
    {
      EstimatedArrivalDate: "20201005",
      EstimatedDepartureArrivalDate: "20201005",
      RoutingInformation: {
        CityOrPortCode: "RTM",
        CountryCode: "NLD",
        TypeName: "PICKUP_PLACE" 
      }
    },
    {
      EstimatedArrivalDate: "20201005",
      EstimatedDepartureArrivalDate: "20201005",
      RoutingInformation: {
        CityOrPortCode: "NT",
        CountryCode: "UK",
        TypeName: "FINAL_DESTINATION" 
      }
    }
    ],
  Containers: [
    {
      Number: "HDMU1234567",
      Quantity: "1",
      TempratureUnits: "celcius",
      Type: "40H",
      VentValue: "2",
      VentYN: "N" 
    }
  ],
  Goods: {
    Name: "Television",
    NatureOfGoods: "Electronics",
    NumberOfPackages: "100",
    ProductId: "55ktv001",
    ShortName: "TV",
    Type: "Electronics",
    Weight: "1000",
    WeightUnit: "Kilogram" 
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