class Company {
    name;// tên công ty
    establishedDate; //ngày thành lập
    country;// quốc gia
    businessType;// loại hình kinh doanh
    employees;// là 1 mảng gồm các nhân viên
    constructor(name, establishedDate, country, businessType, employees) {
        this.name = name;
        this.establishedDate = establishedDate;
        this.country = country;
        this.businessType = businessType;
        this.employees = employees;
    };
    showCEO() {
        console.log(`Giám đốc công ty là: "Nguyễn Hải Bình`);
    };//in ra console thông tin của CEO
    showAllEmployees() {
        console.log(`Công ty bao gồm 3 employees là: Employee 1, Employee2, Employee3`);
    };// in ra console thông tin của tất cả nhân viên
    showMangers() {
        console.log(`Công ty bao gồm 5 quản lý là: QL1, QL2, QL3, QL4, QL5`);
    };//in ra console thông tin của Manager
    showStaffs() {
        console.log(`Chúng tôi có đội staff chuyên nghiệp`);
    };// in ra console thông tin của tất cả staff
};
class Employee {
    name;
    sex;
    age;
    address;
    constructor(name, sex, age, address) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.address = address;
    };
    about() {
        console.log(`Xin chào, tôi tên là ${this.name}, ${this.age} tuổi, sống ở ${this.address}`);
    };
};
class CEO extends Employee {
    strategy;
    constructor(name, sex, age, address, strategy) {
        super(name, sex, age, address);
        this.strategy = strategy;
    };
};
class Manager extends Employee {
    managementStyle;
    constructor(name, sex, age, address, managementStyle) {
        super(name, sex, age, address);
        this.managementStyle = managementStyle;
    };
};
class Staff extends Employee {
    experience;
    constructor(name, sex, age, address, experience) {
        super(name, sex, age, address);
        this.experience = experience;
    };
};
let congty = new Company('MindX', "12/07/2020", "Việt Nam", "Giáo dục", "Employees");
console.log(congty);
congty.showCEO();
congty.showAllEmployees();
congty.showMangers();
congty.showStaffs();
let giamdoc = new CEO("Nguyễn Hải Bình", "Nam", "20", "HN", "Technological advantage");
console.log(giamdoc);
let employee1 = new Employee("Linh", "Nữ", 20, "TpHCM");
console.log(employee1);
employee1.about();
let quanly1 = new Manager("QL A", "Nam", "20", "HN", "Authoritarian management");
let quanly2 = new Manager("QL B", "Nu", "21", "Hue", "Visionary management ");
let quanly3 = new Manager("QL C", "Nam", "22", "DaNang", "Transactional management");
let quanly4 = new Manager("QL D", "Nu", "23", "HaiPhong", "Servant Leadership management");
let quanly5 = new Manager("QL E", "Nam", "24", "TpHCM", "Pacesetting management");
console.log(quanly1);
console.log(quanly2);
console.log(quanly3);
console.log(quanly4);
console.log(quanly5);
let staff1 = new Staff("Nv A", "Nam", "20", "HN", "1 year");
let staff2 = new Staff("NV B", "Nu", "21", "Hue", "2 years");
let staff3 = new Staff("NV C", "Nam", "22", "DaNang", "3 years");
let staff4 = new Staff("NV D", "Nu", "23", "HaiPhong", "4 years");
let staff5 = new Staff("NV E", "Nam", "24", "TpHCM", "5 years");
let staff6 = new Staff("NV A", "Nam", "25", "VungTau", "6 years");
let staff7 = new Staff("NV B", "Nu", "26", "CaMau", "7 years");
let staff8 = new Staff("NV C", "Nam", "27", "CanTho", "8 years");
let staff9 = new Staff("NV D", "Nu", "28", "DaLat", "9 years");
let staff10 = new Staff("NV E", "Nam", "29", "BacNinh", "10 years");
console.log(staff1);
console.log(staff2);
console.log(staff3);
console.log(staff4);
console.log(staff5);
console.log(staff6);
console.log(staff7);
console.log(staff8);
console.log(staff9);
console.log(staff10);