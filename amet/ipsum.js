function getOffsetStep(step, offsetScaleType) {
    let offsetStep;
    
    switch (offsetScaleType) {
        case 'linear':
            // For linear scale, the offset step is directly proportional to the step
            offsetStep = step;
            break;
        case 'logarithmic':
            // For logarithmic scale, use a logarithmic transformation
            offsetStep = Math.log(step);
            break;
        case 'sqrt':
            // For square root scale, use the square root transformation
            offsetStep = Math.sqrt(step);
            break;
        default:
            // Default to linear if the scale type is not recognized
            console.warn(`Unknown offset scale type: ${offsetScaleType}. Defaulting to linear.`);
            offsetStep = step;
            break;
    }
    
    return offsetStep;
}

// Example usage:
console.log(getOffsetStep(10, 'linear'));      // Output: 10
console.log(getOffsetStep(10, 'logarithmic')); // Output: 2.302585092994046 (ln(10))
console.log(getOffsetStep(10, 'sqrt'));        // Output: 3.1622776601683795 (sqrt(10))
console.log(getOffsetStep(10, 'unknown'));     // Output: 10 and a warning message in the console
