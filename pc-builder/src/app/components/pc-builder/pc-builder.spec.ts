import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcBuilder } from './pc-builder';

describe('PcBuilder', () => {
  let component: PcBuilder;
  let fixture: ComponentFixture<PcBuilder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcBuilder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
