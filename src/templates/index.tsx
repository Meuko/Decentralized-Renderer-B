import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates as COCTemplates } from "./coc";
import {templates as VATTemplates } from "./vat";

export const registry: TemplateRegistry<any> = {
  COC: COCTemplates,
  SALES_ORDER: VATTemplates
};
