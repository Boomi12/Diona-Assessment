const originalData = {
    worker: {
        name: "Madeleine Willson",
        appId: "712041",
        submitted: "March 28, 2024 20:43"
    },

    claimNumber: "20042047",

    prescriptionDrugs: [
        {
            drugName: "Naproxen",
            prescriptionDate: "February 28, 2024",
            datePurchased: "February 29, 2024",
            healthcareProvider: "Dr. Best",
            paidAmount: "$20.00"
        }
    ],

    overTheCounterDrugs: [
        {
            drugName: "Advil",
            datePurchased: "March 28, 2024",
            paidAmount: "$8.00",
            sellerName: "Shoppers Drug Mart",
            reason: "Pain"
        }
    ],

    medicalSupplies: [
        {
            itemPurchased: "Tensor",
            datePurchased: "February 28, 2024",
            prescribed: "Yes",
            healthcareProvider: "Dr. Best",
            paidAmount: "$10.00",
            sellerName: "Shoppers DrugMart"
        }
    ],

    parking: [
        {
            address: "333 St Mary Ave, Winnipeg MB R3C4A5, Canada",
            date: "March 28, 2024",
            paidAmount: "$10.00",
            meterUsed: "yes",
            meterNumber: "12245"
        }
    ],

    mileage: [
        {
            appointmentDate: "March 28, 2024",
            healthcareAddress:
                "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada",
            workplaceAddress:
                "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada",
            roundTripKm: "20 km"
        }
    ],

    busTaxi: [
        {
            appointmentDate: "March 28, 2024",
            startingPoint: "",
            healthcareAddress:
                "HSC Winnipeg Women's Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada",
            transportType: "Bus",
            totalFare: "$3.00"
        },
        {
            appointmentDate: "March 27, 2024",
            startingPoint:
                "25 Furby St, Winnipeg MB R3C2A2, Canada",
            healthcareAddress:
                "440 Edmonton St, Winnipeg MB R3B 2M4, Canada",
            transportType: "Taxi",
            totalFare: "$15.00"
        }
    ]
};

const multiRowData = {
    worker: {
        name: "Alex Johnson",
        appId: "845219",
        submitted: "August 19, 2026 16:30"
    },

    claimNumber: "30087542",

    prescriptionDrugs: [
        {
            drugName: "Naproxen",
            prescriptionDate: "August 1, 2026",
            datePurchased: "August 1, 2026",
            healthcareProvider: "Dr. Kumar",
            paidAmount: "$20.00"
        },
        {
            drugName: "Ibuprofen",
            prescriptionDate: "August 3, 2026",
            datePurchased: "August 3, 2026",
            healthcareProvider: "Dr. Kumar",
            paidAmount: "$15.00"
        },
        {
            drugName: "Paracetamol",
            prescriptionDate: "August 6, 2026",
            datePurchased: "August 6, 2026",
            healthcareProvider: "Dr. Smith",
            paidAmount: "$12.00"
        }
    ],

    overTheCounterDrugs: [
        {
            drugName: "Advil",
            datePurchased: "August 2, 2026",
            paidAmount: "$8.00",
            sellerName: "Shoppers Drug Mart",
            reason: "Pain"
        },
        {
            drugName: "Cold Pack",
            datePurchased: "August 4, 2026",
            paidAmount: "$11.00",
            sellerName: "Health Plus",
            reason: "Swelling"
        }
    ],

    medicalSupplies: [
        {
            itemPurchased: "Tensor",
            datePurchased: "August 2, 2026",
            prescribed: "Yes",
            healthcareProvider: "Dr. Kumar",
            paidAmount: "$10.00",
            sellerName: "Shoppers Drug Mart"
        },
        {
            itemPurchased: "Wrist Brace",
            datePurchased: "August 5, 2026",
            prescribed: "Yes",
            healthcareProvider: "Dr. Smith",
            paidAmount: "$25.00",
            sellerName: "Medical Supply Store"
        }
    ],

    parking: [
        {
            address: "333 St Mary Ave, Winnipeg MB, Canada",
            date: "August 1, 2026",
            paidAmount: "$10.00",
            meterUsed: "Yes",
            meterNumber: "12245"
        },
        {
            address: "820 Sherbrook St, Winnipeg MB, Canada",
            date: "August 5, 2026",
            paidAmount: "$8.00",
            meterUsed: "Yes",
            meterNumber: "45678"
        }
    ],

    mileage: [
        {
            appointmentDate: "August 1, 2026",
            healthcareAddress:
                "HSC, 820 Sherbrook St, Winnipeg MB, Canada",
            workplaceAddress:
                "WCB, 333 Broadway, Winnipeg MB, Canada",
            roundTripKm: "20 km"
        },
        {
            appointmentDate: "August 5, 2026",
            healthcareAddress:
                "Medical Centre, 100 Main St, Winnipeg MB, Canada",
            workplaceAddress:
                "WCB, 333 Broadway, Winnipeg MB, Canada",
            roundTripKm: "16 km"
        }
    ],

    busTaxi: [
        {
            appointmentDate: "August 2, 2026",
            startingPoint: "",
            healthcareAddress:
                "HSC Winnipeg Women's Hospital, Winnipeg MB, Canada",
            transportType: "Bus",
            totalFare: "$3.00"
        },
        {
            appointmentDate: "August 4, 2026",
            startingPoint:
                "25 Furby St, Winnipeg MB, Canada",
            healthcareAddress:
                "440 Edmonton St, Winnipeg MB, Canada",
            transportType: "Taxi",
            totalFare: "$15.00"
        },
        {
            appointmentDate: "August 7, 2026",
            startingPoint:
                "WCB, 333 Broadway, Winnipeg MB, Canada",
            healthcareAddress:
                "Health Centre, Winnipeg MB, Canada",
            transportType: "Bus",
            totalFare: "$4.00"
        }
    ]
};

