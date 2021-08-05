import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VchildComponent } from './vchild.component';

describe('VchildComponent', () => {
  let component: VchildComponent;
  let fixture: ComponentFixture<VchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
