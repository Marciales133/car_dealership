import {isPage, searchName, inputShow, keydown} from "./index.js";

export let employeeList = JSON.parse(sessionStorage.getItem('employeeList'));
export let employeeNumber = JSON.parse(sessionStorage.getItem('employeeNumber'));
if(!employeeList) employeeList = {
    "Alice Mendoza":{
      name: "Alice Mendoza",
      age: 29,
      gender: "Female",
      employeeId: "EMP001",
      birthDay: "1995-04-12",
      civilStatus: "Single",
      nationality: "Filipino",
      contactNumber: "09171234567",
      emergencyContactNumber: "09179876543",
      emailAddress: "alice.mendoza@example.com",
      currentAddress: "123 Ortigas Ave, Pasig City",
      dateHired: "2023-01-15",
      employmentStatus: "Regular",
      position: "Software Developer",
      department: "IT Support",
      manager: "Jonathan Cruz",
      shift: "Shift: 8Am-3Pm",
      workLocation: "Main Office",
      employeeType: "Office Staff",
      sss: "34-1234567-8",
      tin: "123-456-789",
      philHealth: "12-345678910",
      pagIbig: "9876-5432-1098",
      nationalId: "PH123456789012",
      basicSalary: "35000",
      payType: "Monthly",
      payrollChannel: "BDO",
      salaryLevel: "3A",
      allowances: "Transportation, Meal",
      deductions: "None",
      status: "Active",
      separationDate: "N/A",
      remarks: "Consistent top performer",
      loginEmail: "alice.mendoza@company.com",
      systemRole: "Employee",
      password: "alice1234",
      accessPermissions: "basic",
      employeeTrackNumber:'0001', 
      clockState: 'clockOut', 
      timeRendered: 0, 
      managerId : "EMP112"
    },
    "Carlos Dela Cruz":{
      name: "Carlos Dela Cruz",
      age: 41,
      gender: "Male",
      employeeId: "EMP002",
      birthDay: "1983-10-30",
      civilStatus: "Married",
      nationality: "Filipino",
      contactNumber: "09181234567",
      emergencyContactNumber: "09223334444",
      emailAddress: "carlos.delacruz@example.com",
      currentAddress: "456 Commonwealth Ave, Quezon City",
      dateHired: "2018-07-01",
      employmentStatus: "Regular",
      position: "Plant Supervisor",
      department: "Mechanics",
      manager: "Jonathan Cruz",
      shift: "Shift: 3Pm-11Pm",
      workLocation: "Cabuyao Plant"
      ,employeeType: "Factory Worker",
      sss: "35-9876543-2",
      tin: "321-654-987",
      philHealth: "98-765432109",
      pagIbig: "1234-5678-9012",
      nationalId: "PH987654321098",
      basicSalary: "45000",
      payType: "Semi-Monthly",
      payrollChannel: "Metrobank",
      salaryLevel: "5B",
      allowances: "Hazard, Overtime",
      deductions: "None",
      status: "Active",
      separationDate: "N/A",
      remarks: "Overtime expert",
      loginEmail: "carlos.delacruz@company.com",
      systemRole: "Manager",
      password: "carlosSecure!",
      accessPermissions: "manager",
      employeeTrackNumber:'0002', 
      clockState: 'clockOut', 
      timeRendered: 0, 
      managerId : "EMP112"
    },
    "Bianca Ramos":{
      name: "Bianca Ramos",
      age: 34,
      gender: "Female",
      employeeId: "EMP003",
      birthDay: "1990-08-22",
      civilStatus: "Single",
      nationality: "Filipino",
      contactNumber: "09190001111",
      emergencyContactNumber: "09197778888",
      emailAddress: "bianca.ramos@example.com",
      currentAddress: "789 Taft Ave, Manila",
      dateHired: "2021-03-10",
      employmentStatus: "Contracted",
      position: "HR Assistant",
      department: "Human Resources",
      manager: "Jonathan Cruz",
      shift: "Shift: 8Am-3Pm",
      workLocation: "Main Office",
      employeeType: "Office Staff",
      sss: "36-1122334-5",
      tin: "456-123-789",
      philHealth: "11-223344556",
      pagIbig: "1100-2233-4455",
      nationalId: "PH112233445566",
      basicSalary: "28000",
      payType: "Monthly",
      payrollChannel: "BPI",
      salaryLevel: "2C",
      allowances: "Meal",
      deductions: "None",
      status: "Active",
      separationDate: "N/A",
      remarks: "Contract renewed",
      loginEmail: "bianca.ramos@company.com",
      systemRole: "Employee",
      password: "biancaSecure123",
      accessPermissions: "basic", 
      employeeTrackNumber:'0003', 
      clockState: 'clockOut', 
      timeRendered: 0, 
      managerId : "EMP112"
    },
    "Julia Santos": {
      name: "Julia Santos", 
      age: 32, 
      gender: "Female", 
      employeeId: "EMP101", 
      birthDay: "1992-06-14",
      civilStatus: "Single", 
      nationality: "Filipino", 
      contactNumber: "09171230001", 
      emergencyContactNumber: "09179990001",
      emailAddress: "julia.santos@example.com", 
      currentAddress: "Makati City", 
      dateHired: "2021-09-01",
      employmentStatus: "Active", 
      position: "Office Manager", 
      department: "Administration", 
      manager: "Jonathan Cruz",
      shift: "Shift: 8Am-3Pm", 
      workLocation: "Main Office", 
      employeeType: "Office Staff", 
      sss: "34-0000001-8", 
      tin: "123-111-789",
      philHealth: "12-000000001", 
      pagIbig: "9000-0000-0001", 
      nationalId: "PH000000000001", 
      basicSalary: "38000",
      payType: "Monthly", 
      payrollChannel: "BDO", 
      salaryLevel: "2A", 
      allowances: "Meal", 
      deductions: "None",
      status: "Active", 
      separationDate: "N/A", 
      remarks: "On-time and productive", 
      loginEmail: "julia.santos@company.com",
      systemRole: "Employee", 
      password: "julia1234", 
      accessPermissions: "basic",
      employeeTrackNumber:'0004', 
      clockState: 'clockOut', 
      timeRendered: 0, 
      managerId : "EMP112"
    },
    "Marco Reyes": {
      name: "Marco Reyes", 
      age: 29, 
      gender: "Male", 
      employeeId: "EMP102", 
      birthDay: "1995-01-12",
      civilStatus: "Married", 
      nationality: "Filipino", 
      contactNumber: "09171230002", 
      emergencyContactNumber: "09179990002",
      emailAddress: "marco.reyes@example.com", 
      currentAddress: "Quezon City",
       dateHired: "2022-02-12",
      employmentStatus: "On Leave", 
      position: "Salesman", 
      department: "Sales", 
      manager: "Jonathan Cruz",
      shift: "Shift: 3Pm-11Pm", 
      workLocation: "Ortigas Branch", 
      employeeType: "Field Personel", 
      sss: "34-0000002-8",
      tin: "123-222-789", 
      philHealth: "12-000000002", 
      pagIbig: "9000-0000-0002", 
      nationalId: "PH000000000002",
      basicSalary: "27000", 
      payType: "Monthly", 
      payrollChannel: "Metrobank", 
      salaryLevel: "2B", 
      allowances: "Commission",
      deductions: "None", 
      status: "On Leave", 
      separationDate: "N/A", 
      remarks: "On parental leave",
      loginEmail: "marco.reyes@company.com", 
      systemRole: "Employee", 
      password: "marco1234", 
      accessPermissions: "basic",
      employeeTrackNumber:'0005', 
      clockState: 'clockOut', 
      timeRendered: 0, 
      managerId : "EMP112"
    },
    "Rina Delos Reyes": {
      name: "Rina Delos Reyes",
       age: 26, 
       gender: "Female", 
       employeeId: "EMP103", 
       birthDay: "1998-07-05",
       civilStatus: "Single", 
       nationality: "Filipino", 
       contactNumber: "09171230003", 
       emergencyContactNumber: "09179990003",
       emailAddress: "rina.reyes@example.com", 
       currentAddress: "Pasay City", 
       dateHired: "2020-11-20",
       employmentStatus: "Suspended", 
       position: "Marketing Coordinator", 
       department: "Marketing", 
       manager: "Jonathan Cruz",
       shift: "Shift: 8Am-3Pm", 
       workLocation: "Main Office", 
       employeeType: "Office Staff", 
       sss: "34-0000003-8",
       tin: "123-333-789", 
       philHealth: "12-000000003", 
       pagIbig: "9000-0000-0003", 
       nationalId: "PH000000000003",
       basicSalary: "31000", 
       payType: "Monthly", 
       payrollChannel: "BPI", 
       salaryLevel: "2B", 
       allowances: "Internet",
       deductions: "None", 
       status: "Suspended", 
       separationDate: "N/A", 
       remarks: "Pending HR review",
       loginEmail: "rina.reyes@company.com", 
       systemRole: "Employee", 
       password: "rina1234", 
       accessPermissions: "basic",
       employeeTrackNumber:'0006', 
       clockState: 'clockOut', 
       timeRendered: 0, 
       managerId : "EMP112"
      },
    "David Cruz": {
      name: "David Cruz", 
      age: 38, 
      gender: "Male", 
      employeeId: "EMP104", 
      birthDay: "1986-02-19",
      civilStatus: "Married", 
      nationality: "Filipino", 
      contactNumber: "09171230004", 
      emergencyContactNumber: "09179990004",
      emailAddress: "david.cruz@example.com", 
      currentAddress: "Taguig", 
      dateHired: "2017-05-10",
      employmentStatus: "Terminated", 
      position: "Accountant", 
      department: "Finance", 
      manager: "Jonathan Cruz",
      shift: "Shift: 3Pm-11Pm", 
      workLocation: "Main Office", 
      employeeType: "Office Staff", 
      sss: "34-0000004-8",
      tin: "123-444-789", 
      philHealth: "12-000000004", 
      pagIbig: "9000-0000-0004", 
      nationalId: "PH000000000004",
      basicSalary: "39000", 
      payType: "Monthly", 
      payrollChannel: "Landbank", 
      salaryLevel: "3A", 
      allowances: "Meal",
      deductions: "None", 
      status: "Terminated", 
      separationDate: "2024-12-01", 
      remarks: "Violation of policy",
      loginEmail: "david.cruz@company.com", 
      systemRole: "Employee", 
      password: "david1234", 
      accessPermissions: "basic",
      employeeTrackNumber:'0007', 
      clockState: 'clockOut', 
      timeRendered: 0, 
      managerId : "EMP112"
    }, 
    "Angela Ramos": {
      name: "Angela Ramos", 
      age: 30, 
      gender: "Female", 
      employeeId: "EMP105", 
      birthDay: "1994-03-25",
      civilStatus: "Single", 
      nationality: "Filipino", 
      contactNumber: "09171230005", 
      emergencyContactNumber: "09179990005",
      emailAddress: "angela.ramos@example.com", 
      currentAddress: "Cavite", 
      dateHired: "2022-06-01",
      employmentStatus: "Training", 
      position: "Support Associate", 
      department: "Customer Support", 
      manager: "Beatriz Santos",
      shift: "Shift: 8Am-3Pm", 
      workLocation: "Main Office", 
      employeeType: "Remote", 
      sss: "34-0000005-8",
      tin: "123-555-789", 
      philHealth: "12-000000005", 
      pagIbig: "9000-0000-0005", 
      nationalId: "PH000000000005",
      basicSalary: "25000", 
      payType: "Monthly", 
      payrollChannel: "BDO", 
      salaryLevel: "1A", 
      allowances: "Internet, Night diff",
      deductions: "None", 
      status: "Training", 
      separationDate: "N/A", 
      remarks: "New hire",
      loginEmail: "angela.ramos@company.com", 
      systemRole: "Employee", 
      password: "angela1234", 
      accessPermissions: "basic",
      employeeTrackNumber:'0008', 
      clockState: 'clockOut', 
      timeRendered: 0, 
      managerId : "EMP113"
    },
    "Jose Tan": {
      name: "Jose Tan", 
      age: 43, 
      gender: "Male", 
      employeeId: "EMP106", 
      birthDay: "1981-11-11",
      civilStatus: "Married", 
      nationality: "Filipino", 
      contactNumber: "09171230006", 
      emergencyContactNumber: "09179990006",
      emailAddress: "jose.tan@example.com", 
      currentAddress: "Laguna", 
      dateHired: "2015-03-15",
      employmentStatus: "Resigned", 
      position: "Mechanic", 
      department: "Mechanics", 
      manager: "Beatriz Santos",
      shift: "Shift: 3Pm-11Pm", 
      workLocation: "Laguna Plant", 
      employeeType: "Factory Worker", 
      sss: "34-0000006-8",
      tin: "123-666-789", 
      philHealth: "12-000000006", 
      pagIbig: "9000-0000-0006", 
      nationalId: "PH000000000006",
      basicSalary: "33000", 
      payType: "Monthly", 
      payrollChannel: "Metrobank", 
      salaryLevel: "4B", 
      allowances: "Tools",
      deductions: "None", 
      status: "Resigned", 
      separationDate: "2024-03-01", 
      remarks: "Personal reason",
      loginEmail: "jose.tan@company.com", 
      systemRole: "Employee", 
      password: "jose1234", 
      accessPermissions: "basic",
      employeeTrackNumber:'0009', 
      clockState: 'clockOut', 
      timeRendered: 0, 
      managerId : "EMP113"
    },
    "Luisa Gomez": {
      name: "Luisa Gomez", 
      age: 37, 
      gender: "Female", 
      employeeId: "EMP107", 
      birthDay: "1987-09-09",
      civilStatus: "Married", 
      nationality: "Filipino", 
      contactNumber: "09171230007", 
      emergencyContactNumber: "09179990007",
      emailAddress: "luisa.gomez@example.com", 
      currentAddress: "Manila", 
      dateHired: "2018-08-01",
      employmentStatus: "Probationary", 
      position: "Logistics Officer", 
      department: "Logistics", 
      manager: "Beatriz Santos",
      shift: "Shift: 8Am-3Pm", 
      workLocation: "Warehouse B", 
      employeeType: "Field Personel", 
      sss: "34-0000007-8",
      tin: "123-777-789", 
      philHealth: "12-000000007", 
      pagIbig: "9000-0000-0007", 
      nationalId: "PH000000000007",
      basicSalary: "29000", 
      payType: "Monthly", 
      payrollChannel: "BPI", 
      salaryLevel: "2B", 
      allowances: "Transport",
      deductions: "None", 
      status: "Probationary", 
      separationDate: "N/A", 
      remarks: "Evaluating performance",
      loginEmail: "luisa.gomez@company.com", 
      systemRole: "Employee", 
      password: "luisa1234", 
      accessPermissions: "basic",
      employeeTrackNumber:'00010', 
      clockState: 'clockOut', 
      timeRendered: 0, 
      managerId : "EMP113"
    },
    "Mark Villanueva": {
      name: "Mark Villanueva", 
      age: 45, 
      gender: "Male", 
      employeeId: "EMP108", 
      birthDay: "1979-12-20",
      civilStatus: "Married", 
      nationality: "Filipino", 
      contactNumber: "09171230008", 
      emergencyContactNumber: "09179990008",
      emailAddress: "mark.villanueva@example.com", 
      currentAddress: "San Juan", 
      dateHired: "2005-04-01",
      employmentStatus: "Retired", 
      position: "HR Director", 
      department: "Human Resources", 
      manager: "Beatriz Santos",
      shift: "Shift: 3Pm-11Pm", 
      workLocation: "Main Office", 
      employeeType: "Office Staff", 
      sss: "34-0000008-8",
      tin: "123-888-789", 
      philHealth: "12-000000008", 
      pagIbig: "9000-0000-0008", 
      nationalId: "PH000000000008",
      basicSalary: "50000", 
      payType: "Monthly", 
      payrollChannel: "Landbank", 
      salaryLevel: "5A", 
      allowances: "Meal",
      deductions: "None", 
      status: "Retired", 
      separationDate: "2024-06-01", 
      remarks: "Well-deserved retirement",
      loginEmail: "mark.villanueva@company.com", 
      systemRole: "Manager", 
      password: "mark1234", 
      accessPermissions: "admin",
      employeeTrackNumber:'0011', 
      clockState: 'clockOut', 
      timeRendered: 0, 
      managerId : "EMP113"
    },
    "Nina Chavez": {
      name: "Nina Chavez", 
      age: 28, 
      gender: "Female", 
      employeeId: "EMP109", 
      birthDay: "1996-01-08",
      civilStatus: "Single", 
      nationality: "Filipino", 
      contactNumber: "09171230009", 
      emergencyContactNumber: "09179990009",
      emailAddress: "nina.chavez@example.com", 
      currentAddress: "Mandaluyong", 
      dateHired: "2023-04-10",
      employmentStatus: "Active", 
      position: "Web Developer", 
      department: "IT Support", 
      manager: "Beatriz Santos",
      shift: "Shift: 8Am-3Pm", 
      workLocation: "Main Office", 
      employeeType: "Remote", 
      sss: "34-0000009-8",
      tin: "123-999-789", 
      philHealth: "12-000000009", 
      pagIbig: "9000-0000-0009", 
      nationalId: "PH000000000009",
      basicSalary: "40000", 
      payType: "Monthly", 
      payrollChannel: "BDO", 
      salaryLevel: "3B", 
      allowances: "Remote Setup",
      deductions: "None", 
      status: "Active", 
      separationDate: "N/A", 
      remarks: "Great team player",
      loginEmail: "nina.chavez@company.com", 
      systemRole: "Employee", 
      password: "nina1234", 
      accessPermissions: "basic",
      employeeTrackNumber:'0012', 
      clockState: 'clockOut', 
      timeRendered: 0, 
      managerId : "EMP113"
    },
    "Leo Fernandez": {
      name: "Leo Fernandez", 
      age: 35, 
      gender: "Male", 
      employeeId: "EMP110", 
      birthDay: "1989-05-17",
      civilStatus: "Married", 
      nationality: "Filipino", 
      contactNumber: "09171230010", 
      emergencyContactNumber: "09179990010",
      emailAddress: "leo.fernandez@example.com", 
      currentAddress: "Parañaque", 
      dateHired: "2019-01-20",
      employmentStatus: "Active", 
      position: "Security Supervisor", 
      department: "Security", 
      manager: "Beatriz Santos",
      shift: "Shift: 3Pm-11Pm", 
      workLocation: "Warehouse B", 
      employeeType: "Field Personel", 
      sss: "34-0000010-8",
      tin: "123-101-789", 
      philHealth: "12-000000010", 
      pagIbig: "9000-0000-0010", 
      nationalId: "PH000000000010",
      basicSalary: "32000", 
      payType: "Monthly", 
      payrollChannel: "Metrobank", 
      salaryLevel: "3C", 
      allowances: "Uniform",
      deductions: "None", 
      status: "Active", 
      separationDate: "N/A", 
      remarks: "Night shift lead",
      loginEmail: "leo.fernandez@company.com", 
      systemRole: "Employee", 
      password: "leo1234", 
      accessPermissions: "basic",
      employeeTrackNumber:'0013', 
      clockState: 'clockOut', 
      timeRendered: 0, 
      managerId : "EMP113"
    },
    "Maria Flores": {
      name: "Maria Flores", 
      age: 40, 
      gender: "Female", 
      employeeId: "EMP111", 
      birthDay: "1984-08-29",
      civilStatus: "Married", 
      nationality: "Filipino", 
      contactNumber: "09171230011", 
      emergencyContactNumber: "09179990011",
      emailAddress: "maria.flores@example.com", 
      currentAddress: "Valenzuela", 
      dateHired: "2010-02-28",
      employmentStatus: "Active", 
      position: "Custodian", 
      department: "Cleaning & Maintenance", 
      manager: "Beatriz Santos",
      shift: "Shift: 8Am-3Pm", 
      workLocation: "Main Office", 
      employeeType: "Factory Worker", 
      sss: "34-0000011-8",
      tin: "123-202-789", 
      philHealth: "12-000000011", 
      pagIbig: "9000-0000-0011", 
      nationalId: "PH000000000011",
      basicSalary: "21000", 
      payType: "Monthly", 
      payrollChannel: "BPI", 
      salaryLevel: "1B", 
      allowances: "Uniform",
      deductions: "None", 
      status: "Active", 
      separationDate: "N/A", 
      remarks: "Reliable and punctual",
      loginEmail: "maria.flores@company.com", 
      systemRole: "Employee", 
      password: "maria1234", 
      accessPermissions: "basic",
      employeeTrackNumber:'0014', 
      clockState: 'clockOut', 
      timeRendered: 0, 
      managerId : "EMP113"
    },
    "Jonathan Cruz": {
      name: "Jonathan Cruz",
      age: 45,
      gender: "Male",
      employeeId: "EMP112",
      birthDay: "1979-06-18",
      civilStatus: "Married",
      nationality: "Filipino",
      contactNumber: "09181231234",
      emergencyContactNumber: "09185556789"
      ,emailAddress: "jonathan.cruz@example.com",
      currentAddress: "Quezon City",
      dateHired: "2008-05-15",
      employmentStatus: "Active",
      position: "Operations Manager",
      department: "Operations",
      manager: "Ernesto Lim",
      shift: "8AM-5PM",
      workLocation: "Main Office",
      employeeType: "Administrative",
      sss: "34-0000012-9",
      tin: "123-203-456",
      philHealth: "12-000000012",
      pagIbig: "9000-0000-0012",
      nationalId: "PH000000000012",
      basicSalary: "55000",
      payType: "Monthly",
      payrollChannel: "BDO",
      salaryLevel: "3A",
      allowances: "Transportation, Meal",
      deductions: "None",
      status: "Active",
      separationDate: "N/A",
      remarks: "Strong leadership and decision-making skills",
      loginEmail: "jonathan.cruz@company.com",
      systemRole: "Manager",
      password: "jonathan123",
      accessPermissions: "managerial",
      employeeTrackNumber: "0015",
      clockState: "clockOut",
      timeRendered: 0, 
      managerId : "EMP114"
    },
    "Beatriz Santos": {
      name: "Beatriz Santos",
      age: 39,
      gender: "Female",
      employeeId: "EMP113",
      birthDay: "1985-11-05",
      civilStatus: "Single",
      nationality: "Filipino",
      contactNumber: "09175678900",
      emergencyContactNumber: "09170001122",
      emailAddress: "beatriz.santos@example.com",
      currentAddress: "Makati City",
      dateHired: "2011-09-20",
      employmentStatus: "Active",
      position: "HR Manager",
      department: "Human Resources",
      manager: "Ernesto Lim",
      shift: "9AM-6PM",
      workLocation: "Main Office",
      employeeType: "Administrative",sss: "34-0000013-0",
      tin: "123-204-321",
      philHealth: "12-000000013",
      pagIbig: "9000-0000-0013",
      nationalId: "PH000000000013",
      basicSalary: "53000",
      payType: "Monthly",
      payrollChannel: "UnionBank",
      salaryLevel: "3A",
      allowances: "Communication, Uniform",
      deductions: "None",
      status: "Active",
      separationDate: "N/A",
      remarks: "Trusted with confidential matters",
      loginEmail: "beatriz.santos@company.com",
      systemRole: "Manager",
      password: "beatriz123",
      accessPermissions: "managerial",
      employeeTrackNumber: "0016",
      clockState: "clockOut",
      timeRendered: 0, 
      managerId : "EMP114"
    },
    "Ernesto Lim": {
      name: "Ernesto Lim",
      age: 50,
      gender: "Male",
      employeeId: "EMP114",
      birthDay: "1974-04-15",
      civilStatus: "Married",
      nationality: "Filipino",
      contactNumber: "09171231234",
      emergencyContactNumber: "09175550000",
      emailAddress: "ernesto.lim@example.com",
      currentAddress: "Pasig City",
      dateHired: "2005-01-05",
      employmentStatus: "Active",
      position: "General Manager",
      department: "Executive",
      manager: "None",
      shift: "8AM-5PM",
      workLocation: "Main Office",
      employeeType: "Administrative",
      sss: "34-0000014-9",
      tin: "123-205-678",
      philHealth: "12-000000014",
      pagIbig: "9000-0000-0014",
      nationalId: "PH000000000014",
      basicSalary: "60000",
      payType: "Monthly",
      payrollChannel: "BDO",
      salaryLevel: "6A",
      allowances: "Executive Allowance",
      deductions: "None",
      status: "Active",
      separationDate: "N/A",
      remarks: "Overall company overseer",
      loginEmail: "ernesto.lim@company.com",
      systemRole: "Manager",
      password: "ernestoSecure",
      accessPermissions: "executive",
      employeeTrackNumber: "0017",
      clockState: "clockOut",
      timeRendered: 0,
      managerId: "None"
    }
};
if(!employeeNumber) employeeNumber = 17;

