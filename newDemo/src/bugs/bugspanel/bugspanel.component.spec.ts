import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugspanelComponent } from './bugspanel.component';

describe('BugspanelComponent', () => {
  let component: BugspanelComponent;
  let fixture: ComponentFixture<BugspanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugspanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugspanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
