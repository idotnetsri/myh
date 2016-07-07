"use strict";
/**
 * Created by NetSri on 07/07/2016.
 */
var NewPatient = (function () {
    function NewPatient(firstName, lastName, gender, age, dateOfBirth, mobile, addressLine1, city, otherPhone, ssn, addressLine2, state, zip, occupation, imageUrl, countryCode) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.mobile = mobile;
        this.addressLine1 = addressLine1;
        this.city = city;
        this.otherPhone = otherPhone;
        this.ssn = ssn;
        this.addressLine2 = addressLine2;
        this.state = state;
        this.zip = zip;
        this.occupation = occupation;
        this.imageUrl = imageUrl;
        this.countryCode = countryCode;
    }
    return NewPatient;
}());
exports.NewPatient = NewPatient;
//# sourceMappingURL=patient-new.js.map