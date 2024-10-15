import jsPDF from "jspdf";

const drawSectionTitle = (doc, title, xPos, yPos) => {
    doc.setFontSize(10);
    doc.setTextColor("#111827");
    doc.text(title, xPos, yPos);
};

const drawTextItems = (doc, items, color, xPos, yPos, columnWidth, lineHeight, pageHeight, margin) => {
    doc.setFontSize(10);
    doc.setTextColor(color);
    if (Array.isArray(items)) {
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

    // Candidate Name and Email
    doc.setFontSize(14);
    doc.setTextColor("#111827");
    if (yPos + 40 > pageHeight - margin) {
        doc.addPage();
        yPos = margin;
    }
    doc.text(`Name: ${candidate.name}`, margin + 10, yPos + 20);
    doc.setFontSize(12);
    doc.setTextColor("#4D5761");
    doc.text(`Email: ${candidate.email}`, margin + 10, yPos + 40);

    // Top Section: Skills and Experiences
    let skillYPos = yPos + 60;
    drawSectionTitle(doc, 'Skills:', margin + 10, skillYPos);
    skillYPos += lineHeight;
    skillYPos = drawTextItems(doc, candidate.skills?.okey, "#079455", margin + 20, skillYPos, columnWidth, lineHeight, pageHeight, margin);
    skillYPos = drawTextItems(doc, candidate.skills?.missing, "#F04438", margin + 20, skillYPos, columnWidth, lineHeight, pageHeight, margin);

    let expYPos = yPos + 60;
    drawSectionTitle(doc, 'Experiences:', margin + columnWidth + 20, expYPos);
    expYPos += lineHeight;
    expYPos = drawTextItems(doc, candidate.experiences?.okey, "#079455", margin + columnWidth + 30, expYPos, columnWidth, lineHeight, pageHeight, margin);
    expYPos = drawTextItems(doc, candidate.experiences?.missing, "#F04438", margin + columnWidth + 30, expYPos, columnWidth, lineHeight, pageHeight, margin);

    const maxTopYPos = Math.max(skillYPos, expYPos);
    yPos = maxTopYPos + 20;

    // Bottom Section: Education and Tools
    let eduYPos = yPos + 20;
    drawSectionTitle(doc, 'Education:', margin + 10, eduYPos);
    eduYPos += lineHeight;
    eduYPos = drawTextItems(doc, candidate.education?.okey, "#079455", margin + 20, eduYPos, columnWidth, lineHeight, pageHeight, margin);
    eduYPos = drawTextItems(doc, candidate.education?.missing, "#F04438", margin + 20, eduYPos, columnWidth, lineHeight, pageHeight, margin);

    let toolsYPos = yPos + 20;
    drawSectionTitle(doc, 'Tools:', margin + columnWidth + 20, toolsYPos);
    toolsYPos += lineHeight;
    toolsYPos = drawTextItems(doc, candidate.tools?.okey, "#079455", margin + columnWidth + 30, toolsYPos, columnWidth, lineHeight, pageHeight, margin);
    toolsYPos = drawTextItems(doc, candidate.tools?.missing, "#F04438", margin + columnWidth + 30, toolsYPos, columnWidth, lineHeight, pageHeight, margin);

    // AI Score
    const maxBottomYPos = Math.max(eduYPos, toolsYPos);
    if (maxBottomYPos + 20 > pageHeight - margin) {
        doc.addPage();
        yPos = margin;
    }
    doc.setTextColor("#111827");
    doc.text(`AI Score: ${candidate.aiScore}%`, margin + 10, maxBottomYPos + 20);

    return maxBottomYPos + 40;
};

export const generatePDF = async (candidates) => {
    console.log(candidates);
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
        doc.setFillColor(index % 2 === 0 ? '#ffffff' : '#ffffff');
        doc.rect(margin, yPos, pageWidth - margin * 2, 180, 'F');

        yPos = drawCandidateInfo(doc, candidate, margin, yPos, pageWidth, lineHeight, pageHeight);

        if (index < candidates.length - 1) {
            if (yPos + 20 > pageHeight - margin) {
                doc.addPage();
                yPos = margin;
            }
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