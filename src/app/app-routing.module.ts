import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':handle',
    loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule)
  },
  {
    // For purposes of assessment, any unrecognized url will reroute to the profile mentioned in the README.md however,
    // typically a page note found route would be added, or a redirect to the main link tree site
    path: '**',
    redirectTo: 'guardian'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
