import { Form } from "@bpmn-io/form-js";
import { useEffect } from "react";

import "@bpmn-io/form-js/dist/assets/form-js.css";

const FormViewer = () => {
  useEffect(() => {
    const data = {
      creditor: "John Doe Company",
      amount: 456,
      invoiceNumber: "C-123",
      approved: true,
      approvedBy: "John Doe",
    };

    const form = new Form({
      container: document.querySelector("#task-form-js-viewer"),
    });

    //@ts-ignore
    form.on("submit", () => {
      console.log("called");
    });

    const schema = {
      components: [
        {
          key: "creditor",
          label: "Creditor",
          type: "textfield",
          validate: {
            required: true,
          },
        },
        {
          key: "amount",
          label: "Amount",
          type: "number",
          validate: {
            required: true,
          },
        },
        {
          description: "An invoice number in the format: C-123.",
          key: "invoiceNumber",
          label: "Invoice Number",
          type: "textfield",
          validate: {
            pattern: "^C-[0-9]+$",
          },
        },
        {
          key: "approved",
          label: "Approved",
          type: "checkbox",
        },
        {
          key: "approvedBy",
          label: "Approved By",
          type: "textfield",
        },
        {
          key: "submit",
          label: "Submit",
          type: "button",
        },
        {
          action: "reset",
          key: "reset",
          label: "Reset",
          type: "button",
        },
      ],
      type: "default",
    };

    form
      .importSchema(schema, data)
      .catch((error) => console.error("cannot import form schema", error));
  }, []);
  return <div id="task-form-js-viewer" />;
};

export default FormViewer;
