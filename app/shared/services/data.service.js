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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
//Grab everything with import 'rxjs/Rx';
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var app_constants_1 = require('../../app.constants');
var DataService = (function () {
    function DataService(http, _configuration) {
        var _this = this;
        this.http = http;
        this._configuration = _configuration;
        this.updatePatient = function (id, itemToUpdate) {
            return _this.http.put(_this._baseUrl + id, JSON.stringify(itemToUpdate), { headers: _this.headers }).map(function (res) { return res.json(); });
        };
        this._baseUrl = _configuration.ServerWithApiUrl + 'patient/';
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    DataService.prototype.getPatients = function () {
        var _this = this;
        if (!this.patients) {
            return this.http.get(this._baseUrl)
                .map(function (res) {
                _this.patients = res.json();
                return _this.patients;
            })
                .catch(this.handleError);
        }
        else {
            //return cached data
            return this.createObservable(this.patients);
        }
    };
    DataService.prototype.getPatient = function (id) {
        var _this = this;
        if (this.patients) {
            //filter using cached data
            return this.findPatientObservable(id);
        }
        else {
            //Query the existing Patients to find the target Patient
            return Observable_1.Observable.create(function (observer) {
                _this.getPatients().subscribe(function (patients) {
                    _this.patients = patients;
                    var patient = _this.filterPatients(id);
                    observer.next(patient);
                    observer.complete();
                });
            })
                .catch(this.handleError);
        }
    };
    DataService.prototype.findPatientObservable = function (id) {
        return this.createObservable(this.filterPatients(id));
    };
    DataService.prototype.filterPatients = function (id) {
        var patients = this.patients.filter(function (patient) { return patient.id === id; });
        return (patients.length) ? patients[0] : null;
    };
    DataService.prototype.createObservable = function (data) {
        return Observable_1.Observable.create(function (observer) {
            observer.next(data);
            observer.complete();
        });
    };
    DataService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map