const Form = document.getElementById('form2');
const clock = document.getElementById('clock');
const Back = document.querySelectorAll('.backInfo');

const submitNewEmployee = document.getElementById("submitNewEmployee");
const employeeContainer = document.querySelector(".show-employees");
const inputEmployees = document.getElementById('searchInputEmployees');
const resultsBoxEmployees = document.getElementById('resultsEmployees');

const positions = {
  "Administration": ["Office Administrator","Executive Assistant","Receptionist","Document Controller"],
  "Sales": ["Sales Executive","Sales Manager","Account Executive","Business Development Officer", 'Salesman'],
  "Marketing": ["Marketing Specialist","Content Creator","Digital Marketing Officer","Brand Manager"],
  "Finance": ["Accountant","Bookkeeper","Finance Analyst","Payroll Officer"],
  "Customer Support": ["Customer Service Representative","Support Lead","Call Center Agent","Helpdesk Coordinator"],
  "Mechanics": ["Automotive Technician","Diesel Mechanic","Maintenance Mechanic","Shop Supervisor"],
  "Drivers": ["Company Driver","Delivery Driver","Forklift Operator","Logistics Driver"],
  "Logistics": ["Logistics Coordinator","Warehouse Associate","Inventory Controller","Supply Chain Officer"],
  "Human Resources": ["HR Officer","Recruitment Specialist","HR Assistant","Training and Development Officer"],
  "IT Support": ["IT Technician","System Administrator","Help Desk Support","Network Engineer"],
  "Security": ["Security Guard","Security Supervisor","CCTV Operator","Access Control Officer"],
  "Cleaning & Maintenance": ["Janitor","Maintenance Technician","Facility Cleaner","Utility Worker"]
};
const worklocations = ["Main Office - Manila", "Cebu Branch", "Remote", "Laguna Plant", "Davao Satellite", "Work from Home"];
const salaryChannel = ["Bank Transfer", 'BDO', "GCash", "Maya", "Check", "Cash Pickup"];
const salaryLevels = ["Level 1 - Entry", "Level 2 - Junior", "Level 3 - Mid-Level","Level 4 - Senior", "Level 5 - Lead", "Level 6 - Executive"];
const allAllowances = ["Transportation Allowance", "Meal Allowance", "Internet Stipend","Housing Allowance", "Hazard Pay", "Night Shift Differential"];
const allAccessPermissions = ["View Payroll", "Edit Employee Data", "Approve Leave","Access HR Dashboard", "Modify Roles", "View Reports"];

