import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPessoa } from './cadastro-pessoa';

describe('CadastroPessoa', () => {
  let component: CadastroPessoa;
  let fixture: ComponentFixture<CadastroPessoa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroPessoa],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroPessoa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
