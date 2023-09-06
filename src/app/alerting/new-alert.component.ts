import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  template: `
    <div class="mt-1 mb-3">
      <a [routerLink]="'/alerting'"
         style="font-weight: 500; text-decoration: none;">
        < Alerting</a>
    </div>

    <div>
      <div class="mb-4">
        <h3>Create Alerting Profile</h3>
      </div>

      <form>

        <div class="card mb-4">
          <fieldset class="card-body">

            <h5 class="card-title">1. Profile Details</h5>
            <!--<p class="text-muted">Reassuring text that explains what this is and what you do.</p>-->

            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" placeholder="Profile Name" formControlName="name">
              </div>
            </div>

            <!--<div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Description</label>
              <div class="col-sm-10">
                <textarea class="form-control" id="inputEmail3"></textarea>
              </div>
            </div>-->

            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Status</label>
              <div class="col-sm-10 py-2">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" id="name-enabled" value="Enabled"
                         formControlName="status">
                  <label class="form-check-label" for="name-enabled">Enabled</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" id="name-disabled" value="Disabled"
                         formControlName="status">
                  <label class="form-check-label" for="name-disabled">Disabled</label>
                </div>
              </div>
            </div>


          </fieldset>
        </div>

        <div class="card mb-4">
          <fieldset class="card-body">

            <h5 class="card-title">2. Conditions</h5>
            <!--<p class="text-muted">Reassuring text that explains what this is and what you do.</p>-->

            <div class="form-group row mb-0">

              <!--<div class="col-sm-2">
                <label>Monitor</label>
              </div>-->

              <div class="col-sm-4">
                <label>When</label>
              </div>

              <div class="col-sm-4">
                <label>exceeds</label>
              </div>

              <div class="col-sm-1 offset-sm-1">
              </div>

            </div>

            <div class="form-group row" formArrayName="conditions">

              <ng-container>

                <!--<div class="col-sm-2">
                  <select id="inputState" class="form-control">
                    <option>Data</option>
                    <option>Money</option>
                  </select>
                </div>-->

                <div class="col-sm-4">
                  <select class="form-control" formControlName="Action">
                    <option value="VOLUME">Volume</option>
                    <option value="TRACKER">Volume Tracker</option>
                    <option value="PERCENTAGE">Allowance</option>
                    <option value="ACTION">Service is Barred</option>
                  </select>
                </div>

                <div class="col-sm-4">

                  <div class="input-group mb-3">
                    <input type="text" class="form-control" formControlName="Volume">
                    <div class="input-group-append">
                      <span class="input-group-text">MB</span>
                    </div>
                  </div>

                </div>

                <div class="col-sm-1 text-right">
                  <button class="btn btn-danger" type="button">Delete
                  </button>
                </div>

              </ng-container>

            </div>

            <div class="form-group row">

              <div class="col-sm-1 ml-auto text-right">
                <button class="btn btn-primary" type="button">Add
                </button>
              </div>

            </div>


          </fieldset>
        </div>

        <div class="card mb-4">
          <fieldset class="card-body">

            <h5 class="card-title">3. Notify</h5>
            <!--<p class="text-muted">Reassuring text that explains what this is and what you do.</p>-->

            <div class="form-group row mb-0">

              <div class="col-sm-3">
                <label>Message type</label>
              </div>

              <div class="col-sm-5">
                <label>Destination</label>
              </div>

              <div class="col-sm-1 offset-sm-3">
              </div>

            </div>

            <div class="form-group row" formArrayName="notifications">

              <ng-container>

                <div class="col-sm-3">
                  <select class="form-control" formControlName="Type">
                    <option value="Email">Email</option>
                    <option value="TextMessage">Text Message</option>
                  </select>
                </div>

                <div class="col-sm-5">
                  <input type="text" class="form-control" placeholder="notifications@pulsarportal.com"
                         formControlName="Destination">
                </div>

                <div class="col-sm-1 text-right">
                  <button class="btn btn-danger" type="button">Delete
                  </button>
                </div>

              </ng-container>

            </div>

            <div class="form-group row">

              <div class="col-sm-1 ml-auto text-right">
                <button class="btn btn-primary" type="button">Add
                </button>
              </div>

            </div>


          </fieldset>
        </div>


        <div class="my-3 text-right">
          <button class="btn btn-success" type="submit">
            Create Profile
          </button>
        </div>


      </form>

    </div>

  `,
  imports: [
    RouterLink
  ]
})
export class NewAlertComponent {

}