const department = document.getElementById("department");
const form = document.getElementById("form");
const name = document.getElementById("name");
const employeeId = document.getElementById("employeeId");
const age = document.getElementById("age");
const birthDay = document.getElementById("birthDate");
const gender = document.querySelector('input[name="gender"]:checked');
const civilStatus = document.querySelector('input[name="civilStatus"]:checked');
const nationality = document.getElementById("nationality");
const contactNumber = document.getElementById("contactNumber");
const emergencyContactNumber = document.getElementById("emergencyContactNumber");
const emailAddress = document.getElementById("emailAddress");
const currentAddress = document.getElementById("currentAddress");
const dateHired = document.getElementById("dateHired");
const employmentStatus = document.getElementById("employeeStatus");
const shift = document.getElementById("shift");
const employeeType = document.getElementById("employeeType");
const sss = document.getElementById("sss");
const tin = document.getElementById("tin");
const philHealth = document.getElementById("philHealth");
const pagIbig = document.getElementById("pagIbig");
const nationalId = document.getElementById("nationalId");
const basicSalary = document.getElementById("basicSalary");
const payType = document.getElementById("payType");
const status = document.getElementById("status");
const remarks = document.getElementById("remarks");
const loginEmail = document.getElementById("loginEmail");
const systemRole = document.getElementById("systemRole");
const password = document.getElementById("password");

