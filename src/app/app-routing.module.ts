import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PageRoutingModule } from './pages/pages.routing'
import { AuthRoutingModule } from './auth/auth.routing'
import { NopagefoundComponent } from './nopagefound/nopagefound.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashborad', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PageRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
