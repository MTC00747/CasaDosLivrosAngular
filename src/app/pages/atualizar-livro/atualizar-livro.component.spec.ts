import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarLivroComponent } from './atualizar-livro.component';

describe('AtualizarLivroComponent', () => {
  let component: AtualizarLivroComponent;
  let fixture: ComponentFixture<AtualizarLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarLivroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
