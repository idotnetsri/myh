"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by NetSri on 01/07/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var data_service_1 = require('../shared/services/data.service');
var filter_textbox_component_1 = require('../filter-textbox/filter-textbox.component');
var patients_card_component_1 = require('./patients-card.component');
var patients_grid_component_1 = require('./patients-grid.component');
var PatientsComponent = (function () {
    function PatientsComponent(dataService) {
        this.dataService = dataService;
        this.pageTitle = 'Patients';
        this.patients = [];
        this.filteredPatients = [];
        this.displayModeEnum = DisplayModeEnum;
    }
    PatientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitle = 'Patients';
        this.filterText = 'Filter Customers:';
        this.displayMode = DisplayModeEnum.Card;
        this.dataService.getPatients()
            .subscribe(function (patients) {
            _this.patients = _this.filteredPatients = patients;
        });
    };
    PatientsComponent.prototype.changeDisplayMode = function (mode) {
        this.displayMode = mode;
    };
    PatientsComponent.prototype.filterChanged = function (data) {
        if (data && this.patients) {
            data = data.toUpperCase();
            var props_1 = ['fullName', 'patientCode', 'phones', 'shortAddressLine', 'visitsThisMonth'];
            var filtered = this.patients.filter(function (item) {
                var match = false;
                for (var _i = 0, props_2 = props_1; _i < props_2.length; _i++) {
                    var prop = props_2[_i];
                    //console.log(item[prop] + ' ' + item[prop].toUpperCase().indexOf(data));
                    if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                        match = true;
                        break;
                    }
                }
                ;
                return match;
            });
            this.filteredPatients = filtered;
        }
        else {
            this.filteredPatients = this.patients;
        }
    };
    PatientsComponent = __decorate([
        core_1.Component({
            selector: 'my-app-patients',
            templateUrl: './app/patients/patients.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, filter_textbox_component_1.FilterTextboxComponent, patients_card_component_1.PatientsCardComponent, patients_grid_component_1.PatientsGridComponent]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], PatientsComponent);
    return PatientsComponent;
}());
exports.PatientsComponent = PatientsComponent;
var DisplayModeEnum;
(function (DisplayModeEnum) {
    DisplayModeEnum[DisplayModeEnum["Card"] = 0] = "Card";
    DisplayModeEnum[DisplayModeEnum["Grid"] = 1] = "Grid";
    DisplayModeEnum[DisplayModeEnum["Map"] = 2] = "Map";
})(DisplayModeEnum || (DisplayModeEnum = {}));
//# sourceMappingURL=patients.component.js.map