import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { routing } from "./regimens.routing";
import { SmartadminModule } from "../../shared/smartadmin.module";
import { FormsModule } from '@angular/forms';
import { RegimenChangeReasonComponent } from "./regimen-change-reason/regimen-change-reason.component";
import { RegimenDrugsComponent } from "./regimen-drugs/regimen-drugs.component";
import { RegimenManagementComponent } from "./regimen-management/regimen-management.component";
import { RegimenServiceTypeComponent } from "./regimen-service-type/regimen-service-type.component";


@NgModule({
    declarations: [
        RegimenServiceTypeComponent,
        RegimenDrugsComponent,
        RegimenManagementComponent,
        RegimenChangeReasonComponent
    ],
    imports: [
        CommonModule,
        routing,
        SmartadminModule,
        FormsModule
    ]
})

export class RegimensModule { }