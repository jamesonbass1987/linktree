import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinksResolver } from '../core/resolvers/links.resolver';
import { ProfileSettingsResolver } from '../core/resolvers/profile-settings.resolver';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    resolve: [
      ProfileSettingsResolver,
      LinksResolver
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
