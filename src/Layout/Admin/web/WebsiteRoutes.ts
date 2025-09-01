// Define types for submenu items and routes
interface SubmenuItem {
  label: string;
  path: string;
}

interface RouteItem {
  label: string;
  submenu: SubmenuItem[];
}

// WebsiteRoutes constant typed as RouteItem[]
const WebsiteRoutes: RouteItem[] = [
  {
    label: "About",
    submenu: [
      { label: "About Institute", path: "/about/about-institute" },
      { label: "Principal Message", path: "/about/principal-message" },
      { label: "Program Educational Objectives", path: "/about/program-educational-objectives" },
      { label: "Program Outcome", path: "/about/program-outcome" },
      { label: "Vision , Mission & Values", path: "/about/vision-mission-outcome" },
    ],
  },
  {
    label: "Academic",
    submenu: [
      { path: "/academic/syllabus", label: "Programme" },
      { path: "/academic/admission", label: "Admission" },
      { path: "/academic/academic-planing-monitoring", label: "Academic Planing & Monitoring" },
      { path: "/academic/academic-objective", label: "Academic Objective" },
    ],
  },
  {
    label: "Facilities",
    submenu: [
      { path: "/facilities/class-rooms", label: "Class Rooms" },
      { path: "/facilities/laboratories", label: "Laboratories" },
      { path: "/facilities/library", label: "Library" },
      { path: "/facilities/computer-labs", label: "Computer labs" },
      { path: "/facilities/hostel", label: "Hostel" },
      { path: "/facilities/sports", label: "Sports" },
    ],
  },
  {
    label: "StudentCorner",
    submenu: [
      { path: "/student-corner/committees", label: "Committees" },
      { path: "/student-corner/student-council", label: "Student Council" },
      { path: "/student-corner/scholarship", label: "Scholarship" },
      { path: "/student-corner/mentor-mentee-information", label: "Mentor Mentee information" },
      { path: "/student-corner/alumni", label: "Alumni" },
      { path: "/student-corner/student-participation-Achievement", label: "Student Participation & Achievement" },
      { path: "/student-corner/discipline", label: "Discipline" },
    ],
  },
];

export type { RouteItem, SubmenuItem };
export default WebsiteRoutes;
