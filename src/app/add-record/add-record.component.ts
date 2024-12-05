import { Component, inject, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf, UpperCasePipe } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule} from '@ngx-formly/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { RecordsService } from '../records.service';
import { Record } from '../shared/constants';
import { IRecord } from '../shared/interfaces';

@Component({
  selector: 'app-add-record',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatFormFieldModule, NgIf, FormsModule, ReactiveFormsModule,
    FormlyModule, FormlyMaterialModule, UpperCasePipe, MatButtonModule, FormlyMatDatepickerModule, MatNativeDateModule
  ],
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent {
  @Input('type') recordType!: Record;
  @Input('categories') categories!: string[];
  
  recordsService = inject(RecordsService);

  //// formly
  form = new FormGroup({});
  model: IRecord = { name: 'The War and Peace: v1', amount: 60, category: '', date: new Date() };
  fields: FormlyFieldConfig[] = [];

  ngOnInit() { 
    this.fields = [
      {
        fieldGroupClassName: 'flex gap-15',
        fieldGroup: [
          {
            className: 'flex-5',
            key: 'name',
            type: 'input',
            props: {
              label: 'Name of new record',
              placeholder: 'Enter unique name',
              required: true,
            }
          },
          {
            className: 'flex-1',
            key: 'amount',
            type: 'input',
            props: {
              label: 'Sum, $',
              placeholder: 'Enter amount',
              required: true,
            }
          },       
          {
            className: 'flex-2',
            key: 'category',
            type: 'select',
            props: {
              label: 'Select category',
              required: false,
              options: this.categories.map(el => ({ label: el, value: el })),
            },
          },
          {
            className: 'flex-2',
            key: 'date',
            type: 'datepicker',
            props: {
              label: 'Date',
              format:'mm-dd-yyyy',
              required: true,
            }
          }]
      }  
    ];
  }

  onSubmit() {
    console.log('Added new record: ', this.model);
    this.recordsService.addRecord(this.model, this.recordType);
    this.resetModel();
  }

  resetModel() {
    this.model = { name: '', amount: 0, category: '', date: new Date() }
  }

}
