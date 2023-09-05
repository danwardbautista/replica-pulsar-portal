import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { TagsComponent } from './tags/tags.component';
import { TemplatesComponent } from './templates/templates.component';
import { AlertingComponent } from './alerting/alerting.component';
import { BarringComponent } from './barring/barring.component';
import { FirewallComponent } from './firewall/firewall.component';
import { DomainComponent } from './domain/domain.component';
import { ActionLogComponent } from './action-log/action-log.component';
import { UsersComponent } from './users/users.component';
import {ServiceComponent} from "./service/service.component";
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'logout', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'templates', component: TemplatesComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'alerting', component: AlertingComponent },
  { path: 'barring', component: BarringComponent },
  { path: 'firewall', component: FirewallComponent },
  { path: 'domain', component: DomainComponent },
  { path: 'action-log', component: ActionLogComponent },
  { path: 'users', component: UsersComponent },
  { path: 'service', component: ServiceComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    TagsComponent,
    TemplatesComponent,
    AlertingComponent,
    BarringComponent,
    FirewallComponent,
    DomainComponent,
    ActionLogComponent,
    UsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
