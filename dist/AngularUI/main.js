(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/HelperTs/MultiOption.ts":
/*!*****************************************!*\
  !*** ./src/app/HelperTs/MultiOption.ts ***!
  \*****************************************/
/*! exports provided: IMultiOption, MultiOption, MockMultiOptionuniqueID, MockMultiOptionAddressType, MockMultiOptionUserList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMultiOption", function() { return IMultiOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiOption", function() { return MultiOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockMultiOptionuniqueID", function() { return MockMultiOptionuniqueID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockMultiOptionAddressType", function() { return MockMultiOptionAddressType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockMultiOptionUserList", function() { return MockMultiOptionUserList; });
var IMultiOption = /** @class */ (function () {
    function IMultiOption() {
    }
    return IMultiOption;
}());

var MultiOption = /** @class */ (function () {
    function MultiOption() {
    }
    return MultiOption;
}());

var MockMultiOptionuniqueID = [
    { id: '1', Name: 'Adhar Number' },
    { id: '2', Name: 'Voter Number' },
    { id: '3', Name: 'PAN Number' },
    { id: '4', Name: 'DL Number' },
    { id: '5', Name: 'Other Number' }
];
var MockMultiOptionAddressType = [
    { id: '1', Name: 'Primary' },
    { id: '2', Name: 'Secoundary' },
    { id: '3', Name: 'Billing' },
    { id: '4', Name: 'Home' },
    { id: '5', Name: 'contact' }
];
var MockMultiOptionUserList = [
    { Name: "Afghanistan", id: "AF" },
    { Name: "Åland Islands", id: "AX" },
    { Name: "Albania", id: "AL" },
    { Name: "Algeria", id: "DZ" },
    { Name: "American Samoa", id: "AS" },
    { Name: "AndorrA", id: "AD" },
    { Name: "Angola", id: "AO" },
    { Name: "Anguilla", id: "AI" },
    { Name: "Antarctica", id: "AQ" },
    { Name: "Antigua and Barbuda", id: "AG" },
    { Name: "Argentina", id: "AR" },
    { Name: "Armenia", id: "AM" },
    { Name: "Aruba", id: "AW" },
    { Name: "Australia", id: "AU" },
    { Name: "Austria", id: "AT" },
    { Name: "Azerbaijan", id: "AZ" },
    { Name: "Bahamas", id: "BS" },
    { Name: "Bahrain", id: "BH" },
    { Name: "Bangladesh", id: "BD" },
    { Name: "Barbados", id: "BB" },
    { Name: "Belarus", id: "BY" },
    { Name: "Belgium", id: "BE" },
    { Name: "Belize", id: "BZ" },
    { Name: "Benin", id: "BJ" },
    { Name: "Bermuda", id: "BM" },
    { Name: "Bhutan", id: "BT" },
    { Name: "Bolivia", id: "BO" },
    { Name: "Bosnia and Herzegovina", id: "BA" },
    { Name: "Botswana", id: "BW" },
    { Name: "Bouvet Island", id: "BV" },
    { Name: "Brazil", id: "BR" },
    { Name: "British Indian Ocean Territory", id: "IO" },
    { Name: "Brunei Darussalam", id: "BN" },
    { Name: "Bulgaria", id: "BG" },
    { Name: "Burkina Faso", id: "BF" },
    { Name: "Burundi", id: "BI" },
    { Name: "Cambodia", id: "KH" },
    { Name: "Cameroon", id: "CM" },
    { Name: "Canada", id: "CA" },
    { Name: "Cape Verde", id: "CV" },
    { Name: "Cayman Islands", id: "KY" },
    { Name: "Central African Republic", id: "CF" },
    { Name: "Chad", id: "TD" },
    { Name: "Chile", id: "CL" },
    { Name: "China", id: "CN" },
    { Name: "Christmas Island", id: "CX" },
    { Name: "Cocos (Keeling) Islands", id: "CC" },
    { Name: "Colombia", id: "CO" },
    { Name: "Comoros", id: "KM" },
    { Name: "Congo", id: "CG" },
    { Name: "Congo, The Democratic Republic of the", id: "CD" },
    { Name: "Cook Islands", id: "CK" },
    { Name: "Costa Rica", id: "CR" },
    { Name: "Cote D'Ivoire", id: "CI" },
    { Name: "Croatia", id: "HR" },
    { Name: "Cuba", id: "CU" },
    { Name: "Cyprus", id: "CY" },
    { Name: "Czech Republic", id: "CZ" },
    { Name: "Denmark", id: "DK" },
    { Name: "Djibouti", id: "DJ" },
    { Name: "Dominica", id: "DM" },
    { Name: "Dominican Republic", id: "DO" },
    { Name: "Ecuador", id: "EC" },
    { Name: "Egypt", id: "EG" },
    { Name: "El Salvador", id: "SV" },
    { Name: "Equatorial Guinea", id: "GQ" },
    { Name: "Eritrea", id: "ER" },
    { Name: "Estonia", id: "EE" },
    { Name: "Ethiopia", id: "ET" },
    { Name: "Falkland Islands (Malvinas)", id: "FK" },
    { Name: "Faroe Islands", id: "FO" },
    { Name: "Fiji", id: "FJ" },
    { Name: "Finland", id: "FI" },
    { Name: "France", id: "FR" },
    { Name: "French Guiana", id: "GF" },
    { Name: "French Polynesia", id: "PF" },
    { Name: "French Southern Territories", id: "TF" },
    { Name: "Gabon", id: "GA" },
    { Name: "Gambia", id: "GM" },
    { Name: "Georgia", id: "GE" },
    { Name: "Germany", id: "DE" },
    { Name: "Ghana", id: "GH" },
    { Name: "Gibraltar", id: "GI" },
    { Name: "Greece", id: "GR" },
    { Name: "Greenland", id: "GL" },
    { Name: "Grenada", id: "GD" },
    { Name: "Guadeloupe", id: "GP" },
    { Name: "Guam", id: "GU" },
    { Name: "Guatemala", id: "GT" },
    { Name: "Guernsey", id: "GG" },
    { Name: "Guinea", id: "GN" },
    { Name: "Guinea-Bissau", id: "GW" },
    { Name: "Guyana", id: "GY" },
    { Name: "Haiti", id: "HT" },
    { Name: "Heard Island and Mcdonald Islands", id: "HM" },
    { Name: "Holy See (Vatican City State)", id: "VA" },
    { Name: "Honduras", id: "HN" },
    { Name: "Hong Kong", id: "HK" },
    { Name: "Hungary", id: "HU" },
    { Name: "Iceland", id: "IS" },
    { Name: "India", id: "IN" },
    { Name: "Indonesia", id: "ID" },
    { Name: "Iran, Islamic Republic Of", id: "IR" },
    { Name: "Iraq", id: "IQ" },
    { Name: "Ireland", id: "IE" },
    { Name: "Isle of Man", id: "IM" },
    { Name: "Israel", id: "IL" },
    { Name: "Italy", id: "IT" },
    { Name: "Jamaica", id: "JM" },
    { Name: "Japan", id: "JP" },
    { Name: "Jersey", id: "JE" },
    { Name: "Jordan", id: "JO" },
    { Name: "Kazakhstan", id: "KZ" },
    { Name: "Kenya", id: "KE" },
    { Name: "Kiribati", id: "KI" },
    { Name: "Korea, Democratic People'S Republic of", id: "KP" },
    { Name: "Korea, Republic of", id: "KR" },
    { Name: "Kuwait", id: "KW" },
    { Name: "Kyrgyzstan", id: "KG" },
    { Name: "Lao People'S Democratic Republic", id: "LA" },
    { Name: "Latvia", id: "LV" },
    { Name: "Lebanon", id: "LB" },
    { Name: "Lesotho", id: "LS" },
    { Name: "Liberia", id: "LR" },
    { Name: "Libyan Arab Jamahiriya", id: "LY" },
    { Name: "Liechtenstein", id: "LI" },
    { Name: "Lithuania", id: "LT" },
    { Name: "Luxembourg", id: "LU" },
    { Name: "Macao", id: "MO" },
    { Name: "Macedonia, The Former Yugoslav Republic of", id: "MK" },
    { Name: "Madagascar", id: "MG" },
    { Name: "Malawi", id: "MW" },
    { Name: "Malaysia", id: "MY" },
    { Name: "Maldives", id: "MV" },
    { Name: "Mali", id: "ML" },
    { Name: "Malta", id: "MT" },
    { Name: "Marshall Islands", id: "MH" },
    { Name: "Martinique", id: "MQ" },
    { Name: "Mauritania", id: "MR" },
    { Name: "Mauritius", id: "MU" },
    { Name: "Mayotte", id: "YT" },
    { Name: "Mexico", id: "MX" },
    { Name: "Micronesia, Federated States of", id: "FM" },
    { Name: "Moldova, Republic of", id: "MD" },
    { Name: "Monaco", id: "MC" },
    { Name: "Mongolia", id: "MN" },
    { Name: "Montserrat", id: "MS" },
    { Name: "Morocco", id: "MA" },
    { Name: "Mozambique", id: "MZ" },
    { Name: "Myanmar", id: "MM" },
    { Name: "Namibia", id: "NA" },
    { Name: "Nauru", id: "NR" },
    { Name: "Nepal", id: "NP" },
    { Name: "Netherlands", id: "NL" },
    { Name: "Netherlands Antilles", id: "AN" },
    { Name: "New Caledonia", id: "NC" },
    { Name: "New Zealand", id: "NZ" },
    { Name: "Nicaragua", id: "NI" },
    { Name: "Niger", id: "NE" },
    { Name: "Nigeria", id: "NG" },
    { Name: "Niue", id: "NU" },
    { Name: "Norfolk Island", id: "NF" },
    { Name: "Northern Mariana Islands", id: "MP" },
    { Name: "Norway", id: "NO" },
    { Name: "Oman", id: "OM" },
    { Name: "Pakistan", id: "PK" },
    { Name: "Palau", id: "PW" },
    { Name: "Palestinian Territory, Occupied", id: "PS" },
    { Name: "Panama", id: "PA" },
    { Name: "Papua New Guinea", id: "PG" },
    { Name: "Paraguay", id: "PY" },
    { Name: "Peru", id: "PE" },
    { Name: "Philippines", id: "PH" },
    { Name: "Pitcairn", id: "PN" },
    { Name: "Poland", id: "PL" },
    { Name: "Portugal", id: "PT" },
    { Name: "Puerto Rico", id: "PR" },
    { Name: "Qatar", id: "QA" },
    { Name: "Reunion", id: "RE" },
    { Name: "Romania", id: "RO" },
    { Name: "Russian Federation", id: "RU" },
    { Name: "RWANDA", id: "RW" },
    { Name: "Saint Helena", id: "SH" },
    { Name: "Saint Kitts and Nevis", id: "KN" },
    { Name: "Saint Lucia", id: "LC" },
    { Name: "Saint Pierre and Miquelon", id: "PM" },
    { Name: "Saint Vincent and the Grenadines", id: "VC" },
    { Name: "Samoa", id: "WS" },
    { Name: "San Marino", id: "SM" },
    { Name: "Sao Tome and Principe", id: "ST" },
    { Name: "Saudi Arabia", id: "SA" },
    { Name: "Senegal", id: "SN" },
    { Name: "Serbia and Montenegro", id: "CS" },
    { Name: "Seychelles", id: "SC" },
    { Name: "Sierra Leone", id: "SL" },
    { Name: "Singapore", id: "SG" },
    { Name: "Slovakia", id: "SK" },
    { Name: "Slovenia", id: "SI" },
    { Name: "Solomon Islands", id: "SB" },
    { Name: "Somalia", id: "SO" },
    { Name: "South Africa", id: "ZA" },
    { Name: "South Georgia and the South Sandwich Islands", id: "GS" },
    { Name: "Spain", id: "ES" },
    { Name: "Sri Lanka", id: "LK" },
    { Name: "Sudan", id: "SD" },
    { Name: "SuriName", id: "SR" },
    { Name: "Svalbard and Jan Mayen", id: "SJ" },
    { Name: "Swaziland", id: "SZ" },
    { Name: "Sweden", id: "SE" },
    { Name: "Switzerland", id: "CH" },
    { Name: "Syrian Arab Republic", id: "SY" },
    { Name: "Taiwan, Province of China", id: "TW" },
    { Name: "Tajikistan", id: "TJ" },
    { Name: "Tanzania, United Republic of", id: "TZ" },
    { Name: "Thailand", id: "TH" },
    { Name: "Timor-Leste", id: "TL" },
    { Name: "Togo", id: "TG" },
    { Name: "Tokelau", id: "TK" },
    { Name: "Tonga", id: "TO" },
    { Name: "Trinidad and Tobago", id: "TT" },
    { Name: "Tunisia", id: "TN" },
    { Name: "Turkey", id: "TR" },
    { Name: "Turkmenistan", id: "TM" },
    { Name: "Turks and Caicos Islands", id: "TC" },
    { Name: "Tuvalu", id: "TV" },
    { Name: "Uganda", id: "UG" },
    { Name: "Ukraine", id: "UA" },
    { Name: "United Arab Emirates", id: "AE" },
    { Name: "United Kingdom", id: "GB" },
    { Name: "United States", id: "US" },
    { Name: "United States Minor Outlying Islands", id: "UM" },
    { Name: "Uruguay", id: "UY" },
    { Name: "Uzbekistan", id: "UZ" },
    { Name: "Vanuatu", id: "VU" },
    { Name: "Venezuela", id: "VE" },
    { Name: "Viet Nam", id: "VN" },
    { Name: "Virgin Islands, British", id: "VG" },
    { Name: "Virgin Islands, U.S.", id: "VI" },
    { Name: "Wallis and Futuna", id: "WF" },
    { Name: "Western Sahara", id: "EH" },
    { Name: "Yemen", id: "YE" },
    { Name: "Zambia", id: "ZM" },
    { Name: "Zimbabwe", id: "ZW" }
];


/***/ }),

