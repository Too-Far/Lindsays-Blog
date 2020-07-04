/* eslint-disable max-len */
/* This file contains the functions which generate the output of each file */
module.exports = {
  // Output generated for component's definition file
  buildJS: componentName =>
    `import React from 'react';
import styles from "./${componentName}.module.css";
const ${componentName} = () => {
    return (
        null
    );
};
export default ${componentName};
  `,

  // Output generated for component's css file
  buildCss: componentName => `.${componentName}Container {}`,
}
