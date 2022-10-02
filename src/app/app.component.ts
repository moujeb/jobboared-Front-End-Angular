import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css','../assets/vendors/typicons/typicons.css'
  ,'../assets/vendors/css/vendor.bundle.base.css'
  ,'../assets/css/vertical-layout-light/style.scss'
  
  ],
  
  
  
})
export class AppComponent {
  title = 'JBoared-App';

}
