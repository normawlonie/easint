// Example model structure
const model = {
    component: {
        layoutHeaders: {
            header1: { /* header1 object */ },
            header2: { /* header2 object */ },
            // More headers...
        }
    }
};

const channel = 'header2';
const layoutHeader = model.component.layoutHeaders[channel];

console.log(layoutHeader);
// This would log the object associated with 'header2' from layoutHeaders.
