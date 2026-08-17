"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var day;
(function (day) {
    day[day["monday"] = 0] = "monday";
    day[day["tuesday"] = 1] = "tuesday";
    day[day["wednesday"] = 2] = "wednesday";
    day[day["thursday"] = 3] = "thursday";
    day[day["friday"] = 4] = "friday";
    day[day["saturday"] = 5] = "saturday";
    day[day["sunday"] = 6] = "sunday";
})(day || (day = {}));
console.log(day.monday);
console.log(day.thursday);
var role;
(function (role) {
    role["admin"] = "admin";
    role["user"] = "user";
    role["moderator"] = "moderator";
})(role || (role = {}));
console.log(role.admin);
const newAdmin = {
    name: "Masud",
    role: role.admin
};
console.log(newAdmin);
var priorities;
(function (priorities) {
    priorities[priorities["low"] = 0] = "low";
    priorities[priorities["medium"] = 1] = "medium";
    priorities[priorities["high"] = 2] = "high";
})(priorities || (priorities = {}));
//# sourceMappingURL=enums.js.map