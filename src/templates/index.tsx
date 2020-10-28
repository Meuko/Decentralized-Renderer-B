import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates as COCTemplates } from "./coc";
import { templates as SalesOrderTemplates } from "./so";

// Each template supported by this renderer is defined below in the registry
// by its template name and template reference. Each raw and wrapped document
// contains a $template object which contains a field called "name" which
// references the template to be used from this registry. In our case the template
// in customTemplateSample.ts called SalesOrderTemplateDummy contains a reference
// to a SALES_ORDER template.
export const registry: TemplateRegistry<any> = {
  COC: COCTemplates,
  SALES_ORDER: SalesOrderTemplates 
};
