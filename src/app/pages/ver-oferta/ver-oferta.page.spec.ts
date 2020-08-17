import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerOfertaPage } from './ver-oferta.page';

describe('VerOfertaPage', () => {
  let component: VerOfertaPage;
  let fixture: ComponentFixture<VerOfertaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerOfertaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerOfertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