/***/ "./src/app/HelperTs/ProductList.ts":
/*!*****************************************!*\
  !*** ./src/app/HelperTs/ProductList.ts ***!
  \*****************************************/
/*! exports provided: ProductList, Product, Note, MockProductList, MockAssProductList, MockConProductList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductList", function() { return ProductList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockProductList", function() { return MockProductList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockAssProductList", function() { return MockAssProductList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockConProductList", function() { return MockConProductList; });
var ProductList = /** @class */ (function () {
    function ProductList() {
    }
    return ProductList;
}());

var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());

var Note = /** @class */ (function () {
    function Note() {
    }
    return Note;
}());

var MockProductList = [
    { Name: 'Product 1', Code: 'Pro_code_1', Quantity: 12, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: '', AssignedUserName: '', ConvertedUser: '', OwnerUser: '' },
    { Name: 'Product 2', Code: 'Pro_code_1436', Quantity: 64, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: '', AssignedUserName: '', ConvertedUser: '', OwnerUser: '' },
    { Name: 'Product 46', Code: 'Pro_code_123454', Quantity: 45, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: '', AssignedUserName: '', ConvertedUser: '', OwnerUser: '' },
    { Name: 'Product 2234', Code: 'Pro_code_2351', Quantity: 86, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: '', AssignedUserName: '', ConvertedUser: '', OwnerUser: '' },
    { Name: 'Product 45', Code: 'Pro_code_5441', Quantity: 343, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: '', AssignedUserName: '', ConvertedUser: '', OwnerUser: '' },
    { Name: 'Product 566', Code: 'Pro_code_6221', Quantity: 235, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: '', AssignedUserName: '', ConvertedUser: '', OwnerUser: '' },
    { Name: 'Product 56673', Code: 'Pro_code_565341', Quantity: 3422, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: '', AssignedUserName: '', ConvertedUser: '', OwnerUser: '' },
    { Name: 'Product 3423523', Code: 'Pro_code_3461', Quantity: 2341, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: '', AssignedUserName: '', ConvertedUser: '', OwnerUser: '' },
    { Name: 'Product 24566', Code: 'Pro_code_2351', Quantity: 223, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: '', AssignedUserName: '', ConvertedUser: '', OwnerUser: '' }
];
var MockAssProductList = [
    { Name: 'Product 1', Code: 'Pro_code_1', Quantity: 12, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: 'Parent_Pro_code_1', AssignedUserName: 'Known', ConvertedUser: 'Rio', OwnerUser: 'George' },
    { Name: 'Product 2', Code: 'Prde_14', Quantity: 64, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: 'Parent_Pro_code_1436', AssignedUserName: 'UnKnown', ConvertedUser: 'Sew', OwnerUser: 'Jio' },
    { Name: 'Product 46', Code: 'Pro_code_123454', Quantity: 45, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: 'Parent_Pro_code_123454', AssignedUserName: 'Jar', ConvertedUser: 'Skwe', OwnerUser: 'Rehin' },
    { Name: 'Product 2234', Code: 'Pro_code_2351', Quantity: 86, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: 'Parent_Pro_code_2351', AssignedUserName: 'Taz', ConvertedUser: 'Rem', OwnerUser: 'Rewe' },
    { Name: 'Product 45', Code: 'Pro_code_5441', Quantity: 343, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: 'Parent_Pro_code_5441', AssignedUserName: 'Ref', ConvertedUser: 'Ster', OwnerUser: 'Tony' },
    { Name: 'Product 566', Code: 'Pro_code_6221', Quantity: 235, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: 'Parent_Pro_code_6221', AssignedUserName: 'Lio', ConvertedUser: 'Emma', OwnerUser: 'Staf' },
    { Name: 'Product 56673', Code: 'Pro_code_565341', Quantity: 3422, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: 'Pro_code_565341_Parent', AssignedUserName: 'Meh', ConvertedUser: 'Lya', OwnerUser: 'Lava' },
    { Name: 'Product 3423523', Code: 'Pro_code_3461', Quantity: 2341, Description: 'Jil', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: 'Parent_Pro_code_3461', AssignedUserName: 'Worg', ConvertedUser: 'Soma', OwnerUser: 'Mat' },
    { Name: 'Product 24566', Code: 'Pro_code_2351', Quantity: 223, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: 'Parent_Pro_code_2351', AssignedUserName: 'Sre', ConvertedUser: 'Nata', OwnerUser: 'Hyem' }
];
var MockConProductList = [
    { Name: 'Product 1', Code: 'Pro_code_1', Quantity: 12, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: 'Parent_Pro_code_1', AssignedUserName: 'Known', ConvertedUser: 'Rio', OwnerUser: 'George' },
    { Name: 'Product 2', Code: 'Pro_code_1436', Quantity: 64, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: 'Parent_Pro_code_1436', AssignedUserName: 'UnKnown', ConvertedUser: 'Sew', OwnerUser: 'Jio' },
    { Name: 'Product 46', Code: 'Pro_code_123454', Quantity: 45, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: 'Parent_Pro_code_123454', AssignedUserName: 'Jar', ConvertedUser: 'Skwe', OwnerUser: 'Rehin' },
    { Name: 'Product 2234', Code: 'Pro_code_2351', Quantity: 86, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: 'Parent_Pro_code_2351', AssignedUserName: 'Taz', ConvertedUser: 'Rem', OwnerUser: 'Rewe' },
    { Name: 'Product 45', Code: 'Pro_code_5441', Quantity: 343, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: 'Parent_Pro_code_5441', AssignedUserName: 'Ref', ConvertedUser: 'Ster', OwnerUser: 'Tony' },
    { Name: 'Product 566', Code: 'Pro_code_6221', Quantity: 235, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: 'Parent_Pro_code_6221', AssignedUserName: 'Lio', ConvertedUser: 'Emma', OwnerUser: 'Staf' },
    { Name: 'Product 56673', Code: 'Pro_code_565341', Quantity: 3422, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: 'Pro_code_565341_Parent', AssignedUserName: 'Meh', ConvertedUser: 'Lya', OwnerUser: 'Lava' },
    { Name: 'Product 3423523', Code: 'Pro_code_3461', Quantity: 2341, Description: 'Jil', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: 'Parent_Pro_code_3461', AssignedUserName: 'Worg', ConvertedUser: 'Soma', OwnerUser: 'Mat' },
    { Name: 'Product 24566', Code: 'Pro_code_2351', Quantity: 223, Description: '', CreatedOn: '2018-09-08', IsAssign: true,
        ParentCode: 'Parent_Pro_code_2351', AssignedUserName: 'Sre', ConvertedUser: 'Nata', OwnerUser: 'Hyem' }
];


