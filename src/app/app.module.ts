import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { RentalsComponent } from './rentals/rentals.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { RentalDetailsComponent } from './rental-details/rental-details.component';
import { CustomersComponent } from './customers/customers.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AuthorizeGuard } from './authorize.guard'

@NgModule({
  declarations: [
    AppComponent,
    RentalsComponent,
    NavbarComponent,
    AdminLoginComponent,
    AdminViewComponent,
    AdminEditComponent,
    RentalDetailsComponent,
    CustomersComponent,
    AdminAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthorizeGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
