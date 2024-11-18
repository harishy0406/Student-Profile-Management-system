
        function printAcademicData() {
            // Collect content from all the relevant sections
            const top3Content = document.querySelector('#top3') ? document.querySelector('#top3').innerHTML : '';
            const projContent = document.querySelector('#proj') ? document.querySelector('#proj').innerHTML : '';
            const galleryContent = document.querySelector('#gallery') ? document.querySelector('#gallery').innerHTML : '';
            const internContent = document.querySelector('#intern') ? document.querySelector('#intern').innerHTML : '';
            const certContent = document.querySelector('#cert') ? document.querySelector('#cert').innerHTML : '';
    
            // Combine all content into one variable
            const printContent = `
                <div>${top3Content}</div>
                <div>${projContent}</div>
                <div>${galleryContent}</div>
                <div>${internContent}</div>
                <div>${certContent}</div>
            `;
    
            // Open a new window for printing
            const newWindow = window.open('', '', 'width=800,height=600');
            newWindow.document.write(`
                <html>
                    <head>
                        <title>Academic Data</title>
                        <style>
                            body { font-family: Arial, sans-serif; }
                            h2 { text-align: center; }
                            div { margin: 20px; }
                        </style>
                    </head>
                    <body>
                        <h2>Academic Details</h2>
                        ${printContent}
                    </body>
                </html>
            `);
            newWindow.document.close(); // Ensure the document is closed
            newWindow.onload = function() { // Wait for the new window to fully load
                newWindow.print(); // Open the print dialog
            };
        }