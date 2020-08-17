import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenerarOfertaPage } from './generar-oferta.page';

describe('GenerarOfertaPage', () => {
  let component: GenerarOfertaPage;
  let fixture: ComponentFixture<GenerarOfertaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarOfertaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerarOfertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
