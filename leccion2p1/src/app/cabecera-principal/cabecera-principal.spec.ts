import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraPrincipal } from './cabecera-principal';

describe('CabeceraPrincipal', () => {
  let component: CabeceraPrincipal;
  let fixture: ComponentFixture<CabeceraPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabeceraPrincipal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceraPrincipal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
