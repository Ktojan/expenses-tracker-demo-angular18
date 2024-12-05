import { Component, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule} from '@angular/material/expansion';

import { RecordsService } from './records.service';
import { AddRecordComponent } from './add-record/add-record.component';
import { LogExpenseComponent } from './records-history/records-history.component';
import { BasicCategories, Record } from './shared/constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, AddRecordComponent, LogExpenseComponent, AsyncPipe, MatGridListModule, MatButtonModule, MatExpansionModule, 
    MatCardModule, MatIconModule, MatFormFieldModule, MatChipsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  expType = Record.Exp;
  incType = Record.Inc;
  expCategories = BasicCategories[this.expType];
  incCategories = BasicCategories[this.incType];
  recordsService = inject(RecordsService);
  $expensesSum = this.recordsService.expensesSumSignal;
  $incomesSum = this.recordsService.incomesSumSignal;
  $currentBalance = this.recordsService.currentBalance;

  ngOnInit() {
    this.recordsService.initData();    
  }
}
