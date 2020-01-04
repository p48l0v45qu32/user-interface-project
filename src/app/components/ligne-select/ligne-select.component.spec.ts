import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneSelectComponent } from './ligne-select.component';

describe('LigneSelectComponent', () => {
  let component: LigneSelectComponent;
  let fixture: ComponentFixture<LigneSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigneSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
