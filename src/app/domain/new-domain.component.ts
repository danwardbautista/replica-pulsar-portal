import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  template: `
    <div class="mt-1 mb-3">
      <a [routerLink]="'/domain'"
         style="font-weight: 500; text-decoration: none;">
        < Domain Filters</a>
    </div>

    <div>
      <div class="mb-4">
        <h3>Create Domain Filter</h3>
      </div>

      <form>

        <div class="card mb-4">
          <fieldset class="card-body">

            <h5 class="card-title">Domain Filter</h5>
            <!--<p class="text-muted">Reassuring text that explains what this is and what you do.</p>-->

            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" placeholder="Template Name" formControlName="Name" required>
              </div>
            </div>

          </fieldset>
        </div>

        <div class="my-3 text-right">
          <button class="btn btn-success" type="submit">
            Create Tag
          </button>
        </div>

      </form>

    </div>

  `,
  imports: [
    RouterLink
  ]
})
export class NewTagComponent {

}