let reportData = originalData;

function createTableSection(title, columns, rows) {
    const section = document.createElement("section");
    section.className = "expense-section";

    const heading = document.createElement("h2");
    heading.textContent = title;
    section.appendChild(heading);

    const table = document.createElement("table");

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    columns.forEach(column => {
        const th = document.createElement("th");
        th.textContent = column.label;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    rows.forEach(row => {
        const tr = document.createElement("tr");

        columns.forEach(column => {
            const td = document.createElement("td");
            td.textContent = row[column.key] || "";
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    section.appendChild(table);

    return section;
}

function renderReport() {
    const pageOneContent =
        document.getElementById("page-one-content");

    const pageTwoContent =
        document.getElementById("page-two-content");

    pageOneContent.innerHTML = "";
    pageTwoContent.innerHTML = "";

    document.getElementById(
        "worker-name"
    ).textContent = reportData.worker.name;

    document.getElementById(
        "claim-number"
    ).textContent = reportData.claimNumber;

    document.getElementById(
        "worker-app-id"
    ).textContent = reportData.worker.appId;

    document.getElementById(
        "submitted-date"
    ).textContent = reportData.worker.submitted;

    document.getElementById(
        "worker-app-id-page-2"
    ).textContent = reportData.worker.appId;

    document.getElementById(
        "submitted-date-page-2"
    ).textContent = reportData.worker.submitted;

    const prescriptionSection =
        createTableSection(
            "Prescription Drugs",
            [
                {
                    key: "drugName",
                    label: "Drug Name"
                },
                {
                    key: "prescriptionDate",
                    label: "Prescription Date"
                },
                {
                    key: "datePurchased",
                    label: "Date Purchased"
                },
                {
                    key: "healthcareProvider",
                    label: "Healthcare Provider Name"
                },
                {
                    key: "paidAmount",
                    label: "Paid Amount"
                }
            ],
            reportData.prescriptionDrugs
        );

    pageOneContent.appendChild(
        prescriptionSection
    );

    const otcSection =
        createTableSection(
            "Over-the-Counter Drugs",
            [
                {
                    key: "drugName",
                    label: "Drug Name"
                },
                {
                    key: "datePurchased",
                    label: "Date Purchased"
                },
                {
                    key: "paidAmount",
                    label: "Paid Amount"
                },
                {
                    key: "sellerName",
                    label: "Seller's Name"
                },
                {
                    key: "reason",
                    label: "Reason for Purchasing"
                }
            ],
            reportData.overTheCounterDrugs
        );

    pageOneContent.appendChild(
        otcSection
    );

    const suppliesSection =
        createTableSection(
            "Bandages, Braces or Other Medical Supplies",
            [
                {
                    key: "itemPurchased",
                    label: "Item Purchased"
                },
                {
                    key: "datePurchased",
                    label: "Date Purchased"
                },
                {
                    key: "prescribed",
                    label: "Was this Prescribed?"
                },
                {
                    key: "healthcareProvider",
                    label: "Healthcare Provider Name"
                },
                {
                    key: "paidAmount",
                    label: "Paid Amount"
                },
                {
                    key: "sellerName",
                    label: "Seller's Name"
                }
            ],
            reportData.medicalSupplies
        );

    pageOneContent.appendChild(
        suppliesSection
    );

    const parkingSection =
        createTableSection(
            "Parking for Medical Appointments",
            [
                {
                    key: "address",
                    label:
                        "Address of Healthcare Provider/Medical Facility"
                },
                {
                    key: "date",
                    label: "Date"
                },
                {
                    key: "paidAmount",
                    label: "Paid Amount"
                },
                {
                    key: "meterUsed",
                    label: "Meter Used?"
                },
                {
                    key: "meterNumber",
                    label: "Meter Number"
                }
            ],
            reportData.parking
        );

    pageOneContent.appendChild(
        parkingSection
    );

    const mileageHeading =
        document.createElement("h2");

    mileageHeading.textContent =
        "Mileage to Medical Appointments";

    mileageHeading.className =
        "standalone-heading";

    pageOneContent.appendChild(
        mileageHeading
    );

    const mileageNote =
        document.createElement("p");

    mileageNote.className =
        "mileage-note";

    mileageNote.textContent =
        "The WCB will generally reimburse only those transportation costs which are in excess of costs that would be incurred by the worker while travelling to and from work.";

    pageOneContent.appendChild(
        mileageNote
    );

    const mileageTable =
        createTableSection(
            "",
            [
                {
                    key: "appointmentDate",
                    label: "Appointment Date"
                },
                {
                    key: "healthcareAddress",
                    label:
                        "Address of Healthcare Provider/Medical Facility"
                },
                {
                    key: "workplaceAddress",
                    label: "Address of Workplace"
                },
                {
                    key: "roundTripKm",
                    label:
                        "Number of km (Round Trip)"
                }
            ],
            reportData.mileage
        );

    mileageTable.classList.add(
        "no-heading-section"
    );

    pageOneContent.appendChild(
        mileageTable
    );

    const busTaxiSection =
        createTableSection(
            "Bus or Taxi Fare for Medical Appointments*",
            [
                {
                    key: "appointmentDate",
                    label: "Appointment Date"
                },
                {
                    key: "startingPoint",
                    label:
                        "Address of Starting Point"
                },
                {
                    key: "healthcareAddress",
                    label:
                        "Address of Healthcare Provider/Medical Facility"
                },
                {
                    key: "transportType",
                    label:
                        "Bus or Taxi (indicate one)"
                },
                {
                    key: "totalFare",
                    label:
                        "Total Fare Paid"
                }
            ],
            reportData.busTaxi
        );

    pageTwoContent.appendChild(
        busTaxiSection
    );

    const taxiNote =
        document.createElement("p");

    taxiNote.className =
        "taxi-note";

    taxiNote.textContent =
        "*Note: Pre-approval is required from your WCB representative to claim taxi fare(s).";

    busTaxiSection.insertBefore(
        taxiNote,
        busTaxiSection.querySelector("table")
    );

    const divider =
        document.createElement("hr");

    divider.className =
        "privacy-divider";

    pageTwoContent.appendChild(
        divider
    );

    const privacySection =
        document.createElement("div");

    privacySection.className =
        "privacy-section";

    privacySection.innerHTML = `
        <span class="checked-box">✓</span>

        <span>
            I understand that the
            <span class="privacy-link">
                Privacy Notice
            </span>
            applies to the personal information collected in this document.
        </span>
    `;

    pageTwoContent.appendChild(
        privacySection
    );
}

function setActiveButton(activeButton) {
    document.querySelectorAll(
        ".demo-actions button"
    ).forEach(button => {
        button.classList.remove("active");
    });

    activeButton.classList.add("active");
}

const originalButton =
    document.getElementById(
        "original-data-btn"
    );

const multiButton =
    document.getElementById(
        "multi-data-btn"
    );

const printButton =
    document.getElementById(
        "print-btn"
    );

originalButton.addEventListener(
    "click",
    () => {
        reportData = originalData;
        renderReport();
        setActiveButton(originalButton);
    }
);

multiButton.addEventListener(
    "click",
    () => {
        reportData = multiRowData;
        renderReport();
        setActiveButton(multiButton);
    }
);

printButton.addEventListener(
    "click",
    () => {
        window.print();
    }
);

renderReport();