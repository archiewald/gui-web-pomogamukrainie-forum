import { Component, Input, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-more-info-link',
  templateUrl: './more-info-link.component.html',
  styleUrls: ['./more-info-link.component.scss'],
})
export class MoreInfoLinkComponent {
  @Input() href = '';
}

@NgModule({
  declarations: [MoreInfoLinkComponent],
  imports: [MatIconModule, TranslateModule],
  exports: [MoreInfoLinkComponent],
})
export class MoreInfoLinkModule {}
