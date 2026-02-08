import { ComponentFixture, TestBed } from '@angular/core/testing';

import { homePage } from './homePage';

describe('homePage', () => {
  let component: homePage;
  let fixture: ComponentFixture<homePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [homePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(homePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
