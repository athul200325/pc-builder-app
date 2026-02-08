import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrebuildPcs } from './prebuild-pcs';

describe('PrebuildPcs', () => {
  let component: PrebuildPcs;
  let fixture: ComponentFixture<PrebuildPcs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrebuildPcs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrebuildPcs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