/***/ }),

/***/ "./src/app/HelperTs/Transactions.ts":
/*!******************************************!*\
  !*** ./src/app/HelperTs/Transactions.ts ***!
  \******************************************/
/*! exports provided: Transaction, MockTransactionList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockTransactionList", function() { return MockTransactionList; });
var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    return Transaction;
}());

var MockTransactionList = [
    { ProductName: "", ProductCode: "Pro_Cre_0", Quantity: 9, Amount: 99, CreatedOn: "12-20-2019", State: 1, OperationType: 2 },
    { ProductName: "", ProductCode: "Pro_Cre_1", Quantity: 2, Amount: 789, CreatedOn: "12-20-2019", State: 1, OperationType: 2 },
    { ProductName: "", ProductCode: "Pro_Cre_2", Quantity: 6, Amount: 869, CreatedOn: "12-20-2019", State: 1, OperationType: 3 },
    { ProductName: "", ProductCode: "Pro_Cre_3", Quantity: 7, Amount: 75459, CreatedOn: "12-20-2019", State: 2, OperationType: 1 },
    { ProductName: "", ProductCode: "Pro_Cre_4", Quantity: 9, Amount: 549, CreatedOn: "12-20-2019", State: 2, OperationType: 2 },
    { ProductName: "", ProductCode: "Pro_Cre_5", Quantity: 29, Amount: 89, CreatedOn: "12-20-2019", State: 2, OperationType: 3 },
    { ProductName: "", ProductCode: "Pro_Cre_6", Quantity: 23, Amount: 542, CreatedOn: "12-20-2019", State: 3, OperationType: 3 },
    { ProductName: "", ProductCode: "Pro_Cre_7", Quantity: 8, Amount: 909, CreatedOn: "12-20-2019", State: 3, OperationType: 2 },
    { ProductName: "", ProductCode: "Pro_Cre_8", Quantity: 2, Amount: 85, CreatedOn: "12-20-2019", State: 3, OperationType: 1 },
    { ProductName: "", ProductCode: "Pro_Cre_9", Quantity: 1, Amount: 18, CreatedOn: "12-20-2019", State: 1, OperationType: 1 },
    { ProductName: "", ProductCode: "Pro_Ass_9", Quantity: 2, Amount: 75, CreatedOn: "12-20-2019", State: 1, OperationType: 2 },
    { ProductName: "", ProductCode: "Pro_Ass_8", Quantity: 21, Amount: 57, CreatedOn: "12-20-2019", State: 1, OperationType: 3 },
    { ProductName: "", ProductCode: "Pro_Ass_7", Quantity: 15, Amount: 58, CreatedOn: "12-20-2019", State: 1, OperationType: 3 },
    { ProductName: "", ProductCode: "Pro_Ass_6", Quantity: 67, Amount: 45, CreatedOn: "12-20-2019", State: 1, OperationType: 3 },
    { ProductName: "", ProductCode: "Pro_Ass_5", Quantity: 89, Amount: 8, CreatedOn: "12-20-2019", State: 1, OperationType: 3 },
    { ProductName: "", ProductCode: "Pro_Ass_4", Quantity: 53, Amount: 8778, CreatedOn: "12-20-2019", State: 1, OperationType: 2 },
    { ProductName: "", ProductCode: "Pro_Ass_3", Quantity: 23, Amount: 758, CreatedOn: "12-20-2019", State: 1, OperationType: 2 },
    { ProductName: "", ProductCode: "Pro_Ass_2", Quantity: 64, Amount: 4527, CreatedOn: "12-20-2019", State: 1, OperationType: 2 },
    { ProductName: "", ProductCode: "Pro_Ass_1", Quantity: 27, Amount: 452, CreatedOn: "12-20-2019", State: 2, OperationType: 2 },
    { ProductName: "", ProductCode: "Pro_Con_1", Quantity: 3, Amount: 4125, CreatedOn: "12-20-2019", State: 2, OperationType: 2 },
    { ProductName: "", ProductCode: "Pro_Con_2", Quantity: 56, Amount: 855, CreatedOn: "12-20-2019", State: 2, OperationType: 2 },
];


/***/ }),

/***/ "./src/app/HelperTs/User.ts":
/*!**********************************!*\
  !*** ./src/app/HelperTs/User.ts ***!
  \**********************************/
/*! exports provided: User, MockUserList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockUserList", function() { return MockUserList; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var MockUserList = [
    { Name: 'william', Code: "Will092", ManagerName: 'Acile', ManagerCode: 'Ali232' },
    { Name: 'Ashithosh', Code: "Will092", ManagerName: 'Sandyirish', ManagerCode: 'Ali232' },
    { Name: 'Mohan', Code: "Will092", ManagerName: 'Acile', ManagerCode: 'Ali232' },
    { Name: 'John', Code: "Will092", ManagerName: 'Acile', ManagerCode: 'Ali232' },
    { Name: 'Chetcogambian', Code: "Will092", ManagerName: 'Acile', ManagerCode: 'Ali232' },
    { Name: 'Rapidswiss', Code: "Will092", ManagerName: 'Acile', ManagerCode: 'Ali232' },
];


/***/ }),

/***/ "./src/app/Product/assign-product/assign-product.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/Product/assign-product/assign-product.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2R1Y3QvYXNzaWduLXByb2R1Y3QvYXNzaWduLXByb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Product/assign-product/assign-product.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/Product/assign-product/assign-product.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n  <div class=\"col-sm-6\">\n    <div class=\"row\">\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"this.proCodeKey\" name=\"KeySearch\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" (click)='searchProductCode()' type=\"submit\">Search Product</button>\n      </form>\n    </div>\n    <div class=\"row\">\n      <div class=\"container\" *ngIf=\"Plist !=undefined && Plist.length>0\">\n        <div class=\"row\" *ngFor='let pro of Plist'>\n          <!-- <div class=\"col-sm-2\">{{pro.Name}}</div> -->\n          <div class=\"col-sm-4\">{{pro.Code}}</div>\n          <div class=\"col-sm-4\">{{pro.Quantity}}</div>\n          <div class=\"col-sm-4\">\n              <span class=\"glyphicon glyphicon-trash\" ></span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6\">\n    <div class=\"row\">\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"this.userCodeKey\" name=\"KeyUserSearch\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" (click)='searchUserCode()' type=\"submit\">Search User</button>\n      </form>\n    </div>\n    <div class=\"row\">\n      <div class=\"container\" *ngIf=\"Ulist !=undefined && Ulist.length>0\">\n        <div class=\"row\" *ngFor='let pro of Ulist'>\n          <div class=\"col-sm-4\">{{pro.Code}}</div>\n          <div class=\"col-sm-4\">{{pro.Name}}</div>\n          <div class=\"col-sm-4\">\n              <span class=\"glyphicon glyphicon-remove-sign\"></span>\n          </div>\n        </div>\n      </div>\n    </div> \n    \n  </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-sm-10\">\n          <span class=\"glyphicon glyphicon-remove-sign\"></span>\n      </div>\n      <div class=\"col-sm-2\">\n          <button class=\"btn btn btn-primary\">Preview</button>\n      </div>\n    \n      \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Product/assign-product/assign-product.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Product/assign-product/assign-product.component.ts ***!
  \********************************************************************/
/*! exports provided: AssignProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignProductComponent", function() { return AssignProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/product.service */ "./src/app/Service/product.service.ts");
/* harmony import */ var src_app_Service_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/user-service.service */ "./src/app/Service/user-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AssignProductComponent = /** @class */ (function () {
    function AssignProductComponent(productService, userService) {
        this.productService = productService;
        this.userService = userService;
        this.Ulist = [];
        this.Plist = [];
    }
    AssignProductComponent.prototype.ngOnInit = function () {
    };
    AssignProductComponent.prototype.searchProductCode = function () {
        var _this = this;
        this.productService.getMockSearchPCode(this.proCodeKey).subscribe(function (prolist) { return _this.Plist.push(prolist); });
    };
    AssignProductComponent.prototype.searchUserCode = function () {
        var _this = this;
        this.userService.getUserbyCode(this.userCodeKey).subscribe(function (userlist) { return _this.Ulist.push(userlist); });
    };
    AssignProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-product',
            template: __webpack_require__(/*! ./assign-product.component.html */ "./src/app/Product/assign-product/assign-product.component.html"),
            styles: [__webpack_require__(/*! ./assign-product.component.css */ "./src/app/Product/assign-product/assign-product.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], src_app_Service_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]])
    ], AssignProductComponent);
    return AssignProductComponent;
}());



