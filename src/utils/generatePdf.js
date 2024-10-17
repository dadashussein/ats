import jsPDF from "jspdf";

const drawSectionTitle = (doc, title, xPos, yPos) => {
    doc.setFontSize(12);
    doc.setTextColor("#111827");
    doc.text(title, xPos, yPos);
};

const drawTextItems = (doc, items, color, xPos, yPos, columnWidth, lineHeight, pageHeight, margin) => {
    doc.setFontSize(10);
    doc.setTextColor(color);

    if (Array.isArray(items) && items.length > 0) {
        items.forEach((item) => {
            const wrappedText = doc.splitTextToSize(`- ${item.name}`, columnWidth - 10);
            wrappedText.forEach(line => {
                if (yPos + lineHeight > pageHeight - margin) {
                    doc.addPage();
                    yPos = margin;
                }
                doc.text(line, xPos, yPos);
                yPos += lineHeight;
            });
        });
    }
    return yPos;
};

const drawCandidateInfo = (doc, candidate, margin, yPos, pageWidth, lineHeight, pageHeight) => {
    const columnWidth = (pageWidth - margin * 3) / 2;

    // Add a background rectangle for each candidate
    doc.setFillColor(248, 250, 252); // Light gray background
    doc.rect(margin, yPos, pageWidth - margin * 2, 200, 'F');

    // Candidate Name and Email
    doc.setFontSize(16);
    doc.setTextColor("#1E40AF"); // Dark blue for name
    doc.setFont(undefined, 'bold');
    doc.text(`${candidate.name}`, margin + 10, yPos + 30);
    
    doc.setFontSize(12);
    doc.setTextColor("#4B5563"); // Gray for email
    doc.setFont(undefined, 'normal');
    doc.text(`${candidate.email}`, margin + 10, yPos + 50);

    // AI Score Box
    doc.setFillColor("#10B981"); // Green background for AI Score
    doc.rect(pageWidth - margin - 100, yPos + 10, 90, 30, 'F');
    doc.setTextColor("#FFFFFF"); // White text for AI Score
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text(`AI Score: ${candidate.aiScore}%`, pageWidth - margin - 95, yPos + 30);

    // Draw sections for Skills, Experiences, Education, and Tools
    yPos += 70;
    yPos = drawSection(doc, 'Skills', candidate.skills, margin + 10, yPos, columnWidth, lineHeight, pageHeight, margin);
    yPos = drawSection(doc, 'Experiences', candidate.experiences, margin + columnWidth + 20, yPos - 70, columnWidth, lineHeight, pageHeight, margin);

    // Education and Tools
    yPos += 20;
    yPos = drawSection(doc, 'Education', candidate.education, margin + 10, yPos, columnWidth, lineHeight, pageHeight, margin);
    yPos = drawSection(doc, 'Tools', candidate.tools, margin + columnWidth + 20, yPos - 70, columnWidth, lineHeight, pageHeight, margin);

    return yPos + 30;
};

const drawSection = (doc, title, items, xPos, yPos, columnWidth, lineHeight, pageHeight, margin) => {
    // Section Title Background
    doc.setFillColor("#E5E7EB"); // Light gray background for section title
    doc.rect(xPos - 5, yPos - 15, columnWidth, 25, 'F');
    
    // Section Title
    doc.setFontSize(12);
    doc.setTextColor("#111827");
    doc.setFont(undefined, 'bold');
    doc.text(title, xPos, yPos);
    
    yPos += lineHeight * 1.5;
    doc.setFont(undefined, 'normal');
    
    if (items?.okey && items.okey.length > 0) {
        yPos = drawTextItems(doc, items.okey, "#059669", xPos, yPos, columnWidth, lineHeight, pageHeight, margin);
    }
    if (items?.missing && items.missing.length > 0) {
        yPos = drawTextItems(doc, items.missing, "#DC2626", xPos, yPos, columnWidth, lineHeight, pageHeight, margin);
    }
    
    return yPos;
};

export const generatePDF = async (candidates) => {
    const doc = new jsPDF('p', 'pt', 'a4');
    const margin = 40;
    let yPos = 60;
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const lineHeight = 15;

    doc.setFontSize(22);
    doc.setTextColor("#111827");
    doc.text('Candidate Report', margin, yPos);
    yPos += 40;

    candidates.forEach((candidate, index) => {
        if (yPos + 180 > pageHeight - margin) {
            doc.addPage();
            yPos = margin;
        }
        
        yPos = drawCandidateInfo(doc, candidate, margin, yPos, pageWidth, lineHeight, pageHeight);

        if (index < candidates.length - 1) {
            if (yPos + 20 > pageHeight - margin) {
                doc.addPage();
                yPos = margin;
            }
            // Add separator line between candidates
            doc.setDrawColor(200, 200, 200);
            doc.line(margin, yPos, pageWidth - margin, yPos);
            yPos += 20;
        }
    });
    return new Promise((resolve) => {
        const pdfBlob = doc.output('blob');
        resolve(pdfBlob);
    });
};