const manager = document.getElementById("manager");
const position = document.getElementById("position");
const workLocation = document.getElementById("workLocation");
const payrollChannel = document.getElementById("payrollChannel");
const salaryLevel = document.getElementById("salaryLevel");
const allowances = document.getElementById("allowances");
const accessPermissions = document.getElementById("accessPermissions");

const managerForm = document.getElementById("EmployeeManager");
const positionForm = document.getElementById("EmployeePosition");
const workLocationForm = document.getElementById("EmployeeWorkLocation");
const payrollChannelForm = document.getElementById("EmployeePayrollChannel");
const salaryLevelForm = document.getElementById("EmployeeSalaryLevel");
const allowancesForm = document.getElementById("EmployeeAllowance");
const accessPermissionsForm = document.getElementById("EmployeeAccessPermission");


export let latestMatchedEmployees = {};

document.addEventListener("DOMContentLoaded", function () {
  if(isPage("employeePage")){
    const departmentForm = Form.querySelector("#EmployeeDepartment");

    oneGoRenderingEmployeeList(employeeList, employeeContainer)
    inputEmployees.addEventListener('input', () => {
            inputShow(inputEmployees, resultsBoxEmployees, latestMatchedEmployees, searchName, employeeList, oneGoRenderingEmployeeList, employeeContainer)
            bindEmployeeButtons()
            console.log(employeeList)

    });
    inputEmployees.addEventListener("keydown",function(event){
            keydown(event, inputEmployees, oneGoRenderingEmployeeList, employeeList, employeeContainer, latestMatchedEmployees, searchName, resultsBoxEmployees)
            bindEmployeeButtons()
    });
    managerForm.addEventListener('input', ()=>{
      searchManagers(managerForm)
    });
    positionForm.addEventListener('input', ()=>{
      const validDepartment = departmentForm.textContent;
      if(validDepartment === 'DEPARTMENT'){
        window.alert('SELECT DEPARTMENT FIRST!');
        return
      }
      searchSuggestAutoComplete(positionForm, positions[validDepartment])
    });
    workLocationForm.addEventListener('input', ()=>{
      searchSuggestAutoComplete(workLocationForm, worklocations)
    });
    payrollChannelForm.addEventListener('input', ()=>{
      searchSuggestAutoComplete(payrollChannelForm, salaryChannel)
    });
    salaryLevelForm.addEventListener('input', ()=>{
      searchSuggestAutoComplete(salaryLevelForm, salaryLevels)
    });
    allowancesForm.addEventListener('input', ()=>{
      searchSuggestAutoComplete(allowancesForm, allAllowances)
    });
    accessPermissionsForm.addEventListener('input', ()=>{
      searchSuggestAutoComplete(accessPermissionsForm, allAccessPermissions)
    });

    manager.addEventListener('input', ()=>{
      searchManagers(manager)
    });
    position.addEventListener('input', ()=>{
      const validDepartment = department.textContent;
      if(validDepartment === 'DEPARTMENT'){
        window.alert('SELECT DEPARTMENT FIRST!');
        return
      }
      searchSuggestAutoComplete(position, positions[validDepartment])
    });
    workLocation.addEventListener('input', ()=>{
      searchSuggestAutoComplete(workLocation, worklocations)
    });
    payrollChannel.addEventListener('input', ()=>{
      searchSuggestAutoComplete(payrollChannel, salaryChannel)
    });
    salaryLevel.addEventListener('input', ()=>{
      searchSuggestAutoComplete(salaryLevel, salaryLevels)
    });
    allowances.addEventListener('input', ()=>{
      searchSuggestAutoComplete(allowances, allAllowances)
    });
    accessPermissions.addEventListener('input', ()=>{
      searchSuggestAutoComplete(accessPermissions, allAccessPermissions)
    });

    submitNewEmployee.addEventListener("click",function(){
            addEmployee(name.value.trim(),Number(age.value), gender.value, employeeId.value, birthDay.value, civilStatus.value, nationality.value, contactNumber.value, emergencyContactNumber.value, emailAddress.value, currentAddress.value, dateHired.value, employmentStatus.textContent, position.value, department.textContent, manager.value, shift.textContent, workLocation.value, employeeType.textContent, sss.value, tin.value, philHealth.value, pagIbig.value, nationalId.value, Number(basicSalary.value), payType.textContent, payrollChannel.value, salaryLevel.value, allowances.value, status.textContent, remarks.value, loginEmail.value, systemRole.textContent, password.value, accessPermissions.value);
            console.log(employeeList);
            oneGoRenderingEmployeeList(employeeList, employeeContainer)
            bindEmployeeButtons()
            restAfterAddEmoloyee()
    });
    bindEmployeeButtons()
  }
});
function addEmployee(name,age, gender, employeeId, birthDay, civilStatus, nationality, contactNumber, emergencyContactNumber, emailAddress, currentAddress, dateHired, employmentStatus, position, department, manager, shift, workLocation, employeeType, sss, tin, philHealth, pagIbig, nationalId, basicSalary, payType, payrollChannel, salaryLevel, allowances, status, remarks, loginEmail, systemRole, password, accessPermissions){
    employeeNumber += 1;
    employeeList[name] = {
      name, 
      age, 
      gender, 
      employeeId, 
      birthDay, 
      civilStatus, 
      nationality, 
      contactNumber, 
      emergencyContactNumber, 
      emailAddress, 
      currentAddress, 
      dateHired, 
      employmentStatus, 
      position, 
      department, 
      manager, 
      shift, 
      workLocation, 
      employeeType, 
      sss, 
      tin, 
      philHealth, 
      pagIbig, 
      nationalId, 
      basicSalary, 
      payType, 
      payrollChannel, 
      salaryLevel, 
      allowances, 
      deductions: "None", 
      status, 
      separationDate:'N/A', remarks, 
      loginEmail, 
      systemRole, 
      password, 
      accessPermissions, 
      employeeTrackNumber: String(employeeNumber).padStart(4, '0'),
      clockState: "clockOut",
      timeRendered: 0,
      managerId: "None"
    };
    console.log(employeeList[name]);
};
export function findSalesman(query) {
  const lowerQuery = query.toLowerCase();
  const matched = {};

  for (const [key, salesMan] of Object.entries(employeeList)) {
    // Debugging starts here
    if (!salesMan || typeof salesMan !== 'object') {
      console.warn(`⚠️ Not an object:`, key, salesMan);
      continue;
    }

    if (!('department' in salesMan)) {
      console.warn(`❌ Missing department:`, key, salesMan);
      continue;
    }

    // Main logic
    if (
      salesMan.department.toLowerCase() === "sales" && salesMan.position === "Salesman" && key.toLowerCase().includes(lowerQuery)
    ) {
      matched[key] = salesMan;
    }
  }

  return matched;
}
export function AllSalesmanList() {
  const matched = {};

  for (const [key, salesMan] of Object.entries(employeeList)) {
    // Main logic
    if (salesMan.department.toLowerCase() === "sales" && salesMan.position === "Salesman") {
      matched[key] = salesMan;
    }
  }
  return matched;
}
export function bindEmployeeButtons() {
  console.log('Binding employee buttons...');

  const BtnDetails = document.querySelectorAll('.BtnDetails'); // moved inside
  const btnManualClock = document.querySelectorAll('.btnManualClock'); // moved inside
  const save = document.getElementById('save');
  const clockIn = document.getElementById('clockIn');
  const clockOut = document.getElementById('clockOut');
  const AdminsPassword = document.getElementById('AdminsPassword');
  const EmployeesClockPassword = document.getElementById('EmployeesClockPassword');
  let holdTrack = null;
  let currentEmployee = null;
  let checkEmployee = null;
  let checkEmployeeManager = null;
  let generalManager = null;

  BtnDetails.forEach(item => {
    item.addEventListener('click', function (event) {
        const track = event.target.dataset.track;
        holdTrack = track;
        //PUTTING THE LOOP HERE FOR CURRENTEMPLOYEE IS WISE
        console.log('Clicked track number:', track);
        
        if (!Form) {
            console.warn("Form element not found!");
            return;
        }
        Form.classList.add('show-form');
        let found = false;
        for (const [key, value] of Object.entries(employeeList)) {
            console.log('Checking:', value.employeeTrackNumber);
            if (String(value.employeeTrackNumber) === track) {
              console.log('MATCH FOUND!', value);
              found = true;
              document.getElementById('EmployeeName').value = value.name;
              document.getElementById('EmployeeAge').value = value.age;
              document.querySelector(`input[name="EmployeeGender"][value="${value.gender}"]`).checked = true;
              document.getElementById('EmployeeId').value = value.employeeId;
              document.getElementById('EmployeeBirthdate').value = value.birthDay;
              document.getElementById('EmployeeSivilStatus').textContent = value.civilStatus;
              document.getElementById('EmployeeNationality').value = value.nationality;
              document.getElementById('EmployeeContactNumber').value = value.contactNumber;
              document.getElementById('EmployeeEmergencyContactNumber').value = value.emergencyContactNumber;
              document.getElementById('EmployeeEmailAddress').value = value.emailAddress;
              document.getElementById('EmployeeCurrentAddress').value = value.currentAddress;
              document.getElementById('EmployeeDateHired').value = value.dateHired;
              document.getElementById('EmployeeStatus').textContent = value.employmentStatus;
              document.getElementById('EmployeePosition').value = value.position;
              document.getElementById('EmployeeDepartment').textContent = value.department;
              document.getElementById('EmployeeManager').value = value.manager;
              document.getElementById('EmployeeShift').textContent = value.shift;
              document.getElementById('EmployeeWorkLocation').value = value.workLocation;
              document.getElementById('EmployeeType').textContent = value.employeeType;
              document.getElementById('EmployeeSSS').value = value.sss;
              document.getElementById('EmployeeTIN').value = value.tin;
              document.getElementById('EmployeePhilHealth').value = value.philHealth;
              document.getElementById('EmployeePagIbig').value = value.pagIbig;
              document.getElementById('EmployeeNationalId').value = value.nationalId;
              document.getElementById('EmployeeBasicSalary').value = value.basicSalary;
              document.getElementById('EmployeePayType').textContent = value.payType;
              document.getElementById('EmployeePayrollChannel').value = value.payrollChannel;
              document.getElementById('EmployeeSalaryLevel').value = value.salaryLevel;
              document.getElementById('EmployeeDeduction').textContent = value.deductions;
              document.getElementById('EmployeeAllowance').value = value.allowances;
              document.getElementById('STATUS').textContent = value.status;
              document.getElementById('EmployeeSeparationDate').value = value.separationDate;
              document.getElementById('EmployeeRemarks').value = value.remarks;
              document.getElementById('EmployeeEmailForLogin').value = value.loginEmail;
              document.getElementById('EmployeeSystemRole').textContent = value.systemRole;
              document.getElementById('employeePassword').value = value.password;
              document.getElementById('EmployeeAccessPermission').value = value.accessPermissions;
              currentEmployee = key;//BEST CHOICE TO NOT STATE REDUNDANT LOOPS
              break;
            }
        }
        if (!found) {
            console.warn('No employee matched for this track number.');
        }
    });
  });

  const cloneSave = save.cloneNode(true);
  save.parentNode.replaceChild(cloneSave, save);

  cloneSave.addEventListener('click', function(){
    //PUTTING THE CURRENTEMPLOYEE LOOP HERE IS ALSO GOOD
    if (!employeeList[currentEmployee]) {
      console.warn("Save failed: currentEmployee is invalid.");
      return;
    }
    console.log(currentEmployee);
    employeeList[currentEmployee].name = document.getElementById('EmployeeName').value;
    employeeList[currentEmployee].age = Number(document.getElementById('EmployeeAge').value);
    employeeList[currentEmployee].gender = document.querySelector('input[name="EmployeeGender"]:checked').value;
    employeeList[currentEmployee].employeeId = document.getElementById('EmployeeId').value;
    employeeList[currentEmployee].birthDay = document.getElementById('EmployeeBirthdate').value;
    employeeList[currentEmployee].civilStatus = document.getElementById('EmployeeSivilStatus').textContent;
    employeeList[currentEmployee].nationality = document.getElementById('EmployeeNationality').value;
    employeeList[currentEmployee].contactNumber = document.getElementById('EmployeeContactNumber').value;
    employeeList[currentEmployee].emergencyContactNumber = document.getElementById('EmployeeEmergencyContactNumber').value;
    employeeList[currentEmployee].emailAddress = document.getElementById('EmployeeEmailAddress').value;
    employeeList[currentEmployee].currentAddress = document.getElementById('EmployeeCurrentAddress').value;
    employeeList[currentEmployee].dateHired = document.getElementById('EmployeeDateHired').value;
    employeeList[currentEmployee].employmentStatus = document.getElementById('EmployeeStatus').textContent;
    employeeList[currentEmployee].position = document.getElementById('EmployeePosition').value;
    employeeList[currentEmployee].department = document.getElementById('EmployeeDepartment').textContent;
    employeeList[currentEmployee].manager = document.getElementById('EmployeeManager').value;
    employeeList[currentEmployee].shift = document.getElementById('EmployeeShift').textContent;
    employeeList[currentEmployee].workLocation = document.getElementById('EmployeeWorkLocation').value;
    employeeList[currentEmployee].employeeType = document.getElementById('EmployeeType').textContent;
    employeeList[currentEmployee].sss = document.getElementById('EmployeeSSS').value;
    employeeList[currentEmployee].tin = document.getElementById('EmployeeTIN').value;
    employeeList[currentEmployee].philHealth = document.getElementById('EmployeePhilHealth').value;
    employeeList[currentEmployee].pagIbig = document.getElementById('EmployeePagIbig').value;
    employeeList[currentEmployee].nationalId = document.getElementById('EmployeeNationalId').value;
    employeeList[currentEmployee].basicSalary = Number(document.getElementById('EmployeeBasicSalary').value);
    employeeList[currentEmployee].payType = document.getElementById('EmployeePayType').textContent;
    employeeList[currentEmployee].payrollChannel = document.getElementById('EmployeePayrollChannel').value;
    employeeList[currentEmployee].salaryLevel = document.getElementById('EmployeeSalaryLevel').value;
    employeeList[currentEmployee].deductions = document.getElementById('EmployeeDeduction').textContent;
    employeeList[currentEmployee].allowances = document.getElementById('EmployeeAllowance').value;
    employeeList[currentEmployee].status = document.getElementById('STATUS').textContent;
    employeeList[currentEmployee].separationDate = document.getElementById('EmployeeSeparationDate').value;
    employeeList[currentEmployee].remarks = document.getElementById('EmployeeRemarks').value;
    employeeList[currentEmployee].loginEmail = document.getElementById('EmployeeEmailForLogin').value;
    employeeList[currentEmployee].systemRole = document.getElementById('EmployeeSystemRole').textContent;
    employeeList[currentEmployee].password = document.getElementById('employeePassword').value;
    employeeList[currentEmployee].accessPermissions = document.getElementById('EmployeeAccessPermission').value;
    
    renderEmployeeDetails(holdTrack, employeeList[currentEmployee]) 
    const newKey = document.getElementById('EmployeeName').value;
    if (newKey !== currentEmployee) {
      employeeList[newKey] = employeeList[currentEmployee];
      delete employeeList[currentEmployee];
      currentEmployee = newKey;
    }
    console.log('saved');
    console.log(employeeList[currentEmployee]);
    Form.classList.remove('show-form');
    holdTrack = null;
  });

  btnManualClock.forEach(item =>{
    item.addEventListener('click', function(event){
      const track = event.target.dataset.track; 
      holdTrack = track;

      clock.classList.toggle('show-form')
    })
  });

  const cloneClockIn = clockIn.cloneNode(true);
  clockIn.parentNode.replaceChild(cloneClockIn,clockIn);

  cloneClockIn.addEventListener('click', () => {
    generalManager = Object.entries(employeeList).find(([_, value]) => value.managerId === EmployeesClockPassword.value);
    checkEmployee = Object.entries(employeeList).find(([_, value]) => value.employeeId === EmployeesClockPassword.value);
    checkEmployeeManager = Object.entries(employeeList).find(([_, value]) => value.employeeId === AdminsPassword.value);
    console.log(generalManager[1].managerId);
    console.log(generalManager[1].employeeTrackNumber);
    console.log(holdTrack);
    // General Manager self-clock logic
    if (generalManager[1].employeeTrackNumber === holdTrack && (generalManager[1].managerId === EmployeesClockPassword.value)) {
      console.log('bypass 1');
      if (generalManager[1].clockState !== 'clockIn') {
        console.log('bypass 2');
        generalManager[1].clockState = 'clockIn';
        console.log(`${generalManager[1].name} (GM) clocked in.`);
      } else {
        window.alert('Already clocked in.');
      }
      EmployeesClockPassword.value = '';
      AdminsPassword.value = '';
      checkEmployeeManager = null;
      checkEmployee = null;
      holdTrack = null;
      clock.classList.remove('show-form');
      return;
    }
    if (!checkEmployee) {
      window.alert('INVALID EMPLOYEE ID');
      return;
    }
    const employee = checkEmployee[1];
    // For regular employees
    if (!checkEmployeeManager) {
      window.alert('INVALID MANAGER ID');
      return;
    }

    const manager = checkEmployeeManager[1];

    if (employee.employeeTrackNumber !== holdTrack || employee.managerId !== manager.employeeId) {
      window.alert('INVALID EMPLOYEE AND/OR MANAGER');
      return;
    }

    if (employee.clockState === 'clockIn') {
      window.alert('Already clocked in.');
      return;
    }

    employee.clockState = 'clockIn';
    console.log(`${employee.name} clocked in under ${manager.name}.`);

    EmployeesClockPassword.value = '';
    AdminsPassword.value = '';
    checkEmployeeManager = null;
    checkEmployee = null;
    holdTrack = null;
    clock.classList.remove('show-form');
});

  const cloneClockOut = clockOut.cloneNode(true);
  clockOut.parentNode.replaceChild(cloneClockOut, clockOut);

  cloneClockOut.addEventListener('click', ()=>{
    generalManager = Object.entries(employeeList).find(([_, value]) => value.managerId === EmployeesClockPassword.value);
    checkEmployee = Object.entries(employeeList).find(([_, value]) => value.employeeId === EmployeesClockPassword.value);
    checkEmployeeManager = Object.entries(employeeList).find(([_, value]) => value.employeeId === AdminsPassword.value);
    console.log(generalManager[1].managerId);
    console.log(generalManager[1].employeeTrackNumber);
    console.log(holdTrack);
    // General Manager self-clock logic
    if (generalManager[1].employeeTrackNumber === holdTrack && (generalManager[1].managerId === EmployeesClockPassword.value)) {
      console.log('bypass 1');
      if (generalManager[1].clockState !== 'clockOut') {
        console.log('bypass 2');
        generalManager[1].clockState = 'clockOut';
        console.log(`${generalManager[1].name} (GM) clocked Out.`);
      } else {
        window.alert('Already clocked Out.');
      }
      EmployeesClockPassword.value = '';
      AdminsPassword.value = '';
      checkEmployeeManager = null;
      checkEmployee = null;
      holdTrack = null;
      clock.classList.remove('show-form');
      return;
    }
    if (!checkEmployee) {
      window.alert('INVALID EMPLOYEE ID');
      return;
    }
    const employee = checkEmployee[1];
    // For regular employees
    if (!checkEmployeeManager) {
      window.alert('INVALID MANAGER ID');
      return;
    }

    const manager = checkEmployeeManager[1];

    if (employee.employeeTrackNumber !== holdTrack || employee.managerId !== manager.employeeId) {
      window.alert('INVALID EMPLOYEE AND/OR MANAGER');
      return;
    }

    if (employee.clockState === 'clockOut') {
      window.alert('Already clocked Out.');
      return;
    }

    employee.clockState = 'clockOut';
    console.log(`${employee.name} clocked Out under ${manager.name}.`);

    EmployeesClockPassword.value = '';
    AdminsPassword.value = '';
    checkEmployeeManager = null;
    checkEmployee = null;
    holdTrack = null;
    clock.classList.remove('show-form');
  });

  if (Back) {
    Back.forEach(b =>{
      b.addEventListener('click', () => {
        Form.classList.remove('show-form');
        clock.classList.remove('show-form');
        holdTrack = null;
        checkEmployeeManager = null;
        checkEmployee = null;
      });
    })
    
  }

  console.log('Binding complete.');
}
export function renderEmployeeDetails(track, value){
  const card = document.querySelector(`.employee-cards[data-track="${track}"]`);

  const nameEl = card.querySelector('.display-name');
  const positionEl = card.querySelector('.display-position span');
  const shiftEl = card.querySelector('.display-shift strong');

  if(nameEl) nameEl.textContent = value.name;
  if(positionEl) positionEl.textContent = value.position;
  if(shiftEl) shiftEl.textContent = value.shift;
}
function changeKey(oldKey, newKey, list){
  if(oldKey !== newKey){
    list[newKey] = list[oldKey];
    delete list[oldKey];
    oldKey = newKey;
  }
}
export function oneGoRenderingEmployeeList(data, container){
 const fragment = document.createDocumentFragment();
 Object.entries(data).forEach(([_,employee]) => {
    const card = document.createElement('div');
    card.className = 'employee-cards';
    card.dataset.track = employee.employeeTrackNumber;

    card.innerHTML = `
      <div class="employee-card boxes">
        <div class="employee-picture">
          <img src="../entities/image/employeeIcon.png" alt="">
        </div>
        <div class="employee-detail">
          <h4 class="display-name">${employee.name}</h4>
          <p class="display-position">Account<span>${employee.position}</span></p>
          <p class="display-shift"><strong>${employee.shift}</strong></p>
        </div>
        <div class="employee-button">
          <button data-track="${employee.employeeTrackNumber}" class="BtnDetails main-btn black-bg">More Details</button>
          <button data-track="${employee.employeeTrackNumber}" class="btnManualClock main-btn orange-bg">Manual Clock</button>
        </div>
      </div>
      `;
    fragment.appendChild(card);
  })
  container.innerHTML = '';
  container.appendChild(fragment);
  console.log('oneGo');
  console.log('Rendered Employees');
}
function searchSuggestAutoComplete(input, list){
  const keyword = input.value.trim().toLowerCase();
  const suggest = input.parentNode.nextElementSibling;
  let matched = [];
  if(input.value.length < 1){
    suggest.innerHTML = '';
    return
  }
  matched = list.filter(item => item.toLowerCase().includes(keyword));

  console.log(matched);
  suggest.innerHTML = matched.map(item => `<div>${item}</div>`).join('');
  suggest.querySelectorAll('div').forEach(div =>{
    div.addEventListener('click',()=>{
      input.value = div.textContent;
      suggest.innerHTML = '';
    })
  })
}
function searchManagers(input){
  const keyword = input.value.toLowerCase().trim();
  const suggest = input.parentNode.nextElementSibling;
  let matched = [];
  if(input.value.length < 1){
    suggest.innerHTML = '';
    matched = [];
    return
  };
  for(const [key, value] of Object.entries(employeeList)){
    if(value.position.toLowerCase().trim().includes('manager')) matched.push(key);
  };
  matched = matched.filter(item => item.toLowerCase().trim().includes(keyword));
  suggest.innerHTML = matched.map(item => `<div>${item}</div>`).join('');
  suggest.querySelectorAll('div').forEach(item=>{
    item.addEventListener('click',()=>{
      input.value = item.textContent;
      suggest.innerHTML = '';
    });
  });
}
function restAfterAddEmoloyee(){
  const form = document.getElementById("form");
  const main = document.getElementById("main");
  name.value = '';
  employeeId.value = '';
  age.value = '';
  birthDay.value = '';
  gender.checked = false;
  civilStatus.checked = false;
  nationality.value = '';
  contactNumber.value = '';
  emergencyContactNumber.value = '';
  emailAddress.value = '';
  currentAddress.value = '';
  dateHired.value = '';
  employmentStatus.textContent = 'EMPLOYEE STATUS';
  position.value = '';
  department.textContent = 'DEPARTMENT';
  manager.value = '';
  shift.textContent = 'SHIFT';
  workLocation.value = '';
  employeeType.textContent = 'EMPLOYEE TYPE';
  sss.value = '';
  tin.value = '';
  philHealth.value = '';
  pagIbig.value = '';
  nationalId.value = '';
  basicSalary.value = '';
  payType.textContent = 'PAY TYPE';
  payrollChannel.value = '';
  salaryLevel.value = '';
  allowances.value = '';
  status.textContent = 'STATUS';
  remarks.value = '';
  loginEmail.value = '';
  systemRole.textContent = 'SYSTEM ROLE';
  password.value = '';
  accessPermissions.value = '';
  form.classList.remove("show-form");
  main.classList.remove("dis-scroll");
}