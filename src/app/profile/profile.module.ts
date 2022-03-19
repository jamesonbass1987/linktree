import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { LinkContainerComponent } from './components/link-container/link-container.component';
import { ClassicLinkComponent } from './components/classic-link/classic-link.component';
import { ShowsLinkComponent } from './components/shows-link/shows-link.component';
import { MusicPlayerLinkComponent } from './components/music-player-link/music-player-link.component';
import { PlatformDisplayPipe } from '../core/pipes/platform-display.pipe';


@NgModule({
  declarations: [
    ProfileComponent,
    LinkContainerComponent,
    ClassicLinkComponent,
    ShowsLinkComponent,
    MusicPlayerLinkComponent,
    PlatformDisplayPipe
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
