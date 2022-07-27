const formHelper = [
  {
    type: "text",
    class: "profile-input",
    name: "First Name",
    varname: "firstName",
    object: "name",
  },
  {
    type: "text",
    class: "profile-input",
    name: "Last Name",
    varname: "lastName",
    object: "name",
  },
  {
    type: "text",
    class: "profile-input",
    name: "Age",
    varname: "age",
  },
  {
    type: "text",
    class: "profile-input",
    name: "School",
    varname: "school",
  },
  {
    type: "text",
    class: "profile-input",
    name: "Street",
    varname: "street",
    object: "address",
  },
  {
    type: "text",
    class: "profile-input",
    name: "Barangay",
    varname: "barangay",
    object: "address",
  },
  {
    type: "checkbox",
    class: "profile-input",
    name: "Present Address?",
    varname: "isPresent",
    object: "address",
  },
];

export default formHelper;
