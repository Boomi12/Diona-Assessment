const originalData = {
    worker: {
        name: "Madeleine Willson",
        appId: "712041",
        submitted: "March 19, 2024 19:21"
    },

    claimNumber: "20042047",

    returnToWork: {
        status: "returned",
        returnDate: "March 15, 2024",
        dutyType: "modified-reduced",
        otherDuty: "",
        progress: "Terrible. Testing Testing",
        expectedReturnDate: "",
        concerns: "",
        employerContact: "",
        employerContactDate: ""
    },

    recovery: {
        status: "full",
        comments: ""
    },

    painLevel: null,

    treatment: {
        continuing: false,
        providerType: "",
        lastDate: "",
        lastProvider: "",
        nextDate: "",
        nextProvider: "",
        frequency: ""
    },

    medication: {
        taking: false,
        name: ""
    },

    exercises: {
        doing: false,
        list: ""
    },

    additionalInfo: "No info Testing Testing"
};

const alternateData = {
    worker: {
        name: "Alex Johnson",
        appId: "845219",
        submitted: "August 19, 2026 16:45"
    },

    claimNumber: "30087542",

    returnToWork: {
        status: "not-returned",
        returnDate: "",
        dutyType: "",
        otherDuty: "",
        progress: "",
        expectedReturnDate: "August 30, 2026",
        concerns: "Still experiencing pain and limited movement.",
        employerContact: "Sarah Lee",
        employerContactDate: "August 18, 2026"
    },

    recovery: {
        status: "not-full",
        comments: "Mobility has improved but pain is still present."
    },

    painLevel: 7,

    treatment: {
        continuing: true,
        providerType: "Physiotherapist",
        lastDate: "August 15, 2026",
        lastProvider: "Dr. Kumar",
        nextDate: "August 22, 2026",
        nextProvider: "Dr. Kumar",
        frequency: "Twice per week"
    },

    medication: {
        taking: true,
        name: "Ibuprofen"
    },

    exercises: {
        doing: true,
        list: "Shoulder rotations, stretching and mobility exercises."
    },

    additionalInfo:
        "Continuing physiotherapy and following the recommended recovery plan."
};

let reportData = originalData;

function setText(id, value) {
    document.getElementById(id).textContent = value || "";
}

function setCheckbox(id, checked) {
    const element = document.getElementById(id);

    element.textContent =
        checked ? "✓" : "";

    element.classList.toggle(
        "checked",
        checked
    );
}

function renderPainScale() {
    const container =
        document.getElementById(
            "pain-options"
        );

    container.innerHTML = "";

    for (
        let number = 1;
        number <= 10;
        number++
    ) {
        const item =
            document.createElement("div");

        item.className =
            "pain-option";

        const box =
            document.createElement("span");

        box.className =
            "checkbox";

        if (
            reportData.painLevel === number
        ) {
            box.textContent = "✓";

            box.classList.add(
                "checked"
            );
        }

        const label =
            document.createElement("span");

        label.textContent =
            number;

        item.appendChild(box);
        item.appendChild(label);

        container.appendChild(item);
    }
}

function renderReport() {
    setText(
        "worker-name",
        reportData.worker.name
    );

    setText(
        "claim-number",
        reportData.claimNumber
    );

    setText(
        "worker-app-id-1",
        reportData.worker.appId
    );

    setText(
        "worker-app-id-2",
        reportData.worker.appId
    );

    setText(
        "worker-app-id-3",
        reportData.worker.appId
    );

    setText(
        "submitted-date-1",
        reportData.worker.submitted
    );

    setText(
        "submitted-date-2",
        reportData.worker.submitted
    );

    setText(
        "submitted-date-3",
        reportData.worker.submitted
    );

    setCheckbox(
        "status-no-missed",
        reportData.returnToWork.status ===
            "no-missed"
    );

    setCheckbox(
        "status-not-returned",
        reportData.returnToWork.status ===
            "not-returned"
    );

    setCheckbox(
        "status-returned",
        reportData.returnToWork.status ===
            "returned"
    );

    setText(
        "return-date",
        reportData.returnToWork.returnDate
    );

    setCheckbox(
        "duty-full-regular",
        reportData.returnToWork.dutyType ===
            "full-regular"
    );

    setCheckbox(
        "duty-full-reduced",
        reportData.returnToWork.dutyType ===
            "full-reduced"
    );

    setCheckbox(
        "duty-modified-regular",
        reportData.returnToWork.dutyType ===
            "modified-regular"
    );

    setCheckbox(
        "duty-modified-reduced",
        reportData.returnToWork.dutyType ===
            "modified-reduced"
    );

    setCheckbox(
        "duty-other",
        reportData.returnToWork.dutyType ===
            "other"
    );

    setText(
        "duty-other-text",
        reportData.returnToWork.otherDuty
    );

    setText(
        "return-progress",
        reportData.returnToWork.progress
    );

    setText(
        "expected-return-date",
        reportData.returnToWork
            .expectedReturnDate
    );

    setText(
        "return-concerns",
        reportData.returnToWork.concerns
    );

    setText(
        "employer-contact",
        reportData.returnToWork
            .employerContact
    );

    setText(
        "employer-contact-date",
        reportData.returnToWork
            .employerContactDate
    );

    setCheckbox(
        "recovery-not-full",
        reportData.recovery.status ===
            "not-full"
    );

    setCheckbox(
        "recovery-full",
        reportData.recovery.status ===
            "full"
    );

    setText(
        "recovery-comments",
        reportData.recovery.comments
    );

    renderPainScale();

    setCheckbox(
        "treatment-no",
        reportData.treatment.continuing ===
            false
    );

    setCheckbox(
        "treatment-yes",
        reportData.treatment.continuing ===
            true
    );

    setText(
        "provider-type",
        reportData.treatment.providerType
    );

    setText(
        "last-treatment-date",
        reportData.treatment.lastDate
    );

    setText(
        "last-provider-name",
        reportData.treatment.lastProvider
    );

    setText(
        "next-treatment-date",
        reportData.treatment.nextDate
    );

    setText(
        "next-provider-name",
        reportData.treatment.nextProvider
    );

    setText(
        "treatment-frequency",
        reportData.treatment.frequency
    );

    setCheckbox(
        "medication-no",
        reportData.medication.taking ===
            false
    );

    setCheckbox(
        "medication-yes",
        reportData.medication.taking ===
            true
    );

    setText(
        "medication-name",
        reportData.medication.name
    );

    setCheckbox(
        "exercise-no",
        reportData.exercises.doing ===
            false
    );

    setCheckbox(
        "exercise-yes",
        reportData.exercises.doing ===
            true
    );

    setText(
        "exercise-list",
        reportData.exercises.list
    );

    setText(
        "additional-info",
        reportData.additionalInfo
    );
}

function setActiveButton(
    activeButton
) {
    document.querySelectorAll(
        ".demo-actions button"
    ).forEach(button => {
        button.classList.remove(
            "active"
        );
    });

    activeButton.classList.add(
        "active"
    );
}

const originalButton =
    document.getElementById(
        "original-data-btn"
    );

const alternateButton =
    document.getElementById(
        "alternate-data-btn"
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

        setActiveButton(
            originalButton
        );
    }
);

alternateButton.addEventListener(
    "click",
    () => {
        reportData = alternateData;

        renderReport();

        setActiveButton(
            alternateButton
        );
    }
);

printButton.addEventListener(
    "click",
    () => {
        window.print();
    }
);

renderReport();