/***/ }),

/***/ "./src/app/Product/convert-product/convert-product.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/Product/convert-product/convert-product.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2R1Y3QvY29udmVydC1wcm9kdWN0L2NvbnZlcnQtcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Product/convert-product/convert-product.component.html":
/*!************************************************************************!*\
  !*** ./src/app/Product/convert-product/convert-product.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n            <form class=\"form-inline my-2 my-lg-0\">\n                <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"this.proCodeKey\" name=\"KeySearch\" placeholder=\"Search\" aria-label=\"Search\">\n                <button class=\"btn btn-outline-success my-2 my-sm-0\" (click)='searchProductCode()' type=\"submit\">Search Product</button>\n            </form>\n    </div>\n    <div class=\"row\">\n        \n        <div class=\"col-sm-6\">\n                \n                List of Product assigned on me::\n                <div class=\"row\"  *ngFor=\"let p of plist\">\n                        <div class=\"col-sm-3\">{{p.Name}}</div>\n                        <div class=\"col-sm-3\">{{p.Code}}</div>\n                        <div class=\"col-sm-3\">{{p.Quantity}}</div>\n                        <div class=\"col-sm-3\"><button type=\"button\" class=\"btn btn-link\" (click)=\"addToSelectList(p)\" >select</button></div>\n                </div>\n        </div>\n        <div class=\"col-sm-6\">\n            List of product selected::\n            <div class=\"row\"  *ngFor=\"let p of selectedlist\">\n                    <div class=\"col-sm-3\">{{p.Name}}</div>\n                    <div class=\"col-sm-3\">{{p.Code}}</div>\n                    <div class=\"col-sm-3\">{{p.Quantity}}</div>\n                    <div class=\"col-sm-3\"><button type=\"button\" class=\"btn btn-link\" (click)=\"addToSelectList(p)\" >remove</button></div>\n            </div>\n            \n        </div>\n\n    </div>\n    <div class=\"row\">\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/Product/convert-product/convert-product.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Product/convert-product/convert-product.component.ts ***!
  \**********************************************************************/
/*! exports provided: ConvertProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertProductComponent", function() { return ConvertProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/product.service */ "./src/app/Service/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConvertProductComponent = /** @class */ (function () {
    function ConvertProductComponent(productservice) {
        this.productservice = productservice;
        this.plist = [];
        this.selectedlist = [];
    }
    ConvertProductComponent.prototype.ngOnInit = function () {
        this.getAssignedProducts();
    };
    ConvertProductComponent.prototype.getAssignedProducts = function () {
        var _this = this;
        this.productservice.getMockAssignedProduct().subscribe(function (list) { return _this.plist = list; });
    };
    ConvertProductComponent.prototype.addToSelectList = function (p) {
        for (var i = 0; i < this.plist.length - 1; i++) {
            if (this.plist[i].Code === p.Code) {
                this.plist.splice(i, 1);
            }
        }
        this.selectedlist.push(p);
    };
    ConvertProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-convert-product',
            template: __webpack_require__(/*! ./convert-product.component.html */ "./src/app/Product/convert-product/convert-product.component.html"),
            styles: [__webpack_require__(/*! ./convert-product.component.css */ "./src/app/Product/convert-product/convert-product.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ConvertProductComponent);
    return ConvertProductComponent;
}());



/***/ }),

/***/ "./src/app/Product/product-detail/product-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/Product/product-detail/product-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2R1Y3QvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Product/product-detail/product-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/Product/product-detail/product-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  product-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/Product/product-detail/product-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Product/product-detail/product-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent() {
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/Product/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/Product/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/Product/product-list/product-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Product/product-list/product-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Product/product-list/product-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Product/product-list/product-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"accordion\">\n    <div class=\"card\">\n      <div class=\"card-header\" id=\"headingOne\">\n        <h5 class=\"mb-0\">\n          <button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n            Apply Filters\n          </button>\n        </h5>\n      </div>\n    </div>\n  \n    <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-sm-4\"></div>\n          <div class=\"col-sm-4\"></div>\n          <div class=\"col-sm-4\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\"><input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\"></div>\n              <div class=\"col-sm-6\"><button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n  <!-- <div class=\"card\">\n    <div class=\"card-header\" id=\"headingTwo\">\n      <h5 class=\"mb-0\">\n        <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n          Collapsible Group Item #2\n        </button>\n      </h5>\n    </div>\n    <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n      <div class=\"card-body\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\" id=\"headingThree\">\n      <h5 class=\"mb-0\">\n        <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n          Collapsible Group Item #3\n        </button>\n      </h5>\n    </div>\n    <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\n      <div class=\"card-body\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n      </div>\n    </div>\n  </div> -->\n</div>\n\n<ul class=\"nav justify-content-center\">\n  <li class=\"nav-item\">\n    <Span class=\"nav-link active\" style=\"color:blueviolet\"  (click)=\"Createdclicked()\" >Created/Assignee Products</Span>\n  </li>\n  <li class=\"nav-item\">\n    <Span class=\"nav-link\" style=\"color:blueviolet\"  (click)=\"Assignedclicked()\" >Assigned Product</Span>\n  </li>\n  <li class=\"nav-item\">\n    <Span class=\"nav-link\" style=\"color:blueviolet\"  (click)=\"Convertedclicked()\"  >Converted Products</Span>\n  </li>\n  <!-- <li class=\"nav-item\">\n    <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n  </li> -->\n</ul>\n<div *ngIf='IsCreatedclicked'>\n  <div class=\"row\" *ngFor='let pro of MockProductList'>\n    <div class=\"col-sm-2\">{{pro.Name}}</div>\n    <div class=\"col-sm-2\">{{pro.Code}}</div>\n    <div class=\"col-sm-2\">{{pro.Quantity}}</div>\n    <div class=\"col-sm-2\">{{pro.Description}}</div>\n    <div class=\"col-sm-2\">{{pro.CreatedOn}}</div>\n    <div class=\"col-sm-2\">{{pro.IsAssign}}</div>\n  </div>\n</div>\n<div *ngIf='IsAssignedclicked'>\n  <div class=\"row\" *ngFor='let pro of MockAssProductList'>\n    <div class=\"col-sm-3\">{{pro.ParentCode}}</div>\n    <div class=\"col-sm-3\">{{pro.Code}}</div>\n    <div class=\"col-sm-3\">{{pro.Quantity}}</div>\n    <div class=\"col-sm-3\">{{pro.AssignedUserName}}</div>\n  </div>\n</div>\n<div *ngIf='IsConvertedclicked'>\n  <div class=\"row\" *ngFor='let pro of MockConProductList'>\n    <div class=\"col-sm-3\">{{pro.Code}}</div>\n    <div class=\"col-sm-3\">{{pro.Quantity}}</div>\n    <div class=\"col-sm-3\">{{pro.ConvertedUser}}</div>\n    <div class=\"col-sm-3\">{{pro.OwnerUser}}</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Product/product-list/product-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Product/product-list/product-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/product.service */ "./src/app/Service/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productservice) {
        this.productservice = productservice;
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    ProductListComponent.prototype.Createdclicked = function () {
        var _this = this;
        this.IsCreatedclicked = true;
        this.IsAssignedclicked = false;
        this.IsConvertedclicked = false;
        this.productservice.getMockProductList('Created').subscribe(function (mockproductlist) { return _this.MockProductList = mockproductlist; });
    };
    ProductListComponent.prototype.Assignedclicked = function () {
        var _this = this;
        this.IsAssignedclicked = true;
        this.IsCreatedclicked = false;
        this.IsConvertedclicked = false;
        this.productservice.getMockProductList('Assigned').subscribe(function (mockproductlist) { return _this.MockAssProductList = mockproductlist; });
    };
    ProductListComponent.prototype.Convertedclicked = function () {
        var _this = this;
        this.IsConvertedclicked = true;
        this.IsCreatedclicked = false;
        this.IsAssignedclicked = false;
        this.productservice.getMockProductList('Converted').subscribe(function (mockproductlist) { return _this.MockConProductList = mockproductlist; });
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/Product/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/Product/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/Product/product-registration/product-registration.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/Product/product-registration/product-registration.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2R1Y3QvcHJvZHVjdC1yZWdpc3RyYXRpb24vcHJvZHVjdC1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Product/product-registration/product-registration.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/Product/product-registration/product-registration.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-10\">\n  <br/>\n  <form class=\"form-horizontal \" >\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n          <div class=\"form-group row\">\n              <label class=\"control-label col-sm-4\" for=\"productname\">Name:</label>\n              <div class=\"col-sm-8\">\n                <input type=\"text\" class=\"form-control\" id=\"productname\" [(ngModel)]=\"prod.ProductName\" placeholder=\"Enter Product Name\" name=\"name\" >\n              </div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"control-label col-sm-4\" for=\"productcode\">Code:</label>\n                <div class=\"col-sm-8\">\n                  <input type=\"text\" class=\"form-control\" id=\"productcode\" [(ngModel)]=\"prod.ProductCode\" placeholder=\"Product Code will Generate..\" disabled name=\"productcode\" >\n                </div>\n              </div>\n            <div class=\"form-group row\">\n                  <label class=\"control-label col-sm-4\" for=\"quantity\">Quantity:</label>\n                  <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control\" id=\"quantity\" [(ngModel)]=\"prod.quantity\" placeholder=\"Enter Quantity\" name=\"quantity\" >\n                  </div>\n              </div>\n            <div class=\"form-group row\">\n                  <label class=\"control-label col-sm-4\" for=\"description\">Description:</label>\n                  <div class=\"col-sm-8\">\n                      <textarea row=\"4\" class=\"form-control\" id=\"description\" [(ngModel)]=\"prod.description\" placeholder=\"Enter Description\" name=\"description\"></textarea>\n                  </div>\n            </div>\n            \n      </div>\n      <div class=\"col-sm-6\">  \n        <div *ngIf=\"selectedImage != null\">\n            <img src=\"{{selectedImage.url}}\" class=\"img-rounded\" alt=\"Upload a pic\" width=\"304\" height=\"236\"> \n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <input type=\"file\" (change)=\"onFileSelected($event)\"/>\n        </div>\n          <div class=\"col-sm-6\">\n              <button type=\"button\" class=\"btn btn-secondary btn-sm\"(click)=\"onUpload()\" >Upload</button>\n          </div>\n        \n      </div>\n      </div>\n    </div>\n    <hr/>\n    <div class=\"row\">\n        <h5>Notes::</h5>\n      </div>\n    <div class=\"row\"> \n      \n            <div class=\"col-sm-4\">\n            <label class=\"control-label col-sm-4\" for=\"subject\">Subject:</label>\n            </div>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control\" id=\"subject\" [(ngModel)]=\"note.subject\" placeholder=\"Enter Subject\" name=\"subject\" >\n            </div>\n        \n        \n          <div class=\"col-sm-4\">\n            <label class=\"control-label col-sm-4\" for=\"comment\">Comment:</label>\n          </div>\n          <div class=\"col-sm-8\">\n            <textarea class=\"form-control\" rows=\"5\" id=\"comment\" [(ngModel)]=\"note.comment\" placeholder=\"Enter comment...\" name=\"comment\"></textarea>\n          </div>\n          \n        \n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-10\"></div>\n      <div class=\"col-sm-2\">\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"submit()\" >Create</button>\n      </div>\n    </div>\n  </form>\n \n    \n</div>"

/***/ }),

