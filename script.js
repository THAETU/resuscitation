document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("team-members")) {
    setupDropdowns();
    document.getElementById("save-button").addEventListener("click", saveSelections);
  } else {
    displaySummary();
  }
});

function setupDropdowns() {
  const teamRoles = {
    "Team Leader": ["Dr. Ashan", ", "Dr. Dharsha", "Dr. Nairoos", "Dr. Poornima", "Dr. Jayani", "Dr.Thushan", "Dr. Dhanushan", "Dr. Pulasthi", "Dr. Hiruni", "Dr. Chathurika", "Dr. Heerthikan", "Dr. Vithushan"],
    "CPR-1": ["N/O Mr. Dissanayake", "N/O Mrs. Kulasekara", "N/O Mrs. Priyadharshani", "N/O Mrs. Pathirana", "N/O Mrs. Thennakoon", "N/O Mrs.Manawasinghe", "N/O Mr. Shantha", "N/O Mrs. Shanika Dhayani", "N/O Mrs. S.M.L.W. Senavirathne", "N/O Mr. Madushanka", "N/O Mrs. Tharushani", "N/O Miss. Marasinghe", "N/O Mr. Illangasinghe", "N/O Mrs. Dilinika", "N/O Miss. Attapaththu","N/O Mrs. Harshani","N/O Miss. Dissanayake", "N/O Miss. Ariyasena"], 
    "CPR-2": [ "Shamali", "Rasika", "Chandani", "Madhuka", "Priyangika", "Sandhya", "Nilanthi", "Mahesh", "Nishantha", "Iresh", "Senarath", "Prabath", "Dimuthu", "Suresh"],
    "Airway": ["Dr. Ashan", ", "Dr. Dharsha", "Dr. Nairoos", "Dr. Poornima", "Dr. Jayani", "Dr.Thushan", "Dr. Dhanushan", "Dr. Pulasthi", "Dr. Hiruni", "Dr. Chathurika", "Dr. Heerthikan", "Dr. Vithushan"],
    "Vascular access & medications": ["N/O Mr. Dissanayake", "N/O Mrs. Kulasekara", "N/O Mrs. Priyadharshani", "N/O Mrs. Pathirana", "N/O Mrs. Thennakoon", "N/O Mrs.Manawasinghe", "N/O Mr. Shantha", "N/O Mrs. Shanika Dhayani", "N/O Mrs. S.M.L.W. Senavirathne", "N/O Mr. Madushanka", "N/O Mrs. Tharushani", "N/O Miss. Marasinghe", "N/O Mr. Illangasinghe", "N/O Mrs. Dilinika", "N/O Miss. Attapaththu","N/O Mrs. Harshani","N/O Miss. Dissanayake", "N/O Miss. Ariyasena"],
    "Scriber": [""N/O Mr. Dissanayake", "N/O Mrs. Kulasekara", "N/O Mrs. Priyadharshani", "N/O Mrs. Pathirana", "N/O Mrs. Thennakoon", "N/O Mrs.Manawasinghe", "N/O Mr. Shantha", "N/O Mrs. Shanika Dhayani", "N/O Mrs. S.M.L.W. Senavirathne", "N/O Mr. Madushanka", "N/O Mrs. Tharushani", "N/O Miss. Marasinghe", "N/O Mr. Illangasinghe", "N/O Mrs. Dilinika", "N/O Miss. Attapaththu","N/O Mrs. Harshani","N/O Miss. Dissanayake", "N/O Miss. Ariyasena"]
  };
  
  // Updated specialties with multiple options per role.p

  const specialties = {
    "Medical Consultant": [
         { name: "Dr. Nimal Senevirathne", contact: "0718576150" },
         { name: "Dr. Jayalakshmi", contact: "0777537994" },
         { name: "Dr. Chathooriya Pathmulla", contact: "0773242878" },
         { name: "Dr. Jevon Yudishtan", contact: "0773412273" },
         { name: "Dr. Nuwan Premawardana", contact: "0718496348" },
         { name: "Dr. S.D.N Senadhira", contact: "0774386248" },
         { name: "Prof. Dr. Siribaddana ", contact: "0777326940" },
         { name: "Dr. Chamara Sarathchandra", contact: "0774743366" },
         { name: "Dr. Hemal Senanayaka", contact: "0772075330" },
         { name: "Dr. Prasanna Veeravansha", contact: "0773750414" }
    ],
    "Medical Registrar": [
         { name: "Dr. Lahiru (A)", contact: "076139219" },
         { name: "Dr. Ishani", contact: "0768088541" },
         { name: "Dr. Kogulan", contact: "0778485538" },
         { name: "Dr. Sachini", contact: "0718737130" },
         { name: "Dr. Lahiru (B)", contact: "0756550421" },
         { name: "Dr. Niroshan", contact: "0779550333" },
         { name: "Dr. Dimantha", contact: "0711164709" },
         { name: "Dr. Tharaka", contact: "0775414408" },
         { name: "Dr. Priyadharshana", contact: "0768057547" },
         { name: "Dr. Sambavi", contact: "0779756129" },
         { name: "Dr. Umavi", contact: "0710182083" },
         { name: "Dr. Darani", contact: "0779693323" }
    ],Dr.Nithurshan
    "Surgery": [
         { name: "Dr. Shashika Liyanage", contact: "0718098353" },
         { name: "Dr. K.M.M. Kulasekara", contact: "0777946567" },
         { name: "Dr. Chandana Dampage", contact: "0718120938" },
         { name: "Dr. Sujeewa Thalgaspitiya", contact: "0778084465" },
         { name: "Dr. Srishankar", contact: "0767026539" },
         { name: "Dr. Kithsiri Senanayake", contact: "0772094131" },
         { name: "Dr. Anuradha Jayathilaka", contact: "0718426263" }
  
    ],
    "Pediatrics": [
         { name: "Dr. Udhaya DeSilva", contact: "0773785646" },
         { name: "Dr. Damitha Chandradasa", contact: "0705256054" },
         { name: "Dr. Nayani Suraweera", contact: "0777231818" },
         { name: "Dr. M.M. Arambepola", contact: "0777844095" }

    ],
    "Cardiology": [
         { name: "Dr. Arulkumar Jegavanthan", contact: "0774790360" },
         { name: "Dr. Sumudu Sajeewa Wickramasinghe", contact: "0772987256" },
         { name: "Dr. Tharanga Fernando", contact: "0771733866" }
    ]
  };

  const otherRoles = {
    "CT Radiographer": ["Tech Alpha", "Tech B", "Tech C"],
    "Admission": [""N/O Mr. Dissanayake", "N/O Mrs. Kulasekara", "N/O Mrs. Priyadharshani", "N/O Mrs. Pathirana", "N/O Mrs. Thennakoon", "N/O Mrs.Manawasinghe", "N/O Mr. Shantha", "N/O Mrs. Shanika Dhayani", "N/O Mrs. S.M.L.W. Senavirathne", "N/O Mr. Madushanka", "N/O Mrs. Tharushani", "N/O Miss. Marasinghe", "N/O Mr. Illangasinghe", "N/O Mrs. Dilinika", "N/O Miss. Attapaththu","N/O Mrs. Harshani","N/O Miss. Dissanayake", "N/O Miss. Ariyasena"]
    "Others": [ "Shamali", "Rasika", "Chandani", "Madhuka", "Priyangika", "Sandhya", "Nilanthi", "Mahesh", "Nishantha", "Iresh", "Senarath", "Prabath", "Dimuthu", "Suresh"]
  };

  populateDropdowns("emergency physician", on call emergency physician);
  populateDropdowns("team-members", teamRoles);
  populateDropdowns("specialties", specialties, true);
  populateDropdowns("other-roles", otherRoles);
}

function populateDropdowns(containerId, options, isSpecialty = false) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  Object.keys(options).forEach(role => {
    let label = document.createElement("label");
    label.textContent = role + ": ";
    let select = document.createElement("select");
    select.id = role.replace(/ /g, "-");

    if (isSpecialty) {
      // For specialties, options[role] is now an array of objects.
      options[role].forEach(item => {
        let option = document.createElement("option");
        option.value = item.name;
        option.textContent = item.name;
        option.dataset.contact = item.contact;
        select.appendChild(option);
      });
    } else {
      options[role].forEach(name => {
        let option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        select.appendChild(option);
      });
    }
    
    container.appendChild(label);
    container.appendChild(select);
    container.appendChild(document.createElement("br"));
  });
}

function saveSelections() {
  let teamMembers = {};
  document.querySelectorAll("#team-members select").forEach(select => {
    teamMembers[select.id] = select.value;
  });

  let specialties = {};
  document.querySelectorAll("#specialties select").forEach(select => {
    let selectedOption = select.options[select.selectedIndex];
    let contact = selectedOption.dataset.contact || "Unknown";
    specialties[select.id] = {
      name: select.value,
      contact: contact
    };
  });
  
  let otherRolesData = {};
  document.querySelectorAll("#other-roles select").forEach(select => {
    otherRolesData[select.id] = select.value;
  });

  localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
  localStorage.setItem("specialties", JSON.stringify(specialties));
  localStorage.setItem("otherRoles", JSON.stringify(otherRolesData));
  
  window.location.href = "summary.html";
}

function displaySummary() {
  const teamMembers = JSON.parse(localStorage.getItem("teamMembers")) || {};
  const specialties = JSON.parse(localStorage.getItem("specialties")) || {};
  const otherRoles = JSON.parse(localStorage.getItem("otherRoles")) || {};

  const teamList = document.getElementById("summary-team-list");
  const specialtyList = document.getElementById("summary-specialty-list");
  const otherRolesList = document.getElementById("summary-other-roles");

  Object.entries(teamMembers).forEach(([role, name]) => {
    let li = document.createElement("li");
    li.innerHTML = `${role.replace(/-/g, " ")}<strong>: ${name || "Not Assigned"}`;
    teamList.appendChild(li);
  });

  Object.entries(specialties).forEach(([role, { name, contact }]) => {
    let li = document.createElement("li");
    li.innerHTML = `${role.replace(/-/g, " ")}<strong>: ${name} - ${contact}`;
    specialtyList.appendChild(li);
  });

  Object.entries(otherRoles).forEach(([role, name]) => {
    let li = document.createElement("li");
    li.innerHTML = `${role.replace(/-/g, " ")}<strong>: ${name || "Not Assigned"}`;
    otherRolesList.appendChild(li);
  });
}
