import { VATTemplate } from "./template";

// Each template has its own template array in which we can define
// how many tabs our template document should contain. For instance,
// imagine our SALES_ORDER document has a page container general
// shipper~receiver information, we could add a second "tab" containing
// product information. This would/could reduce information clutter.
// Each tab can have its own template.
export const templates = [
	{
		// This template's unique identifier. 
		id: "vatTemplate",
		// Name of this template which will be listed in the renderer's
		// tab. I've personalyl only seen this used in the storybook viewer.
		label: "VatTemplate",
		// The template we should show if we receive a document with
		// $template.name === "SALES_ORDER". This because ../index.tsx
		// states that "SALES_ORDER" is this template. 
		template: VATTemplate
	}
//	,
	//{
		//id: "secondTab",
		//label: "SecondTab",
		//template: SecondTemplate 
	//}
];