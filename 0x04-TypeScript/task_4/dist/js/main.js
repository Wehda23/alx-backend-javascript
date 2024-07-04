/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />
var cpp = new Subjects.Cpp();
var react = new Subjects.React();
var java = new Subjects.Java();
var cteacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10
};
cpp.setTeacher(cteacher);
react.setTeacher(cteacher);
java.setTeacher(cteacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
//# sourceMappingURL=main.js.map