/***/ "./src/app/Product/product-registration/product-registration.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Product/product-registration/product-registration.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRegistrationComponent", function() { return ProductRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/product.service */ "./src/app/Service/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductRegistrationComponent = /** @class */ (function () {
    function ProductRegistrationComponent(productservice) {
        this.productservice = productservice;
        this.note = { subject: '', comment: '' };
        this.prod = { ProductName: '', ProductCode: '', quantity: 0, description: '' };
        this.selectedImage = null;
    }
    ProductRegistrationComponent.prototype.ngOnInit = function () {
    };
    ProductRegistrationComponent.prototype.onFileSelected = function (event) {
        console.log(event.target.files[0]);
        this.selectedImage = event.target.files[0];
        console.log(this.selectedImage.name);
    };
    ProductRegistrationComponent.prototype.onUpload = function () {
        var fd = new FormData();
        fd.append('image', this.selectedImage, this.selectedImage.name);
    };
    ProductRegistrationComponent.prototype.submit = function () {
        var _this = this;
        this.productservice.registration(this.prod).subscribe(function (x) { return _this.prod = x; });
        debugger;
    };
    ProductRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-registration',
            template: __webpack_require__(/*! ./product-registration.component.html */ "./src/app/Product/product-registration/product-registration.component.html"),
            styles: [__webpack_require__(/*! ./product-registration.component.css */ "./src/app/Product/product-registration/product-registration.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductRegistrationComponent);
    return ProductRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/Service/multi-option.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Service/multi-option.service.ts ***!
  \*************************************************/
/*! exports provided: MultiOptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiOptionService", function() { return MultiOptionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _HelperTs_MultiOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HelperTs/MultiOption */ "./src/app/HelperTs/MultiOption.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MultiOptionService = /** @class */ (function () {
    function MultiOptionService() {
    }
    MultiOptionService.prototype.getMockMultiOption = function (category) {
        if (category == 'uniqueID')
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_HelperTs_MultiOption__WEBPACK_IMPORTED_MODULE_1__["MockMultiOptionuniqueID"]);
        if (category == 'AddressType')
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_HelperTs_MultiOption__WEBPACK_IMPORTED_MODULE_1__["MockMultiOptionAddressType"]);
        if (category == 'UserList')
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_HelperTs_MultiOption__WEBPACK_IMPORTED_MODULE_1__["MockMultiOptionUserList"]);
    };
    MultiOptionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MultiOptionService);
    return MultiOptionService;
}());



/***/ }),

/***/ "./src/app/Service/product.service.ts":
/*!********************************************!*\
  !*** ./src/app/Service/product.service.ts ***!
  \********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _HelperTs_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HelperTs/ProductList */ "./src/app/HelperTs/ProductList.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.createdAssigneeProductUrl = 'api/Product/CreatedAssigneeProduct';
        this.assignedProductProductUrl = 'api/Product/AssignedProduct';
        this.convertedProductUrl = 'api/Product/ConvertedProduct';
        this.registrationUrl = 'api/Product/CreateProduct';
    }
    ProductService.prototype.getMockProductList = function (category) {
        if (category == 'Created') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_HelperTs_ProductList__WEBPACK_IMPORTED_MODULE_2__["MockProductList"]);
        }
        if (category == 'Assigned') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_HelperTs_ProductList__WEBPACK_IMPORTED_MODULE_2__["MockAssProductList"]);
        }
        if (category == 'Converted') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_HelperTs_ProductList__WEBPACK_IMPORTED_MODULE_2__["MockConProductList"]);
        }
    };
    ProductService.prototype.getMockSearchPCode = function (category) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_HelperTs_ProductList__WEBPACK_IMPORTED_MODULE_2__["MockAssProductList"][1]);
    };
    ProductService.prototype.getMockAssignedProduct = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_HelperTs_ProductList__WEBPACK_IMPORTED_MODULE_2__["MockAssProductList"]);
    };
    ProductService.prototype.getProductList = function (category) {
        if (category == 'Created') {
            return this.http.get(this.createdAssigneeProductUrl);
        }
        if (category == 'Assigned') {
            return this.http.get(this.assignedProductProductUrl);
        }
        if (category == 'Converted') {
            return this.http.get(this.convertedProductUrl);
        }
    };
    ProductService.prototype.registration = function (prod) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        alert(prod.ProductName);
        return this.http.post(this.registrationUrl, prod, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (hero) { return _this.log('added hero w/ id=${hero.id}'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addHero')));
    };
    /** Log a HeroService message with the MessageService */
    ProductService.prototype.log = function (message) {
    };
    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
    ProductService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/Service/transac.service.ts":
/*!********************************************!*\
  !*** ./src/app/Service/transac.service.ts ***!
  \********************************************/
/*! exports provided: TransacService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransacService", function() { return TransacService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_HelperTs_Transactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/HelperTs/Transactions */ "./src/app/HelperTs/Transactions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransacService = /** @class */ (function () {
    function TransacService() {
    }
    TransacService.prototype.getMockTransactionList = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(src_app_HelperTs_Transactions__WEBPACK_IMPORTED_MODULE_1__["MockTransactionList"]);
    };
    TransacService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TransacService);
    return TransacService;
}());



/***/ }),

/***/ "./src/app/Service/user-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Service/user-service.service.ts ***!
  \*************************************************/
/*! exports provided: UserServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceService", function() { return UserServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _HelperTs_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HelperTs/User */ "./src/app/HelperTs/User.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserServiceService = /** @class */ (function () {
    function UserServiceService() {
    }
    UserServiceService.prototype.getUserbyCode = function (SearUserCode) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_HelperTs_User__WEBPACK_IMPORTED_MODULE_1__["MockUserList"][3]);
    };
    UserServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserServiceService);
    return UserServiceService;
}());



/***/ }),

