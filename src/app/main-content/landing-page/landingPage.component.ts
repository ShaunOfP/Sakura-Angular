import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [RouterOutlet, NavbarComponent],
    template: `
    <section>
        <div><app-navbar></app-navbar></div>
        <div class="headline">
            <h1 class="fontRaleway">SAKURA RAMEN</h1>
            <h2>BEST RAMEN IN TOWN</h2>
        </div>
    </section>
    `,
    styleUrls: ['./landingPage.components.scss']
})
export class LandingPageComponent {

}