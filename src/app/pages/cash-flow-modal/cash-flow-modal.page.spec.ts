import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CashFLowModalPage } from './cash-flow-modal.page';

describe('CashFLowModalPage', () => {
  let component: CashFLowModalPage;
  let fixture: ComponentFixture<CashFLowModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashFLowModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CashFLowModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