/***/ "./src/app/Transaction/transac-list/transac-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/Transaction/transac-list/transac-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1RyYW5zYWN0aW9uL3RyYW5zYWMtbGlzdC90cmFuc2FjLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Transaction/transac-list/transac-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/Transaction/transac-list/transac-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n  <div class=\"row\"> \n    <div class=\"col-sm-3\">ProductCode</div>\n    <div class=\"col-sm-3\">Quantity</div>\n    <div class=\"col-sm-3\">Amount</div>\n    <div class=\"col-sm-3\">Created On</div>\n  </div>\n  <hr>\n  <div class=\"row\" *ngFor=\"let t of MyTransactions\"> \n    <div class=\"col-sm-3\">{{t.ProductCode}}</div>\n    <div class=\"col-sm-3\">{{t.Quantity}}</div>\n    <div class=\"col-sm-3\">{{t.Amount}}</div>\n    <div class=\"col-sm-3\">{{t.CreatedOn}}</div>\n  </div>\n</div> -->\n\n<div id=\"accordion\">\n  <div class=\"card\">\n    <div class=\"card-header\" id=\"headingOne\">\n      <h5 class=\"mb-0\">\n        <button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n          Pending Transactions {{PendingTransactions.length}}\n        </button>\n      </h5>\n    </div>\n\n    <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n      <div class=\"card-body\">\n        <div class=\"container\">\n          <div class=\"row\"> \n            <div class=\"col-sm-3\">ProductCode</div>\n            <div class=\"col-sm-3\">Quantity</div>\n            <div class=\"col-sm-3\">Amount</div>\n            <div class=\"col-sm-3\">Created On</div>\n          </div>\n          <hr>\n          <div class=\"row\" *ngFor=\"let t of PendingTransactions\"> \n            <div class=\"col-sm-3\">{{t.ProductCode}}</div>\n            <div class=\"col-sm-3\">{{t.Quantity}}</div>\n            <div class=\"col-sm-3\">{{t.Amount}}</div>\n            <div class=\"col-sm-3\">{{t.CreatedOn}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\" id=\"headingTwo\">\n      <h5 class=\"mb-0\">\n        <button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\n          Completed Transactions {{CompletedTransactions.length}}\n        </button>\n      </h5>\n    </div>\n\n    <div id=\"collapseTwo\" class=\"collapse show\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n      <div class=\"card-body\">\n        <div class=\"container\">\n          <div class=\"row\"> \n            <div class=\"col-sm-3\">ProductCode</div>\n            <div class=\"col-sm-3\">Quantity</div>\n            <div class=\"col-sm-3\">Amount</div>\n            <div class=\"col-sm-3\">Created On</div>\n          </div>\n          <hr>\n          <div class=\"row\" *ngFor=\"let t of CompletedTransactions\"> \n            <div class=\"col-sm-3\">{{t.ProductCode}}</div>\n            <div class=\"col-sm-3\">{{t.Quantity}}</div>\n            <div class=\"col-sm-3\">{{t.Amount}}</div>\n            <div class=\"col-sm-3\">{{t.CreatedOn}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Transaction/transac-list/transac-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Transaction/transac-list/transac-list.component.ts ***!
  \********************************************************************/
/*! exports provided: TransacListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransacListComponent", function() { return TransacListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_transac_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/transac.service */ "./src/app/Service/transac.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransacListComponent = /** @class */ (function () {
    function TransacListComponent(transacservice) {
        this.transacservice = transacservice;
        this.PendingTransactions = [];
        this.CompletedTransactions = [];
    }
    TransacListComponent.prototype.ngOnInit = function () {
        this.getMyTransaction();
    };
    TransacListComponent.prototype.getMyTransaction = function () {
        var _this = this;
        this.transacservice.getMockTransactionList().subscribe(function (x) { return _this.MyTransactions = x; });
        this.MyTransactions.forEach(function (item) {
            if (item.State == 1) {
                _this.PendingTransactions.push(item);
            }
            if (item.State == 2)
                _this.CompletedTransactions.push(item);
        });
    };
    TransacListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transac-list',
            template: __webpack_require__(/*! ./transac-list.component.html */ "./src/app/Transaction/transac-list/transac-list.component.html"),
            styles: [__webpack_require__(/*! ./transac-list.component.css */ "./src/app/Transaction/transac-list/transac-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_transac_service__WEBPACK_IMPORTED_MODULE_1__["TransacService"]])
    ], TransacListComponent);
    return TransacListComponent;
}());



/***/ }),

