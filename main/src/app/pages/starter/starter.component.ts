import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { AppRevenueUpdatesComponent } from 'src/app/components/revenue-updates/revenue-updates.component';
import { AppYearlyBreakupComponent } from 'src/app/components/yearly-breakup/yearly-breakup.component';
import { AppMonthlyEarningsComponent } from 'src/app/components/monthly-earnings/monthly-earnings.component';
import { AppRecentTransactionsComponent } from 'src/app/components/recent-transactions/recent-transactions.component';
import { AppTopProjectsComponent } from 'src/app/components/top-projects/top-projects.component';
import { AppBlogCardsComponent } from 'src/app/components/blog-card/blog-card.component';

@Component({
  selector: 'app-starter',
  imports: [
    MaterialModule,
    AppRevenueUpdatesComponent,
    AppYearlyBreakupComponent,
    AppMonthlyEarningsComponent,
    AppRecentTransactionsComponent,
    AppTopProjectsComponent,
    AppBlogCardsComponent
  ],
  templateUrl: './starter.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class StarterComponent { }