/***/ "./src/app/User/Detail/user-detail/user-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/User/Detail/user-detail/user-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1VzZXIvRGV0YWlsL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/User/Detail/user-detail/user-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/User/Detail/user-detail/user-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/User/Detail/user-detail/user-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/User/Detail/user-detail/user-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent() {
    }
    UserDetailComponent.prototype.ngOnInit = function () {
    };
    UserDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/User/Detail/user-detail/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.css */ "./src/app/User/Detail/user-detail/user-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/User/List/user-list/user-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/User/List/user-list/user-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1VzZXIvTGlzdC91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/User/List/user-list/user-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/User/List/user-list/user-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/User/List/user-list/user-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/User/List/user-list/user-list.component.ts ***!
  \************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserListComponent = /** @class */ (function () {
    function UserListComponent() {
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/User/List/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/User/List/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/User/Profile/user-profile/user-profile.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/User/Profile/user-profile/user-profile.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1VzZXIvUHJvZmlsZS91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/User/Profile/user-profile/user-profile.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/User/Profile/user-profile/user-profile.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"form-horizontal\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div class=\"form-group row\">\n          <label class=\"control-label col-sm-4\" for=\"firstname\">First Name:</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" id=\"firstname\" [(ngModel)]=\"person.firstname\" placeholder=\"Enter First Name\"\n              name=\"first\" readonly>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"control-label col-sm-4\" for=\"middlename\">Middle Name:</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" id=\"middlename\" [(ngModel)]=\"person.middlename\" placeholder=\"Enter Middle Name\"\n              name=\"middle\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"control-label col-sm-4\" for=\"lastname\">Last Name:</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" id=\"lastname\" [(ngModel)]=\"person.lastname\" placeholder=\"Enter Last Name\"\n              name=\"last\" readonly>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"control-label col-sm-4\" for=\"gender\">Gender:</label>\n          <div class=\"col-sm-8\">\n            <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" checked>Male</label>\n            <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\">Female</label>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"control-label col-sm-4\" for=\"dateofbirth\">Date of Birth:</label>\n          <div class=\"col-sm-8\">\n\n            <form class=\"form-inline\">\n              <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <div class=\"col-sm-8\">\n                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\"\n                      readonly></div>\n                  <!--  <div class=\"col-sm-4\">\n                    <div class=\"input-group\">\n                      <button class=\"btn btn-outline-primary calendar\" (click)=\"d.toggle()\" type=\"button\"><span class=\"glyphicon glyphicon-th\"></span></button>\n                    </div>\n                  </div> -->\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n\n\n        <div class=\"form-group row\">\n          <div class=\"col-sm-4 text-right\">\n            <app-multi-option [category]=\"uniqueID\"></app-multi-option>\n          </div>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" id=\"uniquenumber\" [(ngModel)]=\"person.uniquenumber\" placeholder=\"Enter Unique Number\"\n              name=\"Uniquenumberselection\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div *ngIf=\"selectedImage != null\">\n          <img src=\"{{selectedImage.url}}\" class=\"img-rounded\" alt=\"Upload a pic\" width=\"304\" height=\"236\">\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <input type=\"file\" (change)=\"onFileSelected($event)\" />\n          </div>\n          <div class=\"col-sm-6\">\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"onUpload()\">Upload</button>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div class=\"row\">\n          <div class=\"form-group row\">\n            <label class=\"control-label col-sm-4\" for=\"address1\">Type of Details:</label>\n            <div class=\"col-sm-8 text-left\">\n              <app-multi-option [category]=\"AddressType\"></app-multi-option>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"control-label col-sm-4\" for=\"address1\">Door No & Street:</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control\" id=\"address1\" [(ngModel)]=\"person.address1\" placeholder=\"Door No & Street\"\n                name=\"addressfirst\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"control-label col-sm-4\" for=\"address2\">Village & Town:</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control\" id=\"address2\" [(ngModel)]=\"person.address2\" placeholder=\"Village & Town\"\n                name=\"addresssecond\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"control-label col-sm-4\" for=\"address3\">District,State & Country:</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control\" id=\"address3\" [(ngModel)]=\"person.address3\" placeholder=\"District,State & Country\"\n                name=\"addressthird\">\n            </div>\n          </div>\n          <div class=\"col-sm-9\"></div>\n          <div class=\"col-sm-3\">\n            <div class=\"form-group\">\n              <div class=\"col-sm-offset-2\">\n                <button type=\"submit\" class=\"btn btn-primary btn-xs\">Add</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"form-group row\">\n          <label class=\"control-label col-sm-4\" for=\"phonenumber\">Phone Number</label>\n          <div class=\"col-sm-6\">\n            <input type=\"text\" class=\"form-control\" id=\"phonenumber\" [(ngModel)]=\"phonumber\" placeholder=\"Enter Phone Number\"\n              name=\"phonenumbername\">\n          </div>\n          <div class=\"col-sm-2\">\n            <button type=\"button\" class=\"btn btn-primary btn-xs\" (click)='addPhone()'>Add</button>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"control-label col-sm-4\" for=\"emailid\">Email ID</label>\n          <div class=\"col-sm-6\">\n            <input type=\"text\" class=\"form-control\" id=\"emailid\" [(ngModel)]=\"emailId\" placeholder=\"Enter Email ID\"\n              name=\"emailidtext\">\n          </div>\n          <div class=\"col-sm-2\">\n            <button type=\"button\" class=\"btn btn-primary btn-xs\" (click)='addEmail()'>Add</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/User/Profile/user-profile/user-profile.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/User/Profile/user-profile/user-profile.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserProfileComponent, exUser, exAddress, exPhone, exEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exUser", function() { return exUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exAddress", function() { return exAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exPhone", function() { return exPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exEmail", function() { return exEmail; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
        this.uniqueID = 'uniqueID';
        this.AddressType = 'AddressType';
        this.UserList = 'UserList';
        this.person = new exUser();
        this.phone = [];
        this.email = [];
        this.address = [];
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.prototype.addPhone = function () {
        if (exPhone.isvalidphonenumber(this.phonumber))
            this.phone.push(new exPhone(this.phonumber, true));
        console.log('array length:' + this.phone.length);
    };
    UserProfileComponent.prototype.addEmail = function () {
        this.email.push({ 'strEmailId': this.emailId, 'bIsActive': true });
        console.log('array length:' + this.email.length);
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/User/Profile/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/User/Profile/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());

var exUser = /** @class */ (function () {
    function exUser() {
    }
    return exUser;
}());

var exAddress = /** @class */ (function () {
    function exAddress() {
    }
    return exAddress;
}());

var exPhone = /** @class */ (function () {
    //constructor(){}
    function exPhone(phnumber, isActive) {
        this.strPhoneNumber = phnumber;
        this.bIsActive = isActive;
    }
    exPhone.isvalidphonenumber = function (number) {
        if (number.length > 1 && number.length < 12) {
            if (number.startsWith('9') || number.startsWith('8') || number.startsWith('7') || number.startsWith('6')) {
                return true;
            }
        }
        return false;
    };
    return exPhone;
}());

var exEmail = /** @class */ (function () {
    function exEmail() {
    }
    return exEmail;
}());



/***/ }),

/***/ "./src/app/User/Registration/user-registration/user-registration.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/User/Registration/user-registration/user-registration.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1VzZXIvUmVnaXN0cmF0aW9uL3VzZXItcmVnaXN0cmF0aW9uL3VzZXItcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/User/Registration/user-registration/user-registration.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/User/Registration/user-registration/user-registration.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"container\">\n    <form class=\"form-horizontal\" >\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <div class=\"form-group row\">\n                <label class=\"control-label col-sm-4\" for=\"firstname\">First Name:</label>\n                <div class=\"col-sm-8\">\n                  <input type=\"text\" class=\"form-control\" id=\"firstname\" [(ngModel)]=\"person.firstname\" placeholder=\"Enter First Name\" name=\"first\" required >\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                  <label class=\"control-label col-sm-4\" for=\"middlename\">Middle Name:</label>\n                  <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control\" id=\"middlename\" [(ngModel)]=\"person.middlename\" placeholder=\"Enter Middle Name\" name=\"middle\" >\n                  </div>\n                </div>\n              <div class=\"form-group row\">\n                    <label class=\"control-label col-sm-4\" for=\"lastname\">Last Name:</label>\n                    <div class=\"col-sm-8\">\n                      <input type=\"text\" class=\"form-control\" id=\"lastname\" [(ngModel)]=\"person.lastname\" placeholder=\"Enter Last Name\" name=\"last\" required >\n                    </div>\n                </div>\n              <div class=\"form-group row\">\n                  <label class=\"control-label col-sm-4\" for=\"dateofbirth\">Date of Birth:</label>\n                  <div class=\"col-sm-8\">\n                    \n                          <form class=\"form-inline\">\n                              <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                  <div class=\"col-sm-8\">\n                                  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" required></div>\n                                         <div class=\"col-sm-4\">\n                                  <div class=\"input-group\">\n                                    <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\"><span class=\"glyphicon glyphicon-th\">Click</span></button>\n                                  </div></div>\n                                </div>\n                              </div>\n                          </form>\n                        \n                  </div>\n              </div>\n              <div class=\"form-group row\">\n                  <div class=\"col-sm-4 text-right\">\n                      <app-multi-option [category]=\"uniqueID\"></app-multi-option>\n                    </div>\n                    <div class=\"col-sm-8\">\n                        <input type=\"text\" class=\"form-control\" id=\"uniquenumber\" [(ngModel)]=\"person.uniquenumber\" placeholder=\"Enter Unique Number\" name=\"Uniquenumberselection\" required>\n                    </div>\n              </div>\n              <div class=\"form-group row\">\n                  <label class=\"control-label col-sm-4\" for=\"gender\">Gender:</label>\n                <div class=\"col-sm-8\">\n                    <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" checked>Male</label>\n                    <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\">Female</label>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"control-label col-sm-4\" for=\"gender\">Country:</label>\n              <div class=\"col-sm-8\">\n                  <app-multi-option [category]=\"UserList\"></app-multi-option>\n              </div>\n            </div>\n        </div>\n        <div class=\"col-sm-6\">\n           <div class=\"row\">\n                <div class=\"form-group row\">\n                    <label class=\"control-label col-sm-4\" for=\"address1\">Type of Details:</label>\n                    <div class=\"col-sm-8 text-left\" >\n                        <app-multi-option [category]=\"AddressType\"></app-multi-option>\n                      </div>\n                  </div>\n                <div class=\"form-group row\">\n                    <label class=\"control-label col-sm-4\" for=\"address1\">Door No & Street:</label>\n                    <div class=\"col-sm-8\">\n                      <input type=\"text\" class=\"form-control\" id=\"address1\" [(ngModel)]=\"person.address1\" placeholder=\"Door No & Street\" name=\"addressfirst\" required>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label class=\"control-label col-sm-4\" for=\"address2\">Village & Town:</label>\n                    <div class=\"col-sm-8\">\n                      <input type=\"text\" class=\"form-control\" id=\"address2\" [(ngModel)]=\"person.address2\" placeholder=\"Village & Town\" name=\"addresssecond\" required>\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                      <label class=\"control-label col-sm-4\" for=\"address3\">District,State & Country:</label>\n                      <div class=\"col-sm-8\">\n                        <input type=\"text\" class=\"form-control\" id=\"address3\" [(ngModel)]=\"person.address3\" placeholder=\"District,State & Country\" name=\"addressthird\" required>\n                      </div>\n                    </div>\n                  <div class=\"form-group row\">\n                        <label class=\"control-label col-sm-4\" for=\"phonenumber\">Phone Number</label>\n                        <div class=\"col-sm-8\">\n                          <input type=\"text\" class=\"form-control\" id=\"phonenumber\" [(ngModel)]=\"person.phonenumber\" placeholder=\"Enter Phone Number\" name=\"phonenumbername\" required>\n                        </div>\n                    </div>\n                  <div class=\"form-group row\">\n                          <label class=\"control-label col-sm-4\" for=\"emailid\">Email ID</label>\n                          <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control\" id=\"emailid\" [(ngModel)]=\"person.emailid\"  placeholder=\"Enter Email ID\" name=\"emailidtext\" required>\n                          </div>\n                    </div>\n                    <div class=\"col-sm-9\"></div>\n                    <div class=\"col-sm-3\">\n                        <div class=\"form-group\">        \n                            <div class=\"col-sm-offset-2 col-sm-8\">\n                              <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n                            </div>\n                          </div>\n                    </div>\n           </div>\n        </div> \n      </div>\n      \n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/User/Registration/user-registration/user-registration.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/User/Registration/user-registration/user-registration.component.ts ***!
  \************************************************************************************/
/*! exports provided: UserRegistrationComponent, Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function() { return UserRegistrationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserRegistrationComponent = /** @class */ (function () {
    function UserRegistrationComponent() {
        this.person = new Person();
        this.uniqueID = 'uniqueID';
        this.AddressType = 'AddressType';
        this.UserList = 'UserList';
    }
    UserRegistrationComponent.prototype.ngOnInit = function () {
    };
    UserRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-registration',
            template: __webpack_require__(/*! ./user-registration.component.html */ "./src/app/User/Registration/user-registration/user-registration.component.html"),
            styles: [__webpack_require__(/*! ./user-registration.component.css */ "./src/app/User/Registration/user-registration/user-registration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());

var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _User_Registration_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User/Registration/user-registration/user-registration.component */ "./src/app/User/Registration/user-registration/user-registration.component.ts");
/* harmony import */ var _User_Profile_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User/Profile/user-profile/user-profile.component */ "./src/app/User/Profile/user-profile/user-profile.component.ts");
/* harmony import */ var _User_List_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User/List/user-list/user-list.component */ "./src/app/User/List/user-list/user-list.component.ts");
/* harmony import */ var _User_Detail_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User/Detail/user-detail/user-detail.component */ "./src/app/User/Detail/user-detail/user-detail.component.ts");
/* harmony import */ var _Product_product_registration_product_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Product/product-registration/product-registration.component */ "./src/app/Product/product-registration/product-registration.component.ts");
/* harmony import */ var _Product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Product/product-list/product-list.component */ "./src/app/Product/product-list/product-list.component.ts");
/* harmony import */ var _Product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Product/product-detail/product-detail.component */ "./src/app/Product/product-detail/product-detail.component.ts");
/* harmony import */ var _Product_assign_product_assign_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Product/assign-product/assign-product.component */ "./src/app/Product/assign-product/assign-product.component.ts");
/* harmony import */ var _Product_convert_product_convert_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Product/convert-product/convert-product.component */ "./src/app/Product/convert-product/convert-product.component.ts");
/* harmony import */ var _Transaction_transac_list_transac_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Transaction/transac-list/transac-list.component */ "./src/app/Transaction/transac-list/transac-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '\UserRegister', component: _User_Registration_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationComponent"] },
    { path: '\UserProfile', component: _User_Profile_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"] },
    { path: '\UserList', component: _User_List_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"] },
    { path: '\UserDetail', component: _User_Detail_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__["UserDetailComponent"] },
    { path: '\ProductRegistration', component: _Product_product_registration_product_registration_component__WEBPACK_IMPORTED_MODULE_6__["ProductRegistrationComponent"] },
    { path: '\ProductList', component: _Product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__["ProductListComponent"] },
    { path: '\ProductDetail', component: _Product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailComponent"] },
    { path: '\AssignProduct', component: _Product_assign_product_assign_product_component__WEBPACK_IMPORTED_MODULE_9__["AssignProductComponent"] },
    { path: '\MyTransactions', component: _Transaction_transac_list_transac_list_component__WEBPACK_IMPORTED_MODULE_11__["TransacListComponent"] },
    { path: '\ConvertProduct', component: _Product_convert_product_convert_product_component__WEBPACK_IMPORTED_MODULE_10__["ConvertProductComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Nvar Bar Begin-->\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">Trade Bulk</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"/UserProfile\">User Profile <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/MyTransactions\">My Transactions</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/ProductList\">My Products</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Product\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" routerLink=\"/ProductRegistration\">Create a Products</a>\n            <a class=\"dropdown-item\" routerLink=\"/AssignProduct\">Assign Products</a>\n            <a class=\"dropdown-item\" routerLink=\"/ConvertProduct\">Converted</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n         <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n        <!--  <a class=\"nav-link\" routerLink=\"#\">Online Products</a> -->\n        </li>\n        <li class=\"nav-item\">\n          \n          <a class=\"nav-link\" routerLink=\"/UserRegister\">Sign Up</a>\n         </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </nav> \n<!-- Nvar Bar Ends-->\n\n\n<div class=\"container\"> \n     <div class=\"row\"> \n       <div class=\"col-sm-1\">\n\n        </div> \n        <!-- <app-multi-option [category]=\"UserList\" ></app-multi-option> -->\n        <div class=\"col-sm-10\"> \n          <!-- <div class=\"row\"> \n              <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                      <label class=\"control-label col-sm-4\" for=\"firstname\">First Name:</label>\n                      <div class=\"col-sm-8\">\n                        <input type=\"text\" class=\"form-control\" id=\"firstname\" [(ngModel)]=\"person.firstname\" placeholder=\"Enter First Name\" name=\"first\" >\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"control-label col-sm-4\" for=\"middlename\">Middle Name:</label>\n                        <div class=\"col-sm-8\">\n                          <input type=\"text\" class=\"form-control\" id=\"middlename\" [(ngModel)]=\"person.middlename\" placeholder=\"Enter Middle Name\" name=\"middle\" >\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Email</label>\n                        <div class=\"col-sm-10\">\n                          <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"staticEmail\" value=\"email@example.com\">\n                        </div>\n                      </div>\n\n              </div>\n              <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                      <label class=\"control-label col-sm-4\" for=\"firstname\">First Name:</label>\n                      <div class=\"col-sm-8\">\n                        <input type=\"text\" class=\"form-control\" id=\"firstname\" [(ngModel)]=\"person.firstname\" placeholder=\"Enter First Name\" name=\"first\" >\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"control-label col-sm-4\" for=\"middlename\">Middle Name:</label>\n                        <div class=\"col-sm-8\">\n                          <input type=\"text\" class=\"form-control\" id=\"middlename\" [(ngModel)]=\"person.middlename\" placeholder=\"Enter Middle Name\" name=\"middle\" >\n                        </div>\n                      </div>\n              </div>\n            </div> -->\n          <!-- <div class=\"row\">\n                <div class=\"col-sm-3\">\n                    <a routerLink=\"/UserRegister\">User Register</a>\n                </div>\n                <div class=\"col-sm-3\">\n                    <a routerLink=\"/UserProfile\">User Profile</a>\n                </div>\n                <div class=\"col-sm-3\">\n                    <a routerLink=\"/UserList\">User List</a>\n                </div>\n                <div class=\"col-sm-3\">\n                    <a routerLink=\"/UserDetail\">User Detail</a>\n                </div>\n          </div> -->\n          <!-- <div class=\"row\">\n              <div class=\"col-sm-3\">\n                  <a routerLink=\"/ProductRegistration\">Product Registration</a>\n              </div>\n              <div class=\"col-sm-3\">\n                  <a routerLink=\"/ProductList\">Product List</a>\n              </div>\n              <div class=\"col-sm-3\">\n                  <a routerLink=\"/ProductDetail\">Product Detail</a>\n              </div>\n            </div> -->\n          <router-outlet></router-outlet>\n        </div> \n      \n       <div class=\"col-sm-1\">\n        \n      </div>\n    </div>\n  </div> \n  \n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AngularUI';
        this.person = new Person();
        this.uniqueID = 'uniqueID';
        this.AddressType = 'AddressType';
        this.UserList = 'UserList';
        //person.startDate = new Date(1990, 0, 1);
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());

var NewUser = /** @class */ (function () {
    function NewUser() {
    }
    return NewUser;
}());


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _multi_option_multi_option_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./multi-option/multi-option.component */ "./src/app/multi-option/multi-option.component.ts");
/* harmony import */ var _User_Registration_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./User/Registration/user-registration/user-registration.component */ "./src/app/User/Registration/user-registration/user-registration.component.ts");
/* harmony import */ var _User_Profile_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./User/Profile/user-profile/user-profile.component */ "./src/app/User/Profile/user-profile/user-profile.component.ts");
/* harmony import */ var _User_List_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./User/List/user-list/user-list.component */ "./src/app/User/List/user-list/user-list.component.ts");
/* harmony import */ var _User_Detail_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./User/Detail/user-detail/user-detail.component */ "./src/app/User/Detail/user-detail/user-detail.component.ts");
/* harmony import */ var _Product_product_registration_product_registration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Product/product-registration/product-registration.component */ "./src/app/Product/product-registration/product-registration.component.ts");
/* harmony import */ var _Product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Product/product-list/product-list.component */ "./src/app/Product/product-list/product-list.component.ts");
/* harmony import */ var _Product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Product/product-detail/product-detail.component */ "./src/app/Product/product-detail/product-detail.component.ts");
/* harmony import */ var _Product_assign_product_assign_product_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Product/assign-product/assign-product.component */ "./src/app/Product/assign-product/assign-product.component.ts");
/* harmony import */ var _Product_convert_product_convert_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Product/convert-product/convert-product.component */ "./src/app/Product/convert-product/convert-product.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Transaction_transac_list_transac_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Transaction/transac-list/transac-list.component */ "./src/app/Transaction/transac-list/transac-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import {MatNativeDateModule} from '@angular/material';
//import {HttpClientModule} from '@angular/common/http';












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _multi_option_multi_option_component__WEBPACK_IMPORTED_MODULE_6__["MultiOptionComponent"],
                _User_Registration_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_7__["UserRegistrationComponent"],
                _User_Profile_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileComponent"],
                _User_List_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__["UserListComponent"],
                _User_Detail_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailComponent"],
                _Product_product_registration_product_registration_component__WEBPACK_IMPORTED_MODULE_11__["ProductRegistrationComponent"],
                _Product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_12__["ProductListComponent"],
                _Product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailComponent"],
                _Product_assign_product_assign_product_component__WEBPACK_IMPORTED_MODULE_14__["AssignProductComponent"],
                _Product_convert_product_convert_product_component__WEBPACK_IMPORTED_MODULE_15__["ConvertProductComponent"],
                _Transaction_transac_list_transac_list_component__WEBPACK_IMPORTED_MODULE_17__["TransacListComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/multi-option/multi-option.component.css":
/*!*********************************************************!*\
  !*** ./src/app/multi-option/multi-option.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL211bHRpLW9wdGlvbi9tdWx0aS1vcHRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/multi-option/multi-option.component.html":
/*!**********************************************************!*\
  !*** ./src/app/multi-option/multi-option.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"size<10\">\n<div class=\"form-group\">\n  <select class=\"form-control\" id=\"sel1\" >\n    <option *ngFor=\"let optn of multioption\">{{optn.Name}}</option>\n  </select>\n</div>\n</div>\n<div *ngIf=\"size>=10\">\n   <!-- Button to Open the Modal -->\n    <form class=\"form-inline\">\n        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n        <input class=\"form-control form-control-sm ml-3 w-75\" type=\"text\" placeholder=\"Search\" data-toggle=\"modal\" data-target=\"#myModal\" aria-label=\"Search\">\n      </form>\n  \n  <!-- The Modal -->\n  <div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n  \n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Select Option</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n  \n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <div class=\"container\">\n            <div class=\"row\">\n                Search here\n            </div>\n            <hr/>\n             <div class=\"row\" *ngFor=\"let optn of multioption\">\n                <div class=\"col-sm-3\">\n                    {{optn.id}}\n                  </div>\n                  <div class=\"col-sm-6\">\n                      {{optn.Name}}\n                  </div>\n             </div>\n\n          </div>\n        </div>\n  \n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n        </div>\n  \n      </div>\n    </div>\n  </div>   \n</div>\n"

/***/ }),

/***/ "./src/app/multi-option/multi-option.component.ts":
/*!********************************************************!*\
  !*** ./src/app/multi-option/multi-option.component.ts ***!
  \********************************************************/
/*! exports provided: MultiOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiOptionComponent", function() { return MultiOptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_multi_option_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/multi-option.service */ "./src/app/Service/multi-option.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MultiOptionComponent = /** @class */ (function () {
    function MultiOptionComponent(multiOptionService, modalService) {
        this.multiOptionService = multiOptionService;
        this.modalService = modalService;
    }
    MultiOptionComponent.prototype.ngOnInit = function () {
        this.getMultiOptions(this.category);
    };
    MultiOptionComponent.prototype.getMultiOptions = function (category) {
        var _this = this;
        this.multiOptionService.getMockMultiOption(category).subscribe(function (data) { return _this.multioption = data; });
        this.size = this.multioption.length;
    };
    MultiOptionComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = 'Closed with: ${result}';
        }, function (reason) {
            _this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
        });
    };
    MultiOptionComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return 'with: ${reason}';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MultiOptionComponent.prototype, "category", void 0);
    MultiOptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multi-option',
            template: __webpack_require__(/*! ./multi-option.component.html */ "./src/app/multi-option/multi-option.component.html"),
            styles: [__webpack_require__(/*! ./multi-option.component.css */ "./src/app/multi-option/multi-option.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_multi_option_service__WEBPACK_IMPORTED_MODULE_1__["MultiOptionService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], MultiOptionComponent);
    return MultiOptionComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Jagadeesh\AngularUI.git\trunk\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map